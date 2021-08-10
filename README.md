# Hardhat Network Intro

This project is meant to be used as an intro to Hardhat Network's internals.

It has a simple contract with a basic test of it.

## Installation and compilint

You need to install the project and compile the contract first before running the test

```sh
yarn
yarn hardhat compile
```

## Test using the complete setup

The first version of te setup uses the ethers.js and its Hardhat plugin. You can run it with

```sh
node scripts/complete-script.js
```

There are comments in the file explaining it.

## Stripped down version of the test

A second version of the same test only uses Hardhat Network and is more practical as a starting point to dig deeper.

```sh
node scripts/stripped-down-script.js
```