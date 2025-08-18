Project Structure:
├── LICENCE
├── package.json
├── packages
│   ├── hardhat
│   │   ├── contracts
│   │   │   └── YourContract.sol
│   │   ├── deploy
│   │   │   └── 00_deploy_your_contract.ts
│   │   ├── eslint.config.mjs
│   │   ├── hardhat.config.ts
│   │   ├── package.json
│   │   ├── scripts
│   │   │   ├── generateAccount.ts
│   │   │   ├── generateTsAbis.ts
│   │   │   ├── importAccount.ts
│   │   │   ├── listAccount.ts
│   │   │   ├── revealPK.ts
│   │   │   └── runHardhatDeployWithPK.ts
│   │   ├── test
│   │   │   └── YourContract.ts
│   │   └── tsconfig.json
│   └── nextjs
│       ├── app
│       │   ├── HomeContent.tsx
│       │   ├── blockexplorer
│       │   │   ├── _components
│       │   │   │   ├── AddressCodeTab.tsx
│       │   │   │   ├── AddressComponent.tsx
│       │   │   │   ├── AddressLogsTab.tsx
│       │   │   │   ├── AddressStorageTab.tsx
│       │   │   │   ├── BackButton.tsx
│       │   │   │   ├── ContractTabs.tsx
│       │   │   │   ├── PaginationButton.tsx
│       │   │   │   ├── SearchBar.tsx
│       │   │   │   ├── TransactionHash.tsx
│       │   │   │   ├── TransactionsTable.tsx
│       │   │   │   └── index.tsx
│       │   │   ├── address
│       │   │   │   └── [address]
│       │   │   │       └── page.tsx
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   └── transaction
│       │   │       ├── [txHash]
│       │   │       │   └── page.tsx
│       │   │       └── _components
│       │   │           └── TransactionComp.tsx
│       │   ├── debug
│       │   │   ├── _components
│       │   │   │   ├── DebugContracts.tsx
│       │   │   │   └── contract
│       │   │   │       ├── ContractInput.tsx
│       │   │   │       ├── ContractReadMethods.tsx
│       │   │   │       ├── ContractUI.tsx
│       │   │   │       ├── ContractVariables.tsx
│       │   │   │       ├── ContractWriteMethods.tsx
│       │   │   │       ├── DisplayVariable.tsx
│       │   │   │       ├── InheritanceTooltip.tsx
│       │   │   │       ├── ReadOnlyFunctionForm.tsx
│       │   │   │       ├── Tuple.tsx
│       │   │   │       ├── TupleArray.tsx
│       │   │   │       ├── TxReceipt.tsx
│       │   │   │       ├── WriteOnlyFunctionForm.tsx
│       │   │   │       ├── index.tsx
│       │   │   │       ├── utilsContract.tsx
│       │   │   │       └── utilsDisplay.tsx
│       │   │   └── page.tsx
│       │   ├── layout.tsx
│       │   ├── not-found.tsx
│       │   ├── page.tsx
│       │   └── polyfills.ts
│       ├── chains
│       │   └── sonicTestnet.ts
│       ├── components
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   ├── ScaffoldEthAppWithProviders.tsx
│       │   ├── ThemeProvider.tsx
│       │   ├── assets
│       │   │   └── BuidlGuidlLogo.tsx
│       │   └── scaffold-eth
│       │       ├── Address
│       │       │   ├── Address.tsx
│       │       │   ├── AddressCopyIcon.tsx
│       │       │   └── AddressLinkWrapper.tsx
│       │       ├── Balance.tsx
│       │       ├── BlockieAvatar.tsx
│       │       ├── Faucet.tsx
│       │       ├── FaucetButton.tsx
│       │       ├── Input
│       │       │   ├── AddressInput.tsx
│       │       │   ├── Bytes32Input.tsx
│       │       │   ├── BytesInput.tsx
│       │       │   ├── EtherInput.tsx
│       │       │   ├── InputBase.tsx
│       │       │   ├── IntegerInput.tsx
│       │       │   ├── index.ts
│       │       │   └── utils.ts
│       │       ├── RainbowKitCustomConnectButton
│       │       │   ├── AddressInfoDropdown.tsx
│       │       │   ├── AddressQRCodeModal.tsx
│       │       │   ├── NetworkOptions.tsx
│       │       │   ├── RevealBurnerPKModal.tsx
│       │       │   ├── WrongNetworkDropdown.tsx
│       │       │   └── index.tsx
│       │       └── index.tsx
│       ├── contracts
│       │   ├── deployedContracts.ts
│       │   └── externalContracts.ts
│       ├── eslint.config.mjs
│       ├── hooks
│       │   └── scaffold-eth
│       │       ├── index.ts
│       │       ├── useAnimationConfig.ts
│       │       ├── useContractLogs.ts
│       │       ├── useCopyToClipboard.ts
│       │       ├── useDeployedContractInfo.ts
│       │       ├── useDisplayUsdMode.ts
│       │       ├── useFetchBlocks.ts
│       │       ├── useInitializeNativeCurrencyPrice.ts
│       │       ├── useNetworkColor.ts
│       │       ├── useOutsideClick.ts
│       │       ├── useScaffoldContract.ts
│       │       ├── useScaffoldEventHistory.ts
│       │       ├── useScaffoldReadContract.ts
│       │       ├── useScaffoldWatchContractEvent.ts
│       │       ├── useScaffoldWriteContract.ts
│       │       ├── useSelectedNetwork.ts
│       │       ├── useTargetNetwork.ts
│       │       ├── useTransactor.tsx
│       │       └── useWatchBalance.ts
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.js
│       ├── public
│       │   ├── favicon.png
│       │   ├── logo.svg
│       │   ├── manifest.json
│       │   └── thumbnail.jpg
│       ├── scaffold.config.ts
│       ├── services
│       │   ├── store
│       │   │   └── store.ts
│       │   └── web3
│       │       ├── wagmiConfig.tsx
│       │       └── wagmiConnectors.tsx
│       ├── start-direct.js
│       ├── styles
│       │   └── globals.css
│       ├── tailwind.config.js
│       ├── tsconfig.json
│       ├── types
│       │   └── abitype
│       │       └── abi.d.ts
│       ├── utils
│       │   └── scaffold-eth
│       │       ├── block.ts
│       │       ├── common.ts
│       │       ├── contract.ts
│       │       ├── contractsData.ts
│       │       ├── decodeTxData.ts
│       │       ├── fetchPriceFromUniswap.ts
│       │       ├── getMetadata.ts
│       │       ├── getParsedError.ts
│       │       ├── index.ts
│       │       ├── networks.ts
│       │       └── notification.tsx
│       └── vercel.json
├── stackblitz.config.json
├── start.sh
└── yarn.lock


.lintstagedrc.js
```
1 | const path = require("path");
2 | 
3 | const buildNextEslintCommand = (filenames) =>
4 |   `yarn next:lint --fix --file ${filenames
5 |     .map((f) => path.relative(path.join("packages", "nextjs"), f))
6 |     .join(" --file ")}`;
7 | 
8 | const checkTypesNextCommand = () => "yarn next:check-types";
9 | 
10 | const buildHardhatEslintCommand = (filenames) =>
11 |   `yarn hardhat:lint-staged --fix ${filenames
12 |     .map((f) => path.relative(path.join("packages", "hardhat"), f))
13 |     .join(" ")}`;
14 | 
15 | module.exports = {
16 |   "packages/nextjs/**/*.{ts,tsx}": [
17 |     buildNextEslintCommand,
18 |     checkTypesNextCommand,
19 |   ],
20 |   "packages/hardhat/**/*.{ts,tsx}": [buildHardhatEslintCommand],
21 | };
```

.nvmrc
```
1 | 18
```

.stackblitzrc
```
1 | {
2 |   "installDependencies": true,
3 |   "startCommand": "yarn install && cd packages/nextjs && npx next dev",
4 |   "env": {
5 |     "NODE_ENV": "development",
6 |     "STACKBLITZ": "true",
7 |     "SKIP_ENV_VALIDATION": "true"
8 |   }
9 | }
```

package.json
```
1 | {
2 |   "name": "se-2",
3 |   "version": "0.0.1",
4 |   "private": true,
5 |   "workspaces": {
6 |     "packages": [
7 |       "packages/*"
8 |     ]
9 |   },
10 |   "scripts": {
11 |     "account": "cd packages/hardhat && yarn account",
12 |     "account:generate": "cd packages/hardhat && yarn account:generate",
13 |     "account:import": "cd packages/hardhat && yarn account:import",
14 |     "account:reveal-pk": "cd packages/hardhat && yarn account:reveal-pk",
15 |     "chain": "cd packages/hardhat && yarn chain",
16 |     "compile": "cd packages/hardhat && yarn compile",
17 |     "deploy": "cd packages/hardhat && yarn deploy",
18 |     "fork": "cd packages/hardhat && yarn fork",
19 |     "format": "yarn next:format && yarn hardhat:format",
20 |     "generate": "yarn account:generate",
21 |     "hardhat:account": "cd packages/hardhat && yarn account",
22 |     "hardhat:chain": "cd packages/hardhat && yarn chain",
23 |     "hardhat:check-types": "cd packages/hardhat && yarn check-types",
24 |     "hardhat:clean": "cd packages/hardhat && yarn clean",
25 |     "hardhat:compile": "cd packages/hardhat && yarn compile",
26 |     "hardhat:deploy": "cd packages/hardhat && yarn deploy",
27 |     "hardhat:flatten": "cd packages/hardhat && yarn flatten",
28 |     "hardhat:fork": "cd packages/hardhat && yarn fork",
29 |     "hardhat:format": "cd packages/hardhat && yarn format",
30 |     "hardhat:generate": "cd packages/hardhat && yarn generate",
31 |     "hardhat:hardhat-verify": "cd packages/hardhat && yarn hardhat-verify",
32 |     "hardhat:lint": "cd packages/hardhat && yarn lint",
33 |     "hardhat:lint-staged": "cd packages/hardhat && yarn lint-staged",
34 |     "hardhat:test": "cd packages/hardhat && yarn test",
35 |     "hardhat:verify": "cd packages/hardhat && yarn verify",
36 | 
37 |     "ipfs": "cd packages/nextjs && yarn ipfs",
38 |     "lint": "yarn next:lint && yarn hardhat:lint",
39 |     "next:build": "cd packages/nextjs && yarn build",
40 |     "next:check-types": "cd packages/nextjs && yarn check-types",
41 |     "next:format": "cd packages/nextjs && yarn format",
42 |     "next:lint": "cd packages/nextjs && yarn lint",
43 |     "next:serve": "cd packages/nextjs && yarn serve",
44 | 
45 |     "start": "cd packages/nextjs && yarn dev",
46 |     "dev": "cd packages/nextjs && yarn dev",
47 |     "test": "cd packages/hardhat && yarn test",
48 |     "vercel": "cd packages/nextjs && yarn vercel",
49 |     "vercel:login": "cd packages/nextjs && yarn vercel:login",
50 |     "vercel:yolo": "cd packages/nextjs && yarn vercel:yolo",
51 |     "verify": "cd packages/hardhat && yarn verify"
52 |   },
53 |   "devDependencies": {},
54 |   "engines": {
55 |     "node": ">=18.0.0"
56 |   }
57 | }
```

stackblitz.config.json
```
1 | {
2 |   "installDependencies": true,
3 |   "startCommand": "yarn install && cd packages/nextjs && npx next dev",
4 |   "env": {
5 |     "NODE_ENV": "development",
6 |     "STACKBLITZ": "true",
7 |     "SKIP_ENV_VALIDATION": "true"
8 |   }
9 | }
```

start.sh
```
1 | #!/bin/bash
2 | # StackBlitz startup script for Sonic Testnet Scaffold-ETH 2
3 | 
4 | echo "🚀 Starting Scaffold-ETH 2 on Sonic Testnet..."
5 | 
6 | # Clean any existing build artifacts
7 | rm -rf packages/nextjs/.next 2>/dev/null
8 | 
9 | # Navigate to Next.js package
10 | cd packages/nextjs
11 | 
12 | # Start Next.js directly using node
13 | node node_modules/next/dist/bin/next dev
```

.cursor/rules/scaffold-eth.mdc
```
1 | ---
2 | description: 
3 | globs: 
4 | alwaysApply: true
5 | ---
6 | 
7 | This codebase contains Scaffold-ETH 2 (SE-2), everything you need to build dApps on Ethereum. Its tech stack is NextJS, RainbowKit, Wagmi and Typescript. Supports Hardhat and Foundry.
8 | 
9 | It's a yarn monorepo that contains following packages:
10 | 
11 | - HARDHAT (`packages/hardhat`): The solidity framework to write, test and deploy EVM Smart Contracts.
12 | - NextJS (`packages/nextjs`): The UI framework extended with utilities to make interacting with Smart Contracts easy (using Next.js App Router, not Pages Router).
13 | 
14 | 
15 | The usual dev flow is:
16 | 
17 | - Start SE-2 locally:
18 |   - `yarn chain`: Starts a local blockchain network
19 |   - `yarn deploy`: Deploys SE-2 default contract
20 |   - `yarn start`: Starts the frontend
21 | - Write a Smart Contract (modify the deployment script in `packages/hardhat/deploy` if needed)
22 | - Deploy it locally (`yarn deploy`)
23 | - Go to the `http://locahost:3000/debug` page to interact with your contract with a nice UI
24 | - Iterate until you get the functionality you want in your contract
25 | - Write tests for the contract in `packages/hardhat/test`
26 | - Create your custom UI using all the SE-2 components, hooks, and utilities.
27 | - Deploy your Smart Contrac to a live network
28 | - Deploy your UI (`yarn vercel` or `yarn ipfs`)
29 |   - You can tweak which network the frontend is pointing (and some other configurations) in `scaffold.config.ts`
30 | 
31 | ## Smart Contract UI interactions guidelines
32 | SE-2 provides a set of hooks that facilitates contract interactions from the UI. It reads the contract data from `deployedContracts.ts` and `externalContracts.ts`, located in `packages/nextjs/contracts`.
33 | 
34 | ### Reading data from a contract
35 | Use the `useScaffoldReadContract` (`packages/nextjs/hooks/scaffold-eth/useScaffoldReadContract.ts`) hook. 
36 | 
37 | Example:
38 | ```typescript
39 | const { data: someData } = useScaffoldReadContract({
40 |   contractName: "YourContract",
41 |   functionName: "functionName",
42 |   args: [arg1, arg2], // optional
43 | });
44 | ```
45 | 
46 | ### Writing data to a contract
47 | Use the `useScaffoldWriteContract` (`packages/nextjs/hooks/scaffold-eth/useScaffoldWriteContract.ts`) hook.
48 | 1. Initilize the hook with just the contract name
49 | 2. Call the `writeContractAsync` function.
50 | 
51 | Example:
52 | ```typescript
53 | const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract(
54 |   { contractName: "YourContract" }
55 | );
56 | // Usage (this will send a write transaction to the contract)
57 | await writeContractAsync({
58 |   functionName: "functionName",
59 |   args: [arg1, arg2], // optional
60 |   value: parseEther("0.1"), // optional, for payable functions
61 | });
62 | ```
63 | 
64 | Never use any other patterns for contract interaction. The hooks are:
65 | - useScaffoldReadContract (for reading)
66 | - useScaffoldWriteContract (for writing)
67 | 
68 | ### Reading events from a contract
69 | 
70 | Use the `useScaffoldEventHistory` (`packages/nextjs/hooks/scaffold-eth/useScaffoldEventHistory.ts`) hook.
71 | 
72 | Example:
73 | 
74 | ```typescript
75 | const {
76 |   data: events,
77 |   isLoading,
78 |   error,
79 | } = useScaffoldEventHistory({
80 |   contractName: "YourContract",
81 |   eventName: "GreetingChange",
82 |   watch: true, // optional, if true, the hook will watch for new events
83 | });
84 | ```
85 | 
86 | The `data` property consists of an array of events and can be displayed as:
87 | 
88 | ```jsx
89 | <div>
90 |   {events?.map((event) => (
91 |     <div key={event.logIndex}>
92 |       <p>{event.args.greetingSetter}</p>
93 |       <p>{event.args.newGreeting}</p>
94 |       <p>{event.args.premium}</p>
95 |       <p>{event.args.value}</p>
96 |     </div>
97 |   ))}
98 | </div>
99 | ```
100 | 
101 | ### Other Hooks
102 | SE-2 also provides other hooks to interact with blockchain data: `useScaffoldWatchContractEvent`, `useScaffoldEventHistory`, `useDeployedContractInfo`, `useScaffoldContract`, `useTransactor`. They live under `packages/nextjs/hooks/scaffold-eth`.
103 | ## Display Components guidelines
104 | SE-2 provides a set of pre-built React components for common Ethereum use cases: 
105 | - `Address`: Always use this when displaying an ETH address
106 | - `AddressInput`: Always use this when users need to input an ETH address
107 | - `Balance`: Display the ETH/USDC balance of a given address
108 | - `EtherInput`: An extended number input with ETH/USD conversion.
109 | 
110 | They live under `packages/nextjs/components/scaffold-eth`.
111 | 
112 | Find the relevant information from the documentation and the codebase. Think step by step before answering the question.
```

.github/workflows/lint.yaml
```
1 | name: Lint
2 | 
3 | on:
4 |   push:
5 |     branches:
6 |       - main
7 |   pull_request:
8 |     branches:
9 |       - main
10 | 
11 | jobs:
12 |   ci:
13 |     runs-on: ${{ matrix.os }}
14 | 
15 |     strategy:
16 |       matrix:
17 |         os: [ubuntu-latest]
18 |         node: [lts/*]
19 | 
20 |     steps:
21 |       - name: Checkout
22 |         uses: actions/checkout@master
23 | 
24 |       - name: Setup node env
25 |         uses: actions/setup-node@v3
26 |         with:
27 |           node-version: ${{ matrix.node }}
28 |           cache: yarn
29 | 
30 |       - name: Install dependencies
31 |         run: yarn install --immutable
32 |       
33 |       - name: Run hardhat node, deploy contracts (& generate contracts typescript output)
34 |         run: yarn chain & yarn deploy
35 | 
36 |       - name: Run hardhat lint
37 |         run: yarn hardhat:lint --max-warnings=0
38 | 
39 |       - name: Run nextjs lint
40 |         run: yarn next:lint --max-warnings=0
41 | 
42 |       - name: Check typings on nextjs
43 |         run: yarn next:check-types
```

packages/hardhat/eslint.config.mjs
```
1 | import { defineConfig, globalIgnores } from "eslint/config";
2 | import globals from "globals";
3 | import tsParser from "@typescript-eslint/parser";
4 | import prettierPlugin from "eslint-plugin-prettier";
5 | 
6 | import path from "node:path";
7 | import { fileURLToPath } from "node:url";
8 | import { FlatCompat } from "@eslint/eslintrc";
9 | 
10 | const __filename = fileURLToPath(import.meta.url);
11 | const __dirname = path.dirname(__filename);
12 | const compat = new FlatCompat({
13 |   baseDirectory: __dirname,
14 | });
15 | 
16 | export default defineConfig([
17 |   globalIgnores(["**/artifacts", "**/cache", "**/contracts", "**/node_modules/", "**/typechain-types", "**/*.json"]),
18 |   {
19 |     extends: compat.extends("plugin:@typescript-eslint/recommended", "prettier"),
20 | 
21 |     plugins: {
22 |       prettier: prettierPlugin,
23 |     },
24 |     languageOptions: {
25 |       globals: {
26 |         ...globals.node,
27 |       },
28 | 
29 |       parser: tsParser,
30 |     },
31 | 
32 |     rules: {
33 |       "@typescript-eslint/no-unused-vars": "error",
34 |       "@typescript-eslint/no-explicit-any": "off",
35 | 
36 |       "prettier/prettier": [
37 |         "warn",
38 |         {
39 |           endOfLine: "auto",
40 |         },
41 |       ],
42 |     },
43 |   },
44 | ]);
```

packages/hardhat/hardhat.config.ts
```
1 | import * as dotenv from "dotenv";
2 | dotenv.config();
3 | import { HardhatUserConfig } from "hardhat/config";
4 | import "@nomicfoundation/hardhat-ethers";
5 | import "@nomicfoundation/hardhat-chai-matchers";
6 | import "@typechain/hardhat";
7 | import "hardhat-gas-reporter";
8 | import "solidity-coverage";
9 | import "@nomicfoundation/hardhat-verify";
10 | import "hardhat-deploy";
11 | import "hardhat-deploy-ethers";
12 | import { task } from "hardhat/config";
13 | import generateTsAbis from "./scripts/generateTsAbis";
14 | 
15 | // Sonic testnet doesn't use Alchemy, using direct RPC
16 | const sonicTestnetRpc = "https://rpc.testnet.soniclabs.com";
17 | // If not set, it uses the hardhat account 0 private key.
18 | // You can generate a random account with `yarn generate` or `yarn account:import` to import your existing PK
19 | const deployerPrivateKey =
20 |   process.env.__RUNTIME_DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
21 | // If not set, it uses our block explorers default API keys.
22 | const etherscanApiKey = process.env.ETHERSCAN_V2_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";
23 | 
24 | const config: HardhatUserConfig = {
25 |   solidity: {
26 |     compilers: [
27 |       {
28 |         version: "0.8.20",
29 |         settings: {
30 |           optimizer: {
31 |             enabled: true,
32 |             // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
33 |             runs: 200,
34 |           },
35 |         },
36 |       },
37 |     ],
38 |   },
39 |   defaultNetwork: "sonicTestnet",
40 |   namedAccounts: {
41 |     deployer: {
42 |       // By default, it will take the first Hardhat account as the deployer
43 |       default: 0,
44 |     },
45 |   },
46 |   networks: {
47 |     // Sonic Testnet - the only network we use
48 |     sonicTestnet: {
49 |       url: sonicTestnetRpc,
50 |       chainId: 57054,
51 |       accounts: [deployerPrivateKey],
52 |       gasPrice: "auto",
53 |     },
54 |   },
55 |   // Configuration for harhdat-verify plugin
56 |   etherscan: {
57 |     apiKey: etherscanApiKey,
58 |   },
59 |   // Configuration for etherscan-verify from hardhat-deploy plugin
60 |   verify: {
61 |     etherscan: {
62 |       apiKey: etherscanApiKey,
63 |     },
64 |   },
65 |   sourcify: {
66 |     enabled: false,
67 |   },
68 | };
69 | 
70 | // Extend the deploy task
71 | task("deploy").setAction(async (args, hre, runSuper) => {
72 |   // Run the original deploy task
73 |   await runSuper(args);
74 |   // Force run the generateTsAbis script
75 |   await generateTsAbis(hre);
76 | });
77 | 
78 | export default config;
```

packages/hardhat/package.json
```
1 | {
2 |   "name": "@se-2/hardhat",
3 |   "version": "0.0.1",
4 |   "scripts": {
5 |     "account": "hardhat run scripts/listAccount.ts",
6 |     "account:generate": "hardhat run scripts/generateAccount.ts",
7 |     "account:import": "hardhat run scripts/importAccount.ts",
8 |     "account:reveal-pk": "hardhat run scripts/revealPK.ts",
9 |     "chain": "hardhat node --network hardhat --no-deploy",
10 |     "check-types": "tsc --noEmit --incremental",
11 |     "clean": "hardhat clean",
12 |     "compile": "hardhat compile",
13 |     "deploy": "ts-node scripts/runHardhatDeployWithPK.ts",
14 |     "flatten": "hardhat flatten",
15 |     "fork": "MAINNET_FORKING_ENABLED=true hardhat node --network hardhat --no-deploy",
16 |     "format": "prettier --write './**/*.(ts|sol)'",
17 |     "generate": "yarn account:generate",
18 |     "hardhat-verify": "hardhat verify",
19 |     "lint": "eslint",
20 |     "lint-staged": "eslint",
21 |     "test": "REPORT_GAS=true hardhat test --network hardhat",
22 |     "verify": "hardhat etherscan-verify"
23 |   },
24 |   "dependencies": {
25 |     "@inquirer/password": "^4.0.2",
26 |     "@openzeppelin/contracts": "~5.0.2",
27 |     "@typechain/ethers-v6": "~0.5.1",
28 |     "dotenv": "~16.4.5",
29 |     "envfile": "~7.1.0",
30 |     "qrcode": "~1.5.4"
31 |   },
32 |   "devDependencies": {
33 |     "@ethersproject/abi": "~5.7.0",
34 |     "@ethersproject/providers": "~5.7.2",
35 |     "@nomicfoundation/hardhat-chai-matchers": "~2.0.7",
36 |     "@nomicfoundation/hardhat-ethers": "~3.0.8",
37 |     "@nomicfoundation/hardhat-network-helpers": "~1.0.11",
38 |     "@nomicfoundation/hardhat-verify": "~2.0.10",
39 |     "@typechain/ethers-v5": "~11.1.2",
40 |     "@typechain/hardhat": "~9.1.0",
41 |     "@types/eslint": "~9.6.1",
42 |     "@types/mocha": "~10.0.10",
43 |     "@types/prettier": "~3.0.0",
44 |     "@types/qrcode": "~1.5.5",
45 |     "@typescript-eslint/eslint-plugin": "~8.27.0",
46 |     "@typescript-eslint/parser": "~8.27.0",
47 |     "chai": "~4.5.0",
48 |     "eslint": "~9.23.0",
49 |     "eslint-config-prettier": "~10.1.1",
50 |     "eslint-plugin-prettier": "~5.2.4",
51 |     "ethers": "~6.13.2",
52 |     "hardhat": "~2.22.10",
53 |     "hardhat-deploy": "^1.0.4",
54 |     "hardhat-deploy-ethers": "~0.4.2",
55 |     "hardhat-gas-reporter": "~2.2.1",
56 |     "prettier": "^3.5.3",
57 |     "prettier-plugin-solidity": "~1.4.1",
58 |     "solidity-coverage": "~0.8.13",
59 |     "ts-node": "~10.9.1",
60 |     "typechain": "~8.3.2",
61 |     "typescript": "^5.8.2"
62 |   }
63 | }
```

packages/hardhat/tsconfig.json
```
1 | {
2 |   "compilerOptions": {
3 |     "target": "es2020",
4 |     "module": "commonjs",
5 |     "esModuleInterop": true,
6 |     "resolveJsonModule": true,
7 |     "forceConsistentCasingInFileNames": true,
8 |     "strict": true,
9 |     "skipLibCheck": true
10 |   }
11 | }
```

packages/nextjs/eslint.config.mjs
```
1 | import { FlatCompat } from "@eslint/eslintrc";
2 | import prettierPlugin from "eslint-plugin-prettier";
3 | import { defineConfig } from "eslint/config";
4 | import path from "node:path";
5 | import { fileURLToPath } from "node:url";
6 | 
7 | const __filename = fileURLToPath(import.meta.url);
8 | const __dirname = path.dirname(__filename);
9 | const compat = new FlatCompat({
10 |   baseDirectory: __dirname,
11 | });
12 | 
13 | export default defineConfig([
14 |   {
15 |     plugins: {
16 |       prettier: prettierPlugin,
17 |     },
18 |     extends: compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
19 | 
20 |     rules: {
21 |       "@typescript-eslint/no-explicit-any": "off",
22 |       "@typescript-eslint/ban-ts-comment": "off",
23 | 
24 |       "prettier/prettier": [
25 |         "warn",
26 |         {
27 |           endOfLine: "auto",
28 |         },
29 |       ],
30 |     },
31 |   },
32 | ]);
```

packages/nextjs/next-env.d.ts
```
1 | /// <reference types="next" />
2 | /// <reference types="next/image-types/global" />
3 | 
4 | // NOTE: This file should not be edited
5 | // see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

packages/nextjs/next.config.ts
```
1 | import type { NextConfig } from "next";
2 | 
3 | // Check if running in StackBlitz
4 | const isStackBlitz = process.env.STACKBLITZ === "true" || 
5 |   process.env.WEBCONTAINER_API_URL !== undefined ||
6 |   process.env.NODE_ENV === "development" && typeof process.versions.webcontainer !== "undefined";
7 | 
8 | const nextConfig: NextConfig = {
9 |   reactStrictMode: !isStackBlitz, // Disable strict mode in StackBlitz to prevent double renders
10 |   devIndicators: false,
11 |   typescript: {
12 |     ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
13 |   },
14 |   eslint: {
15 |     ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
16 |   },
17 |   // Fix for Coinbase Wallet SDK
18 |   async headers() {
19 |     return [
20 |       {
21 |         source: "/:path*",
22 |         headers: [
23 |           {
24 |             key: "Cross-Origin-Opener-Policy",
25 |             value: "same-origin-allow-popups", // Allow popups for Coinbase Smart Wallet
26 |           },
27 |         ],
28 |       },
29 |     ];
30 |   },
31 |   webpack: config => {
32 |     config.resolve.fallback = { fs: false, net: false, tls: false };
33 |     config.externals.push("pino-pretty", "lokijs", "encoding");
34 |     
35 |     // StackBlitz-specific optimizations
36 |     if (isStackBlitz) {
37 |       config.watchOptions = {
38 |         poll: 1000,
39 |         aggregateTimeout: 300,
40 |       };
41 |     }
42 |     
43 |     return config;
44 |   },
45 | };
46 | 
47 | const isIpfs = process.env.NEXT_PUBLIC_IPFS_BUILD === "true";
48 | 
49 | if (isIpfs) {
50 |   nextConfig.output = "export";
51 |   nextConfig.trailingSlash = true;
52 |   nextConfig.images = {
53 |     unoptimized: true,
54 |   };
55 | }
56 | 
57 | module.exports = nextConfig;
```

packages/nextjs/package.json
```
1 | {
2 |   "name": "@se-2/nextjs",
3 |   "version": "0.1.0",
4 |   "private": true,
5 |   "overrides": {
6 |     "use-sync-external-store": "^1.2.2"
7 |   },
8 |   "scripts": {
9 |     "build": "next build",
10 |     "check-types": "tsc --noEmit --incremental",
11 |     "dev": "next dev",
12 |     "format": "prettier --write . '!(node_modules|.next|contracts)/**/*'",
13 |     "ipfs": "NEXT_PUBLIC_IPFS_BUILD=true yarn build && yarn bgipfs upload config init -u https://upload.bgipfs.com && CID=$(yarn bgipfs upload out | grep -o 'CID: [^ ]*' | cut -d' ' -f2) && [ ! -z \"$CID\" ] && echo '🚀 Upload complete! Your site is now available at: https://community.bgipfs.com/ipfs/'$CID || echo '❌ Upload failed'",
14 |     "lint": "next lint",
15 |     "serve": "next start",
16 |     "start": "next dev",
17 |     "vercel": "vercel --build-env YARN_ENABLE_IMMUTABLE_INSTALLS=false --build-env ENABLE_EXPERIMENTAL_COREPACK=1 --build-env VERCEL_TELEMETRY_DISABLED=1",
18 |     "vercel:login": "vercel login",
19 |     "vercel:yolo": "vercel --build-env YARN_ENABLE_IMMUTABLE_INSTALLS=false --build-env ENABLE_EXPERIMENTAL_COREPACK=1 --build-env NEXT_PUBLIC_IGNORE_BUILD_ERROR=true --build-env VERCEL_TELEMETRY_DISABLED=1"
20 |   },
21 |   "dependencies": {
22 |     "@heroicons/react": "~2.1.5",
23 |     "@next/swc-wasm-nodejs": "^15.4.6",
24 |     "@rainbow-me/rainbowkit": "2.2.7",
25 |     "@tanstack/react-query": "~5.59.15",
26 |     "@uniswap/sdk-core": "~5.8.2",
27 |     "@uniswap/v2-sdk": "~4.6.1",
28 |     "blo": "~1.2.0",
29 |     "burner-connector": "0.0.16",
30 |     "daisyui": "5.0.9",
31 |     "kubo-rpc-client": "~5.0.2",
32 |     "next": "~15.2.3",
33 |     "next-nprogress-bar": "~2.3.13",
34 |     "next-themes": "~0.3.0",
35 |     "qrcode.react": "~4.0.1",
36 |     "react": "~19.0.0",
37 |     "react-dom": "~19.0.0",
38 |     "react-hot-toast": "~2.4.0",
39 |     "tailwindcss": "^3.4.0",
40 |     "usehooks-ts": "~3.1.0",
41 |     "viem": "2.31.1",
42 |     "wagmi": "2.15.6",
43 |     "zustand": "~5.0.0"
44 |   },
45 |   "devDependencies": {
46 |     "@trivago/prettier-plugin-sort-imports": "~4.3.0",
47 |     "@types/node": "~18.19.50",
48 |     "@types/react": "~19.0.7",
49 |     "abitype": "1.0.6",
50 |     "autoprefixer": "~10.4.20",
51 |     "bgipfs": "~0.0.12",
52 |     "eslint": "~9.23.0",
53 |     "eslint-config-next": "~15.2.3",
54 |     "eslint-config-prettier": "~10.1.1",
55 |     "eslint-plugin-prettier": "~5.2.4",
56 |     "postcss": "~8.4.45",
57 |     "prettier": "~3.5.3",
58 |     "type-fest": "~4.26.1",
59 |     "typescript": "~5.8.2",
60 |     "vercel": "~39.1.3"
61 |   }
62 | }
```

packages/nextjs/postcss.config.js
```
1 | module.exports = {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | }
```

packages/nextjs/scaffold.config.ts
```
1 | import { Chain } from "viem";
2 | import { sonicTestnet } from "~~/chains/sonicTestnet";
3 | 
4 | export type BaseConfig = {
5 |   targetNetworks: readonly [Chain, ...Chain[]];
6 |   pollingInterval: number;
7 |   alchemyApiKey: string;
8 |   rpcOverrides?: Record<number, string>;
9 |   walletConnectProjectId: string;
10 |   onlyLocalBurnerWallet: boolean;
11 | };
12 | 
13 | export type ScaffoldConfig = BaseConfig;
14 | 
15 | export const DEFAULT_ALCHEMY_API_KEY = "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
16 | 
17 | const scaffoldConfig = {
18 |   // The networks on which your DApp is live
19 |   targetNetworks: [sonicTestnet],
20 |   // The interval at which your front-end polls the RPC servers for new data
21 |   pollingInterval: 30000,
22 |   // Alchemy API key (not used for Sonic testnet, but kept for compatibility)
23 |   alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,
24 |   // RPC overrides (not needed for Sonic as it's defined in the chain)
25 |   rpcOverrides: {},
26 |   // This is ours WalletConnect's default project ID.
27 |   // You can get your own at https://cloud.walletconnect.com
28 |   // It's recommended to store it in an env variable:
29 |   // .env.local for local testing, and in the Vercel/system env config for live apps.
30 |   walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",
31 |   onlyLocalBurnerWallet: false,
32 | } as const satisfies ScaffoldConfig;
33 | 
34 | export default scaffoldConfig;
```

packages/nextjs/start-direct.js
```
1 | #!/usr/bin/env node
2 | 
3 | /**
4 |  * Direct Next.js starter for StackBlitz
5 |  * Bypasses yarn/npm script execution to avoid jsh issues
6 |  */
7 | 
8 | const { spawn } = require('child_process');
9 | const path = require('path');
10 | 
11 | console.log('🚀 Starting Scaffold-ETH 2 on Sonic Testnet...');
12 | console.log('📍 Chain ID: 57054');
13 | console.log('🔗 RPC: https://rpc.testnet.soniclabs.com');
14 | 
15 | // Path to Next.js binary
16 | const nextBin = path.join(__dirname, 'node_modules', '.bin', 'next');
17 | 
18 | // Start Next.js dev server
19 | const proc = spawn(nextBin, ['dev'], {
20 |   stdio: 'inherit',
21 |   env: { ...process.env },
22 |   cwd: __dirname
23 | });
24 | 
25 | proc.on('error', (err) => {
26 |   console.error('Failed to start server:', err);
27 |   process.exit(1);
28 | });
29 | 
30 | proc.on('exit', (code) => {
31 |   process.exit(code || 0);
32 | });
```

packages/nextjs/tailwind.config.js
```
1 | /** @type {import('tailwindcss').Config} */
2 | module.exports = {
3 |     content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
4 |     plugins: [require("daisyui")],
5 |     daisyui: {
6 |       themes: [
7 |         {
8 |           light: {
9 |             primary: "#93BBFB",
10 |             "primary-content": "#212638",
11 |             secondary: "#DAE8FF",
12 |             "secondary-content": "#212638",
13 |             accent: "#93BBFB",
14 |             "accent-content": "#212638",
15 |             neutral: "#212638",
16 |             "neutral-content": "#ffffff",
17 |             "base-100": "#ffffff",
18 |             "base-200": "#f4f8ff",
19 |             "base-300": "#DAE8FF",
20 |             "base-content": "#212638",
21 |             info: "#93BBFB",
22 |             success: "#34EEB6",
23 |             warning: "#FFCF72",
24 |             error: "#FF8863",
25 |             "--rounded-btn": "9999rem",
26 |             ".tooltip": {
27 |               "--tooltip-tail": "6px",
28 |             },
29 |           },
30 |         },
31 |         {
32 |           dark: {
33 |             primary: "#212638",
34 |             "primary-content": "#F9FBFF",
35 |             secondary: "#323f61",
36 |             "secondary-content": "#F9FBFF",
37 |             accent: "#4969A6",
38 |             "accent-content": "#F9FBFF",
39 |             neutral: "#F9FBFF",
40 |             "neutral-content": "#385183",
41 |             "base-100": "#385183",
42 |             "base-200": "#2A3655",
43 |             "base-300": "#212638",
44 |             "base-content": "#F9FBFF",
45 |             info: "#385183",
46 |             success: "#34EEB6",
47 |             warning: "#FFCF72",
48 |             error: "#FF8863",
49 |             "--rounded-btn": "9999rem",
50 |             ".tooltip": {
51 |               "--tooltip-tail": "6px",
52 |               "--tooltip-color": "oklch(var(--p))",
53 |             },
54 |           },
55 |         },
56 |       ],
57 |     },
58 |     theme: {
59 |       extend: {
60 |         boxShadow: {
61 |           center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
62 |         },
63 |         animation: {
64 |           "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
65 |         },
66 |       },
67 |     },
68 |   }
```

packages/nextjs/tsconfig.json
```
1 | {
2 |   "compilerOptions": {
3 |     "target": "es2020",
4 |     "lib": ["dom", "dom.iterable", "esnext"],
5 |     "allowJs": true,
6 |     "skipLibCheck": true,
7 |     "strict": true,
8 |     "forceConsistentCasingInFileNames": true,
9 |     "noEmit": true,
10 |     "esModuleInterop": true,
11 |     "module": "esnext",
12 |     "moduleResolution": "Bundler",
13 |     "resolveJsonModule": true,
14 |     "isolatedModules": true,
15 |     "jsx": "preserve",
16 |     "incremental": true,
17 |     "paths": {
18 |       "~~/*": ["./*"]
19 |     },
20 |     "plugins": [
21 |       {
22 |         "name": "next"
23 |       }
24 |     ]
25 |   },
26 |   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
27 |   "exclude": ["node_modules"]
28 | }
```

packages/nextjs/vercel.json
```
1 | {
2 |   "installCommand": "yarn install"
3 | }
```

packages/hardhat/contracts/YourContract.sol
```
1 | //SPDX-License-Identifier: MIT
2 | pragma solidity >=0.8.0 <0.9.0;
3 | 
4 | // Useful for debugging. Remove when deploying to a live network.
5 | import "hardhat/console.sol";
6 | 
7 | // Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
8 | // import "@openzeppelin/contracts/access/Ownable.sol";
9 | 
10 | /**
11 |  * A smart contract that allows changing a state variable of the contract and tracking the changes
12 |  * It also allows the owner to withdraw the Ether in the contract
13 |  * @author BuidlGuidl
14 |  */
15 | contract YourContract {
16 |     // State Variables
17 |     address public immutable owner;
18 |     string public greeting = "Building Unstoppable Apps!!!";
19 |     bool public premium = false;
20 |     uint256 public totalCounter = 0;
21 |     mapping(address => uint) public userGreetingCounter;
22 | 
23 |     // Events: a way to emit log statements from smart contract that can be listened to by external parties
24 |     event GreetingChange(address indexed greetingSetter, string newGreeting, bool premium, uint256 value);
25 | 
26 |     // Constructor: Called once on contract deployment
27 |     // Check packages/hardhat/deploy/00_deploy_your_contract.ts
28 |     constructor(address _owner) {
29 |         owner = _owner;
30 |     }
31 | 
32 |     // Modifier: used to define a set of rules that must be met before or after a function is executed
33 |     // Check the withdraw() function
34 |     modifier isOwner() {
35 |         // msg.sender: predefined variable that represents address of the account that called the current function
36 |         require(msg.sender == owner, "Not the Owner");
37 |         _;
38 |     }
39 | 
40 |     /**
41 |      * Function that allows anyone to change the state variable "greeting" of the contract and increase the counters
42 |      *
43 |      * @param _newGreeting (string memory) - new greeting to save on the contract
44 |      */
45 |     function setGreeting(string memory _newGreeting) public payable {
46 |         // Print data to the hardhat chain console. Remove when deploying to a live network.
47 |         console.log("Setting new greeting '%s' from %s", _newGreeting, msg.sender);
48 | 
49 |         // Change state variables
50 |         greeting = _newGreeting;
51 |         totalCounter += 1;
52 |         userGreetingCounter[msg.sender] += 1;
53 | 
54 |         // msg.value: built-in global variable that represents the amount of ether sent with the transaction
55 |         if (msg.value > 0) {
56 |             premium = true;
57 |         } else {
58 |             premium = false;
59 |         }
60 | 
61 |         // emit: keyword used to trigger an event
62 |         emit GreetingChange(msg.sender, _newGreeting, msg.value > 0, msg.value);
63 |     }
64 | 
65 |     /**
66 |      * Function that allows the owner to withdraw all the Ether in the contract
67 |      * The function can only be called by the owner of the contract as defined by the isOwner modifier
68 |      */
69 |     function withdraw() public isOwner {
70 |         (bool success, ) = owner.call{ value: address(this).balance }("");
71 |         require(success, "Failed to send Ether");
72 |     }
73 | 
74 |     /**
75 |      * Function that allows the contract to receive ETH
76 |      */
77 |     receive() external payable {}
78 | }
```

packages/hardhat/deploy/00_deploy_your_contract.ts
```
1 | import { HardhatRuntimeEnvironment } from "hardhat/types";
2 | import { DeployFunction } from "hardhat-deploy/types";
3 | import { Contract } from "ethers";
4 | 
5 | /**
6 |  * Deploys a contract named "YourContract" using the deployer account and
7 |  * constructor arguments set to the deployer address
8 |  *
9 |  * @param hre HardhatRuntimeEnvironment object.
10 |  */
11 | const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
12 |   /*
13 |     On localhost, the deployer account is the one that comes with Hardhat, which is already funded.
14 | 
15 |     When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
16 |     should have sufficient balance to pay for the gas fees for contract creation.
17 | 
18 |     You can generate a random account with `yarn generate` or `yarn account:import` to import your
19 |     existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
20 |     You can run the `yarn account` command to check your balance in every network.
21 |   */
22 |   const { deployer } = await hre.getNamedAccounts();
23 |   const { deploy } = hre.deployments;
24 | 
25 |   await deploy("YourContract", {
26 |     from: deployer,
27 |     // Contract constructor arguments
28 |     args: [deployer],
29 |     log: true,
30 |     // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
31 |     // automatically mining the contract deployment transaction. There is no effect on live networks.
32 |     autoMine: true,
33 |   });
34 | 
35 |   // Get the deployed contract to interact with it after deploying.
36 |   const yourContract = await hre.ethers.getContract<Contract>("YourContract", deployer);
37 |   console.log("👋 Initial greeting:", await yourContract.greeting());
38 | };
39 | 
40 | export default deployYourContract;
41 | 
42 | // Tags are useful if you have multiple deploy files and only want to run one of them.
43 | // e.g. yarn deploy --tags YourContract
44 | deployYourContract.tags = ["YourContract"];
```

packages/hardhat/scripts/generateAccount.ts
```
1 | import { ethers } from "ethers";
2 | import { parse, stringify } from "envfile";
3 | import * as fs from "fs";
4 | import password from "@inquirer/password";
5 | 
6 | const envFilePath = "./.env";
7 | 
8 | const getValidatedPassword = async () => {
9 |   while (true) {
10 |     const pass = await password({ message: "Enter a password to encrypt your private key:" });
11 |     const confirmation = await password({ message: "Confirm password:" });
12 | 
13 |     if (pass === confirmation) {
14 |       return pass;
15 |     }
16 |     console.log("❌ Passwords don't match. Please try again.");
17 |   }
18 | };
19 | 
20 | const setNewEnvConfig = async (existingEnvConfig = {}) => {
21 |   console.log("👛 Generating new Wallet\n");
22 |   const randomWallet = ethers.Wallet.createRandom();
23 | 
24 |   const pass = await getValidatedPassword();
25 |   const encryptedJson = await randomWallet.encrypt(pass);
26 | 
27 |   const newEnvConfig = {
28 |     ...existingEnvConfig,
29 |     DEPLOYER_PRIVATE_KEY_ENCRYPTED: encryptedJson,
30 |   };
31 | 
32 |   // Store in .env
33 |   fs.writeFileSync(envFilePath, stringify(newEnvConfig));
34 |   console.log("\n📄 Encrypted Private Key saved to packages/hardhat/.env file");
35 |   console.log("🪄 Generated wallet address:", randomWallet.address, "\n");
36 |   console.log("⚠️ Make sure to remember your password! You'll need it to decrypt the private key.");
37 | };
38 | 
39 | async function main() {
40 |   if (!fs.existsSync(envFilePath)) {
41 |     // No .env file yet.
42 |     await setNewEnvConfig();
43 |     return;
44 |   }
45 | 
46 |   const existingEnvConfig = parse(fs.readFileSync(envFilePath).toString());
47 |   if (existingEnvConfig.DEPLOYER_PRIVATE_KEY_ENCRYPTED) {
48 |     console.log("⚠️ You already have a deployer account. Check the packages/hardhat/.env file");
49 |     return;
50 |   }
51 | 
52 |   await setNewEnvConfig(existingEnvConfig);
53 | }
54 | 
55 | main().catch(error => {
56 |   console.error(error);
57 |   process.exitCode = 1;
58 | });
```

packages/hardhat/scripts/generateTsAbis.ts
```
1 | /**
2 |  * DON'T MODIFY OR DELETE THIS SCRIPT (unless you know what you're doing)
3 |  *
4 |  * This script generates the file containing the contracts Abi definitions.
5 |  * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
6 |  * This script should run as the last deploy script.
7 |  */
8 | 
9 | import * as fs from "fs";
10 | import prettier from "prettier";
11 | import { DeployFunction } from "hardhat-deploy/types";
12 | 
13 | const generatedContractComment = `
14 | /**
15 |  * This file is autogenerated by Scaffold-ETH.
16 |  * You should not edit it manually or your changes might be overwritten.
17 |  */
18 | `;
19 | 
20 | const DEPLOYMENTS_DIR = "./deployments";
21 | const ARTIFACTS_DIR = "./artifacts";
22 | 
23 | function getDirectories(path: string) {
24 |   return fs
25 |     .readdirSync(path, { withFileTypes: true })
26 |     .filter(dirent => dirent.isDirectory())
27 |     .map(dirent => dirent.name);
28 | }
29 | 
30 | function getContractNames(path: string) {
31 |   return fs
32 |     .readdirSync(path, { withFileTypes: true })
33 |     .filter(dirent => dirent.isFile() && dirent.name.endsWith(".json"))
34 |     .map(dirent => dirent.name.split(".")[0]);
35 | }
36 | 
37 | function getActualSourcesForContract(sources: Record<string, any>, contractName: string) {
38 |   for (const sourcePath of Object.keys(sources)) {
39 |     const sourceName = sourcePath.split("/").pop()?.split(".sol")[0];
40 |     if (sourceName === contractName) {
41 |       const contractContent = sources[sourcePath].content as string;
42 |       const regex = /contract\s+(\w+)\s+is\s+([^{}]+)\{/;
43 |       const match = contractContent.match(regex);
44 | 
45 |       if (match) {
46 |         const inheritancePart = match[2];
47 |         // Split the inherited contracts by commas to get the list of inherited contracts
48 |         const inheritedContracts = inheritancePart.split(",").map(contract => `${contract.trim()}.sol`);
49 | 
50 |         return inheritedContracts;
51 |       }
52 |       return [];
53 |     }
54 |   }
55 |   return [];
56 | }
57 | 
58 | function getInheritedFunctions(sources: Record<string, any>, contractName: string) {
59 |   const actualSources = getActualSourcesForContract(sources, contractName);
60 |   const inheritedFunctions = {} as Record<string, any>;
61 | 
62 |   for (const sourceContractName of actualSources) {
63 |     const sourcePath = Object.keys(sources).find(key => key.includes(`/${sourceContractName}`));
64 |     if (sourcePath) {
65 |       const sourceName = sourcePath?.split("/").pop()?.split(".sol")[0];
66 |       const { abi } = JSON.parse(fs.readFileSync(`${ARTIFACTS_DIR}/${sourcePath}/${sourceName}.json`).toString());
67 |       for (const functionAbi of abi) {
68 |         if (functionAbi.type === "function") {
69 |           inheritedFunctions[functionAbi.name] = sourcePath;
70 |         }
71 |       }
72 |     }
73 |   }
74 | 
75 |   return inheritedFunctions;
76 | }
77 | 
78 | function getContractDataFromDeployments() {
79 |   if (!fs.existsSync(DEPLOYMENTS_DIR)) {
80 |     throw Error("At least one other deployment script should exist to generate an actual contract.");
81 |   }
82 |   const output = {} as Record<string, any>;
83 |   for (const chainName of getDirectories(DEPLOYMENTS_DIR)) {
84 |     const chainId = fs.readFileSync(`${DEPLOYMENTS_DIR}/${chainName}/.chainId`).toString();
85 |     const contracts = {} as Record<string, any>;
86 |     for (const contractName of getContractNames(`${DEPLOYMENTS_DIR}/${chainName}`)) {
87 |       const { abi, address, metadata, receipt } = JSON.parse(
88 |         fs.readFileSync(`${DEPLOYMENTS_DIR}/${chainName}/${contractName}.json`).toString(),
89 |       );
90 |       const inheritedFunctions = metadata ? getInheritedFunctions(JSON.parse(metadata).sources, contractName) : {};
91 |       contracts[contractName] = { address, abi, inheritedFunctions, deployedOnBlock: receipt?.blockNumber };
92 |     }
93 |     output[chainId] = contracts;
94 |   }
95 |   return output;
96 | }
97 | 
98 | /**
99 |  * Generates the TypeScript contract definition file based on the json output of the contract deployment scripts
100 |  * This script should be run last.
101 |  */
102 | const generateTsAbis: DeployFunction = async function () {
103 |   const TARGET_DIR = "../nextjs/contracts/";
104 |   const allContractsData = getContractDataFromDeployments();
105 | 
106 |   const fileContent = Object.entries(allContractsData).reduce((content, [chainId, chainConfig]) => {
107 |     return `${content}${parseInt(chainId).toFixed(0)}:${JSON.stringify(chainConfig, null, 2)},`;
108 |   }, "");
109 | 
110 |   if (!fs.existsSync(TARGET_DIR)) {
111 |     fs.mkdirSync(TARGET_DIR);
112 |   }
113 |   fs.writeFileSync(
114 |     `${TARGET_DIR}deployedContracts.ts`,
115 |     await prettier.format(
116 |       `${generatedContractComment} import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract"; \n\n
117 |  const deployedContracts = {${fileContent}} as const; \n\n export default deployedContracts satisfies GenericContractsDeclaration`,
118 |       {
119 |         parser: "typescript",
120 |       },
121 |     ),
122 |   );
123 | 
124 |   console.log(`📝 Updated TypeScript contract definition file on ${TARGET_DIR}deployedContracts.ts`);
125 | };
126 | 
127 | export default generateTsAbis;
```

packages/hardhat/scripts/importAccount.ts
```
1 | import { ethers } from "ethers";
2 | import { parse, stringify } from "envfile";
3 | import * as fs from "fs";
4 | import password from "@inquirer/password";
5 | 
6 | const envFilePath = "./.env";
7 | 
8 | const getValidatedPassword = async () => {
9 |   while (true) {
10 |     const pass = await password({ message: "Enter a password to encrypt your private key:" });
11 |     const confirmation = await password({ message: "Confirm password:" });
12 | 
13 |     if (pass === confirmation) {
14 |       return pass;
15 |     }
16 |     console.log("❌ Passwords don't match. Please try again.");
17 |   }
18 | };
19 | 
20 | const getWalletFromPrivateKey = async () => {
21 |   while (true) {
22 |     const privateKey = await password({ message: "Paste your private key:" });
23 |     try {
24 |       const wallet = new ethers.Wallet(privateKey);
25 |       return wallet;
26 |       // eslint-disable-next-line @typescript-eslint/no-unused-vars
27 |     } catch (e) {
28 |       console.log("❌ Invalid private key format. Please try again.");
29 |     }
30 |   }
31 | };
32 | 
33 | const setNewEnvConfig = async (existingEnvConfig = {}) => {
34 |   console.log("👛 Importing Wallet\n");
35 | 
36 |   const wallet = await getWalletFromPrivateKey();
37 | 
38 |   const pass = await getValidatedPassword();
39 |   const encryptedJson = await wallet.encrypt(pass);
40 | 
41 |   const newEnvConfig = {
42 |     ...existingEnvConfig,
43 |     DEPLOYER_PRIVATE_KEY_ENCRYPTED: encryptedJson,
44 |   };
45 | 
46 |   // Store in .env
47 |   fs.writeFileSync(envFilePath, stringify(newEnvConfig));
48 |   console.log("\n📄 Encrypted Private Key saved to packages/hardhat/.env file");
49 |   console.log("🪄 Imported wallet address:", wallet.address, "\n");
50 |   console.log("⚠️ Make sure to remember your password! You'll need it to decrypt the private key.");
51 | };
52 | 
53 | async function main() {
54 |   if (!fs.existsSync(envFilePath)) {
55 |     // No .env file yet.
56 |     await setNewEnvConfig();
57 |     return;
58 |   }
59 | 
60 |   const existingEnvConfig = parse(fs.readFileSync(envFilePath).toString());
61 |   if (existingEnvConfig.DEPLOYER_PRIVATE_KEY_ENCRYPTED) {
62 |     console.log("⚠️ You already have a deployer account. Check the packages/hardhat/.env file");
63 |     return;
64 |   }
65 | 
66 |   await setNewEnvConfig(existingEnvConfig);
67 | }
68 | 
69 | main().catch(error => {
70 |   console.error(error);
71 |   process.exitCode = 1;
72 | });
```

packages/hardhat/scripts/listAccount.ts
```
1 | import * as dotenv from "dotenv";
2 | dotenv.config();
3 | import { ethers, Wallet } from "ethers";
4 | import QRCode from "qrcode";
5 | import { config } from "hardhat";
6 | import password from "@inquirer/password";
7 | 
8 | async function main() {
9 |   const encryptedKey = process.env.DEPLOYER_PRIVATE_KEY_ENCRYPTED;
10 | 
11 |   if (!encryptedKey) {
12 |     console.log("🚫️ You don't have a deployer account. Run `yarn generate` or `yarn account:import` first");
13 |     return;
14 |   }
15 | 
16 |   const pass = await password({ message: "Enter your password to decrypt the private key:" });
17 |   let wallet: Wallet;
18 |   try {
19 |     wallet = (await Wallet.fromEncryptedJson(encryptedKey, pass)) as Wallet;
20 |     // eslint-disable-next-line @typescript-eslint/no-unused-vars
21 |   } catch (e) {
22 |     console.log("❌ Failed to decrypt private key. Wrong password?");
23 |     return;
24 |   }
25 | 
26 |   const address = wallet.address;
27 |   console.log(await QRCode.toString(address, { type: "terminal", small: true }));
28 |   console.log("Public address:", address, "\n");
29 | 
30 |   // Balance on each network
31 |   const availableNetworks = config.networks;
32 |   for (const networkName in availableNetworks) {
33 |     try {
34 |       const network = availableNetworks[networkName];
35 |       if (!("url" in network)) continue;
36 |       const provider = new ethers.JsonRpcProvider(network.url);
37 |       await provider._detectNetwork();
38 |       const balance = await provider.getBalance(address);
39 |       console.log("--", networkName, "-- 📡");
40 |       console.log("   balance:", +ethers.formatEther(balance));
41 |       console.log("   nonce:", +(await provider.getTransactionCount(address)));
42 |       // eslint-disable-next-line @typescript-eslint/no-unused-vars
43 |     } catch (e) {
44 |       console.log("Can't connect to network", networkName);
45 |     }
46 |   }
47 | }
48 | 
49 | main().catch(error => {
50 |   console.error(error);
51 |   process.exitCode = 1;
52 | });
```

packages/hardhat/scripts/revealPK.ts
```
1 | import * as dotenv from "dotenv";
2 | dotenv.config();
3 | import { Wallet } from "ethers";
4 | import password from "@inquirer/password";
5 | 
6 | async function main() {
7 |   const encryptedKey = process.env.DEPLOYER_PRIVATE_KEY_ENCRYPTED;
8 | 
9 |   if (!encryptedKey) {
10 |     console.log("🚫️ You don't have a deployer account. Run `yarn generate` or `yarn account:import` first");
11 |     return;
12 |   }
13 | 
14 |   console.log("👀 This will reveal your private key on the console.\n");
15 | 
16 |   const pass = await password({ message: "Enter your password to decrypt the private key:" });
17 |   let wallet: Wallet;
18 |   try {
19 |     wallet = (await Wallet.fromEncryptedJson(encryptedKey, pass)) as Wallet;
20 |   } catch {
21 |     console.log("❌ Failed to decrypt private key. Wrong password?");
22 |     return;
23 |   }
24 | 
25 |   console.log("\n🔑 Private key:", wallet.privateKey);
26 | }
27 | 
28 | main().catch(error => {
29 |   console.error(error);
30 |   process.exitCode = 1;
31 | });
```

packages/hardhat/scripts/runHardhatDeployWithPK.ts
```
1 | import * as dotenv from "dotenv";
2 | dotenv.config();
3 | import { Wallet } from "ethers";
4 | import password from "@inquirer/password";
5 | import { spawn } from "child_process";
6 | import { config } from "hardhat";
7 | 
8 | /**
9 |  * Unencrypts the private key and runs the hardhat deploy command
10 |  */
11 | async function main() {
12 |   const networkIndex = process.argv.indexOf("--network");
13 |   const networkName = networkIndex !== -1 ? process.argv[networkIndex + 1] : config.defaultNetwork;
14 | 
15 |   if (networkName === "localhost" || networkName === "hardhat") {
16 |     // Deploy command on the localhost network
17 |     const hardhat = spawn("hardhat", ["deploy", ...process.argv.slice(2)], {
18 |       stdio: "inherit",
19 |       env: process.env,
20 |       shell: process.platform === "win32",
21 |     });
22 | 
23 |     hardhat.on("exit", code => {
24 |       process.exit(code || 0);
25 |     });
26 |     return;
27 |   }
28 | 
29 |   const encryptedKey = process.env.DEPLOYER_PRIVATE_KEY_ENCRYPTED;
30 | 
31 |   if (!encryptedKey) {
32 |     console.log("🚫️ You don't have a deployer account. Run `yarn generate` or `yarn account:import` first");
33 |     return;
34 |   }
35 | 
36 |   const pass = await password({ message: "Enter password to decrypt private key:" });
37 | 
38 |   try {
39 |     const wallet = await Wallet.fromEncryptedJson(encryptedKey, pass);
40 |     process.env.__RUNTIME_DEPLOYER_PRIVATE_KEY = wallet.privateKey;
41 | 
42 |     const hardhat = spawn("hardhat", ["deploy", ...process.argv.slice(2)], {
43 |       stdio: "inherit",
44 |       env: process.env,
45 |       shell: process.platform === "win32",
46 |     });
47 | 
48 |     hardhat.on("exit", code => {
49 |       process.exit(code || 0);
50 |     });
51 |     // eslint-disable-next-line @typescript-eslint/no-unused-vars
52 |   } catch (e) {
53 |     console.error("Failed to decrypt private key. Wrong password?");
54 |     process.exit(1);
55 |   }
56 | }
57 | 
58 | main().catch(console.error);
```

packages/hardhat/test/.gitkeep
```
1 | # Write tests for your smart contract in this directory
2 | # Example: YourContract.ts
```

packages/hardhat/test/YourContract.ts
```
1 | import { expect } from "chai";
2 | import { ethers } from "hardhat";
3 | import { YourContract } from "../typechain-types";
4 | 
5 | describe("YourContract", function () {
6 |   // We define a fixture to reuse the same setup in every test.
7 | 
8 |   let yourContract: YourContract;
9 |   before(async () => {
10 |     const [owner] = await ethers.getSigners();
11 |     const yourContractFactory = await ethers.getContractFactory("YourContract");
12 |     yourContract = (await yourContractFactory.deploy(owner.address)) as YourContract;
13 |     await yourContract.waitForDeployment();
14 |   });
15 | 
16 |   describe("Deployment", function () {
17 |     it("Should have the right message on deploy", async function () {
18 |       expect(await yourContract.greeting()).to.equal("Building Unstoppable Apps!!!");
19 |     });
20 | 
21 |     it("Should allow setting a new message", async function () {
22 |       const newGreeting = "Learn Scaffold-ETH 2! :)";
23 | 
24 |       await yourContract.setGreeting(newGreeting);
25 |       expect(await yourContract.greeting()).to.equal(newGreeting);
26 |     });
27 |   });
28 | });
```

packages/nextjs/app/HomeContent.tsx
```
1 | "use client";
2 | 
3 | import { useAccount } from "wagmi";
4 | 
5 | export const HomeContent = () => {
6 |   const { address: connectedAddress } = useAccount();
7 | 
8 |   return (
9 |     <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
10 |       {/* Gradient background */}
11 |       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
12 |       
13 |       {/* Animated gradient orbs */}
14 |       <div className="absolute inset-0 overflow-hidden">
15 |         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
16 |         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
17 |         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
18 |       </div>
19 | 
20 |       {/* Content */}
21 |       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
22 |         <h1 className="text-5xl md:text-7xl font-bold mb-6">
23 |           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
24 |             This is SPAWN
25 |           </span>
26 |         </h1>
27 |         
28 |         <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
29 |           Describe your idea in the text box and watch it come to life
30 |         </p>
31 | 
32 |         {/* Subtle connection indicator */}
33 |         {connectedAddress && (
34 |           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
35 |             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
36 |             <span className="text-sm text-gray-400">Connected</span>
37 |           </div>
38 |         )}
39 |       </div>
40 | 
41 |       {/* Bottom gradient fade */}
42 |       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
43 |     </div>
44 |   );
45 | };
```

packages/nextjs/app/layout.tsx
```
1 | import "./polyfills";
2 | import "@rainbow-me/rainbowkit/styles.css";
3 | import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
4 | import { ThemeProvider } from "~~/components/ThemeProvider";
5 | import "~~/styles/globals.css";
6 | import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
7 | 
8 | export const metadata = getMetadata({
9 |   title: "Spawn - Web3 Apps with AI",
10 |   description: "Create beautiful, functional decentralized applications with natural language",
11 | });
12 | 
13 | const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
14 |   return (
15 |     <html suppressHydrationWarning className="dark">
16 |       <body>
17 |         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
18 |           <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
19 |         </ThemeProvider>
20 |       </body>
21 |     </html>
22 |   );
23 | };
24 | 
25 | export default ScaffoldEthApp;
```

packages/nextjs/app/not-found.tsx
```
1 | import Link from "next/link";
2 | 
3 | export default function NotFound() {
4 |   return (
5 |     <div className="flex items-center h-full flex-1 justify-center bg-base-200">
6 |       <div className="text-center">
7 |         <h1 className="text-6xl font-bold m-0 mb-1">404</h1>
8 |         <h2 className="text-2xl font-semibold m-0">Page Not Found</h2>
9 |         <p className="text-base-content/70 m-0 mb-4">The page you&apos;re looking for doesn&apos;t exist.</p>
10 |         <Link href="/" className="btn btn-primary">
11 |           Go Home
12 |         </Link>
13 |       </div>
14 |     </div>
15 |   );
16 | }
```

packages/nextjs/app/page.tsx
```
1 | import { HomeContent } from "./HomeContent";
2 | import type { NextPage } from "next";
3 | 
4 | const Home: NextPage = () => {
5 |   return <HomeContent />;
6 | };
7 | 
8 | export default Home;
```

packages/nextjs/app/polyfills.ts
```
1 | // StackBlitz-specific polyfills for Scaffold-ETH 2
2 | // These fixes are required for the app to run in StackBlitz environment
3 | 
4 | if (typeof globalThis !== "undefined") {
5 |   // 1. Fix for indexedDB not being available in StackBlitz
6 |   if (!globalThis.indexedDB) {
7 |     // @ts-ignore - Mock implementation for StackBlitz
8 |     (globalThis as any).indexedDB = {
9 |       open: () => {
10 |         return {
11 |           onsuccess: () => {},
12 |           onerror: () => {},
13 |           onupgradeneeded: () => {},
14 |           result: {
15 |             close: () => {},
16 |             transaction: () => ({
17 |               objectStore: () => ({
18 |                 get: () => ({ onsuccess: () => {}, onerror: () => {} }),
19 |                 put: () => ({ onsuccess: () => {}, onerror: () => {} }),
20 |                 delete: () => ({ onsuccess: () => {}, onerror: () => {} }),
21 |                 clear: () => ({ onsuccess: () => {}, onerror: () => {} }),
22 |                 openCursor: () => ({ onsuccess: () => {}, onerror: () => {} }),
23 |                 getAllKeys: () => ({ onsuccess: () => {}, onerror: () => {} }),
24 |                 getAll: () => ({ onsuccess: () => {}, onerror: () => {} }),
25 |                 count: () => ({ onsuccess: () => {}, onerror: () => {} }),
26 |               }),
27 |               oncomplete: () => {},
28 |               onerror: () => {},
29 |               onabort: () => {},
30 |             }),
31 |             createObjectStore: () => ({
32 |               createIndex: () => {},
33 |               deleteIndex: () => {},
34 |             }),
35 |           },
36 |         };
37 |       },
38 |       deleteDatabase: () => ({ onsuccess: () => {}, onerror: () => {} }),
39 |       cmp: () => 0,
40 |     };
41 |   }
42 | 
43 |   // 2. Fix for crypto.subtle in StackBlitz (sometimes missing)
44 |   if (typeof crypto !== "undefined" && !crypto.subtle && typeof globalThis.crypto !== "undefined") {
45 |     // @ts-ignore
46 |     (globalThis.crypto as any).subtle = {
47 |       digest: async () => new ArrayBuffer(0),
48 |       generateKey: async () => null,
49 |       importKey: async () => null,
50 |       exportKey: async () => new ArrayBuffer(0),
51 |       encrypt: async () => new ArrayBuffer(0),
52 |       decrypt: async () => new ArrayBuffer(0),
53 |       sign: async () => new ArrayBuffer(0),
54 |       verify: async () => false,
55 |     };
56 |   }
57 | }
58 | 
59 | export {};
```

packages/nextjs/chains/sonicTestnet.ts
```
1 | import { defineChain } from "viem";
2 | 
3 | export const sonicTestnet = defineChain({
4 |   id: 57054,
5 |   name: "Sonic Testnet",
6 |   network: "sonic-testnet",
7 |   nativeCurrency: {
8 |     decimals: 18,
9 |     name: "Sonic",
10 |     symbol: "S",
11 |   },
12 |   rpcUrls: {
13 |     default: {
14 |       http: ["https://rpc.testnet.soniclabs.com"],
15 |     },
16 |     public: {
17 |       http: ["https://rpc.testnet.soniclabs.com"],
18 |     },
19 |   },
20 |   blockExplorers: {
21 |     default: {
22 |       name: "Sonic Testnet Explorer",
23 |       url: "https://testnet.soniclabs.com",
24 |     },
25 |   },
26 |   testnet: true,
27 | });
```

packages/nextjs/contracts/deployedContracts.ts
```
1 | /**
2 |  * This file is autogenerated by Scaffold-ETH.
3 |  * You should not edit it manually or your changes might be overwritten.
4 |  */
5 | import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
6 | 
7 | const deployedContracts = {} as const;
8 | 
9 | export default deployedContracts satisfies GenericContractsDeclaration;
```

packages/nextjs/contracts/externalContracts.ts
```
1 | import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
2 | 
3 | /**
4 |  * @example
5 |  * const externalContracts = {
6 |  *   1: {
7 |  *     DAI: {
8 |  *       address: "0x...",
9 |  *       abi: [...],
10 |  *     },
11 |  *   },
12 |  * } as const;
13 |  */
14 | const externalContracts = {} as const;
15 | 
16 | export default externalContracts satisfies GenericContractsDeclaration;
```

packages/nextjs/components/Footer.tsx
```
1 | import React from "react";
2 | import Link from "next/link";
3 | import { hardhat } from "viem/chains";
4 | import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
5 | import { HeartIcon } from "@heroicons/react/24/outline";
6 | import { SwitchTheme } from "~~/components/SwitchTheme";
7 | import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
8 | import { Faucet } from "~~/components/scaffold-eth";
9 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
10 | import { useGlobalState } from "~~/services/store/store";
11 | 
12 | /**
13 |  * Site footer
14 |  */
15 | export const Footer = () => {
16 |   const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
17 |   const { targetNetwork } = useTargetNetwork();
18 |   const isLocalNetwork = targetNetwork.id === hardhat.id;
19 | 
20 |   return (
21 |     <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
22 |       <div>
23 |         <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
24 |           <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
25 |             {nativeCurrencyPrice > 0 && (
26 |               <div>
27 |                 <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
28 |                   <CurrencyDollarIcon className="h-4 w-4" />
29 |                   <span>{nativeCurrencyPrice.toFixed(2)}</span>
30 |                 </div>
31 |               </div>
32 |             )}
33 |             {isLocalNetwork && (
34 |               <>
35 |                 <Faucet />
36 |                 <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
37 |                   <MagnifyingGlassIcon className="h-4 w-4" />
38 |                   <span>Block Explorer</span>
39 |                 </Link>
40 |               </>
41 |             )}
42 |           </div>
43 |           <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
44 |         </div>
45 |       </div>
46 |       <div className="w-full">
47 |         <ul className="menu menu-horizontal w-full">
48 |           <div className="flex justify-center items-center gap-2 text-sm w-full">
49 |             <div className="text-center">
50 |               <a href="https://github.com/scaffold-eth/se-2" target="_blank" rel="noreferrer" className="link">
51 |                 Fork me
52 |               </a>
53 |             </div>
54 |             <span>·</span>
55 |             <div className="flex justify-center items-center gap-2">
56 |               <p className="m-0 text-center">
57 |                 Built with <HeartIcon className="inline-block h-4 w-4" /> at
58 |               </p>
59 |               <a
60 |                 className="flex justify-center items-center gap-1"
61 |                 href="https://buidlguidl.com/"
62 |                 target="_blank"
63 |                 rel="noreferrer"
64 |               >
65 |                 <BuidlGuidlLogo className="w-3 h-5 pb-1" />
66 |                 <span className="link">BuidlGuidl</span>
67 |               </a>
68 |             </div>
69 |             <span>·</span>
70 |             <div className="text-center">
71 |               <a href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" target="_blank" rel="noreferrer" className="link">
72 |                 Support
73 |               </a>
74 |             </div>
75 |           </div>
76 |         </ul>
77 |       </div>
78 |     </div>
79 |   );
80 | };
```

packages/nextjs/components/Header.tsx
```
1 | "use client";
2 | 
3 | import React from "react";
4 | import Link from "next/link";
5 | import { usePathname } from "next/navigation";
6 | import { hardhat } from "viem/chains";
7 | import { BugAntIcon } from "@heroicons/react/24/outline";
8 | import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
9 | import { useTargetNetwork } from "~~/hooks/scaffold-eth";
10 | 
11 | type HeaderMenuLink = {
12 |   label: string;
13 |   href: string;
14 |   icon?: React.ReactNode;
15 | };
16 | 
17 | export const menuLinks: HeaderMenuLink[] = [
18 |   {
19 |     label: "Home",
20 |     href: "/",
21 |   },
22 |   {
23 |     label: "Test Your Contracts",
24 |     href: "/debug",
25 |     icon: <BugAntIcon className="h-4 w-4" />,
26 |   },
27 | ];
28 | 
29 | export const HeaderMenuLinks = () => {
30 |   const pathname = usePathname();
31 | 
32 |   return (
33 |     <>
34 |       {menuLinks.map(({ label, href, icon }) => {
35 |         const isActive = pathname === href;
36 |         return (
37 |           <li key={href}>
38 |             <Link
39 |               href={href}
40 |               passHref
41 |               className={`${
42 |                 isActive 
43 |                   ? "bg-white/10 text-purple-400" 
44 |                   : "text-gray-300 hover:text-white"
45 |               } hover:bg-white/5 transition-all duration-200 py-2 px-4 text-sm rounded-lg flex items-center gap-2`}
46 |             >
47 |               {icon}
48 |               <span>{label}</span>
49 |             </Link>
50 |           </li>
51 |         );
52 |       })}
53 |     </>
54 |   );
55 | };
56 | 
57 | /**
58 |  * Site header
59 |  */
60 | export const Header = () => {
61 |   const { targetNetwork } = useTargetNetwork();
62 |   const isLocalNetwork = targetNetwork.id === hardhat.id;
63 | 
64 |   return (
65 |     <div className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
66 |       <div className="container mx-auto px-4">
67 |         <div className="flex items-center justify-between h-16">
68 |           {/* Logo and Brand */}
69 |           <div className="flex items-center space-x-8">
70 |             <Link href="/" passHref className="flex items-center space-x-3">
71 |               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
72 |                 <span className="text-white font-bold text-xl">S</span>
73 |               </div>
74 |               <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
75 |                 SPAWN
76 |               </span>
77 |             </Link>
78 |             
79 |             {/* Navigation */}
80 |             <nav className="hidden md:block">
81 |               <ul className="flex items-center space-x-2">
82 |                 <HeaderMenuLinks />
83 |               </ul>
84 |             </nav>
85 |           </div>
86 | 
87 |           {/* Right side */}
88 |           <div className="flex items-center space-x-4">
89 |             {isLocalNetwork && <FaucetButton />}
90 |             <RainbowKitCustomConnectButton />
91 |           </div>
92 |         </div>
93 |       </div>
94 |     </div>
95 |   );
96 | };
```

packages/nextjs/components/ScaffoldEthAppWithProviders.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useRef, useState } from "react";
4 | import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
5 | import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
6 | import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
7 | import { Toaster } from "react-hot-toast";
8 | import { WagmiProvider } from "wagmi";
9 | import { Header } from "~~/components/Header";
10 | import { BlockieAvatar } from "~~/components/scaffold-eth";
11 | import { useInitializeNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
12 | import { getWagmiConfig } from "~~/services/web3/wagmiConfig";
13 | 
14 | const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
15 |   useInitializeNativeCurrencyPrice();
16 | 
17 |   return (
18 |     <>
19 |       <div className={`flex flex-col min-h-screen `}>
20 |         <Header />
21 |         <main className="relative flex flex-col flex-1">{children}</main>
22 |       </div>
23 |       <Toaster />
24 |     </>
25 |   );
26 | };
27 | 
28 | // Create a singleton instance of QueryClient
29 | let queryClientInstance: QueryClient | null = null;
30 | 
31 | const getQueryClient = () => {
32 |   if (!queryClientInstance) {
33 |     queryClientInstance = new QueryClient({
34 |       defaultOptions: {
35 |         queries: {
36 |           refetchOnWindowFocus: false,
37 |         },
38 |       },
39 |     });
40 |   }
41 |   return queryClientInstance;
42 | };
43 | 
44 | export const queryClient = getQueryClient();
45 | 
46 | export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
47 |   const [mounted, setMounted] = useState(false);
48 |   const wagmiConfigRef = useRef(getWagmiConfig());
49 | 
50 |   useEffect(() => {
51 |     setMounted(true);
52 |   }, []);
53 | 
54 |   return (
55 |     <WagmiProvider config={wagmiConfigRef.current}>
56 |       <QueryClientProvider client={queryClient}>
57 |         <RainbowKitProvider
58 |           avatar={BlockieAvatar}
59 |           theme={darkTheme()}
60 |         >
61 |           <ProgressBar height="3px" color="#2299dd" />
62 |           <ScaffoldEthApp>{children}</ScaffoldEthApp>
63 |         </RainbowKitProvider>
64 |       </QueryClientProvider>
65 |     </WagmiProvider>
66 |   );
67 | };
```

packages/nextjs/components/ThemeProvider.tsx
```
1 | "use client";
2 | 
3 | import * as React from "react";
4 | import { ThemeProvider as NextThemesProvider } from "next-themes";
5 | import { type ThemeProviderProps } from "next-themes/dist/types";
6 | 
7 | export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
8 |   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
9 | };
```

packages/nextjs/styles/globals.css
```
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;
4 | 
5 | @layer base {
6 |   *,
7 |   ::after,
8 |   ::before,
9 |   ::backdrop,
10 |   ::file-selector-button {
11 |     border-color: theme('colors.gray.200', currentColor);
12 |   }
13 | 
14 |   p {
15 |     margin: 1rem 0;
16 |   }
17 | 
18 |   body {
19 |   min-height: 100vh;
20 | }
21 | 
22 | /* Blob animation for gradient orbs */
23 | @keyframes blob {
24 |   0% {
25 |     transform: translate(0px, 0px) scale(1);
26 |   }
27 |   33% {
28 |     transform: translate(30px, -50px) scale(1.1);
29 |   }
30 |   66% {
31 |     transform: translate(-20px, 20px) scale(0.9);
32 |   }
33 |   100% {
34 |     transform: translate(0px, 0px) scale(1);
35 |   }
36 | }
37 | 
38 | .animate-blob {
39 |   animation: blob 7s infinite;
40 | }
41 | 
42 | .animation-delay-2000 {
43 |   animation-delay: 2s;
44 | }
45 | 
46 | .animation-delay-4000 {
47 |   animation-delay: 4s;
48 | }
49 | 
50 |   h1,
51 |   h2,
52 |   h3,
53 |   h4 {
54 |     margin-bottom: 0.5rem;
55 |     line-height: 1;
56 |   }
57 | }
58 | 
59 | :root,
60 | [data-theme] {
61 |   background: oklch(var(--b2));
62 | }
63 | 
64 | .btn {
65 |   @apply shadow-md;
66 | }
67 | 
68 | .btn.btn-ghost {
69 |   @apply shadow-none;
70 | }
71 | 
72 | .link {
73 |   text-underline-offset: 2px;
74 | }
75 | 
76 | .link:hover {
77 |   opacity: 80%;
78 | }
```

packages/nextjs/public/manifest.json
```
1 | {
2 |   "name": "Scaffold-ETH 2 DApp",
3 |   "description": "A DApp built with Scaffold-ETH",
4 |   "iconPath": "logo.svg"
5 | }
```

packages/nextjs/app/blockexplorer/layout.tsx
```
1 | import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
2 | 
3 | export const metadata = getMetadata({
4 |   title: "Block Explorer",
5 |   description: "Block Explorer created with 🏗 Scaffold-ETH 2",
6 | });
7 | 
8 | const BlockExplorerLayout = ({ children }: { children: React.ReactNode }) => {
9 |   return <>{children}</>;
10 | };
11 | 
12 | export default BlockExplorerLayout;
```

packages/nextjs/app/blockexplorer/page.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { PaginationButton, SearchBar, TransactionsTable } from "./_components";
5 | import type { NextPage } from "next";
6 | import { hardhat } from "viem/chains";
7 | import { useFetchBlocks } from "~~/hooks/scaffold-eth";
8 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
9 | import { notification } from "~~/utils/scaffold-eth";
10 | 
11 | const BlockExplorer: NextPage = () => {
12 |   const { blocks, transactionReceipts, currentPage, totalBlocks, setCurrentPage, error } = useFetchBlocks();
13 |   const { targetNetwork } = useTargetNetwork();
14 |   const [isLocalNetwork, setIsLocalNetwork] = useState(true);
15 |   const [hasError, setHasError] = useState(false);
16 | 
17 |   useEffect(() => {
18 |     if (targetNetwork.id !== hardhat.id) {
19 |       setIsLocalNetwork(false);
20 |     }
21 |   }, [targetNetwork.id]);
22 | 
23 |   useEffect(() => {
24 |     if (targetNetwork.id === hardhat.id && error) {
25 |       setHasError(true);
26 |     }
27 |   }, [targetNetwork.id, error]);
28 | 
29 |   useEffect(() => {
30 |     if (!isLocalNetwork) {
31 |       notification.error(
32 |         <>
33 |           <p className="font-bold mt-0 mb-1">
34 |             <code className="italic bg-base-300 text-base font-bold"> targetNetwork </code> is not localhost
35 |           </p>
36 |           <p className="m-0">
37 |             - You are on <code className="italic bg-base-300 text-base font-bold">{targetNetwork.name}</code> .This
38 |             block explorer is only for <code className="italic bg-base-300 text-base font-bold">localhost</code>.
39 |           </p>
40 |           <p className="mt-1 break-normal">
41 |             - You can use{" "}
42 |             <a className="text-accent" href={targetNetwork.blockExplorers?.default.url}>
43 |               {targetNetwork.blockExplorers?.default.name}
44 |             </a>{" "}
45 |             instead
46 |           </p>
47 |         </>,
48 |       );
49 |     }
50 |   }, [
51 |     isLocalNetwork,
52 |     targetNetwork.blockExplorers?.default.name,
53 |     targetNetwork.blockExplorers?.default.url,
54 |     targetNetwork.name,
55 |   ]);
56 | 
57 |   useEffect(() => {
58 |     if (hasError) {
59 |       notification.error(
60 |         <>
61 |           <p className="font-bold mt-0 mb-1">Cannot connect to local provider</p>
62 |           <p className="m-0">
63 |             - Did you forget to run <code className="italic bg-base-300 text-base font-bold">yarn chain</code> ?
64 |           </p>
65 |           <p className="mt-1 break-normal">
66 |             - Or you can change <code className="italic bg-base-300 text-base font-bold">targetNetwork</code> in{" "}
67 |             <code className="italic bg-base-300 text-base font-bold">scaffold.config.ts</code>
68 |           </p>
69 |         </>,
70 |       );
71 |     }
72 |   }, [hasError]);
73 | 
74 |   return (
75 |     <div className="container mx-auto my-10">
76 |       <SearchBar />
77 |       <TransactionsTable blocks={blocks} transactionReceipts={transactionReceipts} />
78 |       <PaginationButton currentPage={currentPage} totalItems={Number(totalBlocks)} setCurrentPage={setCurrentPage} />
79 |     </div>
80 |   );
81 | };
82 | 
83 | export default BlockExplorer;
```

packages/nextjs/hooks/scaffold-eth/index.ts
```
1 | export * from "./useAnimationConfig";
2 | export * from "./useContractLogs";
3 | export * from "./useCopyToClipboard";
4 | export * from "./useDeployedContractInfo";
5 | export * from "./useFetchBlocks";
6 | export * from "./useInitializeNativeCurrencyPrice";
7 | export * from "./useNetworkColor";
8 | export * from "./useOutsideClick";
9 | export * from "./useScaffoldContract";
10 | export * from "./useScaffoldEventHistory";
11 | export * from "./useScaffoldReadContract";
12 | export * from "./useScaffoldWatchContractEvent";
13 | export * from "./useScaffoldWriteContract";
14 | export * from "./useTargetNetwork";
15 | export * from "./useTransactor";
16 | export * from "./useWatchBalance";
17 | export * from "./useSelectedNetwork";
```

packages/nextjs/hooks/scaffold-eth/useAnimationConfig.ts
```
1 | import { useEffect, useState } from "react";
2 | 
3 | const ANIMATION_TIME = 2000;
4 | 
5 | export function useAnimationConfig(data: any) {
6 |   const [showAnimation, setShowAnimation] = useState(false);
7 |   const [prevData, setPrevData] = useState();
8 | 
9 |   useEffect(() => {
10 |     if (prevData !== undefined && prevData !== data) {
11 |       setShowAnimation(true);
12 |       setTimeout(() => setShowAnimation(false), ANIMATION_TIME);
13 |     }
14 |     setPrevData(data);
15 |   }, [data, prevData]);
16 | 
17 |   return {
18 |     showAnimation,
19 |   };
20 | }
```

packages/nextjs/hooks/scaffold-eth/useContractLogs.ts
```
1 | import { useEffect, useState } from "react";
2 | import { useTargetNetwork } from "./useTargetNetwork";
3 | import { Address, Log } from "viem";
4 | import { usePublicClient } from "wagmi";
5 | 
6 | export const useContractLogs = (address: Address) => {
7 |   const [logs, setLogs] = useState<Log[]>([]);
8 |   const { targetNetwork } = useTargetNetwork();
9 |   const client = usePublicClient({ chainId: targetNetwork.id });
10 | 
11 |   useEffect(() => {
12 |     const fetchLogs = async () => {
13 |       if (!client) return console.error("Client not found");
14 |       try {
15 |         const existingLogs = await client.getLogs({
16 |           address: address,
17 |           fromBlock: 0n,
18 |           toBlock: "latest",
19 |         });
20 |         setLogs(existingLogs);
21 |       } catch (error) {
22 |         console.error("Failed to fetch logs:", error);
23 |       }
24 |     };
25 |     fetchLogs();
26 | 
27 |     return client?.watchBlockNumber({
28 |       onBlockNumber: async (_blockNumber, prevBlockNumber) => {
29 |         const newLogs = await client.getLogs({
30 |           address: address,
31 |           fromBlock: prevBlockNumber,
32 |           toBlock: "latest",
33 |         });
34 |         setLogs(prevLogs => [...prevLogs, ...newLogs]);
35 |       },
36 |     });
37 |   }, [address, client]);
38 | 
39 |   return logs;
40 | };
```

packages/nextjs/hooks/scaffold-eth/useCopyToClipboard.ts
```
1 | import { useState } from "react";
2 | 
3 | export const useCopyToClipboard = () => {
4 |   const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);
5 | 
6 |   const copyToClipboard = async (text: string) => {
7 |     try {
8 |       await navigator.clipboard.writeText(text);
9 |       setIsCopiedToClipboard(true);
10 |       setTimeout(() => {
11 |         setIsCopiedToClipboard(false);
12 |       }, 800);
13 |     } catch (err) {
14 |       console.error("Failed to copy text:", err);
15 |     }
16 |   };
17 | 
18 |   return { copyToClipboard, isCopiedToClipboard };
19 | };
```

packages/nextjs/hooks/scaffold-eth/useDeployedContractInfo.ts
```
1 | import { useEffect, useState } from "react";
2 | import { useIsMounted } from "usehooks-ts";
3 | import { usePublicClient } from "wagmi";
4 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
5 | import {
6 |   Contract,
7 |   ContractCodeStatus,
8 |   ContractName,
9 |   UseDeployedContractConfig,
10 |   contracts,
11 | } from "~~/utils/scaffold-eth/contract";
12 | 
13 | type DeployedContractData<TContractName extends ContractName> = {
14 |   data: Contract<TContractName> | undefined;
15 |   isLoading: boolean;
16 | };
17 | 
18 | /**
19 |  * Gets the matching contract info for the provided contract name from the contracts present in deployedContracts.ts
20 |  * and externalContracts.ts corresponding to targetNetworks configured in scaffold.config.ts
21 |  */
22 | export function useDeployedContractInfo<TContractName extends ContractName>(
23 |   config: UseDeployedContractConfig<TContractName>,
24 | ): DeployedContractData<TContractName>;
25 | /**
26 |  * @deprecated Use object parameter version instead: useDeployedContractInfo({ contractName: "YourContract" })
27 |  */
28 | export function useDeployedContractInfo<TContractName extends ContractName>(
29 |   contractName: TContractName,
30 | ): DeployedContractData<TContractName>;
31 | 
32 | export function useDeployedContractInfo<TContractName extends ContractName>(
33 |   configOrName: UseDeployedContractConfig<TContractName> | TContractName,
34 | ): DeployedContractData<TContractName> {
35 |   const isMounted = useIsMounted();
36 | 
37 |   const finalConfig: UseDeployedContractConfig<TContractName> =
38 |     typeof configOrName === "string" ? { contractName: configOrName } : (configOrName as any);
39 | 
40 |   useEffect(() => {
41 |     if (typeof configOrName === "string") {
42 |       console.warn(
43 |         "Using `useDeployedContractInfo` with a string parameter is deprecated. Please use the object parameter version instead.",
44 |       );
45 |     }
46 |   }, [configOrName]);
47 |   const { contractName, chainId } = finalConfig;
48 |   const selectedNetwork = useSelectedNetwork(chainId);
49 |   const deployedContract = contracts?.[selectedNetwork.id]?.[contractName as ContractName] as Contract<TContractName>;
50 |   const [status, setStatus] = useState<ContractCodeStatus>(ContractCodeStatus.LOADING);
51 |   const publicClient = usePublicClient({ chainId: selectedNetwork.id });
52 | 
53 |   useEffect(() => {
54 |     const checkContractDeployment = async () => {
55 |       try {
56 |         if (!isMounted() || !publicClient) return;
57 | 
58 |         if (!deployedContract) {
59 |           setStatus(ContractCodeStatus.NOT_FOUND);
60 |           return;
61 |         }
62 | 
63 |         const code = await publicClient.getBytecode({
64 |           address: deployedContract.address,
65 |         });
66 | 
67 |         // If contract code is `0x` => no contract deployed on that address
68 |         if (code === "0x") {
69 |           setStatus(ContractCodeStatus.NOT_FOUND);
70 |           return;
71 |         }
72 |         setStatus(ContractCodeStatus.DEPLOYED);
73 |       } catch (e) {
74 |         console.error(e);
75 |         setStatus(ContractCodeStatus.NOT_FOUND);
76 |       }
77 |     };
78 | 
79 |     checkContractDeployment();
80 |   }, [isMounted, contractName, deployedContract, publicClient]);
81 | 
82 |   return {
83 |     data: status === ContractCodeStatus.DEPLOYED ? deployedContract : undefined,
84 |     isLoading: status === ContractCodeStatus.LOADING,
85 |   };
86 | }
```

packages/nextjs/hooks/scaffold-eth/useDisplayUsdMode.ts
```
1 | import { useCallback, useEffect, useState } from "react";
2 | import { useGlobalState } from "~~/services/store/store";
3 | 
4 | export const useDisplayUsdMode = ({ defaultUsdMode = false }: { defaultUsdMode?: boolean }) => {
5 |   const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
6 |   const isPriceFetched = nativeCurrencyPrice > 0;
7 |   const predefinedUsdMode = isPriceFetched ? Boolean(defaultUsdMode) : false;
8 |   const [displayUsdMode, setDisplayUsdMode] = useState(predefinedUsdMode);
9 | 
10 |   useEffect(() => {
11 |     setDisplayUsdMode(predefinedUsdMode);
12 |   }, [predefinedUsdMode]);
13 | 
14 |   const toggleDisplayUsdMode = useCallback(() => {
15 |     if (isPriceFetched) {
16 |       setDisplayUsdMode(!displayUsdMode);
17 |     }
18 |   }, [displayUsdMode, isPriceFetched]);
19 | 
20 |   return { displayUsdMode, toggleDisplayUsdMode };
21 | };
```

packages/nextjs/hooks/scaffold-eth/useFetchBlocks.ts
```
1 | import { useCallback, useEffect, useState } from "react";
2 | import {
3 |   Block,
4 |   Hash,
5 |   Transaction,
6 |   TransactionReceipt,
7 |   createTestClient,
8 |   publicActions,
9 |   walletActions,
10 |   webSocket,
11 | } from "viem";
12 | import { hardhat } from "viem/chains";
13 | import { decodeTransactionData } from "~~/utils/scaffold-eth";
14 | 
15 | const BLOCKS_PER_PAGE = 20;
16 | 
17 | export const testClient = createTestClient({
18 |   chain: hardhat,
19 |   mode: "hardhat",
20 |   transport: webSocket("ws://127.0.0.1:8545"),
21 | })
22 |   .extend(publicActions)
23 |   .extend(walletActions);
24 | 
25 | export const useFetchBlocks = () => {
26 |   const [blocks, setBlocks] = useState<Block[]>([]);
27 |   const [transactionReceipts, setTransactionReceipts] = useState<{
28 |     [key: string]: TransactionReceipt;
29 |   }>({});
30 |   const [currentPage, setCurrentPage] = useState(0);
31 |   const [totalBlocks, setTotalBlocks] = useState(0n);
32 |   const [error, setError] = useState<Error | null>(null);
33 | 
34 |   const fetchBlocks = useCallback(async () => {
35 |     setError(null);
36 | 
37 |     try {
38 |       const blockNumber = await testClient.getBlockNumber();
39 |       setTotalBlocks(blockNumber);
40 | 
41 |       const startingBlock = blockNumber - BigInt(currentPage * BLOCKS_PER_PAGE);
42 |       const blockNumbersToFetch = Array.from(
43 |         { length: Number(BLOCKS_PER_PAGE < startingBlock + 1n ? BLOCKS_PER_PAGE : startingBlock + 1n) },
44 |         (_, i) => startingBlock - BigInt(i),
45 |       );
46 | 
47 |       const blocksWithTransactions = blockNumbersToFetch.map(async blockNumber => {
48 |         try {
49 |           return testClient.getBlock({ blockNumber, includeTransactions: true });
50 |         } catch (err) {
51 |           setError(err instanceof Error ? err : new Error("An error occurred."));
52 |           throw err;
53 |         }
54 |       });
55 |       const fetchedBlocks = await Promise.all(blocksWithTransactions);
56 | 
57 |       fetchedBlocks.forEach(block => {
58 |         block.transactions.forEach(tx => decodeTransactionData(tx as Transaction));
59 |       });
60 | 
61 |       const txReceipts = await Promise.all(
62 |         fetchedBlocks.flatMap(block =>
63 |           block.transactions.map(async tx => {
64 |             try {
65 |               const receipt = await testClient.getTransactionReceipt({ hash: (tx as Transaction).hash });
66 |               return { [(tx as Transaction).hash]: receipt };
67 |             } catch (err) {
68 |               setError(err instanceof Error ? err : new Error("An error occurred."));
69 |               throw err;
70 |             }
71 |           }),
72 |         ),
73 |       );
74 | 
75 |       setBlocks(fetchedBlocks);
76 |       setTransactionReceipts(prevReceipts => ({ ...prevReceipts, ...Object.assign({}, ...txReceipts) }));
77 |     } catch (err) {
78 |       setError(err instanceof Error ? err : new Error("An error occurred."));
79 |     }
80 |   }, [currentPage]);
81 | 
82 |   useEffect(() => {
83 |     fetchBlocks();
84 |   }, [fetchBlocks]);
85 | 
86 |   useEffect(() => {
87 |     const handleNewBlock = async (newBlock: any) => {
88 |       try {
89 |         if (currentPage === 0) {
90 |           if (newBlock.transactions.length > 0) {
91 |             const transactionsDetails = await Promise.all(
92 |               newBlock.transactions.map((txHash: string) => testClient.getTransaction({ hash: txHash as Hash })),
93 |             );
94 |             newBlock.transactions = transactionsDetails;
95 |           }
96 | 
97 |           newBlock.transactions.forEach((tx: Transaction) => decodeTransactionData(tx as Transaction));
98 | 
99 |           const receipts = await Promise.all(
100 |             newBlock.transactions.map(async (tx: Transaction) => {
101 |               try {
102 |                 const receipt = await testClient.getTransactionReceipt({ hash: (tx as Transaction).hash });
103 |                 return { [(tx as Transaction).hash]: receipt };
104 |               } catch (err) {
105 |                 setError(err instanceof Error ? err : new Error("An error occurred fetching receipt."));
106 |                 throw err;
107 |               }
108 |             }),
109 |           );
110 | 
111 |           setBlocks(prevBlocks => [newBlock, ...prevBlocks.slice(0, BLOCKS_PER_PAGE - 1)]);
112 |           setTransactionReceipts(prevReceipts => ({ ...prevReceipts, ...Object.assign({}, ...receipts) }));
113 |         }
114 |         if (newBlock.number) {
115 |           setTotalBlocks(newBlock.number);
116 |         }
117 |       } catch (err) {
118 |         setError(err instanceof Error ? err : new Error("An error occurred."));
119 |       }
120 |     };
121 | 
122 |     return testClient.watchBlocks({ onBlock: handleNewBlock, includeTransactions: true });
123 |   }, [currentPage]);
124 | 
125 |   return {
126 |     blocks,
127 |     transactionReceipts,
128 |     currentPage,
129 |     totalBlocks,
130 |     setCurrentPage,
131 |     error,
132 |   };
133 | };
```

packages/nextjs/hooks/scaffold-eth/useInitializeNativeCurrencyPrice.ts
```
1 | import { useCallback, useEffect } from "react";
2 | import { useTargetNetwork } from "./useTargetNetwork";
3 | import { useInterval } from "usehooks-ts";
4 | import scaffoldConfig from "~~/scaffold.config";
5 | import { useGlobalState } from "~~/services/store/store";
6 | import { fetchPriceFromUniswap } from "~~/utils/scaffold-eth";
7 | 
8 | const enablePolling = false;
9 | 
10 | /**
11 |  * Get the price of Native Currency based on Native Token/DAI trading pair from Uniswap SDK
12 |  */
13 | export const useInitializeNativeCurrencyPrice = () => {
14 |   const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
15 |   const setIsNativeCurrencyFetching = useGlobalState(state => state.setIsNativeCurrencyFetching);
16 |   const { targetNetwork } = useTargetNetwork();
17 | 
18 |   const fetchPrice = useCallback(async () => {
19 |     setIsNativeCurrencyFetching(true);
20 |     const price = await fetchPriceFromUniswap(targetNetwork);
21 |     setNativeCurrencyPrice(price);
22 |     setIsNativeCurrencyFetching(false);
23 |   }, [setIsNativeCurrencyFetching, setNativeCurrencyPrice, targetNetwork]);
24 | 
25 |   // Get the price of ETH from Uniswap on mount
26 |   useEffect(() => {
27 |     fetchPrice();
28 |   }, [fetchPrice]);
29 | 
30 |   // Get the price of ETH from Uniswap at a given interval
31 |   useInterval(fetchPrice, enablePolling ? scaffoldConfig.pollingInterval : null);
32 | };
```

packages/nextjs/hooks/scaffold-eth/useNetworkColor.ts
```
1 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
2 | import { AllowedChainIds, ChainWithAttributes } from "~~/utils/scaffold-eth";
3 | 
4 | export const DEFAULT_NETWORK_COLOR: [string, string] = ["#666666", "#bbbbbb"];
5 | 
6 | export function getNetworkColor(network: ChainWithAttributes) {
7 |   const colorConfig = network.color ?? DEFAULT_NETWORK_COLOR;
8 |   // Always use dark mode color (second element if array)
9 |   return Array.isArray(colorConfig) ? colorConfig[1] : colorConfig;
10 | }
11 | 
12 | /**
13 |  * Gets the color of the target network
14 |  */
15 | export const useNetworkColor = (chainId?: AllowedChainIds) => {
16 |   const chain = useSelectedNetwork(chainId);
17 |   return getNetworkColor(chain);
18 | };
```

packages/nextjs/hooks/scaffold-eth/useOutsideClick.ts
```
1 | import React, { useEffect } from "react";
2 | 
3 | /**
4 |  * Handles clicks outside of passed ref element
5 |  * @param ref - react ref of the element
6 |  * @param callback - callback function to call when clicked outside
7 |  */
8 | export const useOutsideClick = (ref: React.RefObject<HTMLElement | null>, callback: { (): void }) => {
9 |   useEffect(() => {
10 |     function handleOutsideClick(event: MouseEvent) {
11 |       if (!(event.target instanceof Element)) {
12 |         return;
13 |       }
14 | 
15 |       if (ref.current && !ref.current.contains(event.target)) {
16 |         callback();
17 |       }
18 |     }
19 | 
20 |     document.addEventListener("click", handleOutsideClick);
21 |     return () => document.removeEventListener("click", handleOutsideClick);
22 |   }, [ref, callback]);
23 | };
```

packages/nextjs/hooks/scaffold-eth/useScaffoldContract.ts
```
1 | import { Account, Address, Chain, Client, Transport, getContract } from "viem";
2 | import { usePublicClient } from "wagmi";
3 | import { GetWalletClientReturnType } from "wagmi/actions";
4 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
5 | import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
6 | import { AllowedChainIds } from "~~/utils/scaffold-eth";
7 | import { Contract, ContractName } from "~~/utils/scaffold-eth/contract";
8 | 
9 | /**
10 |  * Gets a viem instance of the contract present in deployedContracts.ts or externalContracts.ts corresponding to
11 |  * targetNetworks configured in scaffold.config.ts. Optional walletClient can be passed for doing write transactions.
12 |  * @param config - The config settings for the hook
13 |  * @param config.contractName - deployed contract name
14 |  * @param config.walletClient - optional walletClient from wagmi useWalletClient hook can be passed for doing write transactions
15 |  * @param config.chainId - optional chainId that is configured with the scaffold project to make use for multi-chain interactions.
16 |  */
17 | export const useScaffoldContract = <
18 |   TContractName extends ContractName,
19 |   TWalletClient extends Exclude<GetWalletClientReturnType, null> | undefined,
20 | >({
21 |   contractName,
22 |   walletClient,
23 |   chainId,
24 | }: {
25 |   contractName: TContractName;
26 |   walletClient?: TWalletClient | null;
27 |   chainId?: AllowedChainIds;
28 | }) => {
29 |   const selectedNetwork = useSelectedNetwork(chainId);
30 |   const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo({
31 |     contractName,
32 |     chainId: selectedNetwork?.id as AllowedChainIds,
33 |   });
34 | 
35 |   const publicClient = usePublicClient({ chainId: selectedNetwork?.id });
36 | 
37 |   let contract = undefined;
38 |   if (deployedContractData && publicClient) {
39 |     contract = getContract<
40 |       Transport,
41 |       Address,
42 |       Contract<TContractName>["abi"],
43 |       TWalletClient extends Exclude<GetWalletClientReturnType, null>
44 |         ? {
45 |             public: Client<Transport, Chain>;
46 |             wallet: TWalletClient;
47 |           }
48 |         : { public: Client<Transport, Chain> },
49 |       Chain,
50 |       Account
51 |     >({
52 |       address: deployedContractData.address,
53 |       abi: deployedContractData.abi as Contract<TContractName>["abi"],
54 |       client: {
55 |         public: publicClient,
56 |         wallet: walletClient ? walletClient : undefined,
57 |       } as any,
58 |     });
59 |   }
60 | 
61 |   return {
62 |     data: contract,
63 |     isLoading: deployedContractLoading,
64 |   };
65 | };
```

packages/nextjs/hooks/scaffold-eth/useScaffoldEventHistory.ts
```
1 | import { useEffect, useState } from "react";
2 | import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
3 | import { Abi, AbiEvent, ExtractAbiEventNames } from "abitype";
4 | import { BlockNumber, GetLogsParameters } from "viem";
5 | import { Config, UsePublicClientReturnType, useBlockNumber, usePublicClient } from "wagmi";
6 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
7 | import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
8 | import { AllowedChainIds } from "~~/utils/scaffold-eth";
9 | import { replacer } from "~~/utils/scaffold-eth/common";
10 | import {
11 |   ContractAbi,
12 |   ContractName,
13 |   UseScaffoldEventHistoryConfig,
14 |   UseScaffoldEventHistoryData,
15 | } from "~~/utils/scaffold-eth/contract";
16 | 
17 | const getEvents = async (
18 |   getLogsParams: GetLogsParameters<AbiEvent | undefined, AbiEvent[] | undefined, boolean, BlockNumber, BlockNumber>,
19 |   publicClient?: UsePublicClientReturnType<Config, number>,
20 |   Options?: {
21 |     blockData?: boolean;
22 |     transactionData?: boolean;
23 |     receiptData?: boolean;
24 |   },
25 | ) => {
26 |   const logs = await publicClient?.getLogs({
27 |     address: getLogsParams.address,
28 |     fromBlock: getLogsParams.fromBlock,
29 |     toBlock: getLogsParams.toBlock,
30 |     args: getLogsParams.args,
31 |     event: getLogsParams.event,
32 |   });
33 |   if (!logs) return undefined;
34 | 
35 |   const finalEvents = await Promise.all(
36 |     logs.map(async log => {
37 |       return {
38 |         ...log,
39 |         blockData:
40 |           Options?.blockData && log.blockHash ? await publicClient?.getBlock({ blockHash: log.blockHash }) : null,
41 |         transactionData:
42 |           Options?.transactionData && log.transactionHash
43 |             ? await publicClient?.getTransaction({ hash: log.transactionHash })
44 |             : null,
45 |         receiptData:
46 |           Options?.receiptData && log.transactionHash
47 |             ? await publicClient?.getTransactionReceipt({ hash: log.transactionHash })
48 |             : null,
49 |       };
50 |     }),
51 |   );
52 | 
53 |   return finalEvents;
54 | };
55 | 
56 | /**
57 |  * Reads events from a deployed contract
58 |  * @param config - The config settings
59 |  * @param config.contractName - deployed contract name
60 |  * @param config.eventName - name of the event to listen for
61 |  * @param config.fromBlock - optional block number to start reading events from (defaults to `deployedOnBlock` in deployedContracts.ts if set for contract, otherwise defaults to 0)
62 |  * @param config.toBlock - optional block number to stop reading events at (if not provided, reads until current block)
63 |  * @param config.chainId - optional chainId that is configured with the scaffold project to make use for multi-chain interactions.
64 |  * @param config.filters - filters to be applied to the event (parameterName: value)
65 |  * @param config.blockData - if set to true it will return the block data for each event (default: false)
66 |  * @param config.transactionData - if set to true it will return the transaction data for each event (default: false)
67 |  * @param config.receiptData - if set to true it will return the receipt data for each event (default: false)
68 |  * @param config.watch - if set to true, the events will be updated every pollingInterval milliseconds set at scaffoldConfig (default: false)
69 |  * @param config.enabled - set this to false to disable the hook from running (default: true)
70 |  * @param config.blocksBatchSize - optional batch size for fetching events. If specified, each batch will contain at most this many blocks (default: 500)
71 |  */
72 | export const useScaffoldEventHistory = <
73 |   TContractName extends ContractName,
74 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
75 |   TBlockData extends boolean = false,
76 |   TTransactionData extends boolean = false,
77 |   TReceiptData extends boolean = false,
78 | >({
79 |   contractName,
80 |   eventName,
81 |   fromBlock,
82 |   toBlock,
83 |   chainId,
84 |   filters,
85 |   blockData,
86 |   transactionData,
87 |   receiptData,
88 |   watch,
89 |   enabled = true,
90 |   blocksBatchSize = 500,
91 | }: UseScaffoldEventHistoryConfig<TContractName, TEventName, TBlockData, TTransactionData, TReceiptData>) => {
92 |   const selectedNetwork = useSelectedNetwork(chainId);
93 | 
94 |   const publicClient = usePublicClient({
95 |     chainId: selectedNetwork.id,
96 |   });
97 |   const [liveEvents, setLiveEvents] = useState<any[]>([]);
98 |   const [lastFetchedBlock, setLastFetchedBlock] = useState<bigint | null>(null);
99 |   const [isPollingActive, setIsPollingActive] = useState(false);
100 | 
101 |   const { data: blockNumber } = useBlockNumber({ watch: watch, chainId: selectedNetwork.id });
102 | 
103 |   const { data: deployedContractData } = useDeployedContractInfo({
104 |     contractName,
105 |     chainId: selectedNetwork.id as AllowedChainIds,
106 |   });
107 | 
108 |   const event =
109 |     deployedContractData &&
110 |     ((deployedContractData.abi as Abi).find(part => part.type === "event" && part.name === eventName) as AbiEvent);
111 | 
112 |   const isContractAddressAndClientReady = Boolean(deployedContractData?.address) && Boolean(publicClient);
113 | 
114 |   const fromBlockValue =
115 |     fromBlock !== undefined
116 |       ? fromBlock
117 |       : BigInt(
118 |           deployedContractData && "deployedOnBlock" in deployedContractData
119 |             ? deployedContractData.deployedOnBlock || 0
120 |             : 0,
121 |         );
122 | 
123 |   const query = useInfiniteQuery({
124 |     queryKey: [
125 |       "eventHistory",
126 |       {
127 |         contractName,
128 |         address: deployedContractData?.address,
129 |         eventName,
130 |         fromBlock: fromBlockValue?.toString(),
131 |         toBlock: toBlock?.toString(),
132 |         chainId: selectedNetwork.id,
133 |         filters: JSON.stringify(filters, replacer),
134 |         blocksBatchSize: blocksBatchSize.toString(),
135 |       },
136 |     ],
137 |     queryFn: async ({ pageParam }) => {
138 |       if (!isContractAddressAndClientReady) return undefined;
139 | 
140 |       // Calculate the toBlock for this batch
141 |       let batchToBlock = toBlock;
142 |       const batchEndBlock = pageParam + BigInt(blocksBatchSize) - 1n;
143 |       const maxBlock = toBlock || (blockNumber ? BigInt(blockNumber) : undefined);
144 |       if (maxBlock) {
145 |         batchToBlock = batchEndBlock < maxBlock ? batchEndBlock : maxBlock;
146 |       }
147 | 
148 |       const data = await getEvents(
149 |         {
150 |           address: deployedContractData?.address,
151 |           event,
152 |           fromBlock: pageParam,
153 |           toBlock: batchToBlock,
154 |           args: filters,
155 |         },
156 |         publicClient,
157 |         { blockData, transactionData, receiptData },
158 |       );
159 | 
160 |       setLastFetchedBlock(batchToBlock || blockNumber || 0n);
161 | 
162 |       return data;
163 |     },
164 |     enabled: enabled && isContractAddressAndClientReady && !isPollingActive, // Disable when polling starts
165 |     initialPageParam: fromBlockValue,
166 |     getNextPageParam: (lastPage, allPages, lastPageParam) => {
167 |       if (!blockNumber || fromBlockValue >= blockNumber) return undefined;
168 | 
169 |       const nextBlock = lastPageParam + BigInt(blocksBatchSize);
170 | 
171 |       // Don't go beyond the specified toBlock or current block
172 |       const maxBlock = toBlock && toBlock < blockNumber ? toBlock : blockNumber;
173 | 
174 |       if (nextBlock > maxBlock) return undefined;
175 | 
176 |       return nextBlock;
177 |     },
178 |     select: data => {
179 |       const events = data.pages.flat() as unknown as UseScaffoldEventHistoryData<
180 |         TContractName,
181 |         TEventName,
182 |         TBlockData,
183 |         TTransactionData,
184 |         TReceiptData
185 |       >;
186 | 
187 |       return {
188 |         pages: events?.reverse(),
189 |         pageParams: data.pageParams,
190 |       };
191 |     },
192 |   });
193 | 
194 |   // Check if we're caught up and should start polling
195 |   const shouldStartPolling = () => {
196 |     if (!watch || !blockNumber || isPollingActive) return false;
197 | 
198 |     return !query.hasNextPage && query.status === "success";
199 |   };
200 | 
201 |   // Poll for new events when watch mode is enabled
202 |   useQuery({
203 |     queryKey: ["liveEvents", contractName, eventName, blockNumber?.toString(), lastFetchedBlock?.toString()],
204 |     enabled: Boolean(
205 |       watch && enabled && isContractAddressAndClientReady && blockNumber && (shouldStartPolling() || isPollingActive),
206 |     ),
207 |     queryFn: async () => {
208 |       if (!isContractAddressAndClientReady || !blockNumber) return null;
209 | 
210 |       if (!isPollingActive && shouldStartPolling()) {
211 |         setIsPollingActive(true);
212 |       }
213 | 
214 |       const maxBlock = toBlock && toBlock < blockNumber ? toBlock : blockNumber;
215 |       const startBlock = lastFetchedBlock || maxBlock;
216 | 
217 |       // Only fetch if there are new blocks to check
218 |       if (startBlock >= maxBlock) return null;
219 | 
220 |       const newEvents = await getEvents(
221 |         {
222 |           address: deployedContractData?.address,
223 |           event,
224 |           fromBlock: startBlock + 1n,
225 |           toBlock: maxBlock,
226 |           args: filters,
227 |         },
228 |         publicClient,
229 |         { blockData, transactionData, receiptData },
230 |       );
231 | 
232 |       if (newEvents && newEvents.length > 0) {
233 |         setLiveEvents(prev => [...newEvents, ...prev]);
234 |       }
235 | 
236 |       setLastFetchedBlock(maxBlock);
237 |       return newEvents;
238 |     },
239 |     refetchInterval: false,
240 |   });
241 | 
242 |   // Manual trigger to fetch next page when previous page completes (only when not polling)
243 |   useEffect(() => {
244 |     if (
245 |       !isPollingActive &&
246 |       query.status === "success" &&
247 |       query.hasNextPage &&
248 |       !query.isFetchingNextPage &&
249 |       !query.error
250 |     ) {
251 |       query.fetchNextPage();
252 |     }
253 |   }, [query, isPollingActive]);
254 | 
255 |   // Combine historical data from infinite query with live events from watch hook
256 |   const historicalEvents = query.data?.pages || [];
257 |   const combinedEvents = [...liveEvents, ...historicalEvents] as typeof historicalEvents;
258 | 
259 |   return {
260 |     data: combinedEvents,
261 |     status: query.status,
262 |     error: query.error,
263 |     isLoading: query.isLoading,
264 |     isFetchingNewEvent: query.isFetchingNextPage,
265 |     refetch: query.refetch,
266 |   };
267 | };
```

packages/nextjs/hooks/scaffold-eth/useScaffoldReadContract.ts
```
1 | import { useEffect } from "react";
2 | import { QueryObserverResult, RefetchOptions, useQueryClient } from "@tanstack/react-query";
3 | import type { ExtractAbiFunctionNames } from "abitype";
4 | import { ReadContractErrorType } from "viem";
5 | import { useBlockNumber, useReadContract } from "wagmi";
6 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
7 | import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
8 | import { AllowedChainIds } from "~~/utils/scaffold-eth";
9 | import {
10 |   AbiFunctionReturnType,
11 |   ContractAbi,
12 |   ContractName,
13 |   UseScaffoldReadConfig,
14 | } from "~~/utils/scaffold-eth/contract";
15 | 
16 | /**
17 |  * Wrapper around wagmi's useContractRead hook which automatically loads (by name) the contract ABI and address from
18 |  * the contracts present in deployedContracts.ts & externalContracts.ts corresponding to targetNetworks configured in scaffold.config.ts
19 |  * @param config - The config settings, including extra wagmi configuration
20 |  * @param config.contractName - deployed contract name
21 |  * @param config.functionName - name of the function to be called
22 |  * @param config.args - args to be passed to the function call
23 |  * @param config.chainId - optional chainId that is configured with the scaffold project to make use for multi-chain interactions.
24 |  */
25 | export const useScaffoldReadContract = <
26 |   TContractName extends ContractName,
27 |   TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "pure" | "view">,
28 | >({
29 |   contractName,
30 |   functionName,
31 |   args,
32 |   chainId,
33 |   ...readConfig
34 | }: UseScaffoldReadConfig<TContractName, TFunctionName>) => {
35 |   const selectedNetwork = useSelectedNetwork(chainId);
36 |   const { data: deployedContract } = useDeployedContractInfo({
37 |     contractName,
38 |     chainId: selectedNetwork.id as AllowedChainIds,
39 |   });
40 | 
41 |   const { query: queryOptions, watch, ...readContractConfig } = readConfig;
42 |   // set watch to true by default
43 |   const defaultWatch = watch ?? true;
44 | 
45 |   const readContractHookRes = useReadContract({
46 |     chainId: selectedNetwork.id,
47 |     functionName,
48 |     address: deployedContract?.address,
49 |     abi: deployedContract?.abi,
50 |     args,
51 |     ...(readContractConfig as any),
52 |     query: {
53 |       enabled: !Array.isArray(args) || !args.some(arg => arg === undefined),
54 |       ...queryOptions,
55 |     },
56 |   }) as Omit<ReturnType<typeof useReadContract>, "data" | "refetch"> & {
57 |     data: AbiFunctionReturnType<ContractAbi, TFunctionName> | undefined;
58 |     refetch: (
59 |       options?: RefetchOptions | undefined,
60 |     ) => Promise<QueryObserverResult<AbiFunctionReturnType<ContractAbi, TFunctionName>, ReadContractErrorType>>;
61 |   };
62 | 
63 |   const queryClient = useQueryClient();
64 |   const { data: blockNumber } = useBlockNumber({
65 |     watch: defaultWatch,
66 |     chainId: selectedNetwork.id,
67 |     query: {
68 |       enabled: defaultWatch,
69 |     },
70 |   });
71 | 
72 |   useEffect(() => {
73 |     if (defaultWatch) {
74 |       queryClient.invalidateQueries({ queryKey: readContractHookRes.queryKey });
75 |     }
76 |     // eslint-disable-next-line react-hooks/exhaustive-deps
77 |   }, [blockNumber]);
78 | 
79 |   return readContractHookRes;
80 | };
```

packages/nextjs/hooks/scaffold-eth/useScaffoldWatchContractEvent.ts
```
1 | import { Abi, ExtractAbiEventNames } from "abitype";
2 | import { Log } from "viem";
3 | import { useWatchContractEvent } from "wagmi";
4 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
5 | import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
6 | import { AllowedChainIds } from "~~/utils/scaffold-eth";
7 | import { ContractAbi, ContractName, UseScaffoldEventConfig } from "~~/utils/scaffold-eth/contract";
8 | 
9 | /**
10 |  * Wrapper around wagmi's useEventSubscriber hook which automatically loads (by name) the contract ABI and
11 |  * address from the contracts present in deployedContracts.ts & externalContracts.ts
12 |  * @param config - The config settings
13 |  * @param config.contractName - deployed contract name
14 |  * @param config.eventName - name of the event to listen for
15 |  * @param config.chainId - optional chainId that is configured with the scaffold project to make use for multi-chain interactions.
16 |  * @param config.onLogs - the callback that receives events.
17 |  */
18 | export const useScaffoldWatchContractEvent = <
19 |   TContractName extends ContractName,
20 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
21 | >({
22 |   contractName,
23 |   eventName,
24 |   chainId,
25 |   onLogs,
26 | }: UseScaffoldEventConfig<TContractName, TEventName>) => {
27 |   const selectedNetwork = useSelectedNetwork(chainId);
28 |   const { data: deployedContractData } = useDeployedContractInfo({
29 |     contractName,
30 |     chainId: selectedNetwork.id as AllowedChainIds,
31 |   });
32 | 
33 |   return useWatchContractEvent({
34 |     address: deployedContractData?.address,
35 |     abi: deployedContractData?.abi as Abi,
36 |     chainId: selectedNetwork.id,
37 |     onLogs: (logs: Log[]) => onLogs(logs as Parameters<typeof onLogs>[0]),
38 |     eventName,
39 |   });
40 | };
```

packages/nextjs/hooks/scaffold-eth/useScaffoldWriteContract.ts
```
1 | import { useEffect, useState } from "react";
2 | import { MutateOptions } from "@tanstack/react-query";
3 | import { Abi, ExtractAbiFunctionNames } from "abitype";
4 | import { Config, UseWriteContractParameters, useAccount, useConfig, useWriteContract } from "wagmi";
5 | import { WriteContractErrorType, WriteContractReturnType } from "wagmi/actions";
6 | import { WriteContractVariables } from "wagmi/query";
7 | import { useSelectedNetwork } from "~~/hooks/scaffold-eth";
8 | import { useDeployedContractInfo, useTransactor } from "~~/hooks/scaffold-eth";
9 | import { AllowedChainIds, notification } from "~~/utils/scaffold-eth";
10 | import {
11 |   ContractAbi,
12 |   ContractName,
13 |   ScaffoldWriteContractOptions,
14 |   ScaffoldWriteContractVariables,
15 |   UseScaffoldWriteConfig,
16 |   simulateContractWriteAndNotifyError,
17 | } from "~~/utils/scaffold-eth/contract";
18 | 
19 | type ScaffoldWriteContractReturnType<TContractName extends ContractName> = Omit<
20 |   ReturnType<typeof useWriteContract>,
21 |   "writeContract" | "writeContractAsync"
22 | > & {
23 |   isMining: boolean;
24 |   writeContractAsync: <
25 |     TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "nonpayable" | "payable">,
26 |   >(
27 |     variables: ScaffoldWriteContractVariables<TContractName, TFunctionName>,
28 |     options?: ScaffoldWriteContractOptions,
29 |   ) => Promise<WriteContractReturnType | undefined>;
30 |   writeContract: <TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "nonpayable" | "payable">>(
31 |     variables: ScaffoldWriteContractVariables<TContractName, TFunctionName>,
32 |     options?: Omit<ScaffoldWriteContractOptions, "onBlockConfirmation" | "blockConfirmations">,
33 |   ) => void;
34 | };
35 | 
36 | export function useScaffoldWriteContract<TContractName extends ContractName>(
37 |   config: UseScaffoldWriteConfig<TContractName>,
38 | ): ScaffoldWriteContractReturnType<TContractName>;
39 | /**
40 |  * @deprecated Use object parameter version instead: useScaffoldWriteContract({ contractName: "YourContract" })
41 |  */
42 | export function useScaffoldWriteContract<TContractName extends ContractName>(
43 |   contractName: TContractName,
44 |   writeContractParams?: UseWriteContractParameters,
45 | ): ScaffoldWriteContractReturnType<TContractName>;
46 | 
47 | /**
48 |  * Wrapper around wagmi's useWriteContract hook which automatically loads (by name) the contract ABI and address from
49 |  * the contracts present in deployedContracts.ts & externalContracts.ts corresponding to targetNetworks configured in scaffold.config.ts
50 |  * @param contractName - name of the contract to be written to
51 |  * @param config.chainId - optional chainId that is configured with the scaffold project to make use for multi-chain interactions.
52 |  * @param writeContractParams - wagmi's useWriteContract parameters
53 |  */
54 | export function useScaffoldWriteContract<TContractName extends ContractName>(
55 |   configOrName: UseScaffoldWriteConfig<TContractName> | TContractName,
56 |   writeContractParams?: UseWriteContractParameters,
57 | ): ScaffoldWriteContractReturnType<TContractName> {
58 |   const finalConfig =
59 |     typeof configOrName === "string"
60 |       ? { contractName: configOrName, writeContractParams, chainId: undefined }
61 |       : (configOrName as UseScaffoldWriteConfig<TContractName>);
62 |   const { contractName, chainId, writeContractParams: finalWriteContractParams } = finalConfig;
63 | 
64 |   const wagmiConfig = useConfig();
65 | 
66 |   useEffect(() => {
67 |     if (typeof configOrName === "string") {
68 |       console.warn(
69 |         "Using `useScaffoldWriteContract` with a string parameter is deprecated. Please use the object parameter version instead.",
70 |       );
71 |     }
72 |   }, [configOrName]);
73 | 
74 |   const { chain: accountChain } = useAccount();
75 |   const writeTx = useTransactor();
76 |   const [isMining, setIsMining] = useState(false);
77 | 
78 |   const wagmiContractWrite = useWriteContract(finalWriteContractParams);
79 | 
80 |   const selectedNetwork = useSelectedNetwork(chainId);
81 | 
82 |   const { data: deployedContractData } = useDeployedContractInfo({
83 |     contractName,
84 |     chainId: selectedNetwork.id as AllowedChainIds,
85 |   });
86 | 
87 |   const sendContractWriteAsyncTx = async <
88 |     TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "nonpayable" | "payable">,
89 |   >(
90 |     variables: ScaffoldWriteContractVariables<TContractName, TFunctionName>,
91 |     options?: ScaffoldWriteContractOptions,
92 |   ) => {
93 |     if (!deployedContractData) {
94 |       notification.error("Target Contract is not deployed, did you forget to run `yarn deploy`?");
95 |       return;
96 |     }
97 | 
98 |     if (!accountChain?.id) {
99 |       notification.error("Please connect your wallet");
100 |       return;
101 |     }
102 | 
103 |     if (accountChain?.id !== selectedNetwork.id) {
104 |       notification.error(`Wallet is connected to the wrong network. Please switch to ${selectedNetwork.name}`);
105 |       return;
106 |     }
107 | 
108 |     try {
109 |       setIsMining(true);
110 |       const { blockConfirmations, onBlockConfirmation, ...mutateOptions } = options || {};
111 | 
112 |       const writeContractObject = {
113 |         abi: deployedContractData.abi as Abi,
114 |         address: deployedContractData.address,
115 |         ...variables,
116 |       } as WriteContractVariables<Abi, string, any[], Config, number>;
117 | 
118 |       if (!finalConfig?.disableSimulate) {
119 |         await simulateContractWriteAndNotifyError({
120 |           wagmiConfig,
121 |           writeContractParams: writeContractObject,
122 |           chainId: selectedNetwork.id as AllowedChainIds,
123 |         });
124 |       }
125 | 
126 |       const makeWriteWithParams = () =>
127 |         wagmiContractWrite.writeContractAsync(
128 |           writeContractObject,
129 |           mutateOptions as
130 |             | MutateOptions<
131 |                 WriteContractReturnType,
132 |                 WriteContractErrorType,
133 |                 WriteContractVariables<Abi, string, any[], Config, number>,
134 |                 unknown
135 |               >
136 |             | undefined,
137 |         );
138 |       const writeTxResult = await writeTx(makeWriteWithParams, { blockConfirmations, onBlockConfirmation });
139 | 
140 |       return writeTxResult;
141 |     } catch (e: any) {
142 |       throw e;
143 |     } finally {
144 |       setIsMining(false);
145 |     }
146 |   };
147 | 
148 |   const sendContractWriteTx = <
149 |     TContractName extends ContractName,
150 |     TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "nonpayable" | "payable">,
151 |   >(
152 |     variables: ScaffoldWriteContractVariables<TContractName, TFunctionName>,
153 |     options?: Omit<ScaffoldWriteContractOptions, "onBlockConfirmation" | "blockConfirmations">,
154 |   ) => {
155 |     if (!deployedContractData) {
156 |       notification.error("Target Contract is not deployed, did you forget to run `yarn deploy`?");
157 |       return;
158 |     }
159 |     if (!accountChain?.id) {
160 |       notification.error("Please connect your wallet");
161 |       return;
162 |     }
163 | 
164 |     if (accountChain?.id !== selectedNetwork.id) {
165 |       notification.error(`Wallet is connected to the wrong network. Please switch to ${selectedNetwork.name}`);
166 |       return;
167 |     }
168 | 
169 |     wagmiContractWrite.writeContract(
170 |       {
171 |         abi: deployedContractData.abi as Abi,
172 |         address: deployedContractData.address,
173 |         ...variables,
174 |       } as WriteContractVariables<Abi, string, any[], Config, number>,
175 |       options as
176 |         | MutateOptions<
177 |             WriteContractReturnType,
178 |             WriteContractErrorType,
179 |             WriteContractVariables<Abi, string, any[], Config, number>,
180 |             unknown
181 |           >
182 |         | undefined,
183 |     );
184 |   };
185 | 
186 |   return {
187 |     ...wagmiContractWrite,
188 |     isMining,
189 |     // Overwrite wagmi's writeContactAsync
190 |     writeContractAsync: sendContractWriteAsyncTx,
191 |     // Overwrite wagmi's writeContract
192 |     writeContract: sendContractWriteTx,
193 |   };
194 | }
```

packages/nextjs/hooks/scaffold-eth/useSelectedNetwork.ts
```
1 | import scaffoldConfig from "~~/scaffold.config";
2 | import { useGlobalState } from "~~/services/store/store";
3 | import { AllowedChainIds } from "~~/utils/scaffold-eth";
4 | import { ChainWithAttributes, NETWORKS_EXTRA_DATA } from "~~/utils/scaffold-eth/networks";
5 | 
6 | /**
7 |  * Given a chainId, retrives the network object from `scaffold.config`,
8 |  * if not found default to network set by `useTargetNetwork` hook
9 |  */
10 | export function useSelectedNetwork(chainId?: AllowedChainIds): ChainWithAttributes {
11 |   const globalTargetNetwork = useGlobalState(({ targetNetwork }) => targetNetwork);
12 |   const targetNetwork = scaffoldConfig.targetNetworks.find(targetNetwork => targetNetwork.id === chainId);
13 | 
14 |   if (targetNetwork) {
15 |     return { ...targetNetwork, ...NETWORKS_EXTRA_DATA[targetNetwork.id] };
16 |   }
17 | 
18 |   return globalTargetNetwork;
19 | }
```

packages/nextjs/hooks/scaffold-eth/useTargetNetwork.ts
```
1 | import { useEffect, useMemo } from "react";
2 | import { useAccount } from "wagmi";
3 | import scaffoldConfig from "~~/scaffold.config";
4 | import { useGlobalState } from "~~/services/store/store";
5 | import { ChainWithAttributes } from "~~/utils/scaffold-eth";
6 | import { NETWORKS_EXTRA_DATA } from "~~/utils/scaffold-eth";
7 | 
8 | /**
9 |  * Retrieves the connected wallet's network from scaffold.config or defaults to the 0th network in the list if the wallet is not connected.
10 |  */
11 | export function useTargetNetwork(): { targetNetwork: ChainWithAttributes } {
12 |   const { chain } = useAccount();
13 |   const targetNetwork = useGlobalState(({ targetNetwork }) => targetNetwork);
14 |   const setTargetNetwork = useGlobalState(({ setTargetNetwork }) => setTargetNetwork);
15 | 
16 |   useEffect(() => {
17 |     const newSelectedNetwork = scaffoldConfig.targetNetworks.find(targetNetwork => targetNetwork.id === chain?.id);
18 |     if (newSelectedNetwork && newSelectedNetwork.id !== targetNetwork.id) {
19 |       setTargetNetwork({ ...newSelectedNetwork, ...NETWORKS_EXTRA_DATA[newSelectedNetwork.id] });
20 |     }
21 |   }, [chain?.id, setTargetNetwork, targetNetwork.id]);
22 | 
23 |   return useMemo(() => ({ targetNetwork }), [targetNetwork]);
24 | }
```

packages/nextjs/hooks/scaffold-eth/useTransactor.tsx
```
1 | import { Hash, SendTransactionParameters, TransactionReceipt, WalletClient } from "viem";
2 | import { Config, useWalletClient } from "wagmi";
3 | import { getPublicClient } from "wagmi/actions";
4 | import { SendTransactionMutate } from "wagmi/query";
5 | import scaffoldConfig from "~~/scaffold.config";
6 | import { wagmiConfig } from "~~/services/web3/wagmiConfig";
7 | import { AllowedChainIds, getBlockExplorerTxLink, notification } from "~~/utils/scaffold-eth";
8 | import { TransactorFuncOptions, getParsedErrorWithAllAbis } from "~~/utils/scaffold-eth/contract";
9 | 
10 | type TransactionFunc = (
11 |   tx: (() => Promise<Hash>) | Parameters<SendTransactionMutate<Config, undefined>>[0],
12 |   options?: TransactorFuncOptions,
13 | ) => Promise<Hash | undefined>;
14 | 
15 | /**
16 |  * Custom notification content for TXs.
17 |  */
18 | const TxnNotification = ({ message, blockExplorerLink }: { message: string; blockExplorerLink?: string }) => {
19 |   return (
20 |     <div className={`flex flex-col ml-1 cursor-default`}>
21 |       <p className="my-0">{message}</p>
22 |       {blockExplorerLink && blockExplorerLink.length > 0 ? (
23 |         <a href={blockExplorerLink} target="_blank" rel="noreferrer" className="block link">
24 |           check out transaction
25 |         </a>
26 |       ) : null}
27 |     </div>
28 |   );
29 | };
30 | 
31 | /**
32 |  * Runs Transaction passed in to returned function showing UI feedback.
33 |  * @param _walletClient - Optional wallet client to use. If not provided, will use the one from useWalletClient.
34 |  * @returns function that takes in transaction function as callback, shows UI feedback for transaction and returns a promise of the transaction hash
35 |  */
36 | export const useTransactor = (_walletClient?: WalletClient): TransactionFunc => {
37 |   let walletClient = _walletClient;
38 |   const { data } = useWalletClient();
39 |   if (walletClient === undefined && data) {
40 |     walletClient = data;
41 |   }
42 | 
43 |   const result: TransactionFunc = async (tx, options) => {
44 |     if (!walletClient) {
45 |       notification.error("Cannot access account");
46 |       console.error("⚡️ ~ file: useTransactor.tsx ~ error");
47 |       return;
48 |     }
49 | 
50 |     let notificationId = null;
51 |     let transactionHash: Hash | undefined = undefined;
52 |     let transactionReceipt: TransactionReceipt | undefined;
53 |     let blockExplorerTxURL = "";
54 |     let chainId: number = scaffoldConfig.targetNetworks[0].id;
55 |     try {
56 |       chainId = await walletClient.getChainId();
57 |       // Get full transaction from public client
58 |       const publicClient = getPublicClient(wagmiConfig);
59 | 
60 |       notificationId = notification.loading(<TxnNotification message="Awaiting for user confirmation" />);
61 |       if (typeof tx === "function") {
62 |         // Tx is already prepared by the caller
63 |         const result = await tx();
64 |         transactionHash = result;
65 |       } else if (tx != null) {
66 |         transactionHash = await walletClient.sendTransaction(tx as SendTransactionParameters);
67 |       } else {
68 |         throw new Error("Incorrect transaction passed to transactor");
69 |       }
70 |       notification.remove(notificationId);
71 | 
72 |       blockExplorerTxURL = chainId ? getBlockExplorerTxLink(chainId, transactionHash) : "";
73 | 
74 |       notificationId = notification.loading(
75 |         <TxnNotification message="Waiting for transaction to complete." blockExplorerLink={blockExplorerTxURL} />,
76 |       );
77 | 
78 |       transactionReceipt = await publicClient.waitForTransactionReceipt({
79 |         hash: transactionHash,
80 |         confirmations: options?.blockConfirmations,
81 |       });
82 |       notification.remove(notificationId);
83 | 
84 |       if (transactionReceipt.status === "reverted") throw new Error("Transaction reverted");
85 | 
86 |       notification.success(
87 |         <TxnNotification message="Transaction completed successfully!" blockExplorerLink={blockExplorerTxURL} />,
88 |         {
89 |           icon: "🎉",
90 |         },
91 |       );
92 | 
93 |       if (options?.onBlockConfirmation) options.onBlockConfirmation(transactionReceipt);
94 |     } catch (error: any) {
95 |       if (notificationId) {
96 |         notification.remove(notificationId);
97 |       }
98 |       console.error("⚡️ ~ file: useTransactor.ts ~ error", error);
99 |       const message = getParsedErrorWithAllAbis(error, chainId as AllowedChainIds);
100 | 
101 |       // if receipt was reverted, show notification with block explorer link and return error
102 |       if (transactionReceipt?.status === "reverted") {
103 |         notification.error(<TxnNotification message={message} blockExplorerLink={blockExplorerTxURL} />);
104 |         throw error;
105 |       }
106 | 
107 |       notification.error(message);
108 |       throw error;
109 |     }
110 | 
111 |     return transactionHash;
112 |   };
113 | 
114 |   return result;
115 | };
```

packages/nextjs/hooks/scaffold-eth/useWatchBalance.ts
```
1 | import { useEffect } from "react";
2 | import { useTargetNetwork } from "./useTargetNetwork";
3 | import { useQueryClient } from "@tanstack/react-query";
4 | import { UseBalanceParameters, useBalance, useBlockNumber } from "wagmi";
5 | 
6 | /**
7 |  * Wrapper around wagmi's useBalance hook. Updates data on every block change.
8 |  */
9 | export const useWatchBalance = (useBalanceParameters: UseBalanceParameters) => {
10 |   const { targetNetwork } = useTargetNetwork();
11 |   const queryClient = useQueryClient();
12 |   const { data: blockNumber } = useBlockNumber({ watch: true, chainId: targetNetwork.id });
13 |   const { queryKey, ...restUseBalanceReturn } = useBalance(useBalanceParameters);
14 | 
15 |   useEffect(() => {
16 |     queryClient.invalidateQueries({ queryKey });
17 |     // eslint-disable-next-line react-hooks/exhaustive-deps
18 |   }, [blockNumber]);
19 | 
20 |   return restUseBalanceReturn;
21 | };
```

packages/nextjs/app/debug/page.tsx
```
1 | import { DebugContracts } from "./_components/DebugContracts";
2 | import type { NextPage } from "next";
3 | import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
4 | 
5 | export const metadata = getMetadata({
6 |   title: "Test Your Contracts",
7 |   description: "Test and interact with your deployed smart contracts",
8 | });
9 | 
10 | const Debug: NextPage = () => {
11 |   return (
12 |     <div className="min-h-screen relative overflow-hidden">
13 |       {/* Gradient background */}
14 |       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
15 |       
16 |       {/* Animated gradient orbs */}
17 |       <div className="absolute inset-0 overflow-hidden">
18 |         <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
19 |         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
20 |       </div>
21 | 
22 |       {/* Content */}
23 |       <div className="relative z-10 pt-24 px-6">
24 |         <div className="text-center mb-8">
25 |           <h1 className="text-4xl md:text-5xl font-bold mb-4">
26 |             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
27 |               Test Your Contracts
28 |             </span>
29 |           </h1>
30 |           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
31 |             Interact with your deployed smart contracts in a beautiful interface
32 |           </p>
33 |         </div>
34 |         
35 |         <DebugContracts />
36 |       </div>
37 |     </div>
38 |   );
39 | };
40 | 
41 | export default Debug;
```

packages/nextjs/services/store/store.ts
```
1 | import { create } from "zustand";
2 | import scaffoldConfig from "~~/scaffold.config";
3 | import { ChainWithAttributes, NETWORKS_EXTRA_DATA } from "~~/utils/scaffold-eth";
4 | 
5 | /**
6 |  * Zustand Store
7 |  *
8 |  * You can add global state to the app using this useGlobalState, to get & set
9 |  * values from anywhere in the app.
10 |  *
11 |  * Think about it as a global useState.
12 |  */
13 | 
14 | type GlobalState = {
15 |   nativeCurrency: {
16 |     price: number;
17 |     isFetching: boolean;
18 |   };
19 |   setNativeCurrencyPrice: (newNativeCurrencyPriceState: number) => void;
20 |   setIsNativeCurrencyFetching: (newIsNativeCurrencyFetching: boolean) => void;
21 |   targetNetwork: ChainWithAttributes;
22 |   setTargetNetwork: (newTargetNetwork: ChainWithAttributes) => void;
23 | };
24 | 
25 | export const useGlobalState = create<GlobalState>(set => ({
26 |   nativeCurrency: {
27 |     price: 0,
28 |     isFetching: true,
29 |   },
30 |   setNativeCurrencyPrice: (newValue: number): void =>
31 |     set(state => ({ nativeCurrency: { ...state.nativeCurrency, price: newValue } })),
32 |   setIsNativeCurrencyFetching: (newValue: boolean): void =>
33 |     set(state => ({ nativeCurrency: { ...state.nativeCurrency, isFetching: newValue } })),
34 |   targetNetwork: {
35 |     ...scaffoldConfig.targetNetworks[0],
36 |     ...NETWORKS_EXTRA_DATA[scaffoldConfig.targetNetworks[0].id],
37 |   },
38 |   setTargetNetwork: (newTargetNetwork: ChainWithAttributes) => set(() => ({ targetNetwork: newTargetNetwork })),
39 | }));
```

packages/nextjs/services/web3/wagmiConfig.tsx
```
1 | import { getWagmiConnectors } from "./wagmiConnectors";
2 | import { createClient, http } from "viem";
3 | import { createConfig } from "wagmi";
4 | import { sonicTestnet } from "~~/chains/sonicTestnet";
5 | import scaffoldConfig from "~~/scaffold.config";
6 | 
7 | // Using only Sonic testnet - no other chains
8 | export const enabledChains = [sonicTestnet] as const;
9 | 
10 | // Singleton instance of wagmiConfig
11 | let wagmiConfigInstance: ReturnType<typeof createConfig> | null = null;
12 | 
13 | export const getWagmiConfig = () => {
14 |   if (!wagmiConfigInstance) {
15 |     wagmiConfigInstance = createConfig({
16 |       chains: enabledChains,
17 |       connectors: getWagmiConnectors(),
18 |       ssr: true,
19 |       client: ({ chain }) => {
20 |         // For Sonic testnet, use direct RPC
21 |         return createClient({
22 |           chain,
23 |           transport: http("https://rpc.testnet.soniclabs.com"),
24 |           pollingInterval: scaffoldConfig.pollingInterval,
25 |         });
26 |       },
27 |     });
28 |   }
29 |   return wagmiConfigInstance;
30 | };
31 | 
32 | // Export for backward compatibility
33 | export const wagmiConfig = getWagmiConfig();
```

packages/nextjs/services/web3/wagmiConnectors.tsx
```
1 | import { connectorsForWallets } from "@rainbow-me/rainbowkit";
2 | import {
3 |   coinbaseWallet,
4 |   ledgerWallet,
5 |   metaMaskWallet,
6 |   rainbowWallet,
7 |   safeWallet,
8 |   walletConnectWallet,
9 | } from "@rainbow-me/rainbowkit/wallets";
10 | import { rainbowkitBurnerWallet } from "burner-connector";
11 | import scaffoldConfig from "~~/scaffold.config";
12 | 
13 | // Singleton instance of connectors
14 | let connectorsInstance: ReturnType<typeof connectorsForWallets> | null = null;
15 | 
16 | /**
17 |  * Get wagmi connectors for the wagmi context (singleton)
18 |  */
19 | export const getWagmiConnectors = () => {
20 |   if (!connectorsInstance) {
21 |     const wallets = [
22 |       metaMaskWallet,
23 |       walletConnectWallet,
24 |       ledgerWallet,
25 |       coinbaseWallet,
26 |       rainbowWallet,
27 |       safeWallet,
28 |       rainbowkitBurnerWallet, // Always include burner wallet for Sonic testnet
29 |     ];
30 | 
31 |     connectorsInstance = connectorsForWallets(
32 |       [
33 |         {
34 |           groupName: "Supported Wallets",
35 |           wallets,
36 |         },
37 |       ],
38 |       {
39 |         appName: "scaffold-eth-2",
40 |         projectId: scaffoldConfig.walletConnectProjectId,
41 |       },
42 |     );
43 |   }
44 |   return connectorsInstance;
45 | };
46 | 
47 | // Export for backward compatibility
48 | export const wagmiConnectors = getWagmiConnectors();
```

packages/nextjs/types/abitype/abi.d.ts
```
1 | import "abitype";
2 | import "~~/node_modules/viem/node_modules/abitype";
3 | 
4 | type AddressType = string;
5 | 
6 | declare module "abitype" {
7 |   export interface Register {
8 |     AddressType: AddressType;
9 |   }
10 | }
11 | 
12 | declare module "~~/node_modules/viem/node_modules/abitype" {
13 |   export interface Register {
14 |     AddressType: AddressType;
15 |   }
16 | }
```

packages/nextjs/components/assets/BuidlGuidlLogo.tsx
```
1 | export const BuidlGuidlLogo = ({ className }: { className: string }) => {
2 |   return (
3 |     <svg
4 |       className={className}
5 |       width="53"
6 |       height="72"
7 |       viewBox="0 0 53 72"
8 |       fill="currentColor"
9 |       xmlns="http://www.w3.org/2000/svg"
10 |     >
11 |       <path
12 |         fillRule="evenodd"
13 |         d="M25.9 17.434v15.638h3.927v9.04h9.718v-9.04h6.745v18.08l-10.607 19.88-12.11-.182-12.11.183L.856 51.152v-18.08h6.713v9.04h9.75v-9.04h4.329V2.46a2.126 2.126 0 0 1 4.047-.914c1.074.412 2.157 1.5 3.276 2.626 1.33 1.337 2.711 2.726 4.193 3.095 1.496.373 2.605-.026 3.855-.475 1.31-.47 2.776-.997 5.005-.747 1.67.197 2.557 1.289 3.548 2.509 1.317 1.623 2.82 3.473 6.599 3.752l-.024.017c-2.42 1.709-5.726 4.043-10.86 3.587-1.605-.139-2.736-.656-3.82-1.153-1.546-.707-2.997-1.37-5.59-.832-2.809.563-4.227 1.892-5.306 2.903-.236.221-.456.427-.67.606Z"
14 |         clipRule="evenodd"
15 |       />
16 |     </svg>
17 |   );
18 | };
```

packages/nextjs/utils/scaffold-eth/block.ts
```
1 | import { Block, Transaction, TransactionReceipt } from "viem";
2 | 
3 | export type TransactionWithFunction = Transaction & {
4 |   functionName?: string;
5 |   functionArgs?: any[];
6 |   functionArgNames?: string[];
7 |   functionArgTypes?: string[];
8 | };
9 | 
10 | type TransactionReceipts = {
11 |   [key: string]: TransactionReceipt;
12 | };
13 | 
14 | export type TransactionsTableProps = {
15 |   blocks: Block[];
16 |   transactionReceipts: TransactionReceipts;
17 | };
```

packages/nextjs/utils/scaffold-eth/common.ts
```
1 | // To be used in JSON.stringify when a field might be bigint
2 | 
3 | // https://wagmi.sh/react/faq#bigint-serialization
4 | export const replacer = (_key: string, value: unknown) => (typeof value === "bigint" ? value.toString() : value);
5 | 
6 | export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
7 | 
8 | export const isZeroAddress = (address: string) => address === ZERO_ADDRESS;
```

packages/nextjs/utils/scaffold-eth/contract.ts
```
1 | import { getParsedError } from "./getParsedError";
2 | import { AllowedChainIds } from "./networks";
3 | import { notification } from "./notification";
4 | import { MutateOptions } from "@tanstack/react-query";
5 | import {
6 |   Abi,
7 |   AbiParameter,
8 |   AbiParameterToPrimitiveType,
9 |   AbiParametersToPrimitiveTypes,
10 |   ExtractAbiEvent,
11 |   ExtractAbiEventNames,
12 |   ExtractAbiFunction,
13 | } from "abitype";
14 | import type { ExtractAbiFunctionNames } from "abitype";
15 | import type { Simplify } from "type-fest";
16 | import type { MergeDeepRecord } from "type-fest/source/merge-deep";
17 | import {
18 |   Address,
19 |   Block,
20 |   GetEventArgs,
21 |   GetTransactionReceiptReturnType,
22 |   GetTransactionReturnType,
23 |   Log,
24 |   TransactionReceipt,
25 |   WriteContractErrorType,
26 |   keccak256,
27 |   toHex,
28 | } from "viem";
29 | import { Config, UseReadContractParameters, UseWatchContractEventParameters, UseWriteContractParameters } from "wagmi";
30 | import { WriteContractParameters, WriteContractReturnType, simulateContract } from "wagmi/actions";
31 | import { WriteContractVariables } from "wagmi/query";
32 | import deployedContractsData from "~~/contracts/deployedContracts";
33 | import externalContractsData from "~~/contracts/externalContracts";
34 | import scaffoldConfig from "~~/scaffold.config";
35 | 
36 | type AddExternalFlag<T> = {
37 |   [ChainId in keyof T]: {
38 |     [ContractName in keyof T[ChainId]]: T[ChainId][ContractName] & { external?: true };
39 |   };
40 | };
41 | 
42 | const deepMergeContracts = <L extends Record<PropertyKey, any>, E extends Record<PropertyKey, any>>(
43 |   local: L,
44 |   external: E,
45 | ) => {
46 |   const result: Record<PropertyKey, any> = {};
47 |   const allKeys = Array.from(new Set([...Object.keys(external), ...Object.keys(local)]));
48 |   for (const key of allKeys) {
49 |     if (!external[key]) {
50 |       result[key] = local[key];
51 |       continue;
52 |     }
53 |     const amendedExternal = Object.fromEntries(
54 |       Object.entries(external[key] as Record<string, Record<string, unknown>>).map(([contractName, declaration]) => [
55 |         contractName,
56 |         { ...declaration, external: true },
57 |       ]),
58 |     );
59 |     result[key] = { ...local[key], ...amendedExternal };
60 |   }
61 |   return result as MergeDeepRecord<AddExternalFlag<L>, AddExternalFlag<E>, { arrayMergeMode: "replace" }>;
62 | };
63 | 
64 | const contractsData = deepMergeContracts(deployedContractsData, externalContractsData);
65 | 
66 | export type InheritedFunctions = { readonly [key: string]: string };
67 | 
68 | export type GenericContract = {
69 |   address: Address;
70 |   abi: Abi;
71 |   inheritedFunctions?: InheritedFunctions;
72 |   external?: true;
73 |   deployedOnBlock?: number;
74 | };
75 | 
76 | export type GenericContractsDeclaration = {
77 |   [chainId: number]: {
78 |     [contractName: string]: GenericContract;
79 |   };
80 | };
81 | 
82 | export const contracts = contractsData as GenericContractsDeclaration | null;
83 | 
84 | type ConfiguredChainId = (typeof scaffoldConfig)["targetNetworks"][0]["id"];
85 | 
86 | type IsContractDeclarationMissing<TYes, TNo> = typeof contractsData extends { [key in ConfiguredChainId]: any }
87 |   ? TNo
88 |   : TYes;
89 | 
90 | type ContractsDeclaration = IsContractDeclarationMissing<GenericContractsDeclaration, typeof contractsData>;
91 | 
92 | type Contracts = ContractsDeclaration[ConfiguredChainId];
93 | 
94 | export type ContractName = keyof Contracts;
95 | 
96 | export type Contract<TContractName extends ContractName> = Contracts[TContractName];
97 | 
98 | type InferContractAbi<TContract> = TContract extends { abi: infer TAbi } ? TAbi : never;
99 | 
100 | export type ContractAbi<TContractName extends ContractName = ContractName> = InferContractAbi<Contract<TContractName>>;
101 | 
102 | export type AbiFunctionInputs<TAbi extends Abi, TFunctionName extends string> = ExtractAbiFunction<
103 |   TAbi,
104 |   TFunctionName
105 | >["inputs"];
106 | 
107 | export type AbiFunctionArguments<TAbi extends Abi, TFunctionName extends string> = AbiParametersToPrimitiveTypes<
108 |   AbiFunctionInputs<TAbi, TFunctionName>
109 | >;
110 | 
111 | export type AbiFunctionOutputs<TAbi extends Abi, TFunctionName extends string> = ExtractAbiFunction<
112 |   TAbi,
113 |   TFunctionName
114 | >["outputs"];
115 | 
116 | export type AbiFunctionReturnType<TAbi extends Abi, TFunctionName extends string> = IsContractDeclarationMissing<
117 |   any,
118 |   AbiParametersToPrimitiveTypes<AbiFunctionOutputs<TAbi, TFunctionName>> extends readonly [any]
119 |     ? AbiParametersToPrimitiveTypes<AbiFunctionOutputs<TAbi, TFunctionName>>[0]
120 |     : AbiParametersToPrimitiveTypes<AbiFunctionOutputs<TAbi, TFunctionName>>
121 | >;
122 | 
123 | export type AbiEventInputs<TAbi extends Abi, TEventName extends ExtractAbiEventNames<TAbi>> = ExtractAbiEvent<
124 |   TAbi,
125 |   TEventName
126 | >["inputs"];
127 | 
128 | export enum ContractCodeStatus {
129 |   "LOADING",
130 |   "DEPLOYED",
131 |   "NOT_FOUND",
132 | }
133 | 
134 | type AbiStateMutability = "pure" | "view" | "nonpayable" | "payable";
135 | export type ReadAbiStateMutability = "view" | "pure";
136 | export type WriteAbiStateMutability = "nonpayable" | "payable";
137 | 
138 | export type FunctionNamesWithInputs<
139 |   TContractName extends ContractName,
140 |   TAbiStateMutability extends AbiStateMutability = AbiStateMutability,
141 | > = Exclude<
142 |   Extract<
143 |     ContractAbi<TContractName>[number],
144 |     {
145 |       type: "function";
146 |       stateMutability: TAbiStateMutability;
147 |     }
148 |   >,
149 |   {
150 |     inputs: readonly [];
151 |   }
152 | >["name"];
153 | 
154 | type Expand<T> = T extends object ? (T extends infer O ? { [K in keyof O]: O[K] } : never) : T;
155 | 
156 | type UnionToIntersection<U> = Expand<(U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never>;
157 | 
158 | type OptionalTuple<T> = T extends readonly [infer H, ...infer R] ? readonly [H | undefined, ...OptionalTuple<R>] : T;
159 | 
160 | type UseScaffoldArgsParam<
161 |   TContractName extends ContractName,
162 |   TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>>,
163 | > =
164 |   TFunctionName extends FunctionNamesWithInputs<TContractName>
165 |     ? {
166 |         args: OptionalTuple<UnionToIntersection<AbiFunctionArguments<ContractAbi<TContractName>, TFunctionName>>>;
167 |         value?: ExtractAbiFunction<ContractAbi<TContractName>, TFunctionName>["stateMutability"] extends "payable"
168 |           ? bigint | undefined
169 |           : undefined;
170 |       }
171 |     : {
172 |         args?: never;
173 |       };
174 | 
175 | export type UseDeployedContractConfig<TContractName extends ContractName> = {
176 |   contractName: TContractName;
177 |   chainId?: AllowedChainIds;
178 | };
179 | 
180 | export type UseScaffoldWriteConfig<TContractName extends ContractName> = {
181 |   contractName: TContractName;
182 |   chainId?: AllowedChainIds;
183 |   disableSimulate?: boolean;
184 |   writeContractParams?: UseWriteContractParameters;
185 | };
186 | 
187 | export type UseScaffoldReadConfig<
188 |   TContractName extends ContractName,
189 |   TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, ReadAbiStateMutability>,
190 | > = {
191 |   contractName: TContractName;
192 |   chainId?: AllowedChainIds;
193 |   watch?: boolean;
194 | } & IsContractDeclarationMissing<
195 |   Partial<UseReadContractParameters>,
196 |   {
197 |     functionName: TFunctionName;
198 |   } & UseScaffoldArgsParam<TContractName, TFunctionName> &
199 |     Omit<UseReadContractParameters, "chainId" | "abi" | "address" | "functionName" | "args">
200 | >;
201 | 
202 | export type ScaffoldWriteContractVariables<
203 |   TContractName extends ContractName,
204 |   TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, WriteAbiStateMutability>,
205 | > = IsContractDeclarationMissing<
206 |   Partial<WriteContractParameters>,
207 |   {
208 |     functionName: TFunctionName;
209 |   } & UseScaffoldArgsParam<TContractName, TFunctionName> &
210 |     Omit<WriteContractParameters, "chainId" | "abi" | "address" | "functionName" | "args">
211 | >;
212 | 
213 | type WriteVariables = WriteContractVariables<Abi, string, any[], Config, number>;
214 | 
215 | export type TransactorFuncOptions = {
216 |   onBlockConfirmation?: (txnReceipt: TransactionReceipt) => void;
217 |   blockConfirmations?: number;
218 | };
219 | 
220 | export type ScaffoldWriteContractOptions = MutateOptions<
221 |   WriteContractReturnType,
222 |   WriteContractErrorType,
223 |   WriteVariables,
224 |   unknown
225 | > &
226 |   TransactorFuncOptions;
227 | 
228 | export type UseScaffoldEventConfig<
229 |   TContractName extends ContractName,
230 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
231 |   TEvent extends ExtractAbiEvent<ContractAbi<TContractName>, TEventName> = ExtractAbiEvent<
232 |     ContractAbi<TContractName>,
233 |     TEventName
234 |   >,
235 | > = {
236 |   contractName: TContractName;
237 |   eventName: TEventName;
238 |   chainId?: AllowedChainIds;
239 | } & IsContractDeclarationMissing<
240 |   Omit<UseWatchContractEventParameters, "onLogs" | "address" | "abi" | "eventName"> & {
241 |     onLogs: (
242 |       logs: Simplify<
243 |         Omit<Log<bigint, number, any>, "args" | "eventName"> & {
244 |           args: Record<string, unknown>;
245 |           eventName: string;
246 |         }
247 |       >[],
248 |     ) => void;
249 |   },
250 |   Omit<UseWatchContractEventParameters<ContractAbi<TContractName>>, "onLogs" | "address" | "abi" | "eventName"> & {
251 |     onLogs: (
252 |       logs: Simplify<
253 |         Omit<Log<bigint, number, false, TEvent, false, [TEvent], TEventName>, "args"> & {
254 |           args: AbiParametersToPrimitiveTypes<TEvent["inputs"]> &
255 |             GetEventArgs<
256 |               ContractAbi<TContractName>,
257 |               TEventName,
258 |               {
259 |                 IndexedOnly: false;
260 |               }
261 |             >;
262 |         }
263 |       >[],
264 |     ) => void;
265 |   }
266 | >;
267 | 
268 | type IndexedEventInputs<
269 |   TContractName extends ContractName,
270 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
271 | > = Extract<AbiEventInputs<ContractAbi<TContractName>, TEventName>[number], { indexed: true }>;
272 | 
273 | export type EventFilters<
274 |   TContractName extends ContractName,
275 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
276 | > = IsContractDeclarationMissing<
277 |   any,
278 |   IndexedEventInputs<TContractName, TEventName> extends never
279 |     ? never
280 |     : {
281 |         [Key in IsContractDeclarationMissing<
282 |           any,
283 |           IndexedEventInputs<TContractName, TEventName>["name"]
284 |         >]?: AbiParameterToPrimitiveType<Extract<IndexedEventInputs<TContractName, TEventName>, { name: Key }>>;
285 |       }
286 | >;
287 | 
288 | export type UseScaffoldEventHistoryConfig<
289 |   TContractName extends ContractName,
290 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
291 |   TBlockData extends boolean = false,
292 |   TTransactionData extends boolean = false,
293 |   TReceiptData extends boolean = false,
294 | > = {
295 |   contractName: TContractName;
296 |   eventName: IsContractDeclarationMissing<string, TEventName>;
297 |   fromBlock?: bigint;
298 |   toBlock?: bigint;
299 |   chainId?: AllowedChainIds;
300 |   filters?: EventFilters<TContractName, TEventName>;
301 |   blockData?: TBlockData;
302 |   transactionData?: TTransactionData;
303 |   receiptData?: TReceiptData;
304 |   watch?: boolean;
305 |   enabled?: boolean;
306 |   blocksBatchSize?: number;
307 | };
308 | 
309 | export type UseScaffoldEventHistoryData<
310 |   TContractName extends ContractName,
311 |   TEventName extends ExtractAbiEventNames<ContractAbi<TContractName>>,
312 |   TBlockData extends boolean = false,
313 |   TTransactionData extends boolean = false,
314 |   TReceiptData extends boolean = false,
315 |   TEvent extends ExtractAbiEvent<ContractAbi<TContractName>, TEventName> = ExtractAbiEvent<
316 |     ContractAbi<TContractName>,
317 |     TEventName
318 |   >,
319 | > =
320 |   | IsContractDeclarationMissing<
321 |       any[],
322 |       {
323 |         args: AbiParametersToPrimitiveTypes<TEvent["inputs"]> &
324 |           GetEventArgs<
325 |             ContractAbi<TContractName>,
326 |             TEventName,
327 |             {
328 |               IndexedOnly: false;
329 |             }
330 |           >;
331 |         blockData: TBlockData extends true ? Block<bigint, true> : null;
332 |         receiptData: TReceiptData extends true ? GetTransactionReturnType : null;
333 |         transactionData: TTransactionData extends true ? GetTransactionReceiptReturnType : null;
334 |       } & Log<bigint, number, false, TEvent, false, [TEvent], TEventName>[]
335 |     >
336 |   | undefined;
337 | 
338 | export type AbiParameterTuple = Extract<AbiParameter, { type: "tuple" | `tuple[${string}]` }>;
339 | 
340 | /**
341 |  * Enhanced error parsing that creates a lookup table from all deployed contracts
342 |  * to decode error signatures from any contract in the system
343 |  */
344 | export const getParsedErrorWithAllAbis = (error: any, chainId: AllowedChainIds): string => {
345 |   const originalParsedError = getParsedError(error);
346 | 
347 |   // Check if this is an unrecognized error signature
348 |   if (/Encoded error signature.*not found on ABI/i.test(originalParsedError)) {
349 |     const signatureMatch = originalParsedError.match(/0x[a-fA-F0-9]{8}/);
350 |     const signature = signatureMatch ? signatureMatch[0] : "";
351 | 
352 |     if (!signature) {
353 |       return originalParsedError;
354 |     }
355 | 
356 |     try {
357 |       // Get all deployed contracts for the current chain
358 |       const chainContracts = deployedContractsData[chainId as keyof typeof deployedContractsData];
359 | 
360 |       if (!chainContracts) {
361 |         return originalParsedError;
362 |       }
363 | 
364 |       // Build a lookup table of error signatures to error names
365 |       const errorLookup: Record<string, { name: string; contract: string; signature: string }> = {};
366 | 
367 |       Object.entries(chainContracts).forEach(([contractName, contract]: [string, any]) => {
368 |         if (contract.abi) {
369 |           contract.abi.forEach((item: any) => {
370 |             if (item.type === "error") {
371 |               // Create the proper error signature like Solidity does
372 |               const errorName = item.name;
373 |               const inputs = item.inputs || [];
374 |               const inputTypes = inputs.map((input: any) => input.type).join(",");
375 |               const errorSignature = `${errorName}(${inputTypes})`;
376 | 
377 |               // Hash the signature and take the first 4 bytes (8 hex chars)
378 |               const hash = keccak256(toHex(errorSignature));
379 |               const errorSelector = hash.slice(0, 10); // 0x + 8 chars = 10 total
380 | 
381 |               errorLookup[errorSelector] = {
382 |                 name: errorName,
383 |                 contract: contractName,
384 |                 signature: errorSignature,
385 |               };
386 |             }
387 |           });
388 |         }
389 |       });
390 | 
391 |       // Check if we can find the error in our lookup
392 |       const errorInfo = errorLookup[signature];
393 |       if (errorInfo) {
394 |         return `Contract function execution reverted with the following reason:\n${errorInfo.signature} from ${errorInfo.contract} contract`;
395 |       }
396 | 
397 |       // If not found in simple lookup, provide a helpful message with context
398 |       return `${originalParsedError}\n\nThis error occurred when calling a function that internally calls another contract. Check the contract that your function calls internally for more details.`;
399 |     } catch (lookupError) {
400 |       console.log("Failed to create error lookup table:", lookupError);
401 |     }
402 |   }
403 | 
404 |   return originalParsedError;
405 | };
406 | 
407 | export const simulateContractWriteAndNotifyError = async ({
408 |   wagmiConfig,
409 |   writeContractParams: params,
410 |   chainId,
411 | }: {
412 |   wagmiConfig: Config;
413 |   writeContractParams: WriteContractVariables<Abi, string, any[], Config, number>;
414 |   chainId: AllowedChainIds;
415 | }) => {
416 |   try {
417 |     await simulateContract(wagmiConfig, params);
418 |   } catch (error) {
419 |     const parsedError = getParsedErrorWithAllAbis(error, chainId);
420 | 
421 |     notification.error(parsedError);
422 |     throw error;
423 |   }
424 | };
```

packages/nextjs/utils/scaffold-eth/contractsData.ts
```
1 | import { useTargetNetwork } from "~~/hooks/scaffold-eth";
2 | import { GenericContractsDeclaration, contracts } from "~~/utils/scaffold-eth/contract";
3 | 
4 | const DEFAULT_ALL_CONTRACTS: GenericContractsDeclaration[number] = {};
5 | 
6 | export function useAllContracts() {
7 |   const { targetNetwork } = useTargetNetwork();
8 |   const contractsData = contracts?.[targetNetwork.id];
9 |   // using constant to avoid creating a new object on every call
10 |   return contractsData || DEFAULT_ALL_CONTRACTS;
11 | }
```

packages/nextjs/utils/scaffold-eth/decodeTxData.ts
```
1 | import { TransactionWithFunction } from "./block";
2 | import { GenericContractsDeclaration } from "./contract";
3 | import { Abi, AbiFunction, decodeFunctionData, getAbiItem } from "viem";
4 | import { hardhat } from "viem/chains";
5 | import contractData from "~~/contracts/deployedContracts";
6 | 
7 | type ContractsInterfaces = Record<string, Abi>;
8 | type TransactionType = TransactionWithFunction | null;
9 | 
10 | const deployedContracts = contractData as GenericContractsDeclaration | null;
11 | const chainMetaData = deployedContracts?.[hardhat.id];
12 | const interfaces = chainMetaData
13 |   ? Object.entries(chainMetaData).reduce((finalInterfacesObj, [contractName, contract]) => {
14 |       finalInterfacesObj[contractName] = contract.abi;
15 |       return finalInterfacesObj;
16 |     }, {} as ContractsInterfaces)
17 |   : {};
18 | 
19 | export const decodeTransactionData = (tx: TransactionWithFunction) => {
20 |   if (tx.input.length >= 10 && !tx.input.startsWith("0x60e06040")) {
21 |     let foundInterface = false;
22 |     for (const [, contractAbi] of Object.entries(interfaces)) {
23 |       try {
24 |         const { functionName, args } = decodeFunctionData({
25 |           abi: contractAbi,
26 |           data: tx.input,
27 |         });
28 |         tx.functionName = functionName;
29 |         tx.functionArgs = args as any[];
30 |         tx.functionArgNames = getAbiItem<AbiFunction[], string>({
31 |           abi: contractAbi as AbiFunction[],
32 |           name: functionName,
33 |         })?.inputs?.map((input: any) => input.name);
34 |         tx.functionArgTypes = getAbiItem<AbiFunction[], string>({
35 |           abi: contractAbi as AbiFunction[],
36 |           name: functionName,
37 |         })?.inputs.map((input: any) => input.type);
38 |         foundInterface = true;
39 |         break;
40 |       } catch {
41 |         // do nothing
42 |       }
43 |     }
44 |     if (!foundInterface) {
45 |       tx.functionName = "⚠️ Unknown";
46 |     }
47 |   }
48 |   return tx;
49 | };
50 | 
51 | export const getFunctionDetails = (transaction: TransactionType) => {
52 |   if (
53 |     transaction &&
54 |     transaction.functionName &&
55 |     transaction.functionArgNames &&
56 |     transaction.functionArgTypes &&
57 |     transaction.functionArgs
58 |   ) {
59 |     const details = transaction.functionArgNames.map(
60 |       (name, i) => `${transaction.functionArgTypes?.[i] || ""} ${name} = ${transaction.functionArgs?.[i] ?? ""}`,
61 |     );
62 |     return `${transaction.functionName}(${details.join(", ")})`;
63 |   }
64 |   return "";
65 | };
```

packages/nextjs/utils/scaffold-eth/fetchPriceFromUniswap.ts
```
1 | import { ChainWithAttributes, getAlchemyHttpUrl } from "./networks";
2 | import { CurrencyAmount, Token } from "@uniswap/sdk-core";
3 | import { Pair, Route } from "@uniswap/v2-sdk";
4 | import { Address, createPublicClient, fallback, http, parseAbi } from "viem";
5 | import { mainnet } from "viem/chains";
6 | 
7 | const alchemyHttpUrl = getAlchemyHttpUrl(mainnet.id);
8 | const rpcFallbacks = alchemyHttpUrl ? [http(alchemyHttpUrl), http()] : [http()];
9 | const publicClient = createPublicClient({
10 |   chain: mainnet,
11 |   transport: fallback(rpcFallbacks),
12 | });
13 | 
14 | const ABI = parseAbi([
15 |   "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
16 |   "function token0() external view returns (address)",
17 |   "function token1() external view returns (address)",
18 | ]);
19 | 
20 | export const fetchPriceFromUniswap = async (targetNetwork: ChainWithAttributes): Promise<number> => {
21 |   if (
22 |     targetNetwork.nativeCurrency.symbol !== "ETH" &&
23 |     targetNetwork.nativeCurrency.symbol !== "SEP" &&
24 |     !targetNetwork.nativeCurrencyTokenAddress
25 |   ) {
26 |     return 0;
27 |   }
28 |   try {
29 |     const DAI = new Token(1, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18);
30 |     const TOKEN = new Token(
31 |       1,
32 |       targetNetwork.nativeCurrencyTokenAddress || "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
33 |       18,
34 |     );
35 |     const pairAddress = Pair.getAddress(TOKEN, DAI) as Address;
36 | 
37 |     const wagmiConfig = {
38 |       address: pairAddress,
39 |       abi: ABI,
40 |     };
41 | 
42 |     const reserves = await publicClient.readContract({
43 |       ...wagmiConfig,
44 |       functionName: "getReserves",
45 |     });
46 | 
47 |     const token0Address = await publicClient.readContract({
48 |       ...wagmiConfig,
49 |       functionName: "token0",
50 |     });
51 | 
52 |     const token1Address = await publicClient.readContract({
53 |       ...wagmiConfig,
54 |       functionName: "token1",
55 |     });
56 |     const token0 = [TOKEN, DAI].find(token => token.address === token0Address) as Token;
57 |     const token1 = [TOKEN, DAI].find(token => token.address === token1Address) as Token;
58 |     const pair = new Pair(
59 |       CurrencyAmount.fromRawAmount(token0, reserves[0].toString()),
60 |       CurrencyAmount.fromRawAmount(token1, reserves[1].toString()),
61 |     );
62 |     const route = new Route([pair], TOKEN, DAI);
63 |     const price = parseFloat(route.midPrice.toSignificant(6));
64 |     return price;
65 |   } catch (error) {
66 |     console.error(
67 |       `useNativeCurrencyPrice - Error fetching ${targetNetwork.nativeCurrency.symbol} price from Uniswap: `,
68 |       error,
69 |     );
70 |     return 0;
71 |   }
72 | };
```

packages/nextjs/utils/scaffold-eth/getMetadata.ts
```
1 | import type { Metadata } from "next";
2 | 
3 | const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
4 |   ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
5 |   : `http://localhost:${process.env.PORT || 3000}`;
6 | const titleTemplate = "%s | Scaffold-ETH 2";
7 | 
8 | export const getMetadata = ({
9 |   title,
10 |   description,
11 |   imageRelativePath = "/thumbnail.jpg",
12 | }: {
13 |   title: string;
14 |   description: string;
15 |   imageRelativePath?: string;
16 | }): Metadata => {
17 |   const imageUrl = `${baseUrl}${imageRelativePath}`;
18 | 
19 |   return {
20 |     metadataBase: new URL(baseUrl),
21 |     title: {
22 |       default: title,
23 |       template: titleTemplate,
24 |     },
25 |     description: description,
26 |     openGraph: {
27 |       title: {
28 |         default: title,
29 |         template: titleTemplate,
30 |       },
31 |       description: description,
32 |       images: [
33 |         {
34 |           url: imageUrl,
35 |         },
36 |       ],
37 |     },
38 |     twitter: {
39 |       title: {
40 |         default: title,
41 |         template: titleTemplate,
42 |       },
43 |       description: description,
44 |       images: [imageUrl],
45 |     },
46 |     icons: {
47 |       icon: [
48 |         {
49 |           url: "/favicon.png",
50 |           sizes: "32x32",
51 |           type: "image/png",
52 |         },
53 |       ],
54 |     },
55 |   };
56 | };
```

packages/nextjs/utils/scaffold-eth/getParsedError.ts
```
1 | import { BaseError as BaseViemError, ContractFunctionRevertedError } from "viem";
2 | 
3 | /**
4 |  * Parses an viem/wagmi error to get a displayable string
5 |  * @param e - error object
6 |  * @returns parsed error string
7 |  */
8 | export const getParsedError = (error: any): string => {
9 |   const parsedError = error?.walk ? error.walk() : error;
10 | 
11 |   if (parsedError instanceof BaseViemError) {
12 |     if (parsedError.details) {
13 |       return parsedError.details;
14 |     }
15 | 
16 |     if (parsedError.shortMessage) {
17 |       if (
18 |         parsedError instanceof ContractFunctionRevertedError &&
19 |         parsedError.data &&
20 |         parsedError.data.errorName !== "Error"
21 |       ) {
22 |         const customErrorArgs = parsedError.data.args?.toString() ?? "";
23 |         return `${parsedError.shortMessage.replace(/reverted\.$/, "reverted with the following reason:")}\n${
24 |           parsedError.data.errorName
25 |         }(${customErrorArgs})`;
26 |       }
27 | 
28 |       return parsedError.shortMessage;
29 |     }
30 | 
31 |     return parsedError.message ?? parsedError.name ?? "An unknown error occurred";
32 |   }
33 | 
34 |   return parsedError?.message ?? "An unknown error occurred";
35 | };
```

packages/nextjs/utils/scaffold-eth/index.ts
```
1 | export * from "./fetchPriceFromUniswap";
2 | export * from "./networks";
3 | export * from "./notification";
4 | export * from "./block";
5 | export * from "./decodeTxData";
6 | export * from "./getParsedError";
```

packages/nextjs/utils/scaffold-eth/networks.ts
```
1 | import * as chains from "viem/chains";
2 | import scaffoldConfig from "~~/scaffold.config";
3 | 
4 | type ChainAttributes = {
5 |   // color | [lightThemeColor, darkThemeColor]
6 |   color: string | [string, string];
7 |   // Used to fetch price by providing mainnet token address
8 |   // for networks having native currency other than ETH
9 |   nativeCurrencyTokenAddress?: string;
10 | };
11 | 
12 | export type ChainWithAttributes = chains.Chain & Partial<ChainAttributes>;
13 | export type AllowedChainIds = (typeof scaffoldConfig.targetNetworks)[number]["id"];
14 | 
15 | // Mapping of chainId to RPC chain name an format followed by alchemy and infura
16 | export const RPC_CHAIN_NAMES: Record<number, string> = {
17 |   [chains.mainnet.id]: "eth-mainnet",
18 |   [chains.goerli.id]: "eth-goerli",
19 |   [chains.sepolia.id]: "eth-sepolia",
20 |   [chains.optimism.id]: "opt-mainnet",
21 |   [chains.optimismGoerli.id]: "opt-goerli",
22 |   [chains.optimismSepolia.id]: "opt-sepolia",
23 |   [chains.arbitrum.id]: "arb-mainnet",
24 |   [chains.arbitrumGoerli.id]: "arb-goerli",
25 |   [chains.arbitrumSepolia.id]: "arb-sepolia",
26 |   [chains.polygon.id]: "polygon-mainnet",
27 |   [chains.polygonMumbai.id]: "polygon-mumbai",
28 |   [chains.polygonAmoy.id]: "polygon-amoy",
29 |   [chains.astar.id]: "astar-mainnet",
30 |   [chains.polygonZkEvm.id]: "polygonzkevm-mainnet",
31 |   [chains.polygonZkEvmTestnet.id]: "polygonzkevm-testnet",
32 |   [chains.base.id]: "base-mainnet",
33 |   [chains.baseGoerli.id]: "base-goerli",
34 |   [chains.baseSepolia.id]: "base-sepolia",
35 |   [chains.celo.id]: "celo-mainnet",
36 |   [chains.celoAlfajores.id]: "celo-alfajores",
37 | };
38 | 
39 | export const getAlchemyHttpUrl = (chainId: number) => {
40 |   return scaffoldConfig.alchemyApiKey && RPC_CHAIN_NAMES[chainId]
41 |     ? `https://${RPC_CHAIN_NAMES[chainId]}.g.alchemy.com/v2/${scaffoldConfig.alchemyApiKey}`
42 |     : undefined;
43 | };
44 | 
45 | export const NETWORKS_EXTRA_DATA: Record<string, ChainAttributes> = {
46 |   [chains.hardhat.id]: {
47 |     color: "#b8af0c",
48 |   },
49 |   [chains.mainnet.id]: {
50 |     color: "#ff8b9e",
51 |   },
52 |   [chains.sepolia.id]: {
53 |     color: ["#5f4bb6", "#87ff65"],
54 |   },
55 |   [chains.gnosis.id]: {
56 |     color: "#48a9a6",
57 |   },
58 |   [chains.polygon.id]: {
59 |     color: "#2bbdf7",
60 |     nativeCurrencyTokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
61 |   },
62 |   [chains.polygonMumbai.id]: {
63 |     color: "#92D9FA",
64 |     nativeCurrencyTokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
65 |   },
66 |   [chains.optimismSepolia.id]: {
67 |     color: "#f01a37",
68 |   },
69 |   [chains.optimism.id]: {
70 |     color: "#f01a37",
71 |   },
72 |   [chains.arbitrumSepolia.id]: {
73 |     color: "#28a0f0",
74 |   },
75 |   [chains.arbitrum.id]: {
76 |     color: "#28a0f0",
77 |   },
78 |   [chains.fantom.id]: {
79 |     color: "#1969ff",
80 |   },
81 |   [chains.fantomTestnet.id]: {
82 |     color: "#1969ff",
83 |   },
84 |   [chains.scrollSepolia.id]: {
85 |     color: "#fbebd4",
86 |   },
87 |   [chains.celo.id]: {
88 |     color: "#FCFF52",
89 |   },
90 |   [chains.celoAlfajores.id]: {
91 |     color: "#476520",
92 |   },
93 | };
94 | 
95 | /**
96 |  * Gives the block explorer transaction URL, returns empty string if the network is a local chain
97 |  */
98 | export function getBlockExplorerTxLink(chainId: number, txnHash: string) {
99 |   const chainNames = Object.keys(chains);
100 | 
101 |   const targetChainArr = chainNames.filter(chainName => {
102 |     const wagmiChain = chains[chainName as keyof typeof chains];
103 |     return wagmiChain.id === chainId;
104 |   });
105 | 
106 |   if (targetChainArr.length === 0) {
107 |     return "";
108 |   }
109 | 
110 |   const targetChain = targetChainArr[0] as keyof typeof chains;
111 |   const blockExplorerTxURL = chains[targetChain]?.blockExplorers?.default?.url;
112 | 
113 |   if (!blockExplorerTxURL) {
114 |     return "";
115 |   }
116 | 
117 |   return `${blockExplorerTxURL}/tx/${txnHash}`;
118 | }
119 | 
120 | /**
121 |  * Gives the block explorer URL for a given address.
122 |  * Defaults to Etherscan if no (wagmi) block explorer is configured for the network.
123 |  */
124 | export function getBlockExplorerAddressLink(network: chains.Chain, address: string) {
125 |   const blockExplorerBaseURL = network.blockExplorers?.default?.url;
126 |   if (network.id === chains.hardhat.id) {
127 |     return `/blockexplorer/address/${address}`;
128 |   }
129 | 
130 |   if (!blockExplorerBaseURL) {
131 |     return `https://etherscan.io/address/${address}`;
132 |   }
133 | 
134 |   return `${blockExplorerBaseURL}/address/${address}`;
135 | }
136 | 
137 | /**
138 |  * @returns targetNetworks array containing networks configured in scaffold.config including extra network metadata
139 |  */
140 | export function getTargetNetworks(): ChainWithAttributes[] {
141 |   return scaffoldConfig.targetNetworks.map(targetNetwork => ({
142 |     ...targetNetwork,
143 |     ...NETWORKS_EXTRA_DATA[targetNetwork.id],
144 |   }));
145 | }
```

packages/nextjs/utils/scaffold-eth/notification.tsx
```
1 | import React from "react";
2 | import { Toast, ToastPosition, toast } from "react-hot-toast";
3 | import { XMarkIcon } from "@heroicons/react/20/solid";
4 | import {
5 |   CheckCircleIcon,
6 |   ExclamationCircleIcon,
7 |   ExclamationTriangleIcon,
8 |   InformationCircleIcon,
9 | } from "@heroicons/react/24/solid";
10 | 
11 | type NotificationProps = {
12 |   content: React.ReactNode;
13 |   status: "success" | "info" | "loading" | "error" | "warning";
14 |   duration?: number;
15 |   icon?: string;
16 |   position?: ToastPosition;
17 | };
18 | 
19 | type NotificationOptions = {
20 |   duration?: number;
21 |   icon?: string;
22 |   position?: ToastPosition;
23 | };
24 | 
25 | const ENUM_STATUSES = {
26 |   success: <CheckCircleIcon className="w-7 text-success" />,
27 |   loading: <span className="w-6 loading loading-spinner"></span>,
28 |   error: <ExclamationCircleIcon className="w-7 text-error" />,
29 |   info: <InformationCircleIcon className="w-7 text-info" />,
30 |   warning: <ExclamationTriangleIcon className="w-7 text-warning" />,
31 | };
32 | 
33 | const DEFAULT_DURATION = 3000;
34 | const DEFAULT_POSITION: ToastPosition = "top-center";
35 | 
36 | /**
37 |  * Custom Notification
38 |  */
39 | const Notification = ({
40 |   content,
41 |   status,
42 |   duration = DEFAULT_DURATION,
43 |   icon,
44 |   position = DEFAULT_POSITION,
45 | }: NotificationProps) => {
46 |   return toast.custom(
47 |     (t: Toast) => (
48 |       <div
49 |         className={`flex flex-row items-start justify-between max-w-sm rounded-xl shadow-center shadow-accent bg-base-200 p-4 transform-gpu relative transition-all duration-500 ease-in-out space-x-2
50 |         ${
51 |           position.substring(0, 3) == "top"
52 |             ? `hover:translate-y-1 ${t.visible ? "top-0" : "-top-96"}`
53 |             : `hover:-translate-y-1 ${t.visible ? "bottom-0" : "-bottom-96"}`
54 |         }`}
55 |       >
56 |         <div className="leading-[0] self-center">{icon ? icon : ENUM_STATUSES[status]}</div>
57 |         <div className={`overflow-x-hidden break-words whitespace-pre-line ${icon ? "mt-1" : ""}`}>{content}</div>
58 | 
59 |         <div className={`cursor-pointer text-lg ${icon ? "mt-1" : ""}`} onClick={() => toast.dismiss(t.id)}>
60 |           <XMarkIcon className="w-6 cursor-pointer" onClick={() => toast.remove(t.id)} />
61 |         </div>
62 |       </div>
63 |     ),
64 |     {
65 |       duration: status === "loading" ? Infinity : duration,
66 |       position,
67 |     },
68 |   );
69 | };
70 | 
71 | export const notification = {
72 |   success: (content: React.ReactNode, options?: NotificationOptions) => {
73 |     return Notification({ content, status: "success", ...options });
74 |   },
75 |   info: (content: React.ReactNode, options?: NotificationOptions) => {
76 |     return Notification({ content, status: "info", ...options });
77 |   },
78 |   warning: (content: React.ReactNode, options?: NotificationOptions) => {
79 |     return Notification({ content, status: "warning", ...options });
80 |   },
81 |   error: (content: React.ReactNode, options?: NotificationOptions) => {
82 |     return Notification({ content, status: "error", ...options });
83 |   },
84 |   loading: (content: React.ReactNode, options?: NotificationOptions) => {
85 |     return Notification({ content, status: "loading", ...options });
86 |   },
87 |   remove: (toastId: string) => {
88 |     toast.remove(toastId);
89 |   },
90 | };
```

packages/nextjs/components/scaffold-eth/Balance.tsx
```
1 | "use client";
2 | 
3 | import { Address, formatEther } from "viem";
4 | import { useDisplayUsdMode } from "~~/hooks/scaffold-eth/useDisplayUsdMode";
5 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
6 | import { useWatchBalance } from "~~/hooks/scaffold-eth/useWatchBalance";
7 | import { useGlobalState } from "~~/services/store/store";
8 | 
9 | type BalanceProps = {
10 |   address?: Address;
11 |   className?: string;
12 |   usdMode?: boolean;
13 | };
14 | 
15 | /**
16 |  * Display (ETH & USD) balance of an ETH address.
17 |  */
18 | export const Balance = ({ address, className = "", usdMode }: BalanceProps) => {
19 |   const { targetNetwork } = useTargetNetwork();
20 |   const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
21 |   const isNativeCurrencyPriceFetching = useGlobalState(state => state.nativeCurrency.isFetching);
22 | 
23 |   const {
24 |     data: balance,
25 |     isError,
26 |     isLoading,
27 |   } = useWatchBalance({
28 |     address,
29 |   });
30 | 
31 |   const { displayUsdMode, toggleDisplayUsdMode } = useDisplayUsdMode({ defaultUsdMode: usdMode });
32 | 
33 |   if (!address || isLoading || balance === null || (isNativeCurrencyPriceFetching && nativeCurrencyPrice === 0)) {
34 |     return (
35 |       <div className="animate-pulse flex space-x-4">
36 |         <div className="rounded-md bg-slate-300 h-6 w-6"></div>
37 |         <div className="flex items-center space-y-6">
38 |           <div className="h-2 w-28 bg-slate-300 rounded-sm"></div>
39 |         </div>
40 |       </div>
41 |     );
42 |   }
43 | 
44 |   if (isError) {
45 |     return (
46 |       <div className="border-2 border-base-content/30 rounded-md px-2 flex flex-col items-center max-w-fit cursor-pointer">
47 |         <div className="text-warning">Error</div>
48 |       </div>
49 |     );
50 |   }
51 | 
52 |   const formattedBalance = balance ? Number(formatEther(balance.value)) : 0;
53 | 
54 |   return (
55 |     <button
56 |       className={`btn btn-sm btn-ghost flex flex-col font-normal items-center hover:bg-transparent ${className}`}
57 |       onClick={toggleDisplayUsdMode}
58 |       type="button"
59 |     >
60 |       <div className="w-full flex items-center justify-center">
61 |         {displayUsdMode ? (
62 |           <>
63 |             <span className="text-[0.8em] font-bold mr-1">$</span>
64 |             <span>{(formattedBalance * nativeCurrencyPrice).toFixed(2)}</span>
65 |           </>
66 |         ) : (
67 |           <>
68 |             <span>{formattedBalance.toFixed(4)}</span>
69 |             <span className="text-[0.8em] font-bold ml-1">{targetNetwork.nativeCurrency.symbol}</span>
70 |           </>
71 |         )}
72 |       </div>
73 |     </button>
74 |   );
75 | };
```

packages/nextjs/components/scaffold-eth/BlockieAvatar.tsx
```
1 | "use client";
2 | 
3 | import { AvatarComponent } from "@rainbow-me/rainbowkit";
4 | import { blo } from "blo";
5 | 
6 | // Custom Avatar for RainbowKit
7 | export const BlockieAvatar: AvatarComponent = ({ address, ensImage, size }) => (
8 |   // Don't want to use nextJS Image here (and adding remote patterns for the URL)
9 |   // eslint-disable-next-line @next/next/no-img-element
10 |   <img
11 |     className="rounded-full"
12 |     src={ensImage || blo(address as `0x${string}`)}
13 |     width={size}
14 |     height={size}
15 |     alt={`${address} avatar`}
16 |   />
17 | );
```

packages/nextjs/components/scaffold-eth/Faucet.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { Address as AddressType, createWalletClient, http, parseEther } from "viem";
5 | import { hardhat } from "viem/chains";
6 | import { useAccount } from "wagmi";
7 | import { BanknotesIcon } from "@heroicons/react/24/outline";
8 | import { Address, AddressInput, Balance, EtherInput } from "~~/components/scaffold-eth";
9 | import { useTransactor } from "~~/hooks/scaffold-eth";
10 | import { notification } from "~~/utils/scaffold-eth";
11 | 
12 | // Account index to use from generated hardhat accounts.
13 | const FAUCET_ACCOUNT_INDEX = 0;
14 | 
15 | const localWalletClient = createWalletClient({
16 |   chain: hardhat,
17 |   transport: http(),
18 | });
19 | 
20 | /**
21 |  * Faucet modal which lets you send ETH to any address.
22 |  */
23 | export const Faucet = () => {
24 |   const [loading, setLoading] = useState(false);
25 |   const [inputAddress, setInputAddress] = useState<AddressType>();
26 |   const [faucetAddress, setFaucetAddress] = useState<AddressType>();
27 |   const [sendValue, setSendValue] = useState("");
28 | 
29 |   const { chain: ConnectedChain } = useAccount();
30 | 
31 |   const faucetTxn = useTransactor(localWalletClient);
32 | 
33 |   useEffect(() => {
34 |     const getFaucetAddress = async () => {
35 |       try {
36 |         const accounts = await localWalletClient.getAddresses();
37 |         setFaucetAddress(accounts[FAUCET_ACCOUNT_INDEX]);
38 |       } catch (error) {
39 |         notification.error(
40 |           <>
41 |             <p className="font-bold mt-0 mb-1">Cannot connect to local provider</p>
42 |             <p className="m-0">
43 |               - Did you forget to run <code className="italic bg-base-300 text-base font-bold">yarn chain</code> ?
44 |             </p>
45 |             <p className="mt-1 break-normal">
46 |               - Or you can change <code className="italic bg-base-300 text-base font-bold">targetNetwork</code> in{" "}
47 |               <code className="italic bg-base-300 text-base font-bold">scaffold.config.ts</code>
48 |             </p>
49 |           </>,
50 |         );
51 |         console.error("⚡️ ~ file: Faucet.tsx:getFaucetAddress ~ error", error);
52 |       }
53 |     };
54 |     getFaucetAddress();
55 |   }, []);
56 | 
57 |   const sendETH = async () => {
58 |     if (!faucetAddress || !inputAddress) {
59 |       return;
60 |     }
61 |     try {
62 |       setLoading(true);
63 |       await faucetTxn({
64 |         to: inputAddress,
65 |         value: parseEther(sendValue as `${number}`),
66 |         account: faucetAddress,
67 |       });
68 |       setLoading(false);
69 |       setInputAddress(undefined);
70 |       setSendValue("");
71 |     } catch (error) {
72 |       console.error("⚡️ ~ file: Faucet.tsx:sendETH ~ error", error);
73 |       setLoading(false);
74 |     }
75 |   };
76 | 
77 |   // Render only on local chain
78 |   if (ConnectedChain?.id !== hardhat.id) {
79 |     return null;
80 |   }
81 | 
82 |   return (
83 |     <div>
84 |       <label htmlFor="faucet-modal" className="btn btn-primary btn-sm font-normal gap-1">
85 |         <BanknotesIcon className="h-4 w-4" />
86 |         <span>Faucet</span>
87 |       </label>
88 |       <input type="checkbox" id="faucet-modal" className="modal-toggle" />
89 |       <label htmlFor="faucet-modal" className="modal cursor-pointer">
90 |         <label className="modal-box relative">
91 |           {/* dummy input to capture event onclick on modal box */}
92 |           <input className="h-0 w-0 absolute top-0 left-0" />
93 |           <h3 className="text-xl font-bold mb-3">Local Faucet</h3>
94 |           <label htmlFor="faucet-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
95 |             ✕
96 |           </label>
97 |           <div className="space-y-3">
98 |             <div className="flex space-x-4">
99 |               <div>
100 |                 <span className="text-sm font-bold">From:</span>
101 |                 <Address address={faucetAddress} onlyEnsOrAddress />
102 |               </div>
103 |               <div>
104 |                 <span className="text-sm font-bold pl-3">Available:</span>
105 |                 <Balance address={faucetAddress} />
106 |               </div>
107 |             </div>
108 |             <div className="flex flex-col space-y-3">
109 |               <AddressInput
110 |                 placeholder="Destination Address"
111 |                 value={inputAddress ?? ""}
112 |                 onChange={value => setInputAddress(value as AddressType)}
113 |               />
114 |               <EtherInput placeholder="Amount to send" value={sendValue} onChange={value => setSendValue(value)} />
115 |               <button className="h-10 btn btn-primary btn-sm px-2 rounded-full" onClick={sendETH} disabled={loading}>
116 |                 {!loading ? (
117 |                   <BanknotesIcon className="h-6 w-6" />
118 |                 ) : (
119 |                   <span className="loading loading-spinner loading-sm"></span>
120 |                 )}
121 |                 <span>Send</span>
122 |               </button>
123 |             </div>
124 |           </div>
125 |         </label>
126 |       </label>
127 |     </div>
128 |   );
129 | };
```

packages/nextjs/components/scaffold-eth/FaucetButton.tsx
```
1 | "use client";
2 | 
3 | import { useState } from "react";
4 | import { createWalletClient, http, parseEther } from "viem";
5 | import { hardhat } from "viem/chains";
6 | import { useAccount } from "wagmi";
7 | import { BanknotesIcon } from "@heroicons/react/24/outline";
8 | import { useTransactor } from "~~/hooks/scaffold-eth";
9 | import { useWatchBalance } from "~~/hooks/scaffold-eth/useWatchBalance";
10 | 
11 | // Number of ETH faucet sends to an address
12 | const NUM_OF_ETH = "1";
13 | const FAUCET_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
14 | 
15 | const localWalletClient = createWalletClient({
16 |   chain: hardhat,
17 |   transport: http(),
18 | });
19 | 
20 | /**
21 |  * FaucetButton button which lets you grab eth.
22 |  */
23 | export const FaucetButton = () => {
24 |   const { address, chain: ConnectedChain } = useAccount();
25 | 
26 |   const { data: balance } = useWatchBalance({ address });
27 | 
28 |   const [loading, setLoading] = useState(false);
29 | 
30 |   const faucetTxn = useTransactor(localWalletClient);
31 | 
32 |   const sendETH = async () => {
33 |     if (!address) return;
34 |     try {
35 |       setLoading(true);
36 |       await faucetTxn({
37 |         account: FAUCET_ADDRESS,
38 |         to: address,
39 |         value: parseEther(NUM_OF_ETH),
40 |       });
41 |       setLoading(false);
42 |     } catch (error) {
43 |       console.error("⚡️ ~ file: FaucetButton.tsx:sendETH ~ error", error);
44 |       setLoading(false);
45 |     }
46 |   };
47 | 
48 |   // Render only on local chain
49 |   if (ConnectedChain?.id !== hardhat.id) {
50 |     return null;
51 |   }
52 | 
53 |   const isBalanceZero = balance && balance.value === 0n;
54 | 
55 |   return (
56 |     <div
57 |       className={
58 |         !isBalanceZero
59 |           ? "ml-1"
60 |           : "ml-1 tooltip tooltip-bottom tooltip-primary tooltip-open font-bold before:left-auto before:transform-none before:content-[attr(data-tip)] before:-translate-x-2/5"
61 |       }
62 |       data-tip="Grab funds from faucet"
63 |     >
64 |       <button className="btn btn-secondary btn-sm px-2 rounded-full" onClick={sendETH} disabled={loading}>
65 |         {!loading ? (
66 |           <BanknotesIcon className="h-4 w-4" />
67 |         ) : (
68 |           <span className="loading loading-spinner loading-xs"></span>
69 |         )}
70 |       </button>
71 |     </div>
72 |   );
73 | };
```

packages/nextjs/components/scaffold-eth/index.tsx
```
1 | export * from "./Address/Address";
2 | export * from "./Balance";
3 | export * from "./BlockieAvatar";
4 | export * from "./Faucet";
5 | export * from "./FaucetButton";
6 | export * from "./Input";
7 | export * from "./RainbowKitCustomConnectButton";
```

packages/nextjs/app/blockexplorer/_components/AddressCodeTab.tsx
```
1 | type AddressCodeTabProps = {
2 |   bytecode: string;
3 |   assembly: string;
4 | };
5 | 
6 | export const AddressCodeTab = ({ bytecode, assembly }: AddressCodeTabProps) => {
7 |   const formattedAssembly = Array.from(assembly.matchAll(/\w+( 0x[a-fA-F0-9]+)?/g))
8 |     .map(it => it[0])
9 |     .join("\n");
10 | 
11 |   return (
12 |     <div className="flex flex-col gap-3 p-4">
13 |       Bytecode
14 |       <div className="mockup-code -indent-5 overflow-y-auto max-h-[500px]">
15 |         <pre className="px-5">
16 |           <code className="whitespace-pre-wrap overflow-auto break-words">{bytecode}</code>
17 |         </pre>
18 |       </div>
19 |       Opcodes
20 |       <div className="mockup-code -indent-5 overflow-y-auto max-h-[500px]">
21 |         <pre className="px-5">
22 |           <code>{formattedAssembly}</code>
23 |         </pre>
24 |       </div>
25 |     </div>
26 |   );
27 | };
```

packages/nextjs/app/blockexplorer/_components/AddressComponent.tsx
```
1 | import { BackButton } from "./BackButton";
2 | import { ContractTabs } from "./ContractTabs";
3 | import { Address as AddressType } from "viem";
4 | import { Address, Balance } from "~~/components/scaffold-eth";
5 | 
6 | export const AddressComponent = ({
7 |   address,
8 |   contractData,
9 | }: {
10 |   address: AddressType;
11 |   contractData: { bytecode: string; assembly: string } | null;
12 | }) => {
13 |   return (
14 |     <div className="m-10 mb-20">
15 |       <div className="flex justify-start mb-5">
16 |         <BackButton />
17 |       </div>
18 |       <div className="col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
19 |         <div className="col-span-1 flex flex-col">
20 |           <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4 overflow-x-auto">
21 |             <div className="flex">
22 |               <div className="flex flex-col gap-1">
23 |                 <Address address={address} format="long" onlyEnsOrAddress />
24 |                 <div className="flex gap-1 items-center">
25 |                   <span className="font-bold text-sm">Balance:</span>
26 |                   <Balance address={address} className="text" />
27 |                 </div>
28 |               </div>
29 |             </div>
30 |           </div>
31 |         </div>
32 |       </div>
33 |       <ContractTabs address={address} contractData={contractData} />
34 |     </div>
35 |   );
36 | };
```

packages/nextjs/app/blockexplorer/_components/AddressLogsTab.tsx
```
1 | import { Address } from "viem";
2 | import { useContractLogs } from "~~/hooks/scaffold-eth";
3 | import { replacer } from "~~/utils/scaffold-eth/common";
4 | 
5 | export const AddressLogsTab = ({ address }: { address: Address }) => {
6 |   const contractLogs = useContractLogs(address);
7 | 
8 |   return (
9 |     <div className="flex flex-col gap-3 p-4">
10 |       <div className="mockup-code overflow-auto max-h-[500px]">
11 |         <pre className="px-5 whitespace-pre-wrap break-words">
12 |           {contractLogs.map((log, i) => (
13 |             <div key={i}>
14 |               <strong>Log:</strong> {JSON.stringify(log, replacer, 2)}
15 |             </div>
16 |           ))}
17 |         </pre>
18 |       </div>
19 |     </div>
20 |   );
21 | };
```

packages/nextjs/app/blockexplorer/_components/AddressStorageTab.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { Address, createPublicClient, http, toHex } from "viem";
5 | import { hardhat } from "viem/chains";
6 | 
7 | const publicClient = createPublicClient({
8 |   chain: hardhat,
9 |   transport: http(),
10 | });
11 | 
12 | export const AddressStorageTab = ({ address }: { address: Address }) => {
13 |   const [storage, setStorage] = useState<string[]>([]);
14 | 
15 |   useEffect(() => {
16 |     const fetchStorage = async () => {
17 |       try {
18 |         const storageData = [];
19 |         let idx = 0;
20 | 
21 |         while (true) {
22 |           const storageAtPosition = await publicClient.getStorageAt({
23 |             address: address,
24 |             slot: toHex(idx),
25 |           });
26 | 
27 |           if (storageAtPosition === "0x" + "0".repeat(64)) break;
28 | 
29 |           if (storageAtPosition) {
30 |             storageData.push(storageAtPosition);
31 |           }
32 | 
33 |           idx++;
34 |         }
35 |         setStorage(storageData);
36 |       } catch (error) {
37 |         console.error("Failed to fetch storage:", error);
38 |       }
39 |     };
40 | 
41 |     fetchStorage();
42 |   }, [address]);
43 | 
44 |   return (
45 |     <div className="flex flex-col gap-3 p-4">
46 |       {storage.length > 0 ? (
47 |         <div className="mockup-code overflow-auto max-h-[500px]">
48 |           <pre className="px-5 whitespace-pre-wrap break-words">
49 |             {storage.map((data, i) => (
50 |               <div key={i}>
51 |                 <strong>Storage Slot {i}:</strong> {data}
52 |               </div>
53 |             ))}
54 |           </pre>
55 |         </div>
56 |       ) : (
57 |         <div className="text-lg">This contract does not have any variables.</div>
58 |       )}
59 |     </div>
60 |   );
61 | };
```

packages/nextjs/app/blockexplorer/_components/BackButton.tsx
```
1 | "use client";
2 | 
3 | import { useRouter } from "next/navigation";
4 | 
5 | export const BackButton = () => {
6 |   const router = useRouter();
7 |   return (
8 |     <button className="btn btn-sm btn-primary" onClick={() => router.back()}>
9 |       Back
10 |     </button>
11 |   );
12 | };
```

packages/nextjs/app/blockexplorer/_components/ContractTabs.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { AddressCodeTab } from "./AddressCodeTab";
5 | import { AddressLogsTab } from "./AddressLogsTab";
6 | import { AddressStorageTab } from "./AddressStorageTab";
7 | import { PaginationButton } from "./PaginationButton";
8 | import { TransactionsTable } from "./TransactionsTable";
9 | import { Address, createPublicClient, http } from "viem";
10 | import { hardhat } from "viem/chains";
11 | import { useFetchBlocks } from "~~/hooks/scaffold-eth";
12 | 
13 | type AddressCodeTabProps = {
14 |   bytecode: string;
15 |   assembly: string;
16 | };
17 | 
18 | type PageProps = {
19 |   address: Address;
20 |   contractData: AddressCodeTabProps | null;
21 | };
22 | 
23 | const publicClient = createPublicClient({
24 |   chain: hardhat,
25 |   transport: http(),
26 | });
27 | 
28 | export const ContractTabs = ({ address, contractData }: PageProps) => {
29 |   const { blocks, transactionReceipts, currentPage, totalBlocks, setCurrentPage } = useFetchBlocks();
30 |   const [activeTab, setActiveTab] = useState("transactions");
31 |   const [isContract, setIsContract] = useState(false);
32 | 
33 |   useEffect(() => {
34 |     const checkIsContract = async () => {
35 |       const contractCode = await publicClient.getBytecode({ address: address });
36 |       setIsContract(contractCode !== undefined && contractCode !== "0x");
37 |     };
38 | 
39 |     checkIsContract();
40 |   }, [address]);
41 | 
42 |   const filteredBlocks = blocks.filter(block =>
43 |     block.transactions.some(tx => {
44 |       if (typeof tx === "string") {
45 |         return false;
46 |       }
47 |       return tx.from.toLowerCase() === address.toLowerCase() || tx.to?.toLowerCase() === address.toLowerCase();
48 |     }),
49 |   );
50 | 
51 |   return (
52 |     <>
53 |       {isContract && (
54 |         <div role="tablist" className="tabs tabs-lift">
55 |           <button
56 |             role="tab"
57 |             className={`tab ${activeTab === "transactions" ? "tab-active" : ""}`}
58 |             onClick={() => setActiveTab("transactions")}
59 |           >
60 |             Transactions
61 |           </button>
62 |           <button
63 |             role="tab"
64 |             className={`tab ${activeTab === "code" ? "tab-active" : ""}`}
65 |             onClick={() => setActiveTab("code")}
66 |           >
67 |             Code
68 |           </button>
69 |           <button
70 |             role="tab"
71 |             className={`tab  ${activeTab === "storage" ? "tab-active" : ""}`}
72 |             onClick={() => setActiveTab("storage")}
73 |           >
74 |             Storage
75 |           </button>
76 |           <button
77 |             role="tab"
78 |             className={`tab  ${activeTab === "logs" ? "tab-active" : ""}`}
79 |             onClick={() => setActiveTab("logs")}
80 |           >
81 |             Logs
82 |           </button>
83 |         </div>
84 |       )}
85 |       {activeTab === "transactions" && (
86 |         <div className="pt-4">
87 |           <TransactionsTable blocks={filteredBlocks} transactionReceipts={transactionReceipts} />
88 |           <PaginationButton
89 |             currentPage={currentPage}
90 |             totalItems={Number(totalBlocks)}
91 |             setCurrentPage={setCurrentPage}
92 |           />
93 |         </div>
94 |       )}
95 |       {activeTab === "code" && contractData && (
96 |         <AddressCodeTab bytecode={contractData.bytecode} assembly={contractData.assembly} />
97 |       )}
98 |       {activeTab === "storage" && <AddressStorageTab address={address} />}
99 |       {activeTab === "logs" && <AddressLogsTab address={address} />}
100 |     </>
101 |   );
102 | };
```

packages/nextjs/app/blockexplorer/_components/PaginationButton.tsx
```
1 | import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
2 | 
3 | type PaginationButtonProps = {
4 |   currentPage: number;
5 |   totalItems: number;
6 |   setCurrentPage: (page: number) => void;
7 | };
8 | 
9 | const ITEMS_PER_PAGE = 20;
10 | 
11 | export const PaginationButton = ({ currentPage, totalItems, setCurrentPage }: PaginationButtonProps) => {
12 |   const isPrevButtonDisabled = currentPage === 0;
13 |   const isNextButtonDisabled = currentPage + 1 >= Math.ceil(totalItems / ITEMS_PER_PAGE);
14 | 
15 |   const prevButtonClass = isPrevButtonDisabled ? "btn-disabled cursor-default" : "btn-primary";
16 |   const nextButtonClass = isNextButtonDisabled ? "btn-disabled cursor-default" : "btn-primary";
17 | 
18 |   if (isNextButtonDisabled && isPrevButtonDisabled) return null;
19 | 
20 |   return (
21 |     <div className="mt-5 justify-end flex gap-3 mx-5">
22 |       <button
23 |         className={`btn btn-sm ${prevButtonClass}`}
24 |         disabled={isPrevButtonDisabled}
25 |         onClick={() => setCurrentPage(currentPage - 1)}
26 |       >
27 |         <ArrowLeftIcon className="h-4 w-4" />
28 |       </button>
29 |       <span className="self-center text-primary-content font-medium">Page {currentPage + 1}</span>
30 |       <button
31 |         className={`btn btn-sm ${nextButtonClass}`}
32 |         disabled={isNextButtonDisabled}
33 |         onClick={() => setCurrentPage(currentPage + 1)}
34 |       >
35 |         <ArrowRightIcon className="h-4 w-4" />
36 |       </button>
37 |     </div>
38 |   );
39 | };
```

packages/nextjs/app/blockexplorer/_components/SearchBar.tsx
```
1 | "use client";
2 | 
3 | import { useState } from "react";
4 | import { useRouter } from "next/navigation";
5 | import { isAddress, isHex } from "viem";
6 | import { hardhat } from "viem/chains";
7 | import { usePublicClient } from "wagmi";
8 | 
9 | export const SearchBar = () => {
10 |   const [searchInput, setSearchInput] = useState("");
11 |   const router = useRouter();
12 | 
13 |   const client = usePublicClient({ chainId: hardhat.id });
14 | 
15 |   const handleSearch = async (event: React.FormEvent) => {
16 |     event.preventDefault();
17 |     if (isHex(searchInput)) {
18 |       try {
19 |         const tx = await client?.getTransaction({ hash: searchInput });
20 |         if (tx) {
21 |           router.push(`/blockexplorer/transaction/${searchInput}`);
22 |           return;
23 |         }
24 |       } catch (error) {
25 |         console.error("Failed to fetch transaction:", error);
26 |       }
27 |     }
28 | 
29 |     if (isAddress(searchInput)) {
30 |       router.push(`/blockexplorer/address/${searchInput}`);
31 |       return;
32 |     }
33 |   };
34 | 
35 |   return (
36 |     <form onSubmit={handleSearch} className="flex items-center justify-end mb-5 space-x-3 mx-5">
37 |       <input
38 |         className="border-primary bg-base-100 text-base-content placeholder:text-base-content/50 p-2 mr-2 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-md focus:outline-hidden focus:ring-2 focus:ring-accent"
39 |         type="text"
40 |         value={searchInput}
41 |         placeholder="Search by hash or address"
42 |         onChange={e => setSearchInput(e.target.value)}
43 |       />
44 |       <button className="btn btn-sm btn-primary" type="submit">
45 |         Search
46 |       </button>
47 |     </form>
48 |   );
49 | };
```

packages/nextjs/app/blockexplorer/_components/TransactionHash.tsx
```
1 | import Link from "next/link";
2 | import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
3 | import { useCopyToClipboard } from "~~/hooks/scaffold-eth/useCopyToClipboard";
4 | 
5 | export const TransactionHash = ({ hash }: { hash: string }) => {
6 |   const { copyToClipboard: copyAddressToClipboard, isCopiedToClipboard: isAddressCopiedToClipboard } =
7 |     useCopyToClipboard();
8 | 
9 |   return (
10 |     <div className="flex items-center">
11 |       <Link href={`/blockexplorer/transaction/${hash}`}>
12 |         {hash?.substring(0, 6)}...{hash?.substring(hash.length - 4)}
13 |       </Link>
14 |       {isAddressCopiedToClipboard ? (
15 |         <CheckCircleIcon
16 |           className="ml-1.5 text-xl font-normal text-base-content h-5 w-5 cursor-pointer"
17 |           aria-hidden="true"
18 |         />
19 |       ) : (
20 |         <DocumentDuplicateIcon
21 |           className="ml-1.5 text-xl font-normal h-5 w-5 cursor-pointer"
22 |           aria-hidden="true"
23 |           onClick={() => copyAddressToClipboard(hash)}
24 |         />
25 |       )}
26 |     </div>
27 |   );
28 | };
```

packages/nextjs/app/blockexplorer/_components/TransactionsTable.tsx
```
1 | import { TransactionHash } from "./TransactionHash";
2 | import { formatEther } from "viem";
3 | import { Address } from "~~/components/scaffold-eth";
4 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
5 | import { TransactionWithFunction } from "~~/utils/scaffold-eth";
6 | import { TransactionsTableProps } from "~~/utils/scaffold-eth/";
7 | 
8 | export const TransactionsTable = ({ blocks, transactionReceipts }: TransactionsTableProps) => {
9 |   const { targetNetwork } = useTargetNetwork();
10 | 
11 |   return (
12 |     <div className="flex justify-center px-4 md:px-0">
13 |       <div className="overflow-x-auto w-full shadow-2xl rounded-xl">
14 |         <table className="table text-xl bg-base-100 table-zebra w-full md:table-md table-sm">
15 |           <thead>
16 |             <tr className="rounded-xl text-sm text-base-content">
17 |               <th className="bg-primary">Transaction Hash</th>
18 |               <th className="bg-primary">Function Called</th>
19 |               <th className="bg-primary">Block Number</th>
20 |               <th className="bg-primary">Time Mined</th>
21 |               <th className="bg-primary">From</th>
22 |               <th className="bg-primary">To</th>
23 |               <th className="bg-primary text-end">Value ({targetNetwork.nativeCurrency.symbol})</th>
24 |             </tr>
25 |           </thead>
26 |           <tbody>
27 |             {blocks.map(block =>
28 |               (block.transactions as TransactionWithFunction[]).map(tx => {
29 |                 const receipt = transactionReceipts[tx.hash];
30 |                 const timeMined = new Date(Number(block.timestamp) * 1000).toLocaleString();
31 |                 const functionCalled = tx.input.substring(0, 10);
32 | 
33 |                 return (
34 |                   <tr key={tx.hash} className="hover text-sm">
35 |                     <td className="w-1/12 md:py-4">
36 |                       <TransactionHash hash={tx.hash} />
37 |                     </td>
38 |                     <td className="w-2/12 md:py-4">
39 |                       {tx.functionName === "0x" ? "" : <span className="mr-1">{tx.functionName}</span>}
40 |                       {functionCalled !== "0x" && (
41 |                         <span className="badge badge-primary font-bold text-xs">{functionCalled}</span>
42 |                       )}
43 |                     </td>
44 |                     <td className="w-1/12 md:py-4">{block.number?.toString()}</td>
45 |                     <td className="w-2/12 md:py-4">{timeMined}</td>
46 |                     <td className="w-2/12 md:py-4">
47 |                       <Address address={tx.from} size="sm" onlyEnsOrAddress />
48 |                     </td>
49 |                     <td className="w-2/12 md:py-4">
50 |                       {!receipt?.contractAddress ? (
51 |                         tx.to && <Address address={tx.to} size="sm" onlyEnsOrAddress />
52 |                       ) : (
53 |                         <div className="relative">
54 |                           <Address address={receipt.contractAddress} size="sm" onlyEnsOrAddress />
55 |                           <small className="absolute top-4 left-4">(Contract Creation)</small>
56 |                         </div>
57 |                       )}
58 |                     </td>
59 |                     <td className="text-right md:py-4">
60 |                       {formatEther(tx.value)} {targetNetwork.nativeCurrency.symbol}
61 |                     </td>
62 |                   </tr>
63 |                 );
64 |               }),
65 |             )}
66 |           </tbody>
67 |         </table>
68 |       </div>
69 |     </div>
70 |   );
71 | };
```

packages/nextjs/app/blockexplorer/_components/index.tsx
```
1 | export * from "./SearchBar";
2 | export * from "./BackButton";
3 | export * from "./AddressCodeTab";
4 | export * from "./TransactionHash";
5 | export * from "./ContractTabs";
6 | export * from "./PaginationButton";
7 | export * from "./TransactionsTable";
```

packages/nextjs/app/debug/_components/DebugContracts.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useMemo } from "react";
4 | import { useSessionStorage } from "usehooks-ts";
5 | import { BarsArrowUpIcon } from "@heroicons/react/20/solid";
6 | import { ContractUI } from "~~/app/debug/_components/contract";
7 | import { ContractName, GenericContract } from "~~/utils/scaffold-eth/contract";
8 | import { useAllContracts } from "~~/utils/scaffold-eth/contractsData";
9 | 
10 | const selectedContractStorageKey = "scaffoldEth2.selectedContract";
11 | 
12 | export function DebugContracts() {
13 |   const contractsData = useAllContracts();
14 |   const contractNames = useMemo(
15 |     () =>
16 |       Object.keys(contractsData).sort((a, b) => {
17 |         return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
18 |       }) as ContractName[],
19 |     [contractsData],
20 |   );
21 | 
22 |   const [selectedContract, setSelectedContract] = useSessionStorage<ContractName>(
23 |     selectedContractStorageKey,
24 |     contractNames[0],
25 |     { initializeWithValue: false },
26 |   );
27 | 
28 |   useEffect(() => {
29 |     if (!contractNames.includes(selectedContract)) {
30 |       setSelectedContract(contractNames[0]);
31 |     }
32 |   }, [contractNames, selectedContract, setSelectedContract]);
33 | 
34 |   return (
35 |     <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
36 |       {contractNames.length === 0 ? (
37 |         <div className="text-center py-20">
38 |           <p className="text-3xl text-gray-400 mb-4">No contracts found!</p>
39 |           <p className="text-gray-500">Deploy your contracts to see them here</p>
40 |         </div>
41 |       ) : (
42 |         <>
43 |           {contractNames.length > 1 && (
44 |             <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
45 |               {contractNames.map(contractName => (
46 |                 <button
47 |                   className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
48 |                     contractName === selectedContract
49 |                       ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-300"
50 |                       : "bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white"
51 |                   }`}
52 |                   key={contractName}
53 |                   onClick={() => setSelectedContract(contractName)}
54 |                 >
55 |                   {contractName}
56 |                   {(contractsData[contractName] as GenericContract)?.external && (
57 |                     <span className="ml-2 inline-flex items-center" title="External contract">
58 |                       <BarsArrowUpIcon className="h-4 w-4" />
59 |                     </span>
60 |                   )}
61 |                 </button>
62 |               ))}
63 |             </div>
64 |           )}
65 |           <div className="w-full max-w-7xl px-6 lg:px-10">
66 |             <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
67 |               {contractNames.map(contractName => (
68 |                 <ContractUI
69 |                   key={contractName}
70 |                   contractName={contractName}
71 |                   className={contractName === selectedContract ? "" : "hidden"}
72 |                 />
73 |               ))}
74 |             </div>
75 |           </div>
76 |         </>
77 |       )}
78 |     </div>
79 |   );
80 | }
```

packages/nextjs/components/scaffold-eth/Address/Address.tsx
```
1 | "use client";
2 | 
3 | import { AddressCopyIcon } from "./AddressCopyIcon";
4 | import { AddressLinkWrapper } from "./AddressLinkWrapper";
5 | import { Address as AddressType, getAddress, isAddress } from "viem";
6 | import { normalize } from "viem/ens";
7 | import { useEnsAvatar, useEnsName } from "wagmi";
8 | import { BlockieAvatar } from "~~/components/scaffold-eth";
9 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
10 | import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";
11 | 
12 | const textSizeMap = {
13 |   "3xs": "text-[10px]",
14 |   "2xs": "text-[11px]",
15 |   xs: "text-xs",
16 |   sm: "text-sm",
17 |   base: "text-base",
18 |   lg: "text-lg",
19 |   xl: "text-xl",
20 |   "2xl": "text-2xl",
21 |   "3xl": "text-3xl",
22 |   "4xl": "text-4xl",
23 | } as const;
24 | 
25 | const blockieSizeMap = {
26 |   "3xs": 4,
27 |   "2xs": 5,
28 |   xs: 6,
29 |   sm: 7,
30 |   base: 8,
31 |   lg: 9,
32 |   xl: 10,
33 |   "2xl": 12,
34 |   "3xl": 15,
35 |   "4xl": 17,
36 |   "5xl": 19,
37 |   "6xl": 21,
38 |   "7xl": 23,
39 | } as const;
40 | 
41 | const copyIconSizeMap = {
42 |   "3xs": "h-2.5 w-2.5",
43 |   "2xs": "h-3 w-3",
44 |   xs: "h-3.5 w-3.5",
45 |   sm: "h-4 w-4",
46 |   base: "h-[18px] w-[18px]",
47 |   lg: "h-5 w-5",
48 |   xl: "h-[22px] w-[22px]",
49 |   "2xl": "h-6 w-6",
50 |   "3xl": "h-[26px] w-[26px]",
51 |   "4xl": "h-7 w-7",
52 | } as const;
53 | 
54 | type SizeMap = typeof textSizeMap | typeof blockieSizeMap;
55 | 
56 | const getNextSize = <T extends SizeMap>(sizeMap: T, currentSize: keyof T, step = 1): keyof T => {
57 |   const sizes = Object.keys(sizeMap) as Array<keyof T>;
58 |   const currentIndex = sizes.indexOf(currentSize);
59 |   const nextIndex = Math.min(currentIndex + step, sizes.length - 1);
60 |   return sizes[nextIndex];
61 | };
62 | 
63 | const getPrevSize = <T extends SizeMap>(sizeMap: T, currentSize: keyof T, step = 1): keyof T => {
64 |   const sizes = Object.keys(sizeMap) as Array<keyof T>;
65 |   const currentIndex = sizes.indexOf(currentSize);
66 |   const prevIndex = Math.max(currentIndex - step, 0);
67 |   return sizes[prevIndex];
68 | };
69 | 
70 | type AddressProps = {
71 |   address?: AddressType;
72 |   disableAddressLink?: boolean;
73 |   format?: "short" | "long";
74 |   size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
75 |   onlyEnsOrAddress?: boolean;
76 | };
77 | 
78 | export const Address = ({
79 |   address,
80 |   disableAddressLink,
81 |   format,
82 |   size = "base",
83 |   onlyEnsOrAddress = false,
84 | }: AddressProps) => {
85 |   const checkSumAddress = address ? getAddress(address) : undefined;
86 | 
87 |   const { targetNetwork } = useTargetNetwork();
88 | 
89 |   const { data: ens, isLoading: isEnsNameLoading } = useEnsName({
90 |     address: checkSumAddress,
91 |     chainId: 1,
92 |     query: {
93 |       enabled: isAddress(checkSumAddress ?? ""),
94 |     },
95 |   });
96 |   const { data: ensAvatar } = useEnsAvatar({
97 |     name: ens ? normalize(ens) : undefined,
98 |     chainId: 1,
99 |     query: {
100 |       enabled: Boolean(ens),
101 |       gcTime: 30_000,
102 |     },
103 |   });
104 | 
105 |   const shortAddress = checkSumAddress?.slice(0, 6) + "..." + checkSumAddress?.slice(-4);
106 |   const displayAddress = format === "long" ? checkSumAddress : shortAddress;
107 |   const displayEnsOrAddress = ens || displayAddress;
108 | 
109 |   const showSkeleton = !checkSumAddress || (!onlyEnsOrAddress && (ens || isEnsNameLoading));
110 | 
111 |   const addressSize = showSkeleton && !onlyEnsOrAddress ? getPrevSize(textSizeMap, size, 2) : size;
112 |   const ensSize = getNextSize(textSizeMap, addressSize);
113 |   const blockieSize = showSkeleton && !onlyEnsOrAddress ? getNextSize(blockieSizeMap, addressSize, 4) : addressSize;
114 | 
115 |   if (!checkSumAddress) {
116 |     return (
117 |       <div className="flex items-center">
118 |         <div
119 |           className="shrink-0 skeleton rounded-full"
120 |           style={{
121 |             width: (blockieSizeMap[blockieSize] * 24) / blockieSizeMap["base"],
122 |             height: (blockieSizeMap[blockieSize] * 24) / blockieSizeMap["base"],
123 |           }}
124 |         ></div>
125 |         <div className="flex flex-col space-y-1">
126 |           {!onlyEnsOrAddress && (
127 |             <div className={`ml-1.5 skeleton rounded-lg font-bold ${textSizeMap[ensSize]}`}>
128 |               <span className="invisible">0x1234...56789</span>
129 |             </div>
130 |           )}
131 |           <div className={`ml-1.5 skeleton rounded-lg ${textSizeMap[addressSize]}`}>
132 |             <span className="invisible">0x1234...56789</span>
133 |           </div>
134 |         </div>
135 |       </div>
136 |     );
137 |   }
138 | 
139 |   if (!isAddress(checkSumAddress)) {
140 |     return <span className="text-error">Wrong address</span>;
141 |   }
142 | 
143 |   const blockExplorerAddressLink = getBlockExplorerAddressLink(targetNetwork, checkSumAddress);
144 | 
145 |   return (
146 |     <div className="flex items-center shrink-0">
147 |       <div className="shrink-0">
148 |         <BlockieAvatar
149 |           address={checkSumAddress}
150 |           ensImage={ensAvatar}
151 |           size={(blockieSizeMap[blockieSize] * 24) / blockieSizeMap["base"]}
152 |         />
153 |       </div>
154 |       <div className="flex flex-col">
155 |         {showSkeleton &&
156 |           (isEnsNameLoading ? (
157 |             <div className={`ml-1.5 skeleton rounded-lg font-bold ${textSizeMap[ensSize]}`}>
158 |               <span className="invisible">{shortAddress}</span>
159 |             </div>
160 |           ) : (
161 |             <span className={`ml-1.5 ${textSizeMap[ensSize]} font-bold`}>
162 |               <AddressLinkWrapper
163 |                 disableAddressLink={disableAddressLink}
164 |                 blockExplorerAddressLink={blockExplorerAddressLink}
165 |               >
166 |                 {ens}
167 |               </AddressLinkWrapper>
168 |             </span>
169 |           ))}
170 |         <div className="flex">
171 |           <span className={`ml-1.5 ${textSizeMap[addressSize]} font-normal`}>
172 |             <AddressLinkWrapper
173 |               disableAddressLink={disableAddressLink}
174 |               blockExplorerAddressLink={blockExplorerAddressLink}
175 |             >
176 |               {onlyEnsOrAddress ? displayEnsOrAddress : displayAddress}
177 |             </AddressLinkWrapper>
178 |           </span>
179 |           <AddressCopyIcon
180 |             className={`ml-1 ${copyIconSizeMap[addressSize]} cursor-pointer`}
181 |             address={checkSumAddress}
182 |           />
183 |         </div>
184 |       </div>
185 |     </div>
186 |   );
187 | };
```

packages/nextjs/components/scaffold-eth/Address/AddressCopyIcon.tsx
```
1 | import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
2 | import { useCopyToClipboard } from "~~/hooks/scaffold-eth/useCopyToClipboard";
3 | 
4 | export const AddressCopyIcon = ({ className, address }: { className?: string; address: string }) => {
5 |   const { copyToClipboard: copyAddressToClipboard, isCopiedToClipboard: isAddressCopiedToClipboard } =
6 |     useCopyToClipboard();
7 | 
8 |   return (
9 |     <button
10 |       onClick={e => {
11 |         e.stopPropagation();
12 |         copyAddressToClipboard(address);
13 |       }}
14 |       type="button"
15 |     >
16 |       {isAddressCopiedToClipboard ? (
17 |         <CheckCircleIcon className={className} aria-hidden="true" />
18 |       ) : (
19 |         <DocumentDuplicateIcon className={className} aria-hidden="true" />
20 |       )}
21 |     </button>
22 |   );
23 | };
```

packages/nextjs/components/scaffold-eth/Address/AddressLinkWrapper.tsx
```
1 | import Link from "next/link";
2 | import { hardhat } from "viem/chains";
3 | import { useTargetNetwork } from "~~/hooks/scaffold-eth";
4 | 
5 | type AddressLinkWrapperProps = {
6 |   children: React.ReactNode;
7 |   disableAddressLink?: boolean;
8 |   blockExplorerAddressLink: string;
9 | };
10 | 
11 | export const AddressLinkWrapper = ({
12 |   children,
13 |   disableAddressLink,
14 |   blockExplorerAddressLink,
15 | }: AddressLinkWrapperProps) => {
16 |   const { targetNetwork } = useTargetNetwork();
17 | 
18 |   return disableAddressLink ? (
19 |     <>{children}</>
20 |   ) : (
21 |     <Link
22 |       href={blockExplorerAddressLink}
23 |       target={targetNetwork.id === hardhat.id ? undefined : "_blank"}
24 |       rel={targetNetwork.id === hardhat.id ? undefined : "noopener noreferrer"}
25 |     >
26 |       {children}
27 |     </Link>
28 |   );
29 | };
```

packages/nextjs/components/scaffold-eth/Input/AddressInput.tsx
```
1 | import { useEffect, useState } from "react";
2 | import { blo } from "blo";
3 | import { useDebounceValue } from "usehooks-ts";
4 | import { Address, isAddress } from "viem";
5 | import { normalize } from "viem/ens";
6 | import { useEnsAddress, useEnsAvatar, useEnsName } from "wagmi";
7 | import { CommonInputProps, InputBase, isENS } from "~~/components/scaffold-eth";
8 | 
9 | /**
10 |  * Address input with ENS name resolution
11 |  */
12 | export const AddressInput = ({ value, name, placeholder, onChange, disabled }: CommonInputProps<Address | string>) => {
13 |   // Debounce the input to keep clean RPC calls when resolving ENS names
14 |   // If the input is an address, we don't need to debounce it
15 |   const [_debouncedValue] = useDebounceValue(value, 500);
16 |   const debouncedValue = isAddress(value) ? value : _debouncedValue;
17 |   const isDebouncedValueLive = debouncedValue === value;
18 | 
19 |   // If the user changes the input after an ENS name is already resolved, we want to remove the stale result
20 |   const settledValue = isDebouncedValueLive ? debouncedValue : undefined;
21 | 
22 |   const {
23 |     data: ensAddress,
24 |     isLoading: isEnsAddressLoading,
25 |     isError: isEnsAddressError,
26 |     isSuccess: isEnsAddressSuccess,
27 |   } = useEnsAddress({
28 |     name: settledValue,
29 |     chainId: 1,
30 |     query: {
31 |       gcTime: 30_000,
32 |       enabled: isDebouncedValueLive && isENS(debouncedValue),
33 |     },
34 |   });
35 | 
36 |   const [enteredEnsName, setEnteredEnsName] = useState<string>();
37 |   const {
38 |     data: ensName,
39 |     isLoading: isEnsNameLoading,
40 |     isError: isEnsNameError,
41 |     isSuccess: isEnsNameSuccess,
42 |   } = useEnsName({
43 |     address: settledValue as Address,
44 |     chainId: 1,
45 |     query: {
46 |       enabled: isAddress(debouncedValue),
47 |       gcTime: 30_000,
48 |     },
49 |   });
50 | 
51 |   const { data: ensAvatar, isLoading: isEnsAvatarLoading } = useEnsAvatar({
52 |     name: ensName ? normalize(ensName) : undefined,
53 |     chainId: 1,
54 |     query: {
55 |       enabled: Boolean(ensName),
56 |       gcTime: 30_000,
57 |     },
58 |   });
59 | 
60 |   // ens => address
61 |   useEffect(() => {
62 |     if (!ensAddress) return;
63 | 
64 |     // ENS resolved successfully
65 |     setEnteredEnsName(debouncedValue);
66 |     onChange(ensAddress);
67 |   }, [ensAddress, onChange, debouncedValue]);
68 | 
69 |   useEffect(() => {
70 |     setEnteredEnsName(undefined);
71 |   }, [value]);
72 | 
73 |   const reFocus =
74 |     isEnsAddressError ||
75 |     isEnsNameError ||
76 |     isEnsNameSuccess ||
77 |     isEnsAddressSuccess ||
78 |     ensName === null ||
79 |     ensAddress === null;
80 | 
81 |   return (
82 |     <InputBase<Address>
83 |       name={name}
84 |       placeholder={placeholder}
85 |       error={ensAddress === null}
86 |       value={value as Address}
87 |       onChange={onChange}
88 |       disabled={isEnsAddressLoading || isEnsNameLoading || disabled}
89 |       reFocus={reFocus}
90 |       prefix={
91 |         ensName ? (
92 |           <div className="flex bg-base-300 rounded-l-full items-center">
93 |             {isEnsAvatarLoading && <div className="skeleton bg-base-200 w-[35px] h-[35px] rounded-full shrink-0"></div>}
94 |             {ensAvatar ? (
95 |               <span className="w-[35px]">
96 |                 {
97 |                   // eslint-disable-next-line
98 |                   <img className="w-full rounded-full" src={ensAvatar} alt={`${ensAddress} avatar`} />
99 |                 }
100 |               </span>
101 |             ) : null}
102 |             <span className="text-accent px-2">{enteredEnsName ?? ensName}</span>
103 |           </div>
104 |         ) : (
105 |           (isEnsNameLoading || isEnsAddressLoading) && (
106 |             <div className="flex bg-base-300 rounded-l-full items-center gap-2 pr-2">
107 |               <div className="skeleton bg-base-200 w-[35px] h-[35px] rounded-full shrink-0"></div>
108 |               <div className="skeleton bg-base-200 h-3 w-20"></div>
109 |             </div>
110 |           )
111 |         )
112 |       }
113 |       suffix={
114 |         // Don't want to use nextJS Image here (and adding remote patterns for the URL)
115 |         // eslint-disable-next-line @next/next/no-img-element
116 |         value && <img alt="" className="rounded-full!" src={blo(value as `0x${string}`)} width="35" height="35" />
117 |       }
118 |     />
119 |   );
120 | };
```

packages/nextjs/components/scaffold-eth/Input/Bytes32Input.tsx
```
1 | import { useCallback } from "react";
2 | import { hexToString, isHex, stringToHex } from "viem";
3 | import { CommonInputProps, InputBase } from "~~/components/scaffold-eth";
4 | 
5 | export const Bytes32Input = ({ value, onChange, name, placeholder, disabled }: CommonInputProps) => {
6 |   const convertStringToBytes32 = useCallback(() => {
7 |     if (!value) {
8 |       return;
9 |     }
10 |     onChange(isHex(value) ? hexToString(value, { size: 32 }) : stringToHex(value, { size: 32 }));
11 |   }, [onChange, value]);
12 | 
13 |   return (
14 |     <InputBase
15 |       name={name}
16 |       value={value}
17 |       placeholder={placeholder}
18 |       onChange={onChange}
19 |       disabled={disabled}
20 |       suffix={
21 |         <button
22 |           className="self-center cursor-pointer text-xl font-semibold px-4 text-accent"
23 |           onClick={convertStringToBytes32}
24 |           type="button"
25 |         >
26 |           #
27 |         </button>
28 |       }
29 |     />
30 |   );
31 | };
```

packages/nextjs/components/scaffold-eth/Input/BytesInput.tsx
```
1 | import { useCallback } from "react";
2 | import { bytesToString, isHex, toBytes, toHex } from "viem";
3 | import { CommonInputProps, InputBase } from "~~/components/scaffold-eth";
4 | 
5 | export const BytesInput = ({ value, onChange, name, placeholder, disabled }: CommonInputProps) => {
6 |   const convertStringToBytes = useCallback(() => {
7 |     onChange(isHex(value) ? bytesToString(toBytes(value)) : toHex(toBytes(value)));
8 |   }, [onChange, value]);
9 | 
10 |   return (
11 |     <InputBase
12 |       name={name}
13 |       value={value}
14 |       placeholder={placeholder}
15 |       onChange={onChange}
16 |       disabled={disabled}
17 |       suffix={
18 |         <button
19 |           className="self-center cursor-pointer text-xl font-semibold px-4 text-accent"
20 |           onClick={convertStringToBytes}
21 |           type="button"
22 |         >
23 |           #
24 |         </button>
25 |       }
26 |     />
27 |   );
28 | };
```

packages/nextjs/components/scaffold-eth/Input/EtherInput.tsx
```
1 | import { useMemo, useState } from "react";
2 | import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
3 | import { CommonInputProps, InputBase, SIGNED_NUMBER_REGEX } from "~~/components/scaffold-eth";
4 | import { useDisplayUsdMode } from "~~/hooks/scaffold-eth/useDisplayUsdMode";
5 | import { useGlobalState } from "~~/services/store/store";
6 | 
7 | const MAX_DECIMALS_USD = 2;
8 | 
9 | function etherValueToDisplayValue(usdMode: boolean, etherValue: string, nativeCurrencyPrice: number) {
10 |   if (usdMode && nativeCurrencyPrice) {
11 |     const parsedEthValue = parseFloat(etherValue);
12 |     if (Number.isNaN(parsedEthValue)) {
13 |       return etherValue;
14 |     } else {
15 |       // We need to round the value rather than use toFixed,
16 |       // since otherwise a user would not be able to modify the decimal value
17 |       return (
18 |         Math.round(parsedEthValue * nativeCurrencyPrice * 10 ** MAX_DECIMALS_USD) /
19 |         10 ** MAX_DECIMALS_USD
20 |       ).toString();
21 |     }
22 |   } else {
23 |     return etherValue;
24 |   }
25 | }
26 | 
27 | function displayValueToEtherValue(usdMode: boolean, displayValue: string, nativeCurrencyPrice: number) {
28 |   if (usdMode && nativeCurrencyPrice) {
29 |     const parsedDisplayValue = parseFloat(displayValue);
30 |     if (Number.isNaN(parsedDisplayValue)) {
31 |       // Invalid number.
32 |       return displayValue;
33 |     } else {
34 |       // Compute the ETH value if a valid number.
35 |       return (parsedDisplayValue / nativeCurrencyPrice).toString();
36 |     }
37 |   } else {
38 |     return displayValue;
39 |   }
40 | }
41 | 
42 | /**
43 |  * Input for ETH amount with USD conversion.
44 |  *
45 |  * onChange will always be called with the value in ETH
46 |  */
47 | export const EtherInput = ({
48 |   value,
49 |   name,
50 |   placeholder,
51 |   onChange,
52 |   disabled,
53 |   usdMode,
54 | }: CommonInputProps & { usdMode?: boolean }) => {
55 |   const [transitoryDisplayValue, setTransitoryDisplayValue] = useState<string>();
56 |   const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
57 |   const isNativeCurrencyPriceFetching = useGlobalState(state => state.nativeCurrency.isFetching);
58 | 
59 |   const { displayUsdMode, toggleDisplayUsdMode } = useDisplayUsdMode({ defaultUsdMode: usdMode });
60 | 
61 |   // The displayValue is derived from the ether value that is controlled outside of the component
62 |   // In usdMode, it is converted to its usd value, in regular mode it is unaltered
63 |   const displayValue = useMemo(() => {
64 |     const newDisplayValue = etherValueToDisplayValue(displayUsdMode, value, nativeCurrencyPrice || 0);
65 |     if (transitoryDisplayValue && parseFloat(newDisplayValue) === parseFloat(transitoryDisplayValue)) {
66 |       return transitoryDisplayValue;
67 |     }
68 |     // Clear any transitory display values that might be set
69 |     setTransitoryDisplayValue(undefined);
70 |     return newDisplayValue;
71 |   }, [nativeCurrencyPrice, transitoryDisplayValue, displayUsdMode, value]);
72 | 
73 |   const handleChangeNumber = (newValue: string) => {
74 |     if (newValue && !SIGNED_NUMBER_REGEX.test(newValue)) {
75 |       return;
76 |     }
77 | 
78 |     // Following condition is a fix to prevent usdMode from experiencing different display values
79 |     // than what the user entered. This can happen due to floating point rounding errors that are introduced in the back and forth conversion
80 |     if (displayUsdMode) {
81 |       const decimals = newValue.split(".")[1];
82 |       if (decimals && decimals.length > MAX_DECIMALS_USD) {
83 |         return;
84 |       }
85 |     }
86 | 
87 |     // Since the display value is a derived state (calculated from the ether value), usdMode would not allow introducing a decimal point.
88 |     // This condition handles a transitory state for a display value with a trailing decimal sign
89 |     if (newValue.endsWith(".") || newValue.endsWith(".0")) {
90 |       setTransitoryDisplayValue(newValue);
91 |     } else {
92 |       setTransitoryDisplayValue(undefined);
93 |     }
94 | 
95 |     const newEthValue = displayValueToEtherValue(displayUsdMode, newValue, nativeCurrencyPrice || 0);
96 |     onChange(newEthValue);
97 |   };
98 | 
99 |   return (
100 |     <InputBase
101 |       name={name}
102 |       value={displayValue}
103 |       placeholder={placeholder}
104 |       onChange={handleChangeNumber}
105 |       disabled={disabled}
106 |       prefix={<span className="pl-4 -mr-2 text-accent self-center">{displayUsdMode ? "$" : "Ξ"}</span>}
107 |       suffix={
108 |         <div
109 |           className={`${
110 |             nativeCurrencyPrice > 0
111 |               ? ""
112 |               : "tooltip tooltip-secondary before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
113 |           }`}
114 |           data-tip={isNativeCurrencyPriceFetching ? "Fetching price" : "Unable to fetch price"}
115 |         >
116 |           <button
117 |             className="btn btn-primary h-[2.2rem] min-h-[2.2rem]"
118 |             onClick={toggleDisplayUsdMode}
119 |             disabled={!displayUsdMode && !nativeCurrencyPrice}
120 |             type="button"
121 |           >
122 |             <ArrowsRightLeftIcon className="h-3 w-3 cursor-pointer" aria-hidden="true" />
123 |           </button>
124 |         </div>
125 |       }
126 |     />
127 |   );
128 | };
```

packages/nextjs/components/scaffold-eth/Input/InputBase.tsx
```
1 | import { ChangeEvent, FocusEvent, ReactNode, useCallback, useEffect, useRef } from "react";
2 | import { CommonInputProps } from "~~/components/scaffold-eth";
3 | 
4 | type InputBaseProps<T> = CommonInputProps<T> & {
5 |   error?: boolean;
6 |   prefix?: ReactNode;
7 |   suffix?: ReactNode;
8 |   reFocus?: boolean;
9 | };
10 | 
11 | export const InputBase = <T extends { toString: () => string } | undefined = string>({
12 |   name,
13 |   value,
14 |   onChange,
15 |   placeholder,
16 |   error,
17 |   disabled,
18 |   prefix,
19 |   suffix,
20 |   reFocus,
21 | }: InputBaseProps<T>) => {
22 |   const inputReft = useRef<HTMLInputElement>(null);
23 | 
24 |   let modifier = "";
25 |   if (error) {
26 |     modifier = "border-error";
27 |   } else if (disabled) {
28 |     modifier = "border-disabled bg-base-300";
29 |   }
30 | 
31 |   const handleChange = useCallback(
32 |     (e: ChangeEvent<HTMLInputElement>) => {
33 |       onChange(e.target.value as unknown as T);
34 |     },
35 |     [onChange],
36 |   );
37 | 
38 |   // Runs only when reFocus prop is passed, useful for setting the cursor
39 |   // at the end of the input. Example AddressInput
40 |   const onFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
41 |     if (reFocus !== undefined) {
42 |       e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
43 |     }
44 |   };
45 |   useEffect(() => {
46 |     if (reFocus !== undefined && reFocus === true) inputReft.current?.focus();
47 |   }, [reFocus]);
48 | 
49 |   return (
50 |     <div className={`flex border-2 border-base-300 bg-base-200 rounded-full text-accent ${modifier}`}>
51 |       {prefix}
52 |       <input
53 |         className="input input-ghost focus-within:border-transparent focus:outline-hidden focus:bg-transparent h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/70 text-base-content/70 focus:text-base-content/70"
54 |         placeholder={placeholder}
55 |         name={name}
56 |         value={value?.toString()}
57 |         onChange={handleChange}
58 |         disabled={disabled}
59 |         autoComplete="off"
60 |         ref={inputReft}
61 |         onFocus={onFocus}
62 |       />
63 |       {suffix}
64 |     </div>
65 |   );
66 | };
```

packages/nextjs/components/scaffold-eth/Input/IntegerInput.tsx
```
1 | import { useCallback, useEffect, useState } from "react";
2 | import { parseEther } from "viem";
3 | import { CommonInputProps, InputBase, IntegerVariant, isValidInteger } from "~~/components/scaffold-eth";
4 | 
5 | type IntegerInputProps = CommonInputProps<string> & {
6 |   variant?: IntegerVariant;
7 |   disableMultiplyBy1e18?: boolean;
8 | };
9 | 
10 | export const IntegerInput = ({
11 |   value,
12 |   onChange,
13 |   name,
14 |   placeholder,
15 |   disabled,
16 |   variant = IntegerVariant.UINT256,
17 |   disableMultiplyBy1e18 = false,
18 | }: IntegerInputProps) => {
19 |   const [inputError, setInputError] = useState(false);
20 |   const multiplyBy1e18 = useCallback(() => {
21 |     if (!value) {
22 |       return;
23 |     }
24 |     return onChange(parseEther(value).toString());
25 |   }, [onChange, value]);
26 | 
27 |   useEffect(() => {
28 |     if (isValidInteger(variant, value)) {
29 |       setInputError(false);
30 |     } else {
31 |       setInputError(true);
32 |     }
33 |   }, [value, variant]);
34 | 
35 |   return (
36 |     <InputBase
37 |       name={name}
38 |       value={value}
39 |       placeholder={placeholder}
40 |       error={inputError}
41 |       onChange={onChange}
42 |       disabled={disabled}
43 |       suffix={
44 |         !inputError &&
45 |         !disableMultiplyBy1e18 && (
46 |           <div
47 |             className="space-x-4 flex tooltip tooltip-top tooltip-secondary before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
48 |             data-tip="Multiply by 1e18 (wei)"
49 |           >
50 |             <button
51 |               className={`${disabled ? "cursor-not-allowed" : "cursor-pointer"} font-semibold px-4 text-accent`}
52 |               onClick={multiplyBy1e18}
53 |               disabled={disabled}
54 |               type="button"
55 |             >
56 |               ∗
57 |             </button>
58 |           </div>
59 |         )
60 |       }
61 |     />
62 |   );
63 | };
```

packages/nextjs/components/scaffold-eth/Input/index.ts
```
1 | "use client";
2 | 
3 | export * from "./AddressInput";
4 | export * from "./Bytes32Input";
5 | export * from "./BytesInput";
6 | export * from "./EtherInput";
7 | export * from "./InputBase";
8 | export * from "./IntegerInput";
9 | export * from "./utils";
```

packages/nextjs/components/scaffold-eth/Input/utils.ts
```
1 | export type CommonInputProps<T = string> = {
2 |   value: T;
3 |   onChange: (newValue: T) => void;
4 |   name?: string;
5 |   placeholder?: string;
6 |   disabled?: boolean;
7 | };
8 | 
9 | export enum IntegerVariant {
10 |   UINT8 = "uint8",
11 |   UINT16 = "uint16",
12 |   UINT24 = "uint24",
13 |   UINT32 = "uint32",
14 |   UINT40 = "uint40",
15 |   UINT48 = "uint48",
16 |   UINT56 = "uint56",
17 |   UINT64 = "uint64",
18 |   UINT72 = "uint72",
19 |   UINT80 = "uint80",
20 |   UINT88 = "uint88",
21 |   UINT96 = "uint96",
22 |   UINT104 = "uint104",
23 |   UINT112 = "uint112",
24 |   UINT120 = "uint120",
25 |   UINT128 = "uint128",
26 |   UINT136 = "uint136",
27 |   UINT144 = "uint144",
28 |   UINT152 = "uint152",
29 |   UINT160 = "uint160",
30 |   UINT168 = "uint168",
31 |   UINT176 = "uint176",
32 |   UINT184 = "uint184",
33 |   UINT192 = "uint192",
34 |   UINT200 = "uint200",
35 |   UINT208 = "uint208",
36 |   UINT216 = "uint216",
37 |   UINT224 = "uint224",
38 |   UINT232 = "uint232",
39 |   UINT240 = "uint240",
40 |   UINT248 = "uint248",
41 |   UINT256 = "uint256",
42 |   INT8 = "int8",
43 |   INT16 = "int16",
44 |   INT24 = "int24",
45 |   INT32 = "int32",
46 |   INT40 = "int40",
47 |   INT48 = "int48",
48 |   INT56 = "int56",
49 |   INT64 = "int64",
50 |   INT72 = "int72",
51 |   INT80 = "int80",
52 |   INT88 = "int88",
53 |   INT96 = "int96",
54 |   INT104 = "int104",
55 |   INT112 = "int112",
56 |   INT120 = "int120",
57 |   INT128 = "int128",
58 |   INT136 = "int136",
59 |   INT144 = "int144",
60 |   INT152 = "int152",
61 |   INT160 = "int160",
62 |   INT168 = "int168",
63 |   INT176 = "int176",
64 |   INT184 = "int184",
65 |   INT192 = "int192",
66 |   INT200 = "int200",
67 |   INT208 = "int208",
68 |   INT216 = "int216",
69 |   INT224 = "int224",
70 |   INT232 = "int232",
71 |   INT240 = "int240",
72 |   INT248 = "int248",
73 |   INT256 = "int256",
74 | }
75 | 
76 | export const SIGNED_NUMBER_REGEX = /^-?\d+\.?\d*$/;
77 | export const UNSIGNED_NUMBER_REGEX = /^\.?\d+\.?\d*$/;
78 | 
79 | export const isValidInteger = (dataType: IntegerVariant, value: string) => {
80 |   const isSigned = dataType.startsWith("i");
81 |   const bitcount = Number(dataType.substring(isSigned ? 3 : 4));
82 | 
83 |   let valueAsBigInt;
84 |   try {
85 |     valueAsBigInt = BigInt(value);
86 |     // eslint-disable-next-line @typescript-eslint/no-unused-vars
87 |   } catch (e) {}
88 |   if (typeof valueAsBigInt !== "bigint") {
89 |     if (!value || typeof value !== "string") {
90 |       return true;
91 |     }
92 |     return isSigned ? SIGNED_NUMBER_REGEX.test(value) || value === "-" : UNSIGNED_NUMBER_REGEX.test(value);
93 |   } else if (!isSigned && valueAsBigInt < 0) {
94 |     return false;
95 |   }
96 |   const hexString = valueAsBigInt.toString(16);
97 |   const significantHexDigits = hexString.match(/.*x0*(.*)$/)?.[1] ?? "";
98 |   if (
99 |     significantHexDigits.length * 4 > bitcount ||
100 |     (isSigned && significantHexDigits.length * 4 === bitcount && parseInt(significantHexDigits.slice(-1)?.[0], 16) < 8)
101 |   ) {
102 |     return false;
103 |   }
104 |   return true;
105 | };
106 | 
107 | // Treat any dot-separated string as a potential ENS name
108 | const ensRegex = /.+\..+/;
109 | export const isENS = (address = "") => ensRegex.test(address);
```

packages/nextjs/components/scaffold-eth/RainbowKitCustomConnectButton/AddressInfoDropdown.tsx
```
1 | import { useRef, useState } from "react";
2 | import { NetworkOptions } from "./NetworkOptions";
3 | import { getAddress } from "viem";
4 | import { Address } from "viem";
5 | import { useAccount, useDisconnect } from "wagmi";
6 | import {
7 |   ArrowLeftOnRectangleIcon,
8 |   ArrowTopRightOnSquareIcon,
9 |   ArrowsRightLeftIcon,
10 |   CheckCircleIcon,
11 |   ChevronDownIcon,
12 |   DocumentDuplicateIcon,
13 |   EyeIcon,
14 |   QrCodeIcon,
15 | } from "@heroicons/react/24/outline";
16 | import { BlockieAvatar, isENS } from "~~/components/scaffold-eth";
17 | import { useCopyToClipboard, useOutsideClick } from "~~/hooks/scaffold-eth";
18 | import { getTargetNetworks } from "~~/utils/scaffold-eth";
19 | 
20 | const BURNER_WALLET_ID = "burnerWallet";
21 | 
22 | const allowedNetworks = getTargetNetworks();
23 | 
24 | type AddressInfoDropdownProps = {
25 |   address: Address;
26 |   blockExplorerAddressLink: string | undefined;
27 |   displayName: string;
28 |   ensAvatar?: string;
29 | };
30 | 
31 | export const AddressInfoDropdown = ({
32 |   address,
33 |   ensAvatar,
34 |   displayName,
35 |   blockExplorerAddressLink,
36 | }: AddressInfoDropdownProps) => {
37 |   const { disconnect } = useDisconnect();
38 |   const { connector } = useAccount();
39 |   const checkSumAddress = getAddress(address);
40 | 
41 |   const { copyToClipboard: copyAddressToClipboard, isCopiedToClipboard: isAddressCopiedToClipboard } =
42 |     useCopyToClipboard();
43 |   const [selectingNetwork, setSelectingNetwork] = useState(false);
44 |   const dropdownRef = useRef<HTMLDetailsElement>(null);
45 | 
46 |   const closeDropdown = () => {
47 |     setSelectingNetwork(false);
48 |     dropdownRef.current?.removeAttribute("open");
49 |   };
50 | 
51 |   useOutsideClick(dropdownRef, closeDropdown);
52 | 
53 |   return (
54 |     <>
55 |       <details ref={dropdownRef} className="dropdown dropdown-end leading-3">
56 |         <summary className="btn btn-secondary btn-sm pl-0 pr-2 shadow-md dropdown-toggle gap-0 h-auto!">
57 |           <BlockieAvatar address={checkSumAddress} size={30} ensImage={ensAvatar} />
58 |           <span className="ml-2 mr-1">
59 |             {isENS(displayName) ? displayName : checkSumAddress?.slice(0, 6) + "..." + checkSumAddress?.slice(-4)}
60 |           </span>
61 |           <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
62 |         </summary>
63 |         <ul className="dropdown-content menu z-2 p-2 mt-2 shadow-center shadow-accent bg-base-200 rounded-box gap-1">
64 |           <NetworkOptions hidden={!selectingNetwork} />
65 |           <li className={selectingNetwork ? "hidden" : ""}>
66 |             <div
67 |               className="h-8 btn-sm rounded-xl! flex gap-3 py-3 cursor-pointer"
68 |               onClick={() => copyAddressToClipboard(checkSumAddress)}
69 |             >
70 |               {isAddressCopiedToClipboard ? (
71 |                 <>
72 |                   <CheckCircleIcon className="text-xl font-normal h-6 w-4 ml-2 sm:ml-0" aria-hidden="true" />
73 |                   <span className="whitespace-nowrap">Copied!</span>
74 |                 </>
75 |               ) : (
76 |                 <>
77 |                   <DocumentDuplicateIcon className="text-xl font-normal h-6 w-4 ml-2 sm:ml-0" aria-hidden="true" />
78 |                   <span className="whitespace-nowrap">Copy address</span>
79 |                 </>
80 |               )}
81 |             </div>
82 |           </li>
83 |           <li className={selectingNetwork ? "hidden" : ""}>
84 |             <label htmlFor="qrcode-modal" className="h-8 btn-sm rounded-xl! flex gap-3 py-3">
85 |               <QrCodeIcon className="h-6 w-4 ml-2 sm:ml-0" />
86 |               <span className="whitespace-nowrap">View QR Code</span>
87 |             </label>
88 |           </li>
89 |           <li className={selectingNetwork ? "hidden" : ""}>
90 |             <button className="h-8 btn-sm rounded-xl! flex gap-3 py-3" type="button">
91 |               <ArrowTopRightOnSquareIcon className="h-6 w-4 ml-2 sm:ml-0" />
92 |               <a
93 |                 target="_blank"
94 |                 href={blockExplorerAddressLink}
95 |                 rel="noopener noreferrer"
96 |                 className="whitespace-nowrap"
97 |               >
98 |                 View on Block Explorer
99 |               </a>
100 |             </button>
101 |           </li>
102 |           {allowedNetworks.length > 1 ? (
103 |             <li className={selectingNetwork ? "hidden" : ""}>
104 |               <button
105 |                 className="h-8 btn-sm rounded-xl! flex gap-3 py-3"
106 |                 type="button"
107 |                 onClick={() => {
108 |                   setSelectingNetwork(true);
109 |                 }}
110 |               >
111 |                 <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Switch Network</span>
112 |               </button>
113 |             </li>
114 |           ) : null}
115 |           {connector?.id === BURNER_WALLET_ID ? (
116 |             <li>
117 |               <label htmlFor="reveal-burner-pk-modal" className="h-8 btn-sm rounded-xl! flex gap-3 py-3 text-error">
118 |                 <EyeIcon className="h-6 w-4 ml-2 sm:ml-0" />
119 |                 <span>Reveal Private Key</span>
120 |               </label>
121 |             </li>
122 |           ) : null}
123 |           <li className={selectingNetwork ? "hidden" : ""}>
124 |             <button
125 |               className="menu-item text-error h-8 btn-sm rounded-xl! flex gap-3 py-3"
126 |               type="button"
127 |               onClick={() => disconnect()}
128 |             >
129 |               <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Disconnect</span>
130 |             </button>
131 |           </li>
132 |         </ul>
133 |       </details>
134 |     </>
135 |   );
136 | };
```

packages/nextjs/components/scaffold-eth/RainbowKitCustomConnectButton/AddressQRCodeModal.tsx
```
1 | import { QRCodeSVG } from "qrcode.react";
2 | import { Address as AddressType } from "viem";
3 | import { Address } from "~~/components/scaffold-eth";
4 | 
5 | type AddressQRCodeModalProps = {
6 |   address: AddressType;
7 |   modalId: string;
8 | };
9 | 
10 | export const AddressQRCodeModal = ({ address, modalId }: AddressQRCodeModalProps) => {
11 |   return (
12 |     <>
13 |       <div>
14 |         <input type="checkbox" id={`${modalId}`} className="modal-toggle" />
15 |         <label htmlFor={`${modalId}`} className="modal cursor-pointer">
16 |           <label className="modal-box relative">
17 |             {/* dummy input to capture event onclick on modal box */}
18 |             <input className="h-0 w-0 absolute top-0 left-0" />
19 |             <label htmlFor={`${modalId}`} className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
20 |               ✕
21 |             </label>
22 |             <div className="space-y-3 py-6">
23 |               <div className="flex flex-col items-center gap-6">
24 |                 <QRCodeSVG value={address} size={256} />
25 |                 <Address address={address} format="long" disableAddressLink onlyEnsOrAddress />
26 |               </div>
27 |             </div>
28 |           </label>
29 |         </label>
30 |       </div>
31 |     </>
32 |   );
33 | };
```

packages/nextjs/components/scaffold-eth/RainbowKitCustomConnectButton/NetworkOptions.tsx
```
1 | import { useAccount, useSwitchChain } from "wagmi";
2 | import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
3 | import { getNetworkColor } from "~~/hooks/scaffold-eth";
4 | import { getTargetNetworks } from "~~/utils/scaffold-eth";
5 | 
6 | const allowedNetworks = getTargetNetworks();
7 | 
8 | type NetworkOptionsProps = {
9 |   hidden?: boolean;
10 | };
11 | 
12 | export const NetworkOptions = ({ hidden = false }: NetworkOptionsProps) => {
13 |   const { switchChain } = useSwitchChain();
14 |   const { chain } = useAccount();
15 | 
16 |   return (
17 |     <>
18 |       {allowedNetworks
19 |         .filter(allowedNetwork => allowedNetwork.id !== chain?.id)
20 |         .map(allowedNetwork => (
21 |           <li key={allowedNetwork.id} className={hidden ? "hidden" : ""}>
22 |             <button
23 |               className="menu-item btn-sm rounded-xl! flex gap-3 py-3 whitespace-nowrap"
24 |               type="button"
25 |               onClick={() => {
26 |                 switchChain?.({ chainId: allowedNetwork.id });
27 |               }}
28 |             >
29 |               <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
30 |               <span>
31 |                 Switch to{" "}
32 |                 <span
33 |                   style={{
34 |                     color: getNetworkColor(allowedNetwork),
35 |                   }}
36 |                 >
37 |                   {allowedNetwork.name}
38 |                 </span>
39 |               </span>
40 |             </button>
41 |           </li>
42 |         ))}
43 |     </>
44 |   );
45 | };
```

packages/nextjs/components/scaffold-eth/RainbowKitCustomConnectButton/RevealBurnerPKModal.tsx
```
1 | import { useRef } from "react";
2 | import { rainbowkitBurnerWallet } from "burner-connector";
3 | import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
4 | import { useCopyToClipboard } from "~~/hooks/scaffold-eth";
5 | import { getParsedError, notification } from "~~/utils/scaffold-eth";
6 | 
7 | const BURNER_WALLET_PK_KEY = "burnerWallet.pk";
8 | 
9 | export const RevealBurnerPKModal = () => {
10 |   const { copyToClipboard, isCopiedToClipboard } = useCopyToClipboard();
11 |   const modalCheckboxRef = useRef<HTMLInputElement>(null);
12 | 
13 |   const handleCopyPK = async () => {
14 |     try {
15 |       const storage = rainbowkitBurnerWallet.useSessionStorage ? sessionStorage : localStorage;
16 |       const burnerPK = storage?.getItem(BURNER_WALLET_PK_KEY);
17 |       if (!burnerPK) throw new Error("Burner wallet private key not found");
18 |       await copyToClipboard(burnerPK);
19 |       notification.success("Burner wallet private key copied to clipboard");
20 |     } catch (e) {
21 |       const parsedError = getParsedError(e);
22 |       notification.error(parsedError);
23 |       if (modalCheckboxRef.current) modalCheckboxRef.current.checked = false;
24 |     }
25 |   };
26 | 
27 |   return (
28 |     <>
29 |       <div>
30 |         <input type="checkbox" id="reveal-burner-pk-modal" className="modal-toggle" ref={modalCheckboxRef} />
31 |         <label htmlFor="reveal-burner-pk-modal" className="modal cursor-pointer">
32 |           <label className="modal-box relative">
33 |             {/* dummy input to capture event onclick on modal box */}
34 |             <input className="h-0 w-0 absolute top-0 left-0" />
35 |             <label htmlFor="reveal-burner-pk-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
36 |               ✕
37 |             </label>
38 |             <div>
39 |               <p className="text-lg font-semibold m-0 p-0">Copy Burner Wallet Private Key</p>
40 |               <div role="alert" className="alert alert-warning mt-4">
41 |                 <ShieldExclamationIcon className="h-6 w-6" />
42 |                 <span className="font-semibold">
43 |                   Burner wallets are intended for local development only and are not safe for storing real funds.
44 |                 </span>
45 |               </div>
46 |               <p>
47 |                 Your Private Key provides <strong>full access</strong> to your entire wallet and funds. This is
48 |                 currently stored <strong>temporarily</strong> in your browser.
49 |               </p>
50 |               <button className="btn btn-outline btn-error" onClick={handleCopyPK} disabled={isCopiedToClipboard}>
51 |                 Copy Private Key To Clipboard
52 |               </button>
53 |             </div>
54 |           </label>
55 |         </label>
56 |       </div>
57 |     </>
58 |   );
59 | };
```

packages/nextjs/components/scaffold-eth/RainbowKitCustomConnectButton/WrongNetworkDropdown.tsx
```
1 | import { NetworkOptions } from "./NetworkOptions";
2 | import { useDisconnect } from "wagmi";
3 | import { ArrowLeftOnRectangleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
4 | 
5 | export const WrongNetworkDropdown = () => {
6 |   const { disconnect } = useDisconnect();
7 | 
8 |   return (
9 |     <div className="dropdown dropdown-end mr-2">
10 |       <label tabIndex={0} className="btn btn-error btn-sm dropdown-toggle gap-1">
11 |         <span>Wrong network</span>
12 |         <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
13 |       </label>
14 |       <ul
15 |         tabIndex={0}
16 |         className="dropdown-content menu p-2 mt-1 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
17 |       >
18 |         <NetworkOptions />
19 |         <li>
20 |           <button
21 |             className="menu-item text-error btn-sm rounded-xl! flex gap-3 py-3"
22 |             type="button"
23 |             onClick={() => disconnect()}
24 |           >
25 |             <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" />
26 |             <span>Disconnect</span>
27 |           </button>
28 |         </li>
29 |       </ul>
30 |     </div>
31 |   );
32 | };
```

packages/nextjs/components/scaffold-eth/RainbowKitCustomConnectButton/index.tsx
```
1 | "use client";
2 | 
3 | // @refresh reset
4 | import { Balance } from "../Balance";
5 | import { AddressInfoDropdown } from "./AddressInfoDropdown";
6 | import { AddressQRCodeModal } from "./AddressQRCodeModal";
7 | import { RevealBurnerPKModal } from "./RevealBurnerPKModal";
8 | import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
9 | import { ConnectButton } from "@rainbow-me/rainbowkit";
10 | import { Address } from "viem";
11 | import { useNetworkColor } from "~~/hooks/scaffold-eth";
12 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
13 | import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";
14 | 
15 | /**
16 |  * Custom Wagmi Connect Button (watch balance + custom design)
17 |  */
18 | export const RainbowKitCustomConnectButton = () => {
19 |   const networkColor = useNetworkColor();
20 |   const { targetNetwork } = useTargetNetwork();
21 | 
22 |   return (
23 |     <ConnectButton.Custom>
24 |       {({ account, chain, openConnectModal, mounted }) => {
25 |         const connected = mounted && account && chain;
26 |         const blockExplorerAddressLink = account
27 |           ? getBlockExplorerAddressLink(targetNetwork, account.address)
28 |           : undefined;
29 | 
30 |         return (
31 |           <>
32 |             {(() => {
33 |               if (!connected) {
34 |                 return (
35 |                   <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
36 |                     Connect Wallet
37 |                   </button>
38 |                 );
39 |               }
40 | 
41 |               if (chain.unsupported || chain.id !== targetNetwork.id) {
42 |                 return <WrongNetworkDropdown />;
43 |               }
44 | 
45 |               return (
46 |                 <>
47 |                   <div className="flex flex-col items-center mr-1">
48 |                     <Balance address={account.address as Address} className="min-h-0 h-auto" />
49 |                     <span className="text-xs" style={{ color: networkColor }}>
50 |                       {chain.name}
51 |                     </span>
52 |                   </div>
53 |                   <AddressInfoDropdown
54 |                     address={account.address as Address}
55 |                     displayName={account.displayName}
56 |                     ensAvatar={account.ensAvatar}
57 |                     blockExplorerAddressLink={blockExplorerAddressLink}
58 |                   />
59 |                   <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
60 |                   <RevealBurnerPKModal />
61 |                 </>
62 |               );
63 |             })()}
64 |           </>
65 |         );
66 |       }}
67 |     </ConnectButton.Custom>
68 |   );
69 | };
```

packages/nextjs/app/blockexplorer/address/[address]/page.tsx
```
1 | import fs from "fs";
2 | import path from "path";
3 | import { Address } from "viem";
4 | import { hardhat } from "viem/chains";
5 | import { AddressComponent } from "~~/app/blockexplorer/_components/AddressComponent";
6 | import deployedContracts from "~~/contracts/deployedContracts";
7 | import { isZeroAddress } from "~~/utils/scaffold-eth/common";
8 | import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
9 | 
10 | type PageProps = {
11 |   params: Promise<{ address: Address }>;
12 | };
13 | 
14 | async function fetchByteCodeAndAssembly(buildInfoDirectory: string, contractPath: string) {
15 |   const buildInfoFiles = fs.readdirSync(buildInfoDirectory);
16 |   let bytecode = "";
17 |   let assembly = "";
18 | 
19 |   for (let i = 0; i < buildInfoFiles.length; i++) {
20 |     const filePath = path.join(buildInfoDirectory, buildInfoFiles[i]);
21 | 
22 |     const buildInfo = JSON.parse(fs.readFileSync(filePath, "utf8"));
23 | 
24 |     if (buildInfo.output.contracts[contractPath]) {
25 |       for (const contract in buildInfo.output.contracts[contractPath]) {
26 |         bytecode = buildInfo.output.contracts[contractPath][contract].evm.bytecode.object;
27 |         assembly = buildInfo.output.contracts[contractPath][contract].evm.bytecode.opcodes;
28 |         break;
29 |       }
30 |     }
31 | 
32 |     if (bytecode && assembly) {
33 |       break;
34 |     }
35 |   }
36 | 
37 |   return { bytecode, assembly };
38 | }
39 | 
40 | const getContractData = async (address: Address) => {
41 |   const contracts = deployedContracts as GenericContractsDeclaration | null;
42 |   const chainId = hardhat.id;
43 | 
44 |   if (!contracts || !contracts[chainId] || Object.keys(contracts[chainId]).length === 0) {
45 |     return null;
46 |   }
47 | 
48 |   let contractPath = "";
49 | 
50 |   const buildInfoDirectory = path.join(
51 |     __dirname,
52 |     "..",
53 |     "..",
54 |     "..",
55 |     "..",
56 |     "..",
57 |     "..",
58 |     "..",
59 |     "hardhat",
60 |     "artifacts",
61 |     "build-info",
62 |   );
63 | 
64 |   if (!fs.existsSync(buildInfoDirectory)) {
65 |     throw new Error(`Directory ${buildInfoDirectory} not found.`);
66 |   }
67 | 
68 |   const deployedContractsOnChain = contracts[chainId];
69 |   for (const [contractName, contractInfo] of Object.entries(deployedContractsOnChain)) {
70 |     if (contractInfo.address.toLowerCase() === address.toLowerCase()) {
71 |       contractPath = `contracts/${contractName}.sol`;
72 |       break;
73 |     }
74 |   }
75 | 
76 |   if (!contractPath) {
77 |     // No contract found at this address
78 |     return null;
79 |   }
80 | 
81 |   const { bytecode, assembly } = await fetchByteCodeAndAssembly(buildInfoDirectory, contractPath);
82 | 
83 |   return { bytecode, assembly };
84 | };
85 | 
86 | export function generateStaticParams() {
87 |   // An workaround to enable static exports in Next.js, generating single dummy page.
88 |   return [{ address: "0x0000000000000000000000000000000000000000" }];
89 | }
90 | 
91 | const AddressPage = async (props: PageProps) => {
92 |   const params = await props.params;
93 |   const address = params?.address as Address;
94 | 
95 |   if (isZeroAddress(address)) return null;
96 | 
97 |   const contractData: { bytecode: string; assembly: string } | null = await getContractData(address);
98 |   return <AddressComponent address={address} contractData={contractData} />;
99 | };
100 | 
101 | export default AddressPage;
```

packages/nextjs/app/blockexplorer/transaction/[txHash]/page.tsx
```
1 | import TransactionComp from "../_components/TransactionComp";
2 | import type { NextPage } from "next";
3 | import { Hash } from "viem";
4 | import { isZeroAddress } from "~~/utils/scaffold-eth/common";
5 | 
6 | type PageProps = {
7 |   params: Promise<{ txHash?: Hash }>;
8 | };
9 | 
10 | export function generateStaticParams() {
11 |   // An workaround to enable static exports in Next.js, generating single dummy page.
12 |   return [{ txHash: "0x0000000000000000000000000000000000000000" }];
13 | }
14 | const TransactionPage: NextPage<PageProps> = async (props: PageProps) => {
15 |   const params = await props.params;
16 |   const txHash = params?.txHash as Hash;
17 | 
18 |   if (isZeroAddress(txHash)) return null;
19 | 
20 |   return <TransactionComp txHash={txHash} />;
21 | };
22 | 
23 | export default TransactionPage;
```

packages/nextjs/app/blockexplorer/transaction/_components/TransactionComp.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { useRouter } from "next/navigation";
5 | import { Hash, Transaction, TransactionReceipt, formatEther, formatUnits } from "viem";
6 | import { hardhat } from "viem/chains";
7 | import { usePublicClient } from "wagmi";
8 | import { Address } from "~~/components/scaffold-eth";
9 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
10 | import { decodeTransactionData, getFunctionDetails } from "~~/utils/scaffold-eth";
11 | import { replacer } from "~~/utils/scaffold-eth/common";
12 | 
13 | const TransactionComp = ({ txHash }: { txHash: Hash }) => {
14 |   const client = usePublicClient({ chainId: hardhat.id });
15 |   const router = useRouter();
16 |   const [transaction, setTransaction] = useState<Transaction>();
17 |   const [receipt, setReceipt] = useState<TransactionReceipt>();
18 |   const [functionCalled, setFunctionCalled] = useState<string>();
19 | 
20 |   const { targetNetwork } = useTargetNetwork();
21 | 
22 |   useEffect(() => {
23 |     if (txHash && client) {
24 |       const fetchTransaction = async () => {
25 |         const tx = await client.getTransaction({ hash: txHash });
26 |         const receipt = await client.getTransactionReceipt({ hash: txHash });
27 | 
28 |         const transactionWithDecodedData = decodeTransactionData(tx);
29 |         setTransaction(transactionWithDecodedData);
30 |         setReceipt(receipt);
31 | 
32 |         const functionCalled = transactionWithDecodedData.input.substring(0, 10);
33 |         setFunctionCalled(functionCalled);
34 |       };
35 | 
36 |       fetchTransaction();
37 |     }
38 |   }, [client, txHash]);
39 | 
40 |   return (
41 |     <div className="container mx-auto mt-10 mb-20 px-10 md:px-0">
42 |       <button className="btn btn-sm btn-primary" onClick={() => router.back()}>
43 |         Back
44 |       </button>
45 |       {transaction ? (
46 |         <div className="overflow-x-auto">
47 |           <h2 className="text-3xl font-bold mb-4 text-center text-primary-content">Transaction Details</h2>{" "}
48 |           <table className="table rounded-lg bg-base-100 w-full shadow-lg md:table-lg table-md">
49 |             <tbody>
50 |               <tr>
51 |                 <td>
52 |                   <strong>Transaction Hash:</strong>
53 |                 </td>
54 |                 <td>{transaction.hash}</td>
55 |               </tr>
56 |               <tr>
57 |                 <td>
58 |                   <strong>Block Number:</strong>
59 |                 </td>
60 |                 <td>{Number(transaction.blockNumber)}</td>
61 |               </tr>
62 |               <tr>
63 |                 <td>
64 |                   <strong>From:</strong>
65 |                 </td>
66 |                 <td>
67 |                   <Address address={transaction.from} format="long" onlyEnsOrAddress />
68 |                 </td>
69 |               </tr>
70 |               <tr>
71 |                 <td>
72 |                   <strong>To:</strong>
73 |                 </td>
74 |                 <td>
75 |                   {!receipt?.contractAddress ? (
76 |                     transaction.to && <Address address={transaction.to} format="long" onlyEnsOrAddress />
77 |                   ) : (
78 |                     <span>
79 |                       Contract Creation:
80 |                       <Address address={receipt.contractAddress} format="long" onlyEnsOrAddress />
81 |                     </span>
82 |                   )}
83 |                 </td>
84 |               </tr>
85 |               <tr>
86 |                 <td>
87 |                   <strong>Value:</strong>
88 |                 </td>
89 |                 <td>
90 |                   {formatEther(transaction.value)} {targetNetwork.nativeCurrency.symbol}
91 |                 </td>
92 |               </tr>
93 |               <tr>
94 |                 <td>
95 |                   <strong>Function called:</strong>
96 |                 </td>
97 |                 <td>
98 |                   <div className="w-full md:max-w-[600px] lg:max-w-[800px] overflow-x-auto whitespace-nowrap">
99 |                     {functionCalled === "0x" ? (
100 |                       "This transaction did not call any function."
101 |                     ) : (
102 |                       <>
103 |                         <span className="mr-2">{getFunctionDetails(transaction)}</span>
104 |                         <span className="badge badge-primary font-bold">{functionCalled}</span>
105 |                       </>
106 |                     )}
107 |                   </div>
108 |                 </td>
109 |               </tr>
110 |               <tr>
111 |                 <td>
112 |                   <strong>Gas Price:</strong>
113 |                 </td>
114 |                 <td>{formatUnits(transaction.gasPrice || 0n, 9)} Gwei</td>
115 |               </tr>
116 |               <tr>
117 |                 <td>
118 |                   <strong>Data:</strong>
119 |                 </td>
120 |                 <td className="form-control">
121 |                   <textarea
122 |                     readOnly
123 |                     value={transaction.input}
124 |                     className="p-0 w-full textarea-primary bg-inherit h-[150px]"
125 |                   />
126 |                 </td>
127 |               </tr>
128 |               <tr>
129 |                 <td>
130 |                   <strong>Logs:</strong>
131 |                 </td>
132 |                 <td>
133 |                   <ul>
134 |                     {receipt?.logs?.map((log, i) => (
135 |                       <li key={i}>
136 |                         <strong>Log {i} topics:</strong> {JSON.stringify(log.topics, replacer, 2)}
137 |                       </li>
138 |                     ))}
139 |                   </ul>
140 |                 </td>
141 |               </tr>
142 |             </tbody>
143 |           </table>
144 |         </div>
145 |       ) : (
146 |         <p className="text-2xl text-base-content">Loading...</p>
147 |       )}
148 |     </div>
149 |   );
150 | };
151 | 
152 | export default TransactionComp;
```

packages/nextjs/app/debug/_components/contract/ContractInput.tsx
```
1 | "use client";
2 | 
3 | import { Dispatch, SetStateAction } from "react";
4 | import { Tuple } from "./Tuple";
5 | import { TupleArray } from "./TupleArray";
6 | import { AbiParameter } from "abitype";
7 | import {
8 |   AddressInput,
9 |   Bytes32Input,
10 |   BytesInput,
11 |   InputBase,
12 |   IntegerInput,
13 |   IntegerVariant,
14 | } from "~~/components/scaffold-eth";
15 | import { AbiParameterTuple } from "~~/utils/scaffold-eth/contract";
16 | 
17 | type ContractInputProps = {
18 |   setForm: Dispatch<SetStateAction<Record<string, any>>>;
19 |   form: Record<string, any> | undefined;
20 |   stateObjectKey: string;
21 |   paramType: AbiParameter;
22 | };
23 | 
24 | /**
25 |  * Generic Input component to handle input's based on their function param type
26 |  */
27 | export const ContractInput = ({ setForm, form, stateObjectKey, paramType }: ContractInputProps) => {
28 |   const inputProps = {
29 |     name: stateObjectKey,
30 |     value: form?.[stateObjectKey],
31 |     placeholder: paramType.name ? `${paramType.type} ${paramType.name}` : paramType.type,
32 |     onChange: (value: any) => {
33 |       setForm(form => ({ ...form, [stateObjectKey]: value }));
34 |     },
35 |   };
36 | 
37 |   const renderInput = () => {
38 |     switch (paramType.type) {
39 |       case "address":
40 |         return <AddressInput {...inputProps} />;
41 |       case "bytes32":
42 |         return <Bytes32Input {...inputProps} />;
43 |       case "bytes":
44 |         return <BytesInput {...inputProps} />;
45 |       case "string":
46 |         return <InputBase {...inputProps} />;
47 |       case "tuple":
48 |         return (
49 |           <Tuple
50 |             setParentForm={setForm}
51 |             parentForm={form}
52 |             abiTupleParameter={paramType as AbiParameterTuple}
53 |             parentStateObjectKey={stateObjectKey}
54 |           />
55 |         );
56 |       default:
57 |         // Handling 'int' types and 'tuple[]' types
58 |         if (paramType.type.includes("int") && !paramType.type.includes("[")) {
59 |           return <IntegerInput {...inputProps} variant={paramType.type as IntegerVariant} />;
60 |         } else if (paramType.type.startsWith("tuple[")) {
61 |           return (
62 |             <TupleArray
63 |               setParentForm={setForm}
64 |               parentForm={form}
65 |               abiTupleParameter={paramType as AbiParameterTuple}
66 |               parentStateObjectKey={stateObjectKey}
67 |             />
68 |           );
69 |         } else {
70 |           return <InputBase {...inputProps} />;
71 |         }
72 |     }
73 |   };
74 | 
75 |   return (
76 |     <div className="flex flex-col gap-1.5 w-full">
77 |       <div className="flex items-center ml-2">
78 |         {paramType.name && <span className="text-xs font-medium mr-2 leading-none">{paramType.name}</span>}
79 |         <span className="block text-xs font-extralight leading-none">{paramType.type}</span>
80 |       </div>
81 |       {renderInput()}
82 |     </div>
83 |   );
84 | };
```

packages/nextjs/app/debug/_components/contract/ContractReadMethods.tsx
```
1 | import { Abi, AbiFunction } from "abitype";
2 | import { ReadOnlyFunctionForm } from "~~/app/debug/_components/contract";
3 | import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";
4 | 
5 | export const ContractReadMethods = ({ deployedContractData }: { deployedContractData: Contract<ContractName> }) => {
6 |   if (!deployedContractData) {
7 |     return null;
8 |   }
9 | 
10 |   const functionsToDisplay = (
11 |     ((deployedContractData.abi || []) as Abi).filter(part => part.type === "function") as AbiFunction[]
12 |   )
13 |     .filter(fn => {
14 |       const isQueryableWithParams =
15 |         (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length > 0;
16 |       return isQueryableWithParams;
17 |     })
18 |     .map(fn => {
19 |       return {
20 |         fn,
21 |         inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
22 |       };
23 |     })
24 |     .sort((a, b) => (b.inheritedFrom ? b.inheritedFrom.localeCompare(a.inheritedFrom) : 1));
25 | 
26 |   if (!functionsToDisplay.length) {
27 |     return <>No read methods</>;
28 |   }
29 | 
30 |   return (
31 |     <>
32 |       {functionsToDisplay.map(({ fn, inheritedFrom }) => (
33 |         <ReadOnlyFunctionForm
34 |           abi={deployedContractData.abi as Abi}
35 |           contractAddress={deployedContractData.address}
36 |           abiFunction={fn}
37 |           key={fn.name}
38 |           inheritedFrom={inheritedFrom}
39 |         />
40 |       ))}
41 |     </>
42 |   );
43 | };
```

packages/nextjs/app/debug/_components/contract/ContractUI.tsx
```
1 | "use client";
2 | 
3 | // @refresh reset
4 | import { useReducer } from "react";
5 | import { ContractReadMethods } from "./ContractReadMethods";
6 | import { ContractVariables } from "./ContractVariables";
7 | import { ContractWriteMethods } from "./ContractWriteMethods";
8 | import { Address, Balance } from "~~/components/scaffold-eth";
9 | import { useDeployedContractInfo, useNetworkColor } from "~~/hooks/scaffold-eth";
10 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
11 | import { ContractName } from "~~/utils/scaffold-eth/contract";
12 | 
13 | type ContractUIProps = {
14 |   contractName: ContractName;
15 |   className?: string;
16 | };
17 | 
18 | /**
19 |  * UI component to interface with deployed contracts.
20 |  **/
21 | export const ContractUI = ({ contractName, className = "" }: ContractUIProps) => {
22 |   const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false);
23 |   const { targetNetwork } = useTargetNetwork();
24 |   const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo({ contractName });
25 |   const networkColor = useNetworkColor();
26 | 
27 |   if (deployedContractLoading) {
28 |     return (
29 |       <div className="mt-14">
30 |         <span className="loading loading-spinner loading-lg"></span>
31 |       </div>
32 |     );
33 |   }
34 | 
35 |   if (!deployedContractData) {
36 |     return (
37 |       <p className="text-3xl mt-14">
38 |         {`No contract found by the name of "${contractName}" on chain "${targetNetwork.name}"!`}
39 |       </p>
40 |     );
41 |   }
42 | 
43 |   return (
44 |     <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 ${className}`}>
45 |       <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
46 |         <div className="col-span-1 flex flex-col">
47 |           <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4">
48 |             <div className="flex">
49 |               <div className="flex flex-col gap-1">
50 |                 <span className="font-bold">{contractName}</span>
51 |                 <Address address={deployedContractData.address} onlyEnsOrAddress />
52 |                 <div className="flex gap-1 items-center">
53 |                   <span className="font-bold text-sm">Balance:</span>
54 |                   <Balance address={deployedContractData.address} className="px-0 h-1.5 min-h-[0.375rem]" />
55 |                 </div>
56 |               </div>
57 |             </div>
58 |             {targetNetwork && (
59 |               <p className="my-0 text-sm">
60 |                 <span className="font-bold">Network</span>:{" "}
61 |                 <span style={{ color: networkColor }}>{targetNetwork.name}</span>
62 |               </p>
63 |             )}
64 |           </div>
65 |           <div className="bg-base-300 rounded-3xl px-6 lg:px-8 py-4 shadow-lg shadow-base-300">
66 |             <ContractVariables
67 |               refreshDisplayVariables={refreshDisplayVariables}
68 |               deployedContractData={deployedContractData}
69 |             />
70 |           </div>
71 |         </div>
72 |         <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
73 |           <div className="z-10">
74 |             <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
75 |               <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
76 |                 <div className="flex items-center justify-center space-x-2">
77 |                   <p className="my-0 text-sm">Read</p>
78 |                 </div>
79 |               </div>
80 |               <div className="p-5 divide-y divide-base-300">
81 |                 <ContractReadMethods deployedContractData={deployedContractData} />
82 |               </div>
83 |             </div>
84 |           </div>
85 |           <div className="z-10">
86 |             <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
87 |               <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
88 |                 <div className="flex items-center justify-center space-x-2">
89 |                   <p className="my-0 text-sm">Write</p>
90 |                 </div>
91 |               </div>
92 |               <div className="p-5 divide-y divide-base-300">
93 |                 <ContractWriteMethods
94 |                   deployedContractData={deployedContractData}
95 |                   onChange={triggerRefreshDisplayVariables}
96 |                 />
97 |               </div>
98 |             </div>
99 |           </div>
100 |         </div>
101 |       </div>
102 |     </div>
103 |   );
104 | };
```

packages/nextjs/app/debug/_components/contract/ContractVariables.tsx
```
1 | import { DisplayVariable } from "./DisplayVariable";
2 | import { Abi, AbiFunction } from "abitype";
3 | import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";
4 | 
5 | export const ContractVariables = ({
6 |   refreshDisplayVariables,
7 |   deployedContractData,
8 | }: {
9 |   refreshDisplayVariables: boolean;
10 |   deployedContractData: Contract<ContractName>;
11 | }) => {
12 |   if (!deployedContractData) {
13 |     return null;
14 |   }
15 | 
16 |   const functionsToDisplay = (
17 |     (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
18 |   )
19 |     .filter(fn => {
20 |       const isQueryableWithNoParams =
21 |         (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length === 0;
22 |       return isQueryableWithNoParams;
23 |     })
24 |     .map(fn => {
25 |       return {
26 |         fn,
27 |         inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
28 |       };
29 |     })
30 |     .sort((a, b) => (b.inheritedFrom ? b.inheritedFrom.localeCompare(a.inheritedFrom) : 1));
31 | 
32 |   if (!functionsToDisplay.length) {
33 |     return <>No contract variables</>;
34 |   }
35 | 
36 |   return (
37 |     <>
38 |       {functionsToDisplay.map(({ fn, inheritedFrom }) => (
39 |         <DisplayVariable
40 |           abi={deployedContractData.abi as Abi}
41 |           abiFunction={fn}
42 |           contractAddress={deployedContractData.address}
43 |           key={fn.name}
44 |           refreshDisplayVariables={refreshDisplayVariables}
45 |           inheritedFrom={inheritedFrom}
46 |         />
47 |       ))}
48 |     </>
49 |   );
50 | };
```

packages/nextjs/app/debug/_components/contract/ContractWriteMethods.tsx
```
1 | import { Abi, AbiFunction } from "abitype";
2 | import { WriteOnlyFunctionForm } from "~~/app/debug/_components/contract";
3 | import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";
4 | 
5 | export const ContractWriteMethods = ({
6 |   onChange,
7 |   deployedContractData,
8 | }: {
9 |   onChange: () => void;
10 |   deployedContractData: Contract<ContractName>;
11 | }) => {
12 |   if (!deployedContractData) {
13 |     return null;
14 |   }
15 | 
16 |   const functionsToDisplay = (
17 |     (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
18 |   )
19 |     .filter(fn => {
20 |       const isWriteableFunction = fn.stateMutability !== "view" && fn.stateMutability !== "pure";
21 |       return isWriteableFunction;
22 |     })
23 |     .map(fn => {
24 |       return {
25 |         fn,
26 |         inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
27 |       };
28 |     })
29 |     .sort((a, b) => (b.inheritedFrom ? b.inheritedFrom.localeCompare(a.inheritedFrom) : 1));
30 | 
31 |   if (!functionsToDisplay.length) {
32 |     return <>No write methods</>;
33 |   }
34 | 
35 |   return (
36 |     <>
37 |       {functionsToDisplay.map(({ fn, inheritedFrom }, idx) => (
38 |         <WriteOnlyFunctionForm
39 |           abi={deployedContractData.abi as Abi}
40 |           key={`${fn.name}-${idx}}`}
41 |           abiFunction={fn}
42 |           onChange={onChange}
43 |           contractAddress={deployedContractData.address}
44 |           inheritedFrom={inheritedFrom}
45 |         />
46 |       ))}
47 |     </>
48 |   );
49 | };
```

packages/nextjs/app/debug/_components/contract/DisplayVariable.tsx
```
1 | "use client";
2 | 
3 | import { useEffect } from "react";
4 | import { InheritanceTooltip } from "./InheritanceTooltip";
5 | import { displayTxResult } from "./utilsDisplay";
6 | import { Abi, AbiFunction } from "abitype";
7 | import { Address } from "viem";
8 | import { useReadContract } from "wagmi";
9 | import { ArrowPathIcon } from "@heroicons/react/24/outline";
10 | import { useAnimationConfig } from "~~/hooks/scaffold-eth";
11 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
12 | import { getParsedError, notification } from "~~/utils/scaffold-eth";
13 | 
14 | type DisplayVariableProps = {
15 |   contractAddress: Address;
16 |   abiFunction: AbiFunction;
17 |   refreshDisplayVariables: boolean;
18 |   inheritedFrom?: string;
19 |   abi: Abi;
20 | };
21 | 
22 | export const DisplayVariable = ({
23 |   contractAddress,
24 |   abiFunction,
25 |   refreshDisplayVariables,
26 |   abi,
27 |   inheritedFrom,
28 | }: DisplayVariableProps) => {
29 |   const { targetNetwork } = useTargetNetwork();
30 | 
31 |   const {
32 |     data: result,
33 |     isFetching,
34 |     refetch,
35 |     error,
36 |   } = useReadContract({
37 |     address: contractAddress,
38 |     functionName: abiFunction.name,
39 |     abi: abi,
40 |     chainId: targetNetwork.id,
41 |     query: {
42 |       retry: false,
43 |     },
44 |   });
45 | 
46 |   const { showAnimation } = useAnimationConfig(result);
47 | 
48 |   useEffect(() => {
49 |     refetch();
50 |   }, [refetch, refreshDisplayVariables]);
51 | 
52 |   useEffect(() => {
53 |     if (error) {
54 |       const parsedError = getParsedError(error);
55 |       notification.error(parsedError);
56 |     }
57 |   }, [error]);
58 | 
59 |   return (
60 |     <div className="space-y-1 pb-2">
61 |       <div className="flex items-center">
62 |         <h3 className="font-medium text-lg mb-0 break-all">{abiFunction.name}</h3>
63 |         <button className="btn btn-ghost btn-xs" onClick={async () => await refetch()}>
64 |           {isFetching ? (
65 |             <span className="loading loading-spinner loading-xs"></span>
66 |           ) : (
67 |             <ArrowPathIcon className="h-3 w-3 cursor-pointer" aria-hidden="true" />
68 |           )}
69 |         </button>
70 |         <InheritanceTooltip inheritedFrom={inheritedFrom} />
71 |       </div>
72 |       <div className="text-base-content/80 flex flex-col items-start">
73 |         <div>
74 |           <div
75 |             className={`break-all block transition bg-transparent ${
76 |               showAnimation ? "bg-warning rounded-xs animate-pulse-fast" : ""
77 |             }`}
78 |           >
79 |             {displayTxResult(result)}
80 |           </div>
81 |         </div>
82 |       </div>
83 |     </div>
84 |   );
85 | };
```

packages/nextjs/app/debug/_components/contract/InheritanceTooltip.tsx
```
1 | import { InformationCircleIcon } from "@heroicons/react/20/solid";
2 | 
3 | export const InheritanceTooltip = ({ inheritedFrom }: { inheritedFrom?: string }) => (
4 |   <>
5 |     {inheritedFrom && (
6 |       <span
7 |         className="tooltip tooltip-top tooltip-accent px-2 md:break-normal"
8 |         data-tip={`Inherited from: ${inheritedFrom}`}
9 |       >
10 |         <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
11 |       </span>
12 |     )}
13 |   </>
14 | );
```

packages/nextjs/app/debug/_components/contract/ReadOnlyFunctionForm.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { InheritanceTooltip } from "./InheritanceTooltip";
5 | import { Abi, AbiFunction } from "abitype";
6 | import { Address } from "viem";
7 | import { useReadContract } from "wagmi";
8 | import {
9 |   ContractInput,
10 |   displayTxResult,
11 |   getFunctionInputKey,
12 |   getInitialFormState,
13 |   getParsedContractFunctionArgs,
14 |   transformAbiFunction,
15 | } from "~~/app/debug/_components/contract";
16 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
17 | import { getParsedError, notification } from "~~/utils/scaffold-eth";
18 | 
19 | type ReadOnlyFunctionFormProps = {
20 |   contractAddress: Address;
21 |   abiFunction: AbiFunction;
22 |   inheritedFrom?: string;
23 |   abi: Abi;
24 | };
25 | 
26 | export const ReadOnlyFunctionForm = ({
27 |   contractAddress,
28 |   abiFunction,
29 |   inheritedFrom,
30 |   abi,
31 | }: ReadOnlyFunctionFormProps) => {
32 |   const [form, setForm] = useState<Record<string, any>>(() => getInitialFormState(abiFunction));
33 |   const [result, setResult] = useState<unknown>();
34 |   const { targetNetwork } = useTargetNetwork();
35 | 
36 |   const { isFetching, refetch, error } = useReadContract({
37 |     address: contractAddress,
38 |     functionName: abiFunction.name,
39 |     abi: abi,
40 |     args: getParsedContractFunctionArgs(form),
41 |     chainId: targetNetwork.id,
42 |     query: {
43 |       enabled: false,
44 |       retry: false,
45 |     },
46 |   });
47 | 
48 |   useEffect(() => {
49 |     if (error) {
50 |       const parsedError = getParsedError(error);
51 |       notification.error(parsedError);
52 |     }
53 |   }, [error]);
54 | 
55 |   const transformedFunction = transformAbiFunction(abiFunction);
56 |   const inputElements = transformedFunction.inputs.map((input, inputIndex) => {
57 |     const key = getFunctionInputKey(abiFunction.name, input, inputIndex);
58 |     return (
59 |       <ContractInput
60 |         key={key}
61 |         setForm={updatedFormValue => {
62 |           setResult(undefined);
63 |           setForm(updatedFormValue);
64 |         }}
65 |         form={form}
66 |         stateObjectKey={key}
67 |         paramType={input}
68 |       />
69 |     );
70 |   });
71 | 
72 |   return (
73 |     <div className="flex flex-col gap-3 py-5 first:pt-0 last:pb-1">
74 |       <p className="font-medium my-0 break-words">
75 |         {abiFunction.name}
76 |         <InheritanceTooltip inheritedFrom={inheritedFrom} />
77 |       </p>
78 |       {inputElements}
79 |       <div className="flex flex-col md:flex-row justify-between gap-2 flex-wrap">
80 |         <div className="grow w-full md:max-w-[80%]">
81 |           {result !== null && result !== undefined && (
82 |             <div className="bg-secondary rounded-3xl text-sm px-4 py-1.5 break-words overflow-auto">
83 |               <p className="font-bold m-0 mb-1">Result:</p>
84 |               <pre className="whitespace-pre-wrap break-words">{displayTxResult(result, "sm")}</pre>
85 |             </div>
86 |           )}
87 |         </div>
88 |         <button
89 |           className="btn btn-secondary btn-sm self-end md:self-start"
90 |           onClick={async () => {
91 |             const { data } = await refetch();
92 |             setResult(data);
93 |           }}
94 |           disabled={isFetching}
95 |         >
96 |           {isFetching && <span className="loading loading-spinner loading-xs"></span>}
97 |           Read 📡
98 |         </button>
99 |       </div>
100 |     </div>
101 |   );
102 | };
```

packages/nextjs/app/debug/_components/contract/Tuple.tsx
```
1 | import { Dispatch, SetStateAction, useEffect, useState } from "react";
2 | import { ContractInput } from "./ContractInput";
3 | import { getFunctionInputKey, getInitialTupleFormState } from "./utilsContract";
4 | import { replacer } from "~~/utils/scaffold-eth/common";
5 | import { AbiParameterTuple } from "~~/utils/scaffold-eth/contract";
6 | 
7 | type TupleProps = {
8 |   abiTupleParameter: AbiParameterTuple;
9 |   setParentForm: Dispatch<SetStateAction<Record<string, any>>>;
10 |   parentStateObjectKey: string;
11 |   parentForm: Record<string, any> | undefined;
12 | };
13 | 
14 | export const Tuple = ({ abiTupleParameter, setParentForm, parentStateObjectKey }: TupleProps) => {
15 |   const [form, setForm] = useState<Record<string, any>>(() => getInitialTupleFormState(abiTupleParameter));
16 | 
17 |   useEffect(() => {
18 |     const values = Object.values(form);
19 |     const argsStruct: Record<string, any> = {};
20 |     abiTupleParameter.components.forEach((component, componentIndex) => {
21 |       argsStruct[component.name || `input_${componentIndex}_`] = values[componentIndex];
22 |     });
23 | 
24 |     setParentForm(parentForm => ({ ...parentForm, [parentStateObjectKey]: JSON.stringify(argsStruct, replacer) }));
25 |     // eslint-disable-next-line react-hooks/exhaustive-deps
26 |   }, [JSON.stringify(form, replacer)]);
27 | 
28 |   return (
29 |     <div>
30 |       <div tabIndex={0} className="collapse collapse-arrow bg-base-200 pl-4 py-1.5 border-2 border-secondary">
31 |         <input type="checkbox" className="min-h-fit! peer" />
32 |         <div className="collapse-title after:top-3.5! p-0 min-h-fit! peer-checked:mb-2 text-primary-content/50">
33 |           <p className="m-0 p-0 text-[1rem]">{abiTupleParameter.internalType}</p>
34 |         </div>
35 |         <div className="ml-3 flex-col space-y-4 border-secondary/80 border-l-2 pl-4 collapse-content">
36 |           {abiTupleParameter?.components?.map((param, index) => {
37 |             const key = getFunctionInputKey(abiTupleParameter.name || "tuple", param, index);
38 |             return <ContractInput setForm={setForm} form={form} key={key} stateObjectKey={key} paramType={param} />;
39 |           })}
40 |         </div>
41 |       </div>
42 |     </div>
43 |   );
44 | };
```

packages/nextjs/app/debug/_components/contract/TupleArray.tsx
```
1 | import { Dispatch, SetStateAction, useEffect, useState } from "react";
2 | import { ContractInput } from "./ContractInput";
3 | import { getFunctionInputKey, getInitialTupleArrayFormState } from "./utilsContract";
4 | import { replacer } from "~~/utils/scaffold-eth/common";
5 | import { AbiParameterTuple } from "~~/utils/scaffold-eth/contract";
6 | 
7 | type TupleArrayProps = {
8 |   abiTupleParameter: AbiParameterTuple & { isVirtual?: true };
9 |   setParentForm: Dispatch<SetStateAction<Record<string, any>>>;
10 |   parentStateObjectKey: string;
11 |   parentForm: Record<string, any> | undefined;
12 | };
13 | 
14 | export const TupleArray = ({ abiTupleParameter, setParentForm, parentStateObjectKey }: TupleArrayProps) => {
15 |   const [form, setForm] = useState<Record<string, any>>(() => getInitialTupleArrayFormState(abiTupleParameter));
16 |   const [additionalInputs, setAdditionalInputs] = useState<Array<typeof abiTupleParameter.components>>([
17 |     abiTupleParameter.components,
18 |   ]);
19 | 
20 |   const depth = (abiTupleParameter.type.match(/\[\]/g) || []).length;
21 | 
22 |   useEffect(() => {
23 |     // Extract and group fields based on index prefix
24 |     const groupedFields = Object.keys(form).reduce(
25 |       (acc, key) => {
26 |         const [indexPrefix, ...restArray] = key.split("_");
27 |         const componentName = restArray.join("_");
28 |         if (!acc[indexPrefix]) {
29 |           acc[indexPrefix] = {};
30 |         }
31 |         acc[indexPrefix][componentName] = form[key];
32 |         return acc;
33 |       },
34 |       {} as Record<string, Record<string, any>>,
35 |     );
36 | 
37 |     let argsArray: Array<Record<string, any>> = [];
38 | 
39 |     Object.keys(groupedFields).forEach(key => {
40 |       const currentKeyValues = Object.values(groupedFields[key]);
41 | 
42 |       const argsStruct: Record<string, any> = {};
43 |       abiTupleParameter.components.forEach((component, componentIndex) => {
44 |         argsStruct[component.name || `input_${componentIndex}_`] = currentKeyValues[componentIndex];
45 |       });
46 | 
47 |       argsArray.push(argsStruct);
48 |     });
49 | 
50 |     if (depth > 1) {
51 |       argsArray = argsArray.map(args => {
52 |         return args[abiTupleParameter.components[0].name || "tuple"];
53 |       });
54 |     }
55 | 
56 |     setParentForm(parentForm => {
57 |       return { ...parentForm, [parentStateObjectKey]: JSON.stringify(argsArray, replacer) };
58 |     });
59 |     // eslint-disable-next-line react-hooks/exhaustive-deps
60 |   }, [JSON.stringify(form, replacer)]);
61 | 
62 |   const addInput = () => {
63 |     setAdditionalInputs(previousValue => {
64 |       const newAdditionalInputs = [...previousValue, abiTupleParameter.components];
65 | 
66 |       // Add the new inputs to the form
67 |       setForm(form => {
68 |         const newForm = { ...form };
69 |         abiTupleParameter.components.forEach((component, componentIndex) => {
70 |           const key = getFunctionInputKey(
71 |             `${newAdditionalInputs.length - 1}_${abiTupleParameter.name || "tuple"}`,
72 |             component,
73 |             componentIndex,
74 |           );
75 |           newForm[key] = "";
76 |         });
77 |         return newForm;
78 |       });
79 | 
80 |       return newAdditionalInputs;
81 |     });
82 |   };
83 | 
84 |   const removeInput = () => {
85 |     // Remove the last inputs from the form
86 |     setForm(form => {
87 |       const newForm = { ...form };
88 |       abiTupleParameter.components.forEach((component, componentIndex) => {
89 |         const key = getFunctionInputKey(
90 |           `${additionalInputs.length - 1}_${abiTupleParameter.name || "tuple"}`,
91 |           component,
92 |           componentIndex,
93 |         );
94 |         delete newForm[key];
95 |       });
96 |       return newForm;
97 |     });
98 |     setAdditionalInputs(inputs => inputs.slice(0, -1));
99 |   };
100 | 
101 |   return (
102 |     <div>
103 |       <div className="collapse collapse-arrow bg-base-200 pl-4 py-1.5 border-2 border-secondary">
104 |         <input type="checkbox" className="min-h-fit! peer" />
105 |         <div className="collapse-title after:top-3.5! p-0 min-h-fit! peer-checked:mb-1 text-primary-content/50">
106 |           <p className="m-0 text-[1rem]">{abiTupleParameter.internalType}</p>
107 |         </div>
108 |         <div className="ml-3 flex-col space-y-2 border-secondary/70 border-l-2 pl-4 collapse-content">
109 |           {additionalInputs.map((additionalInput, additionalIndex) => (
110 |             <div key={additionalIndex} className="space-y-1">
111 |               <span className="badge bg-base-300 badge-sm">
112 |                 {depth > 1 ? `${additionalIndex}` : `tuple[${additionalIndex}]`}
113 |               </span>
114 |               <div className="space-y-4">
115 |                 {additionalInput.map((param, index) => {
116 |                   const key = getFunctionInputKey(
117 |                     `${additionalIndex}_${abiTupleParameter.name || "tuple"}`,
118 |                     param,
119 |                     index,
120 |                   );
121 |                   return (
122 |                     <ContractInput setForm={setForm} form={form} key={key} stateObjectKey={key} paramType={param} />
123 |                   );
124 |                 })}
125 |               </div>
126 |             </div>
127 |           ))}
128 |           <div className="flex space-x-2">
129 |             <button className="btn btn-sm btn-secondary" onClick={addInput}>
130 |               +
131 |             </button>
132 |             {additionalInputs.length > 0 && (
133 |               <button className="btn btn-sm btn-secondary" onClick={removeInput}>
134 |                 -
135 |               </button>
136 |             )}
137 |           </div>
138 |         </div>
139 |       </div>
140 |     </div>
141 |   );
142 | };
```

packages/nextjs/app/debug/_components/contract/TxReceipt.tsx
```
1 | import { TransactionReceipt } from "viem";
2 | import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
3 | import { ObjectFieldDisplay } from "~~/app/debug/_components/contract";
4 | import { useCopyToClipboard } from "~~/hooks/scaffold-eth/useCopyToClipboard";
5 | import { replacer } from "~~/utils/scaffold-eth/common";
6 | 
7 | export const TxReceipt = ({ txResult }: { txResult: TransactionReceipt }) => {
8 |   const { copyToClipboard: copyTxResultToClipboard, isCopiedToClipboard: isTxResultCopiedToClipboard } =
9 |     useCopyToClipboard();
10 | 
11 |   return (
12 |     <div className="flex text-sm rounded-3xl peer-checked:rounded-b-none min-h-0 bg-secondary py-0">
13 |       <div className="mt-1 pl-2">
14 |         {isTxResultCopiedToClipboard ? (
15 |           <CheckCircleIcon
16 |             className="ml-1.5 text-xl font-normal text-base-content h-5 w-5 cursor-pointer"
17 |             aria-hidden="true"
18 |           />
19 |         ) : (
20 |           <DocumentDuplicateIcon
21 |             className="ml-1.5 text-xl font-normal h-5 w-5 cursor-pointer"
22 |             aria-hidden="true"
23 |             onClick={() => copyTxResultToClipboard(JSON.stringify(txResult, replacer, 2))}
24 |           />
25 |         )}
26 |       </div>
27 |       <div tabIndex={0} className="flex-wrap collapse collapse-arrow">
28 |         <input type="checkbox" className="min-h-0! peer" />
29 |         <div className="collapse-title text-sm min-h-0! py-1.5 pl-1 after:top-4!">
30 |           <strong>Transaction Receipt</strong>
31 |         </div>
32 |         <div className="collapse-content overflow-auto bg-secondary rounded-t-none rounded-3xl pl-0!">
33 |           <pre className="text-xs">
34 |             {Object.entries(txResult).map(([k, v]) => (
35 |               <ObjectFieldDisplay name={k} value={v} size="xs" leftPad={false} key={k} />
36 |             ))}
37 |           </pre>
38 |         </div>
39 |       </div>
40 |     </div>
41 |   );
42 | };
```

packages/nextjs/app/debug/_components/contract/WriteOnlyFunctionForm.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from "react";
4 | import { InheritanceTooltip } from "./InheritanceTooltip";
5 | import { Abi, AbiFunction } from "abitype";
6 | import { Address, TransactionReceipt } from "viem";
7 | import { useAccount, useConfig, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
8 | import {
9 |   ContractInput,
10 |   TxReceipt,
11 |   getFunctionInputKey,
12 |   getInitialFormState,
13 |   getParsedContractFunctionArgs,
14 |   transformAbiFunction,
15 | } from "~~/app/debug/_components/contract";
16 | import { IntegerInput } from "~~/components/scaffold-eth";
17 | import { useTransactor } from "~~/hooks/scaffold-eth";
18 | import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
19 | import { AllowedChainIds } from "~~/utils/scaffold-eth";
20 | import { simulateContractWriteAndNotifyError } from "~~/utils/scaffold-eth/contract";
21 | 
22 | type WriteOnlyFunctionFormProps = {
23 |   abi: Abi;
24 |   abiFunction: AbiFunction;
25 |   onChange: () => void;
26 |   contractAddress: Address;
27 |   inheritedFrom?: string;
28 | };
29 | 
30 | export const WriteOnlyFunctionForm = ({
31 |   abi,
32 |   abiFunction,
33 |   onChange,
34 |   contractAddress,
35 |   inheritedFrom,
36 | }: WriteOnlyFunctionFormProps) => {
37 |   const [form, setForm] = useState<Record<string, any>>(() => getInitialFormState(abiFunction));
38 |   const [txValue, setTxValue] = useState<string>("");
39 |   const { chain } = useAccount();
40 |   const writeTxn = useTransactor();
41 |   const { targetNetwork } = useTargetNetwork();
42 |   const writeDisabled = !chain || chain?.id !== targetNetwork.id;
43 | 
44 |   const { data: result, isPending, writeContractAsync } = useWriteContract();
45 | 
46 |   const wagmiConfig = useConfig();
47 | 
48 |   const handleWrite = async () => {
49 |     if (writeContractAsync) {
50 |       try {
51 |         const writeContractObj = {
52 |           address: contractAddress,
53 |           functionName: abiFunction.name,
54 |           abi: abi,
55 |           args: getParsedContractFunctionArgs(form),
56 |           value: BigInt(txValue),
57 |         };
58 |         await simulateContractWriteAndNotifyError({
59 |           wagmiConfig,
60 |           writeContractParams: writeContractObj,
61 |           chainId: targetNetwork.id as AllowedChainIds,
62 |         });
63 | 
64 |         const makeWriteWithParams = () => writeContractAsync(writeContractObj);
65 |         await writeTxn(makeWriteWithParams);
66 |         onChange();
67 |       } catch (e: any) {
68 |         console.error("⚡️ ~ file: WriteOnlyFunctionForm.tsx:handleWrite ~ error", e);
69 |       }
70 |     }
71 |   };
72 | 
73 |   const [displayedTxResult, setDisplayedTxResult] = useState<TransactionReceipt>();
74 |   const { data: txResult } = useWaitForTransactionReceipt({
75 |     hash: result,
76 |   });
77 |   useEffect(() => {
78 |     setDisplayedTxResult(txResult);
79 |   }, [txResult]);
80 | 
81 |   // TODO use `useMemo` to optimize also update in ReadOnlyFunctionForm
82 |   const transformedFunction = transformAbiFunction(abiFunction);
83 |   const inputs = transformedFunction.inputs.map((input, inputIndex) => {
84 |     const key = getFunctionInputKey(abiFunction.name, input, inputIndex);
85 |     return (
86 |       <ContractInput
87 |         key={key}
88 |         setForm={updatedFormValue => {
89 |           setDisplayedTxResult(undefined);
90 |           setForm(updatedFormValue);
91 |         }}
92 |         form={form}
93 |         stateObjectKey={key}
94 |         paramType={input}
95 |       />
96 |     );
97 |   });
98 |   const zeroInputs = inputs.length === 0 && abiFunction.stateMutability !== "payable";
99 | 
100 |   return (
101 |     <div className="py-5 space-y-3 first:pt-0 last:pb-1">
102 |       <div className={`flex gap-3 ${zeroInputs ? "flex-row justify-between items-center" : "flex-col"}`}>
103 |         <p className="font-medium my-0 break-words">
104 |           {abiFunction.name}
105 |           <InheritanceTooltip inheritedFrom={inheritedFrom} />
106 |         </p>
107 |         {inputs}
108 |         {abiFunction.stateMutability === "payable" ? (
109 |           <div className="flex flex-col gap-1.5 w-full">
110 |             <div className="flex items-center ml-2">
111 |               <span className="text-xs font-medium mr-2 leading-none">payable value</span>
112 |               <span className="block text-xs font-extralight leading-none">wei</span>
113 |             </div>
114 |             <IntegerInput
115 |               value={txValue}
116 |               onChange={updatedTxValue => {
117 |                 setDisplayedTxResult(undefined);
118 |                 setTxValue(updatedTxValue);
119 |               }}
120 |               placeholder="value (wei)"
121 |             />
122 |           </div>
123 |         ) : null}
124 |         <div className="flex justify-between gap-2">
125 |           {!zeroInputs && (
126 |             <div className="grow basis-0">{displayedTxResult ? <TxReceipt txResult={displayedTxResult} /> : null}</div>
127 |           )}
128 |           <div
129 |             className={`flex ${
130 |               writeDisabled &&
131 |               "tooltip tooltip-bottom tooltip-secondary before:content-[attr(data-tip)] before:-translate-x-1/3 before:left-auto before:transform-none"
132 |             }`}
133 |             data-tip={`${writeDisabled && "Wallet not connected or in the wrong network"}`}
134 |           >
135 |             <button className="btn btn-secondary btn-sm" disabled={writeDisabled || isPending} onClick={handleWrite}>
136 |               {isPending && <span className="loading loading-spinner loading-xs"></span>}
137 |               Send 💸
138 |             </button>
139 |           </div>
140 |         </div>
141 |       </div>
142 |       {zeroInputs && txResult ? (
143 |         <div className="grow basis-0">
144 |           <TxReceipt txResult={txResult} />
145 |         </div>
146 |       ) : null}
147 |     </div>
148 |   );
149 | };
```

packages/nextjs/app/debug/_components/contract/index.tsx
```
1 | export * from "./ContractInput";
2 | export * from "./ContractUI";
3 | export * from "./DisplayVariable";
4 | export * from "./ReadOnlyFunctionForm";
5 | export * from "./TxReceipt";
6 | export * from "./utilsContract";
7 | export * from "./utilsDisplay";
8 | export * from "./WriteOnlyFunctionForm";
```

packages/nextjs/app/debug/_components/contract/utilsContract.tsx
```
1 | import { AbiFunction, AbiParameter } from "abitype";
2 | import { AbiParameterTuple } from "~~/utils/scaffold-eth/contract";
3 | 
4 | /**
5 |  * Generates a key based on function metadata
6 |  */
7 | const getFunctionInputKey = (functionName: string, input: AbiParameter, inputIndex: number): string => {
8 |   const name = input?.name || `input_${inputIndex}_`;
9 |   return functionName + "_" + name + "_" + input.internalType + "_" + input.type;
10 | };
11 | 
12 | const isJsonString = (str: string) => {
13 |   try {
14 |     JSON.parse(str);
15 |     return true;
16 |     // eslint-disable-next-line @typescript-eslint/no-unused-vars
17 |   } catch (e) {
18 |     return false;
19 |   }
20 | };
21 | 
22 | const isBigInt = (str: string) => {
23 |   if (str.trim().length === 0 || str.startsWith("0")) return false;
24 |   try {
25 |     BigInt(str);
26 |     return true;
27 |     // eslint-disable-next-line @typescript-eslint/no-unused-vars
28 |   } catch (e) {
29 |     return false;
30 |   }
31 | };
32 | 
33 | // Recursive function to deeply parse JSON strings, correctly handling nested arrays and encoded JSON strings
34 | const deepParseValues = (value: any): any => {
35 |   if (typeof value === "string") {
36 |     // first try with bigInt because we losse precision with JSON.parse
37 |     if (isBigInt(value)) {
38 |       return BigInt(value);
39 |     }
40 | 
41 |     if (isJsonString(value)) {
42 |       const parsed = JSON.parse(value);
43 |       return deepParseValues(parsed);
44 |     }
45 | 
46 |     // It's a string but not a JSON string, return as is
47 |     return value;
48 |   } else if (Array.isArray(value)) {
49 |     // If it's an array, recursively parse each element
50 |     return value.map(element => deepParseValues(element));
51 |   } else if (typeof value === "object" && value !== null) {
52 |     // If it's an object, recursively parse each value
53 |     return Object.entries(value).reduce((acc: any, [key, val]) => {
54 |       acc[key] = deepParseValues(val);
55 |       return acc;
56 |     }, {});
57 |   }
58 | 
59 |   // Handle boolean values represented as strings
60 |   if (value === "true" || value === "1" || value === "0x1" || value === "0x01" || value === "0x0001") {
61 |     return true;
62 |   } else if (value === "false" || value === "0" || value === "0x0" || value === "0x00" || value === "0x0000") {
63 |     return false;
64 |   }
65 | 
66 |   return value;
67 | };
68 | 
69 | /**
70 |  * parses form input with array support
71 |  */
72 | const getParsedContractFunctionArgs = (form: Record<string, any>) => {
73 |   return Object.keys(form).map(key => {
74 |     const valueOfArg = form[key];
75 | 
76 |     // Attempt to deeply parse JSON strings
77 |     return deepParseValues(valueOfArg);
78 |   });
79 | };
80 | 
81 | const getInitialFormState = (abiFunction: AbiFunction) => {
82 |   const initialForm: Record<string, any> = {};
83 |   if (!abiFunction.inputs) return initialForm;
84 |   abiFunction.inputs.forEach((input, inputIndex) => {
85 |     const key = getFunctionInputKey(abiFunction.name, input, inputIndex);
86 |     initialForm[key] = "";
87 |   });
88 |   return initialForm;
89 | };
90 | 
91 | const getInitialTupleFormState = (abiTupleParameter: AbiParameterTuple) => {
92 |   const initialForm: Record<string, any> = {};
93 |   if (abiTupleParameter.components.length === 0) return initialForm;
94 | 
95 |   abiTupleParameter.components.forEach((component, componentIndex) => {
96 |     const key = getFunctionInputKey(abiTupleParameter.name || "tuple", component, componentIndex);
97 |     initialForm[key] = "";
98 |   });
99 |   return initialForm;
100 | };
101 | 
102 | const getInitialTupleArrayFormState = (abiTupleParameter: AbiParameterTuple) => {
103 |   const initialForm: Record<string, any> = {};
104 |   if (abiTupleParameter.components.length === 0) return initialForm;
105 |   abiTupleParameter.components.forEach((component, componentIndex) => {
106 |     const key = getFunctionInputKey("0_" + abiTupleParameter.name || "tuple", component, componentIndex);
107 |     initialForm[key] = "";
108 |   });
109 |   return initialForm;
110 | };
111 | 
112 | const adjustInput = (input: AbiParameterTuple): AbiParameter => {
113 |   if (input.type.startsWith("tuple[")) {
114 |     const depth = (input.type.match(/\[\]/g) || []).length;
115 |     return {
116 |       ...input,
117 |       components: transformComponents(input.components, depth, {
118 |         internalType: input.internalType || "struct",
119 |         name: input.name,
120 |       }),
121 |     };
122 |   } else if (input.components) {
123 |     return {
124 |       ...input,
125 |       components: input.components.map(value => adjustInput(value as AbiParameterTuple)),
126 |     };
127 |   }
128 |   return input;
129 | };
130 | 
131 | const transformComponents = (
132 |   components: readonly AbiParameter[],
133 |   depth: number,
134 |   parentComponentData: { internalType?: string; name?: string },
135 | ): AbiParameter[] => {
136 |   // Base case: if depth is 1 or no components, return the original components
137 |   if (depth === 1 || !components) {
138 |     return [...components];
139 |   }
140 | 
141 |   // Recursive case: wrap components in an additional tuple layer
142 |   const wrappedComponents: AbiParameter = {
143 |     internalType: `${parentComponentData.internalType || "struct"}`.replace(/\[\]/g, "") + "[]".repeat(depth - 1),
144 |     name: `${parentComponentData.name || "tuple"}`,
145 |     type: `tuple${"[]".repeat(depth - 1)}`,
146 |     components: transformComponents(components, depth - 1, parentComponentData),
147 |   };
148 | 
149 |   return [wrappedComponents];
150 | };
151 | 
152 | const transformAbiFunction = (abiFunction: AbiFunction): AbiFunction => {
153 |   return {
154 |     ...abiFunction,
155 |     inputs: abiFunction.inputs.map(value => adjustInput(value as AbiParameterTuple)),
156 |   };
157 | };
158 | 
159 | export {
160 |   getFunctionInputKey,
161 |   getInitialFormState,
162 |   getParsedContractFunctionArgs,
163 |   getInitialTupleFormState,
164 |   getInitialTupleArrayFormState,
165 |   transformAbiFunction,
166 | };
```

packages/nextjs/app/debug/_components/contract/utilsDisplay.tsx
```
1 | import { ReactElement, useState } from "react";
2 | import { TransactionBase, TransactionReceipt, formatEther, isAddress, isHex } from "viem";
3 | import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
4 | import { Address } from "~~/components/scaffold-eth";
5 | import { replacer } from "~~/utils/scaffold-eth/common";
6 | 
7 | type DisplayContent =
8 |   | string
9 |   | number
10 |   | bigint
11 |   | Record<string, any>
12 |   | TransactionBase
13 |   | TransactionReceipt
14 |   | undefined
15 |   | unknown;
16 | 
17 | type ResultFontSize = "sm" | "base" | "xs" | "lg" | "xl" | "2xl" | "3xl";
18 | 
19 | export const displayTxResult = (
20 |   displayContent: DisplayContent | DisplayContent[],
21 |   fontSize: ResultFontSize = "base",
22 | ): string | ReactElement | number => {
23 |   if (displayContent == null) {
24 |     return "";
25 |   }
26 | 
27 |   if (typeof displayContent === "bigint") {
28 |     return <NumberDisplay value={displayContent} />;
29 |   }
30 | 
31 |   if (typeof displayContent === "string") {
32 |     if (isAddress(displayContent)) {
33 |       return <Address address={displayContent} size={fontSize} onlyEnsOrAddress />;
34 |     }
35 | 
36 |     if (isHex(displayContent)) {
37 |       return displayContent; // don't add quotes
38 |     }
39 |   }
40 | 
41 |   if (Array.isArray(displayContent)) {
42 |     return <ArrayDisplay values={displayContent} size={fontSize} />;
43 |   }
44 | 
45 |   if (typeof displayContent === "object") {
46 |     return <StructDisplay struct={displayContent} size={fontSize} />;
47 |   }
48 | 
49 |   return JSON.stringify(displayContent, replacer, 2);
50 | };
51 | 
52 | const NumberDisplay = ({ value }: { value: bigint }) => {
53 |   const [isEther, setIsEther] = useState(false);
54 | 
55 |   const asNumber = Number(value);
56 |   if (asNumber <= Number.MAX_SAFE_INTEGER && asNumber >= Number.MIN_SAFE_INTEGER) {
57 |     return String(value);
58 |   }
59 | 
60 |   return (
61 |     <div className="flex items-baseline">
62 |       {isEther ? "Ξ" + formatEther(value) : String(value)}
63 |       <span
64 |         className="tooltip tooltip-secondary font-sans ml-2"
65 |         data-tip={isEther ? "Multiply by 1e18" : "Divide by 1e18"}
66 |       >
67 |         <button className="btn btn-ghost btn-circle btn-xs" onClick={() => setIsEther(!isEther)}>
68 |           <ArrowsRightLeftIcon className="h-3 w-3 opacity-65" />
69 |         </button>
70 |       </span>
71 |     </div>
72 |   );
73 | };
74 | 
75 | export const ObjectFieldDisplay = ({
76 |   name,
77 |   value,
78 |   size,
79 |   leftPad = true,
80 | }: {
81 |   name: string;
82 |   value: DisplayContent;
83 |   size: ResultFontSize;
84 |   leftPad?: boolean;
85 | }) => {
86 |   return (
87 |     <div className={`flex flex-row items-baseline ${leftPad ? "ml-4" : ""}`}>
88 |       <span className="text-base-content/60 mr-2">{name}:</span>
89 |       <span className="text-base-content">{displayTxResult(value, size)}</span>
90 |     </div>
91 |   );
92 | };
93 | 
94 | const ArrayDisplay = ({ values, size }: { values: DisplayContent[]; size: ResultFontSize }) => {
95 |   return (
96 |     <div className="flex flex-col gap-y-1">
97 |       {values.length ? "array" : "[]"}
98 |       {values.map((v, i) => (
99 |         <ObjectFieldDisplay key={i} name={`[${i}]`} value={v} size={size} />
100 |       ))}
101 |     </div>
102 |   );
103 | };
104 | 
105 | const StructDisplay = ({ struct, size }: { struct: Record<string, any>; size: ResultFontSize }) => {
106 |   return (
107 |     <div className="flex flex-col gap-y-1">
108 |       struct
109 |       {Object.entries(struct).map(([k, v]) => (
110 |         <ObjectFieldDisplay key={k} name={k} value={v} size={size} />
111 |       ))}
112 |     </div>
113 |   );
114 | };
```
