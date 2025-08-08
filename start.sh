#!/bin/bash
# StackBlitz startup script for Sonic Testnet Scaffold-ETH 2

echo "🚀 Starting Scaffold-ETH 2 on Sonic Testnet..."

# Clean any existing build artifacts
rm -rf packages/nextjs/.next 2>/dev/null

# Navigate to Next.js package
cd packages/nextjs

# Start Next.js directly using node
node node_modules/next/dist/bin/next dev
