// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GameLogic {
    // Mapping to store player's currency balances
    mapping(address => uint256) public balances;

    // Event for adding currency
    event CurrencyAdded(address indexed player, uint256 amount);

    // Function to add currency to a player's balance
    function addCurrency(uint256 amount) public {
        balances[msg.sender] += amount;
        emit CurrencyAdded(msg.sender, amount);
    }

    // Function to check if a player has enough currency
    function hasEnoughCurrency(uint256 amount) public view returns (bool) {
        return balances[msg.sender] >= amount;
    }

    // Function to deduct currency from a player's balance
    function deductCurrency(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
    }
}