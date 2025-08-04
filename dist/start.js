#!/usr/bin/env node
// Deployment startup wrapper with absolute path resolution
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set absolute working directory
process.chdir(resolve(__dirname, '..'));

// Import and start the application
import('./index.js').catch(err => {
  console.error('Startup error:', err);
  process.exit(1);
});
