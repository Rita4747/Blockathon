require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
    solidity: "0.8.4",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.PRIVATE_KEY}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`]
        }
    }
};
