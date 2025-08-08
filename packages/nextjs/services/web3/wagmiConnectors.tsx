import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { rainbowkitBurnerWallet } from "burner-connector";
import scaffoldConfig from "~~/scaffold.config";

// Singleton instance of connectors
let connectorsInstance: ReturnType<typeof connectorsForWallets> | null = null;

/**
 * Get wagmi connectors for the wagmi context (singleton)
 */
export const getWagmiConnectors = () => {
  if (!connectorsInstance) {
    const wallets = [
      metaMaskWallet,
      walletConnectWallet,
      ledgerWallet,
      coinbaseWallet,
      rainbowWallet,
      safeWallet,
      rainbowkitBurnerWallet, // Always include burner wallet for Sonic testnet
    ];

    connectorsInstance = connectorsForWallets(
      [
        {
          groupName: "Supported Wallets",
          wallets,
        },
      ],
      {
        appName: "scaffold-eth-2",
        projectId: scaffoldConfig.walletConnectProjectId,
      },
    );
  }
  return connectorsInstance;
};

// Export for backward compatibility
export const wagmiConnectors = getWagmiConnectors();
