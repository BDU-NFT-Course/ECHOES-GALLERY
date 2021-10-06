// scripts/deploy.js
const { ethers } = require("hardhat");

async function main () {
    // We get the contract to deploy
    const LocalZine = await ethers.getContractFactory('LocalZine');
    console.log('Deploying Contract...');
    const myContract = await LocalZine.deploy();
    await myContract.deployed();
    console.log('Contract deployed to:', myContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });