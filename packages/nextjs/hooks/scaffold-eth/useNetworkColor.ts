import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
import { AllowedChainIds, ChainWithAttributes } from "~~/utils/scaffold-eth";

export const DEFAULT_NETWORK_COLOR: [string, string] = ["#666666", "#bbbbbb"];

export function getNetworkColor(network: ChainWithAttributes) {
  const colorConfig = network.color ?? DEFAULT_NETWORK_COLOR;
  // Always use dark mode color (second element if array)
  return Array.isArray(colorConfig) ? colorConfig[1] : colorConfig;
}

/**
 * Gets the color of the target network
 */
export const useNetworkColor = (chainId?: AllowedChainIds) => {
  const chain = useSelectedNetwork(chainId);
  return getNetworkColor(chain);
};
