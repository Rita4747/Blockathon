// proofGeneration.js

import { groth16 } from "snarkjs";

async function fetchSudoku() {
    const response = await fetch('http://localhost:5000/sudoku');
    const puzzle = await response.json();
    return puzzle;
}

async function generateZKProof(solution) {
    const input = { solution }; // Adjust according to your circuit requirements
    const { proof, publicSignals } = await groth16.fullProve(input, "circuit.wasm", "circuit_final.zkey");
    return { proof, publicSignals };
}

async function generateAndVerifyProof() {
    const solution = await fetchSudoku();
    const proofData = await generateZKProof(solution);
    await verifySolution(proofData);
}

export default generateZKProof;
