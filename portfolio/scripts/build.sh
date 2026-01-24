#!/bin/bash

# 1. Clean previous build
rm -rf dist

# 2. Build the project
npm run build

# 3. Copy necessary files (Only _redirects if you use them)
cp _redirects dist/ 2>/dev/null || :

echo "Build completed! Ready for deployment."
