#!/bin/bash

echo "====================================="
echo "Testing Simple Aria Components"
echo "====================================="
npm run test:unit -- simple-aria --reporter=verbose --run

echo ""
echo "====================================="
echo "Testing Navbar Close on Link Click"
echo "====================================="
npm run test:unit -- navbar --run -t "closes mobile menu on link click"
