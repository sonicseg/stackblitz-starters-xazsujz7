#!/usr/bin/env node

/**
 * Direct Next.js starter for StackBlitz
 * Bypasses yarn/npm script execution to avoid jsh issues
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Scaffold-ETH 2 on Sonic Testnet...');
console.log('📍 Chain ID: 57054');
console.log('🔗 RPC: https://rpc.testnet.soniclabs.com');

// Path to Next.js binary
const nextBin = path.join(__dirname, 'node_modules', '.bin', 'next');

// Start Next.js dev server
const proc = spawn(nextBin, ['dev'], {
  stdio: 'inherit',
  env: { ...process.env },
  cwd: __dirname
});

proc.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

proc.on('exit', (code) => {
  process.exit(code || 0);
});
