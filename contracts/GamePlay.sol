// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;
import "hardhat/console.sol";
import "./ZKProof.sol";
import "./FHEncryption.sol";
import "./TEEnvironment.sol";

contract MazeGame {
    ZKProof zkp;
    FHEncryption fhe;
    TEEnvironment tee;

    struct Player {
        uint256 x;
        uint256 y;
        uint256 keys;
        bool solved;
    }

    struct Potion{
        uint256 healHP;
        uint256 moveSpeed;
        string effect;
    }
    
    mapping(address => Player) public players;
    uint256[3][3] public maze;

    constructor() {
        // Initialize the maze array with some values, 0 for no quiz, 1 for possible quiz
        maze = [
            [1, 1, 1],
            [1, 0, 2],
            [1, 0, 1]
        ];
    }

    function startGame() public {
        require(players[msg.sender].x == 0&& players[msg.sender].y == 0, "Game started");
        players[msg.sender] = Player(1, 1, 0, false);
    }

    function move(uint256 stepX, uint256 stepY) public {
        require(stepX < 3 && stepY < 3, "Out of maze bounds");
        players[msg.sender].x = stepX;
        players[msg.sender].y = stepY;
        checkIfSolved();
    }

    function checkIfSolved() internal {
        if (players[msg.sender].x == maze.length - 1) {
            players[msg.sender].solved = true;
        }
    }

    function getPlayerPosition(address player) public view returns (uint256 x, uint256 y) {
        return (players[player].x, players[player].y);
    }

    function roomAction(uint256 stepX, uint256 stepY) internal{
        if(maze[stepX][stepY]==0){
            emptyRoom();
        }else if(maze[stepX][stepY]==2){
            endRoom(players[msg.sender].keys);
        }else{
            zkp.startGame();
            fhe.FHEpuzzle();
            fhe.FHEtreasureHunt();
            tee.TEEpuzzle();
        }
    }

    function emptyRoom() public pure{
        console.log("You have arrived at an empty room, you are locked for 1 round");
        
    }

    function endRoom(uint256 key) public pure{
        console.log("You have arrived at exit room");
        require( key==6, "However, you don't have enough keys, be ready for another test");

    }

    function game(uint input) internal pure{
        require(input >= 1 && input <= 5, "Input must be between 1 to 5");
    }

    

}
