#!/bin/bash
set -e

echo "Starting Next.js application..."

# Ensure node_modules/.bin is in PATH (Azure Oryx extracts to /node_modules)
export PATH="/node_modules/.bin:./node_modules/.bin:$PATH"

# Build the application if .next doesn't exist
if [ ! -d "./.next" ]; then
    echo "Building Next.js application..."
    npm run build
fi

# Start the application
echo "Starting production server..."
npm start
