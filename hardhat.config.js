require("dotenv").config();
require("@nomiclabs/hardhat-ethers");


module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`]
        }
    }
};
