import { getWagmiConnectors } from "./wagmiConnectors";
import { createClient, http } from "viem";
import { createConfig } from "wagmi";
import { sonicTestnet } from "~~/chains/sonicTestnet";
import scaffoldConfig from "~~/scaffold.config";

// Using only Sonic testnet - no other chains
export const enabledChains = [sonicTestnet] as const;

// Singleton instance of wagmiConfig
let wagmiConfigInstance: ReturnType<typeof createConfig> | null = null;

export const getWagmiConfig = () => {
  if (!wagmiConfigInstance) {
    // Get connectors - will be empty array on server side
    const connectors = typeof getWagmiConnectors === 'function' 
      ? getWagmiConnectors() 
      : getWagmiConnectors as any;
    
    wagmiConfigInstance = createConfig({
      chains: enabledChains,
      connectors,
      ssr: true,
      client: ({ chain }) => {
        // For Sonic testnet, use direct RPC
        return createClient({
          chain,
          transport: http("https://rpc.testnet.soniclabs.com"),
          pollingInterval: scaffoldConfig.pollingInterval,
        });
      },
    });
  }
  return wagmiConfigInstance;
};

// Export for backward compatibility - will initialize on first use
export const wagmiConfig = getWagmiConfig();
