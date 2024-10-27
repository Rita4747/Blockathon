// Load Web3.js library
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Connect to MetaMask
async function connectWallet() {
    if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(async accounts => {
                const account = accounts[0];
                web3.eth.defaultAccount = account;
                console.log('Connected to MetaMask:', account);
            })
            .catch(err => {
                console.error('MetaMask connection error:', err);
            });
    } else {
        console.error('Please install MetaMask!');
    }
}

// Example function to interact with a smart contract
async function getBalance() {
    const balance = await web3.eth.getBalance(web3.eth.defaultAccount);
    console.log('Account balance:', balance);
}

// Call the functions
connectWallet();
getBalance();
