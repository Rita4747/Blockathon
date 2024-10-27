// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract ZKProof {
    struct Sudoku {
        uint8[9][9] grid;
    }

    mapping(address => Sudoku) private puzzles;
    //Verifier public zkVerifier;
    // constructor(address _zkVerifier) {
    //     zkVerifier = Verifier(_zkVerifier);
    // }

    function generateSudoku() internal pure returns (Sudoku memory) {
        Sudoku memory puzzle;
        for (uint8 i = 0; i < 9; i++) {
            for (uint8 j = 0; j < 9; j++) {
                puzzle.grid[i][j] = uint8((i * j + j) % 9 + 1);
            }
        }
        return puzzle;
    }

    function startGame() public {
        puzzles[msg.sender] = generateSudoku();
    }

    function finalPuzzle (uint8[9][9] memory puzzle) public {
        puzzles[msg.sender] = Sudoku(puzzle);
    }


    function verifySolution(uint[2] memory a, uint256[2][2] memory b,
        uint256[2] memory c, uint256[1] memory input
    ) public view returns (bool) {
        //require(zkVerifier.verifyProof(a, b, c, input), "Invalid proof");
        return true;
    }
}