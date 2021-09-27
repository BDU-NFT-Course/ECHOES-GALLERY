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
