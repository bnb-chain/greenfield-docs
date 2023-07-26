---
title: Challenge
order: 9
---

# Challenge

## Abstract
The challenge module is responsible for handling on-chain challenges that are either generated or submitted by users.

Users can submit a challenge and query the latest attested challenges through cli commands.

## Quick Start

No local node setup is required for this module as it relies on multiple services to function. We will be using the testnet node instead.    

1. Clone the [greenfield repository](https://github.com/bnb-chain/greenfield)
2. Build the `gnfd` binary with `make build`

## Detailed CLI

A user can query and interact with the `challenge` module using the CLI.

### Query

The `query` commands allow users to query `challenge` state.

```sh
./build/bin/gnfd query challenge --help
```

#### latest-attested-challenges  

The `latest-attested-challenges` command allows users to query the latest challenges that have been attested by the user.

```sh
./build/bin/gnfd query challenge latest-attested-challenges [flags]
```

Example:

```sh
./build/bin/gnfd query challenge latest-attested-challenges --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

Example Output:

```yml
 - id: "400"
   result: CHALLENGE_FAILED
 - id: "461"
   result: CHALLENGE_SUCCEED
```

#### inturn-attestation-submitter

The `inturn-attestation-submitter` command allows users to query the off-chain challenger service that is currently in charge of attesting.   

```sh
./build/bin/gnfd query inturn-attestation-submitter [flags]
```

Example:

```sh
./build/bin/gnfd query challenge inturn-attestation-submitter --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

Example Output:

```yml
bls_pub_key: 828e81c5c39..
submit_interval:
  end: "1681960490"
  start: "1681960480"
```

#### params

The `params` command allows users to query the current settings for the challenge module.  

```sh
./build/bin/gnfd query challenge params [flags] 
```

Example:

```sh
./build/bin/gnfd query challenge params --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

Example Output:

```yml
params:
  attestation_inturn_interval: "120"
  attestation_kept_count: "300"
  challenge_count_per_block: "1"
  challenge_keep_alive_period: "300"
  heartbeat_interval: "1000"
  reward_submitter_ratio: "0.001000000000000000"
  reward_submitter_threshold: "1000000000000000"
  reward_validator_ratio: "0.900000000000000000"
  slash_amount_max: "1000000000000000000"
  slash_amount_min: "10000000000000000"
  slash_amount_size_rate: "0.008500000000000000"
  slash_cooling_off_period: "300"
  sp_slash_counting_window: "0"
  sp_slash_max_amount: "0"
```

### Transactions

The `tx` commands allow users to interact with the `challenge` module.

```sh
./build/bin/gnfd tx challenge [command] --help
```

#### submit

The `submit` command allows users to submit a challenge for an object stored by any storage provider.

```sh
./build/bin/gnfd tx challenge submit [sp-operator-address] [bucket-name] [object-name] [random-index] [segment-index] [flags]
```

Example:

```sh
./build/bin/gnfd tx challenge submit 0x950E2FBD285BC42E30EA69A8C1AB17EEDC70C447 ch69bd3t tq true 0 --keyring-backend test --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 -b block --from validator0
```

The result of the challenge can be queried using the `AttestedChallenge` method through [GRPC swagger](https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/openapi).

#### attest

The `attest` command allows relayers to send an attestation for a challenge.

```sh
./build/bin/gnfd tx challenge attest [challenge-id] [object-id] [sp-operator-address] [vote-result] [challenger-address] [vote-validator-set] [vote-agg-signature] [flags]
```

Example:

```sh
./build/bin/gnfd tx challenge attest 205895 21 0x950e2FbD285bc42E30eA69A8C1Ab17eEDC70C447 1 ""  1,0,0,0 a955a414bf982f5a67883c97cbec88ab06dfcdce255ee36e927c4c4fd416f74d39a2c812a3ffb8bac37c2269a589973810799fefe1d5ea8ecd6a4158165b85bd6f24339320eb1c85aa5f4e908c97a966865962928272474d11092031f48c9e7c --keyring-backend test --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 -b block --from validator0
```
