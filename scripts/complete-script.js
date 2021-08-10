const assert = require("assert");

// Requiring hardhat like this initializes the development environment, including Hardhat Network.
// This creates a temporal instance of an Ethereum network, which has the same state (a bunch of hardcoded accounts with some ETH),
// and a single (empty) block.
//
// `ethers` here is a Hardhat warpper around the ethers.js library, which has a provider connected to Hardhat Network.
// This means that sending a tx, making a call, or any other interaction with ethers will be routed to Hardhat Network.
//
// A provider is a connector to an ethereum network, which let's you make JSON-RPC requests to a client.
// This standard defines the interface of a js provider, but doesn't define how requets are made: https://eips.ethereum.org/EIPS/eip-1193
// Hardhat network implements a provider following that standard.
// Most JSON-RPC methods are documented here https://eth.wiki/json-rpc/API
// Hardhat Network implements a subset of them, plus some others: https://hardhat.org/hardhat-network/reference/#json-rpc-methods-support
//
// ethers.js predates the EIP-1193 standard, so it deviates from it, hence, `ethers.provider` is a wapper of the actual Hardhat Network
// provider. The stripped down version of this test uses the Hardhat Network provider directly.
const { ethers } = require("hardhat");

async function main() {
  // This test just deploys a contract which has a getter and a setter, and tests that they work correctly.
  const Greeter = await ethers.getContractFactory("Greeter");

  const greeter = await Greeter.deploy("Hello, world!", {
    gasLimit: 1_000_000,
  });

  assert.equal(await greeter.greet(), "Hello, world!");

  await greeter.setGreeting("Hola, mundo!", { gasLimit: 1_000_000 });

  assert.equal(await greeter.greet(), "Hola, mundo!");

  console.log("The test passed!");
}

main().catch(console.error);
