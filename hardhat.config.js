require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {},
    m1: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY2],
    },
    m2: {
      url: process.env.ALCHEMY_MUMBAI_URL
    }
  }
};