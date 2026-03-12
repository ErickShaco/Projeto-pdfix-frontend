#!/bin/bash
set -e

echo "Starting Next.js application..."

# Build the application if .next doesn't exist
if [ ! -d "./.next" ]; then
    echo "Building Next.js application..."
    npm run build
fi

# Start the application
echo "Starting production server..."
npm start
