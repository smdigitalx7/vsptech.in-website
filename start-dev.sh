#!/bin/bash

echo "🚀 Starting VSP Technologies Development Environment..."
echo

echo "📋 Setting up environment variables..."
if [ ! -f .env.local ]; then
    cp env.example .env.local
    echo "✅ Created .env.local from env.example"
else
    echo "✅ .env.local already exists"
fi

echo
echo "🔧 Installing dependencies..."
npm install

echo
echo "🚀 Starting development servers..."
echo "   - Frontend: http://localhost:3000"
echo "   - API Server: http://localhost:3001"
echo
echo "Press Ctrl+C to stop both servers"
echo

npm run dev
