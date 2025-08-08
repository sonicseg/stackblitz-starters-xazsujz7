/**
 * Sonic Testnet (Fantom Sonic)
 * Chain ID: 57054
 * 
 * Sonic is a next-generation L1 blockchain built by Fantom
 */
export const sonicTestnet = {
  id: 57054,
  name: "Sonic Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Sonic",
    symbol: "S",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.soniclabs.com"],
    },
    public: {
      http: ["https://rpc.testnet.soniclabs.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Sonic Testnet Explorer",
      url: "https://testnet.soniclabs.com",
    },
  },
  testnet: true,
} as const;
