import React, { useState } from 'react';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'wallet', 'game'
  const [currentRoom, setCurrentRoom] = useState(null);

  const rooms = [
    { name: "Entry", position: "entry", challenge: "Welcome to E-scape! Your journey begins here." },
    { name: "Zero-Knowledge Proofs", position: "left", challenge: "Prove you know a secret without revealing it. Implement a simple ZKP protocol." },
    { name: "Homomorphic Encryption", position: "top", challenge: "Perform a calculation on encrypted data without decrypting it. Use partial homomorphic encryption." },
    { name: "Trusted Execution Environments", position: "right", challenge: "Set up a secure enclave and perform a confidential computation. Simulate a TEE environment." },
  ];

  const handleStartGame = () => {
    setGameState('wallet');
  };

  const handleConnectWallet = (walletType) => {
    // In a real app, this would connect to the actual wallet
    console.log(`Connecting to ${walletType}...`);
    setGameState('game');
  };

  const handleRoomSelect = (room) => {
    setCurrentRoom(room);
  };

  const handleBackToRooms = () => {
    setCurrentRoom(null);
  };

  const renderStartScreen = () => (
    <div className="start-screen">
      <h1>E-<span>scape</span></h1>
      <p className="subtitle">Privacy Tooling Exploration</p>
      <button className="neon-button" onClick={handleStartGame}>Start Game</button>
    </div>
  );

  const renderWalletSelection = () => (
    <div className="wallet-selection">
      <h2>Connect Your Wallet</h2>
      <button className="neon-button" onClick={() => handleConnectWallet('MetaMask')}>MetaMask</button>
      <button className="neon-button" onClick={() => handleConnectWallet('WalletConnect')}>WalletConnect</button>
      <button className="neon-button" onClick={() => handleConnectWallet('Coinbase')}>Coinbase Wallet</button>
    </div>
  );

  const renderGame = () => (
    <div className="game-interface">
      <div className="game-info">
        <h2>Welcome, Agent</h2>
        <p>Navigate the Privacy Complex:</p>
      </div>
      <div className="complex-container">
        {rooms.map((room, index) => (
          <div 
            key={index} 
            className={`room ${room.position}`}
            onClick={() => handleRoomSelect(room)}
          >
            <span className="room-name">{room.name}</span>
          </div>
        ))}
        <div className="corridor"></div>
      </div>
      {currentRoom && (
        <div className="challenge-center">
          <h2>{currentRoom.name} Challenge</h2>
          <p>{currentRoom.challenge}</p>
          <button className="neon-button" onClick={handleBackToRooms}>Back to Rooms</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      <main className="main-content">
        {gameState === 'start' && renderStartScreen()}
        {gameState === 'wallet' && renderWalletSelection()}
        {gameState === 'game' && renderGame()}
      </main>
    </div>
  );
}

export default App;
