import generateZKProof from "../ZKPFol/proofGen";

// scripts/interact.js
async function main() {
    const [deployer] = await ethers.getSigners();
    const ZKProof = await ethers.getContractFactory("ZKSudoku");
    const zkProof = await generateZKProof.attach("YOUR_CONTRACT_ADDRESS");

    // Start game
    await zkProof.connect(deployer).startGame();
    console.log("Game started");

    // Verify solution (placeholder)
    const a = [0, 0];
    const b = [[0, 0], [0, 0]];
    const c = [0, 0];
    const input = [0];
    const result = await zkProof.connect(deployer).verifySolution(a, b, c, input);
    console.log("Solution verification result:", result);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
