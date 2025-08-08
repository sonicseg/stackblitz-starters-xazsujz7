import { getWagmiConnectors } from "./wagmiConnectors";
import { Chain, createClient, fallback, http } from "viem";
import { createConfig } from "wagmi";
import scaffoldConfig, { DEFAULT_ALCHEMY_API_KEY, ScaffoldConfig } from "~~/scaffold.config";
import { getAlchemyHttpUrl } from "~~/utils/scaffold-eth";

const { targetNetworks } = scaffoldConfig;

// Using only Sonic testnet - no other chains
export const enabledChains = targetNetworks;

// Singleton instance of wagmiConfig
let wagmiConfigInstance: ReturnType<typeof createConfig> | null = null;

export const getWagmiConfig = () => {
  if (!wagmiConfigInstance) {
    wagmiConfigInstance = createConfig({
      chains: enabledChains,
      connectors: getWagmiConnectors(),
      ssr: true,
      client: ({ chain }) => {
        let rpcFallbacks = [http()];
        const rpcOverrideUrl = (scaffoldConfig.rpcOverrides as ScaffoldConfig["rpcOverrides"])?.[chain.id];
        if (rpcOverrideUrl) {
          // For Sonic testnet, use the configured RPC
          rpcFallbacks = [http(rpcOverrideUrl)];
        } else {
          // Fallback to default RPC if no override
          const alchemyHttpUrl = getAlchemyHttpUrl(chain.id);
          if (alchemyHttpUrl) {
            const isUsingDefaultKey = scaffoldConfig.alchemyApiKey === DEFAULT_ALCHEMY_API_KEY;
            rpcFallbacks = isUsingDefaultKey ? [http(), http(alchemyHttpUrl)] : [http(alchemyHttpUrl), http()];
          }
        }
        return createClient({
          chain,
          transport: fallback(rpcFallbacks),
          pollingInterval: scaffoldConfig.pollingInterval,
        });
      },
    });
  }
  return wagmiConfigInstance;
};

// Export for backward compatibility
export const wagmiConfig = getWagmiConfig();
