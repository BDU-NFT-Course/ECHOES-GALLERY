// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const WisdomHub = await ethers.getContractFactory('WisdomHub');
    console.log('Deploying Contract...');
    const myContract = await WisdomHub.deploy();
    await myContract.deployed();
    console.log('Contract deployed to:', myContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });