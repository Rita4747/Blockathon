// Import the Hardhat Runtime Environment explicitly here
const hre = require("hardhat");

async function main() {
    const GameLogic = await ethers.getContractFactory("GameLogic");
    const gameLogic = await GameLogic.deploy();
    console.log("GameLogic deployed to:", gameLogic.address);
}

async function main() {
    const ZKProof = await ethers.getContractFactory("ZKProof");
    const zkProof = await ZKProof.deploy();
    await zkProof.deployed();
    console.log("zksudoku deployed to:", zkProof.address);
}

// Run the main function, catch errors and set process exit code to 1
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
