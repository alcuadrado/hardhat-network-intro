const assert = require("assert");

// This version of the test uses Hardhat Network directly, without wrapping it with ethers.
// It offers a lower level api, which consists on a single method that takes the payload of the JSON-RPC
// requests that you want to do, and returns their return value, as specified by the EIP-1193.
const {
  network: { provider },
} = require("hardhat");

// The Hardhat Network provider is implemented here: https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-core/src/internal/hardhat-network/provider/provider.ts
// It has some lazy-initialization logic, and logging. It delegates the actual execution of each method to the different modules (e.g. an EthModule resolves the eth_* requets).
// The modules are find here: https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-core/src/internal/hardhat-network/provider/modules
// The most interesting module is this: https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-core/src/internal/hardhat-network/provider/modules/eth.ts
// Modules handle the requests by (maybe) normalizing some inputs, delegating the actual execution to the HardhatNode, and then formatting the output.
// The HardhatNode is where the actual execution, state management and tracing happens. It can be found here: https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-core/src/internal/hardhat-network/provider/node.ts

async function main() {
  // The requests made here are the relevant subset made by the other script.
  // In fact, I created this code by `console.log`ing the calls to the Hardhat Network provider during the execution of the complete script :)

  // Deploying the contract
  await provider.request({
    method: "eth_sendTransaction",
    params: [
      {
        gas: "0xf4240",
        from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        data: "0x608060405234801561001057600080fd5b506040516107893803806107898339818101604052810190610032919061015a565b806000908051906020019061004892919061004f565b50506102f6565b82805461005b90610224565b90600052602060002090601f01602090048101928261007d57600085556100c4565b82601f1061009657805160ff19168380011785556100c4565b828001600101855582156100c4579182015b828111156100c35782518255916020019190600101906100a8565b5b5090506100d191906100d5565b5090565b5b808211156100ee5760008160009055506001016100d6565b5090565b6000610105610100846101c0565b61019b565b90508281526020810184848401111561011d57600080fd5b6101288482856101f1565b509392505050565b600082601f83011261014157600080fd5b81516101518482602086016100f2565b91505092915050565b60006020828403121561016c57600080fd5b600082015167ffffffffffffffff81111561018657600080fd5b61019284828501610130565b91505092915050565b60006101a56101b6565b90506101b18282610256565b919050565b6000604051905090565b600067ffffffffffffffff8211156101db576101da6102b6565b5b6101e4826102e5565b9050602081019050919050565b60005b8381101561020f5780820151818401526020810190506101f4565b8381111561021e576000848401525b50505050565b6000600282049050600182168061023c57607f821691505b602082108114156102505761024f610287565b5b50919050565b61025f826102e5565b810181811067ffffffffffffffff8211171561027e5761027d6102b6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610484806103056000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061022c565b610075565b005b61005f61008f565b60405161006c91906102a6565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e9061037c565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca9061037c565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d9061037c565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b60006101d76101d2846102ed565b6102c8565b9050828152602081018484840111156101ef57600080fd5b6101fa84828561033a565b509392505050565b600082601f83011261021357600080fd5b81356102238482602086016101c4565b91505092915050565b60006020828403121561023e57600080fd5b600082013567ffffffffffffffff81111561025857600080fd5b61026484828501610202565b91505092915050565b60006102788261031e565b6102828185610329565b9350610292818560208601610349565b61029b8161043d565b840191505092915050565b600060208201905081810360008301526102c0818461026d565b905092915050565b60006102d26102e3565b90506102de82826103ae565b919050565b6000604051905090565b600067ffffffffffffffff8211156103085761030761040e565b5b6103118261043d565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b82818337600083830152505050565b60005b8381101561036757808201518184015260208101905061034c565b83811115610376576000848401525b50505050565b6000600282049050600182168061039457607f821691505b602082108114156103a8576103a76103df565b5b50919050565b6103b78261043d565b810181811067ffffffffffffffff821117156103d6576103d561040e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220687b9dee277038a211087405abce2b65c7303cb75f0d2fa5e7863007b97db38b64736f6c634300080400330000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000d48656c6c6f2c20776f726c642100000000000000000000000000000000000000",
      },
    ],
  });

  // calling its greet function
  const greeting1 = await provider.request({
    method: "eth_call",
    params: [
      {
        gas: "0x1bad458",
        from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        to: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        data: "0xcfae3217",
      },
      "latest",
    ],
  });

  assert.equal(greeting1, abiEncodeString("Hello, world!"));

  // calling its setGreeting function with "Hola, mundo!" as arg
  await provider.request({
    method: "eth_sendTransaction",
    params: [
      {
        gas: "0xf4240",
        from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        to: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        data: "0xa41368620000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000c486f6c612c206d756e646f210000000000000000000000000000000000000000",
      },
    ],
  });

  // calling its greet function
  const greeting2 = await provider.request({
    method: "eth_call",
    params: [
      {
        gas: "0x1bad458",
        from: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        to: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        data: "0xcfae3217",
      },
      "latest",
    ],
  });

  assert.equal(greeting2, abiEncodeString("Hola, mundo!"));

  console.log("The stripped down test passed!");
}

function abiEncodeString(str) {
  const { utils } = require("ethers");
  return utils.defaultAbiCoder.encode(["string"], [str]);
}

main().catch(console.error);
