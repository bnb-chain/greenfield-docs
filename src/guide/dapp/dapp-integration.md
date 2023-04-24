---
title: Dapp Integration
order: 3
---

# Dapp Integration

In this guide, we will walk you through the process of creating a decentralized application using the `EbookShop` contract as an example. The `EbookShop` contract is part of the SDK and provides a foundation for creating a digital ebook marketplace.

## Prerequisites

Before starting, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Foundry](https://book.getfoundry.sh/)

## Installation

```console
$ npm install @bnb-chain/greenfield-contracts-sdk
```

Alternatively, you can obtain the contracts directly from the GitHub repository (`bnb-chain/greenfield-contracts-sdk`). When doing so, ensure that you specify the appropriate release.

### Steps

1. Import the desired contracts, for example in `examples/ebook-shop.sol`:

   ```solidity
   pragma solidity ^0.8.0;
   
   import "@bnb-chain/greenfield-contracts-sdk/BucketApp.sol";
   import "@bnb-chain/greenfield-contracts-sdk/ObjectApp.sol";
   import "@bnb-chain/greenfield-contracts-sdk/GroupApp.sol";
   import "@bnb-chain/greenfield-contracts-sdk/interface/IERC1155.sol";
   import "@bnb-chain/greenfield-contracts-sdk/interface/IERC721Nontransferable.sol";
   import "@bnb-chain/greenfield-contracts-sdk/interface/IERC1155Nontransferable.sol";
   ...
   
   contract EbookShop is BucketApp, ObjectApp, GroupApp {
   	...
   }
   ```

2. Define the `initialize` function. Initialize the global variables in the init function. You can use the internal init functions:
   ```solidity
   function initialize(
       address _crossChain,
       address _bucketHub,
       address _objectHub,
       address _groupHub,
       address _ebookToken,
       address _paymentAddress,
       uint256 _callbackGasLimit,
       address _refundAddress,
       uint8 _failureHandleStrategy,
       ...
   ) public initializer {
       __base_app_init_unchained(_crossChain, _callbackGasLimit, _refundAddress, _failureHandleStrategy);
       __bucket_app_init_unchained(_bucketHub, _paymentAddress);
       __group_app_init_unchained(_groupHub);
       __object_app_init_unchained(_objectHub);
   
       ...
   }
   ```

3. Define and override the `greenfieldCall`, `retryPackage` and `skipPackage` functions if your dApp needs callback. You can route calls with the help of the internal method:
   ```solidity
   function greenfieldCall(
       uint32 status,
       uint8 resoureceType,
       uint8 operationType,
       uint256 resourceId,
       bytes calldata callbackData
   ) external override(BucketApp, ObjectApp, GroupApp) {
       require(msg.sender == crossChain, string.concat("EbookShop: ", ERROR_INVALID_CALLER));
   
       if (resoureceType == RESOURCE_BUCKET) {
           _bucketGreenfieldCall(status, operationType, resourceId, callbackData);
       } else if (resoureceType == RESOURCE_OBJECT) {
           _objectGreenfieldCall(status, operationType, resourceId, callbackData);
       } else if (resoureceType == RESOURCE_GROUP) {
           _groupGreenfieldCall(status, operationType, resourceId, callbackData);
       } else {
           revert(string.concat("EbookShop: ", ERROR_INVALID_RESOURCE));
       }
   }
   
   function retryPackage(uint8 resoureceType) external override onlyOperator {
       if (resoureceType == RESOURCE_BUCKET) {
           _retryBucketPackage();
       } else if (resoureceType == RESOURCE_OBJECT) {
           _retryObjectPackage();
       } else if (resoureceType == RESOURCE_GROUP) {
           _retryGroupPackage();
       } else {
           revert(string.concat("EbookShop: ", ERROR_INVALID_RESOURCE));
       }
   }
   
   function skipPackage(uint8 resoureceType) external override onlyOperator {
       if (resoureceType == RESOURCE_BUCKET) {
           _skipBucketPackage();
       } else if (resoureceType == RESOURCE_OBJECT) {
           _skipObjectPackage();
       } else if (resoureceType == RESOURCE_GROUP) {
           _skipGroupPackage();
       } else {
           revert(string.concat("EbookShop: ", ERROR_INVALID_RESOURCE));
       }
   }
   ```

4. Next you need to define the main functional parts of the app. You can send cross-chain request to system contracts with the help of internal functions like below:
   ```solidity
   /**
    * @dev Create a new series.
    * 
    * Assuming the sp provider's info will be provided by the front-end.
    */
   function createSeries(
       string calldata name,
       BucketStorage.BucketVisibilityType visibility,
       uint64 chargedReadQuota,
       address spAddress,
       uint256 expireHeight,
       bytes calldata sig
   ) external payable {
       require(bytes(name).length > 0, string.concat("EbookShop: ", ERROR_INVALID_NAME));
       require(seriesId[name] == 0, string.concat("EbookShop: ", ERROR_RESOURCE_EXISTED));
   
       bytes memory _callbackData = bytes(name); // use name as callback data
       _createBucket(msg.sender, name, visibility, chargedReadQuota, spAddress, expireHeight, sig, _callbackData); // send cross-chain request
   }
   
   /**
    * @dev Provide an ebook's ID to publish it.
    *
    * An ERC1155 token will be minted to the owner.
    * Other users can buy the ebook by calling `buyEbook` function with given price.
    */
   function publishEbook(uint256 _ebookId, uint256 price) external {
       require(
           IERC721NonTransferable(objectToken).ownerOf(_ebookId) == msg.sender,
           string.concat("EbookShop: ", ERROR_INVALID_CALLER)
       );
       require(ebookGroup[_ebookId] != 0, string.concat("EbookShop: ", ERROR_GROUP_NOT_EXISTED));
       require(price > 0, string.concat("EbookShop: ", ERROR_INVALID_PRICE));
   
       ebookPrice[_ebookId] = price;
       IERC1155(ebookToken).mint(msg.sender, _ebookId, 1, "");
   }
       
   /**
    * @dev Provide an ebook's ID to buy it.
    *
    * Buyer will be added to the group of the ebook.
    * An ERC1155 token will be minted to the buyer.
    */
   function buyEbook(uint256 _ebookId) external payable {
       require(ebookPrice[_ebookId] > 0, string.concat("EbookShop: ", ERROR_EBOOK_NOT_ONSHELF));
   
       uint256 price = ebookPrice[_ebookId];
       require(msg.value >= price, string.concat("EbookShop: ", ERROR_NOT_ENOUGH_VALUE));
   
       IERC1155(ebookToken).mint(msg.sender, _ebookId, 1, "");
   
       uint256 _groupId = ebookGroup[_ebookId];
       address _owner = IERC721NonTransferable(groupToken).ownerOf(_groupId);
       address[] memory _member = new address[](1);
       _member[0] = msg.sender;
       _updateGroup(_owner, _groupId, UPDATE_ADD, _member);
   }
   
   /**
    * @dev Provide an ebook's ID to downshelf it.
    *
    * The ebook will be removed from the shelf and cannot be bought.
    * Those who have already purchased are not affected.
    */
   function downshelfEbook(uint256 _ebookId) external {
       require(
           IERC721NonTransferable(objectToken).ownerOf(_ebookId) == msg.sender,
           string.concat("EbookShop: ", ERROR_INVALID_CALLER)
       );
       require(ebookPrice[_ebookId] > 0, string.concat("EbookShop: ", ERROR_EBOOK_NOT_ONSHELF));
   
       ebookPrice[_ebookId] = 0;
   }
   ...
   ```

5. Besides, you may need to provide a function for user to register their own resource that were created at greenfield side and then mirrored to BSC manually:
   ```solidity
   /**
    * @dev Register bucket resource that mirrored from GreenField to BSC.
    */
   function registerSeries(string calldata name, uint256 tokenId) external {
       require(
           IERC721NonTransferable(bucketToken).ownerOf(tokenId) == msg.sender,
           string.concat("EbookShop: ", ERROR_INVALID_CALLER)
       );
       require(bytes(name).length > 0, string.concat("EbookShop: ", ERROR_INVALID_NAME));
       require(seriesId[name] == 0, string.concat("EbookShop: ", ERROR_RESOURCE_EXISTED));
   
       seriesName[tokenId] = name;
       seriesId[name] = tokenId;
   }
   ...
   ```

6. Define other view functions, internal funcions and access control system according to your own needs.

## Conclusion

This quick-start guide provided a brief introduction to the SDK and the `EbookShop` contract. By following these steps, you can easily create a decentralized ebook marketplace using the provided SDK.

