"use client";

import { useEffect, useRef, useState } from "react";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
// import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useInitializeNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { getWagmiConfig } from "~~/services/web3/wagmiConfig";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  useInitializeNativeCurrencyPrice();

  return (
    <>
      <div className={`flex flex-col min-h-screen `}>
        {/* <Header /> */}
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

// Create a singleton instance of QueryClient
let queryClientInstance: QueryClient | null = null;

const getQueryClient = () => {
  if (!queryClientInstance) {
    queryClientInstance = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }
  return queryClientInstance;
};

export const queryClient = getQueryClient();

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const wagmiConfigRef = useRef(getWagmiConfig());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={wagmiConfigRef.current}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          avatar={BlockieAvatar}
          theme={darkTheme()}
        >
          <ProgressBar height="3px" color="#2299dd" />
          <ScaffoldEthApp>{children}</ScaffoldEthApp>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
