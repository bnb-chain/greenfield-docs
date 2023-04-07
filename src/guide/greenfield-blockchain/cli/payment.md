---
title: Payment
Order: 6
---

# Payment

## Abstract

The payment module is responsible for the payment of the greenfield network. It is mainly used to manage the payment account of the user, and the payment account is used to pay the storage fee. The payment module also provides the function of automatic settlement of the user's payment account.

You can refer to the [billing and payment section](../modules/billing-and-payment.md) for more details.

## Quick Start

```shell
## Start a local cluster
$ alias gnfd="./build/bin/gnfd"
$ export user_addr=0x7fB0e7012e7445Ef235d5e90862c611110DbA5A6
# create a new payment account
$ gnfd tx payment create-payment-account --from user
# query the payment accounts of specified user
$ gnfd q payment get-payment-accounts-by-owner $user_addr
paymentAccounts:
- 0xbe527D0003108cF2b0b9917d7861e5517C896970
$ export payment_account_addr=0xbe527D0003108cF2b0b9917d7861e5517C896970
# query the payment account data just created
$ gnfd q payment show-payment-account $payment_account_addr
payment_account:
  addr: 0xbe527D0003108cF2b0b9917d7861e5517C896970
  owner: 0x7fB0e7012e7445Ef235d5e90862c611110DbA5A6
  refundable: true
# deposit 1 BNB to $payment_account_addr
$ gnfd tx payment deposit $payment_account_addr 1000000000000000000 --from user
# show stream record details
$ gnfd q payment show-stream-record $payment_account_addr
stream_record:
  account: 0xbe527D0003108cF2b0b9917d7861e5517C896970
  buffer_balance: "0"
  crud_timestamp: "1680248479"
  lock_balance: "0"
  netflow_rate: "0"
  out_flows: []
  settle_timestamp: "0"
  static_balance: "1000000000000000000"
  status: STREAM_ACCOUNT_STATUS_ACTIVE
# withdraw 0.1 BNB from the payment_account
$ gnfd tx payment withdraw $payment_account_addr 100000000000000000 --from user -y
# set the payment account as non-refundable, after this operation, the user cannot withdraw the balance in the payment account
$ gnfd tx payment disable-refund $payment_account_addr --from user -y
```

## Detailed CLI

A user can query and interact with the `payment` module using the CLI.

### Query

The `query` commands allow users to query `payment` state.

```shell
$ gnfd q payment
Querying commands for the payment module

Usage:
  gnfd query payment [flags]
  gnfd query payment [command]

Available Commands:
  dynamic-balance               Query dynamic-balance
  get-payment-accounts-by-owner Query get-payment-accounts-by-owner
  list-auto-settle-record       list all auto-settle-record
  list-payment-account          list all payment-account
  list-payment-account-count    list all payment-account-count
  list-stream-record            list all stream-record
  params                        shows the parameters of the module
  show-auto-settle-record       shows a auto-settle-record
  show-payment-account          shows a payment-account
  show-payment-account-count    shows a payment-account-count
  show-stream-record            shows a stream-record

# query payment parameters
$ gnfd q payment params
params:
  fee_denom: BNB
  forced_settle_time: "30"
  max_auto_force_settle_num: "100"
  payment_account_count_limit: "200"
  reserve_time: "60"
  validator_tax_rate: "0.010000000000000000"

$ gnfd q payment list-auto-settle-record
auto_settle_record:
- addr: 0x2BDEC809d1f68f0b51d73c2fA72AE56833535cAf
  timestamp: "1680247396"
- addr: 0x40915235658d2630328d85E6A7c3A5C97E2012aE
  timestamp: "1680247396"
- addr: 0x4a4dD9D8C133814014D5bcDe058dc33dcB02D3eb
  timestamp: "1680247396"
pagination:
  next_key: null
  total: "0"

$ gnfd q payment list-payment-account
pagination:
  next_key: null
  total: "0"
payment_account:
- addr: 0x169FFd6893aB4A0f8105BA749A0614cB69a18884
  owner: 0x71A3c4521B66da275fb514dd3156fa699B54A341
  refundable: true
- addr: 0xB5969E0BC1F8827ED0c873c2d22A16054524d00C
  owner: 0x3bA598a3d809702dB4cA8610e14cBAF83908861d
  refundable: false

# Usage:
#   gnfd query payment show-payment-account [addr] [flags]
$ gnfd q payment show-payment-account 0x169FFd6893aB4A0f8105BA749A0614cB69a18884
payment_account:
  addr: 0x169FFd6893aB4A0f8105BA749A0614cB69a18884
  owner: 0x71A3c4521B66da275fb514dd3156fa699B54A341
  refundable: true

$ gnfd q payment list-payment-account-count
pagination:
  next_key: null
  total: "0"
payment_account_count:
- count: "1"
  owner: 0x3bA598a3d809702dB4cA8610e14cBAF83908861d
- count: "1"
  owner: 0x71A3c4521B66da275fb514dd3156fa699B54A341

# Usage:
#   gnfd query payment show-payment-account-count [owner] [flags]
$ gnfd q payment show-payment-account-count 0x3bA598a3d809702dB4cA8610e14cBAF83908861d
payment_account_count:
  count: "1"
  owner: 0x3bA598a3d809702dB4cA8610e14cBAF83908861d

$ gnfd q payment list-stream-record --limit 2
pagination:
  next_key: HkqUGmZ0FNTaMd77ZqEMS0WtV0Y=
  total: "0"
stream_record:
- account: 0x0B14B50E07934d9360152CACbd3397fDf9A13be0
  buffer_balance: "0"
  crud_timestamp: "1680231986"
  lock_balance: "4620383649780"
  netflow_rate: "0"
  out_flows: []
  settle_timestamp: "0"
  static_balance: "0"
  status: STREAM_ACCOUNT_STATUS_ACTIVE
- account: 0x169FFd6893aB4A0f8105BA749A0614cB69a18884
  buffer_balance: "11998800"
  crud_timestamp: "1680232053"
  lock_balance: "0"
  netflow_rate: "-199980"
  out_flows:
  - rate: "198000"
    to_address: 0xA80Ae7B8C9B73eD8Df95447fc722ed2345646210
  - rate: "1980"
    to_address: 0xeDdd310750a9F2cC36b0671f87d77dAA07212564
  settle_timestamp: "1680282028"
  static_balance: "9988001201"
  status: STREAM_ACCOUNT_STATUS_ACTIVE

# Usage:
#   gnfd query payment show-stream-record [account] [flags]
$ gnfd q payment show-stream-record 0x0B14B50E07934d9360152CACbd3397fDf9A13be0
stream_record:
  account: 0x0B14B50E07934d9360152CACbd3397fDf9A13be0
  buffer_balance: "0"
  crud_timestamp: "1680231986"
  lock_balance: "4620383649780"
  netflow_rate: "0"
  out_flows: []
  settle_timestamp: "0"
  static_balance: "0"
  status: STREAM_ACCOUNT_STATUS_ACTIVE
```

### Transactions

The `tx` commands allow users to interact with the `payment` module.

```shell
# show help message
$ gnfd tx payment
payment transactions subcommands

Usage:
  gnfd tx payment [flags]
  gnfd tx payment [command]

Available Commands:
  create-payment-account Broadcast message create-payment-account
  deposit                Broadcast message deposit
  disable-refund         Broadcast message disable-refund
  withdraw               Broadcast message withdraw

# create payment account
$ gnfd tx payment create-payment-account --from validator0

# check the created payment account
$ gnfd q payment get-payment-accounts-by-owner 0x0Efc1c24294053a178531CA9EbCD12dC98708953
paymentAccounts:
- 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772

# deposit 100000000 BNB wei to the payment account
$ gnfd tx payment deposit 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772 100000000 --from validator0

# check the payment account, the static_balance should be 100000000
$ gnfd q payment show-stream-record 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
stream_record:
  account: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
  buffer_balance: "0"
  crud_timestamp: "1680497254"
  lock_balance: "0"
  netflow_rate: "0"
  out_flows: []
  settle_timestamp: "0"
  static_balance: "100000000"
  status: STREAM_ACCOUNT_STATUS_ACTIVE

# withdraw from the payment account
$ gnfd tx payment withdraw 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772 100 --from validator0

# check the payment account, the static_balance should be 99999900 now
$ gnfd q payment show-stream-record 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
stream_record:
  account: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
  buffer_balance: "0"
  crud_timestamp: "1680497338"
  lock_balance: "0"
  netflow_rate: "0"
  out_flows: []
  settle_timestamp: "0"
  static_balance: "99999900"
  status: STREAM_ACCOUNT_STATUS_ACTIVE

# check the payment account refundable status
$ gnfd q payment show-payment-account 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
payment_account:
  addr: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
  owner: 0x0Efc1c24294053a178531CA9EbCD12dC98708953
  refundable: true

# disable refund
$ gnfd tx payment disable-refund 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772 --from validator0

# check the payment account refundable status again, it should be false now
$ gnfd q payment show-payment-account 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
payment_account:
  addr: 0x9B946d99F4AFB629D6c872CE9027f12Cb8cF0772
  owner: 0x0Efc1c24294053a178531CA9EbCD12dC98708953
  refundable: false
```
