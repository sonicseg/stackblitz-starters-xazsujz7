#!/usr/bin/env node

/**
 * StackBlitz startup script
 * Works around jsh shell limitations
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Next.js for StackBlitz...');

const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');

const child = spawn(nextPath, ['dev'], {
  stdio: 'inherit',
  env: { ...process.env },
  cwd: __dirname,
  shell: false // Don't use shell to avoid jsh issues
});

child.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});
