# Notes on how the project was set up

## Set up Git Repo
1. Set up empty repo on GitHub without license, readme or gitignore
1. Set up gitHub your access keys
1. Create a folder on your system and initialize it for git
```
git init
git add .
git commit -m "initial setup"
git commit -m "initial setup"
git remote add origin https://github.com/BDU-NFT-Course/ECHOES-GALLERY.git
git push -u origin main
```
##  Set Up dev project with hardhat
```
npm init -y
npm install --save-dev hardhat
npx hardhat 
  - create empty hardhat project 
```
## Set up connection to a testnet
Set up .secrets.json
```
{
    "alchemyAPIKey" : "https://eth-rinkeby.alchemyapi.io/v2/<rinkeby_private_key>",
    "ethereumAccount" : "<rinkeby_account_secret_key>"
}
```

Set up hardhat.config.js
```
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
const { alchemyAPIKey, ethereumAccount } = require('./.secrets.json');

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    rinkeby: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    }
  },
};
```

## Contracts

We will need these packages
```
npm install --save-dev @openzeppelin/contracts
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan
```

Compile, deploy and run
```
npx hardhat compile
npx hardhat run scripts/deploy.js 
# save the contract address outputed by deploy.js
```

Check the contract etherscan: https://rinkeby.etherscan.io/address/<contract_address>

Verify the contract
```
npx hardhat verify --network rinkeby <contract_address>
```