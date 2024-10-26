import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: "Mh29xXl_A5PTYLMYuRcXB-O_oFmXNS0u",
  network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);
