"use client";

import { useEffect, useMemo } from "react";
import { useSessionStorage } from "usehooks-ts";
import { BarsArrowUpIcon } from "@heroicons/react/20/solid";
import { ContractUI } from "~~/app/debug/_components/contract";
import { ContractName, GenericContract } from "~~/utils/scaffold-eth/contract";
import { useAllContracts } from "~~/utils/scaffold-eth/contractsData";

const selectedContractStorageKey = "scaffoldEth2.selectedContract";

export function DebugContracts() {
  const contractsData = useAllContracts();
  const contractNames = useMemo(
    () =>
      Object.keys(contractsData).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
      }) as ContractName[],
    [contractsData],
  );

  const [selectedContract, setSelectedContract] = useSessionStorage<ContractName>(
    selectedContractStorageKey,
    contractNames[0],
    { initializeWithValue: false },
  );

  useEffect(() => {
    if (!contractNames.includes(selectedContract)) {
      setSelectedContract(contractNames[0]);
    }
  }, [contractNames, selectedContract, setSelectedContract]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      {contractNames.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-3xl text-gray-400 mb-4">No contracts found!</p>
          <p className="text-gray-500">Deploy your contracts to see them here</p>
        </div>
      ) : (
        <>
          {contractNames.length > 1 && (
            <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
              {contractNames.map(contractName => (
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    contractName === selectedContract
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-300"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white"
                  }`}
                  key={contractName}
                  onClick={() => setSelectedContract(contractName)}
                >
                  {contractName}
                  {(contractsData[contractName] as GenericContract)?.external && (
                    <span className="ml-2 inline-flex items-center" title="External contract">
                      <BarsArrowUpIcon className="h-4 w-4" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
          <div className="w-full max-w-7xl px-6 lg:px-10">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
              {contractNames.map(contractName => (
                <ContractUI
                  key={contractName}
                  contractName={contractName}
                  className={contractName === selectedContract ? "" : "hidden"}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}