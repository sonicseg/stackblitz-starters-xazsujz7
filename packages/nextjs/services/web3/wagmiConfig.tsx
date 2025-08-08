import { getWagmiConnectors } from "./wagmiConnectors";
import { createClient, http } from "viem";
import { createConfig } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { sonicTestnet } from "~~/utils/customChains";

// Using only Sonic testnet - no other chains
export const enabledChains = [sonicTestnet] as const;

// Singleton instance of wagmiConfig
let wagmiConfigInstance: ReturnType<typeof createConfig> | null = null;

export const getWagmiConfig = () => {
  if (!wagmiConfigInstance) {
    wagmiConfigInstance = createConfig({
      chains: enabledChains,
      connectors: getWagmiConnectors(),
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

// Export for backward compatibility
export const wagmiConfig = getWagmiConfig();
