import { ethers } from "hardhat";

async function main() {
  
  const myName = 'Signor.eth';
  const myAge = 16;

  // Get the contract factory using the compiled contract and ABI
  const myRegistry = await ethers.getContractFactory('Registry');
  
  // Deploy the contract with the specified parameters
  const myRegistryContract = await myRegistry.deploy(myName, myAge);

  // Wait for the deployment transaction to be mined
  await myRegistryContract.waitForDeployment();

  // Print the contract address
  console.log('MyMessage deployed to:', myRegistryContract.target, {myName, myAge});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});