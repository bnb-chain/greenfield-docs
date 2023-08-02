---
title: Permission Control
order: 4
---

# Permission Control 

## General Permission Control
As all GNFD resources are mapped as ERC721 tokens, we fully reuse the ERC721 interface
for general permission management without introducing any additional complexity.
First, let's understand the ERC721 interface for permission management:

```solidity
interface ERC721 {
   /// @notice Change or reaffirm the approved address for an NFT
   /// @dev The zero address indicates there is no approved address.
   ///  Throws unless `msg.sender` is the current NFT owner, or an authorized
   ///  operator of the current owner.
   /// @param _approved The new approved NFT controller
   /// @param _tokenId The NFT to approve
   function approve(address _approved, uint256 _tokenId) external payable;

   /// @notice Enable or disable approval for a third party ("operator") to manage
   ///  all of `msg.sender`'s assets
   /// @dev Emits the ApprovalForAll event. The contract MUST allow
   ///  multiple operators per owner.
   /// @param _operator Address to add to the set of authorized operators
   /// @param _approved True if the operator is approved, false to revoke approval
   function setApprovalForAll(address _operator, bool _approved) external;

   /// @notice Get the approved address for a single NFT
   /// @dev Throws if `_tokenId` is not a valid NFT.
   /// @param _tokenId The NFT to find the approved address for
   /// @return The approved address for this NFT, or the zero address if there is none
   function getApproved(uint256 _tokenId) external view returns (address);

   /// @notice Query if an address is an authorized operator for another address
   /// @param _owner The address that owns the NFTs
   /// @param _operator The address that acts on behalf of the owner
   /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
   function isApprovedForAll(address _owner, address _operator) external view returns (bool);
   ...
}
```

`ERC721` provides two levels of permission control:
- `TokenID` level: `approve`, `getApproved` are used to control the permission of a specific token.
- `Owner` level: `setApprovalForAll`, `isApprovedForAll` are used to control the permission of all tokens owned by an address.

So is the permission control of GNFD resources. For example, if you want to grant the permission of a bucket to another account,
you can call `approve` function of the `BucketHub` contract. If you want to grant the permission of all buckets to an address,
you can call `setApprovalForAll` function of the `BucketHub` contract.


## Role based Permission Control

As different operations can be performed on GNFD resources, some applications require permission control on the
granularity of operations, like grant other accounts to create bucket but not allow to delete bucket. This cannot
be achieved through the ERC721 token standard. Therefore,
we introduce the following interface for implementing permission control for each resource contract:

```solidity

/**
 * @dev Returns `true` if `account` has been granted `role` from `granter`.
 */
 function hasRole(bytes32 roleCode, address granter, address account) external view returns (bool);

/**
 * @dev grant some authorization to an account
 *
 * @param account The address of the account to be granted
 * @param roleCode, the operation code, like create, update, delete, etc.
 * @param expireTime The expiration time of the authorization
 */
 function grant(address account, uint32 roleCode, uint256 expireTime) external;

/**
 * @dev revoke some authorization from an account
 *
 * @param account The address of the account to be revoked
 * @param roleCode The authorization code
 */
 function revoke(address account, uint32 roleCode) external;
```