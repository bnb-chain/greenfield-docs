---
title: Command Line
dir:
  order: 2
order: 1
---

# Command-Line Interface

There is no set way to create a CLI, but Greenfield Storage Provider typically use the [urfave cli library v2](https://github.com/urfave/cli).
Building a CLI with urfave cli entails defining commands, arguments, and flags. Commands understand the
actions users wish to take, such as `config.dump` cmd dumps default configuration for editing and `config.upload` 
uploads the configuration to db, all service gets the configuration from db with `--config.remote` flag.
Users also supply **Arguments**, such as the db address that uploading configuration and flags to modify 
various aspects of the commands, such `--server gateway, uploader, downaloader` starts the gateway, uploader 
and downloader services in one process, combines the required services arbitrarily.

## Common Command

```bash
$ ./gnfd-sp version

Greenfield Storage Provider
    __                                                       _     __
    _____/ /_____  _________ _____ ____     ____  _________ _   __(_)___/ /__  _____
    / ___/ __/ __ \/ ___/ __  / __  / _ \   / __ \/ ___/ __ \ | / / / __  / _ \/ ___/
    (__  ) /_/ /_/ / /  / /_/ / /_/ /  __/  / /_/ / /  / /_/ / |/ / / /_/ /  __/ /
    /____/\__/\____/_/   \__,_/\__, /\___/  / .___/_/   \____/|___/_/\__,_/\___/_/
    /____/       /_/

Version : v0.0.5
Branch  : master
Commit  : e67cceea015bba338084e7328724800fd40ba594
Build   : go1.20.1 darwin amd64 2023-04-05 21:28
```

Dump default configuration to the './config.toml' file for editing
```bash
$ ./gnfd-sp config.dump
```

Upload the config file to db
```bash
$ ./gnfd-sp config.upload
```

List the services in greenfield storage provider
```bash
$ ./gnfd-sp list
```

Create Secp256k1 key pairs for encrypting p2p protocol msg and identifying p2p node
```bash
$ ./gnfd-sp p2p.create.key
```

## Global Options

### Config
```bash
--config value, -c value  Config file path for uploading to db (default: "./config.toml")
--config.remote           Flag load config from remote db,if 'config.remote' be set, the db.user, db.password and db.address flags are needed, otherwise use the default value (default: false)
```

### Database
```bash
--db.address  value  DB listen address (default: "localhost:3306") [$SP_DB_ADDRESS]
--db.database value  DB database name (default: "storage_provider_db") [$SP_DB_DATABASE]
--db.password value  DB user password [$SP_DB_PASSWORD]
--db.user     value  DB user name [$SP_DB_USER]
```

### Logging
```bash
--log.level value  Log level (default: "info")
--log.path  value  Log output file path (default: "./gnfd-sp.log")
--log.std          Log output standard io (default: false)
```

### Metrics
```bash
--metrics             Enable metrics collection and reporting (default: false)
--metrics.addr value  Enable stand-alone metrics HTTP server listening address (default: "localhost:24036")
```

### Resource manager
```bash
--rcmgr.config value  Resource manager config file path
--rcmgr.disable       Disable resource manager (default: false)
```