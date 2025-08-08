import { defineChain } from "viem";

export const sonicTestnet = defineChain({
  id: 57054,
  name: "Sonic Testnet",
  network: "sonic-testnet",
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
});
