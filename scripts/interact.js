// scripts/interact.js
async function main() {
    const [deployer] = await ethers.getSigners();
    const ZKSudoku = await ethers.getContractFactory("ZKSudoku");
    const zkSudoku = await ZKSudoku.attach("YOUR_CONTRACT_ADDRESS");

    // Start game
    await zkSudoku.connect(deployer).startGame();
    console.log("Game started");

    // Verify solution (placeholder)
    const a = [0, 0];
    const b = [[0, 0], [0, 0]];
    const c = [0, 0];
    const input = [0];
    const result = await zkSudoku.connect(deployer).verifySolution(a, b, c, input);
    console.log("Solution verification result:", result);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
