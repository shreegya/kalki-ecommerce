#!/bin/bash

# Tatto Kalki - Deployment Script
echo "🚀 Deploying Tatto Kalki to Cloudflare..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Cloudflare
echo "🌐 Deploying to Cloudflare..."
npx wrangler pages deploy dist

echo "✅ Deployment complete!"
echo "🌍 Your site should be live at: https://tatto-kalki.pages.dev"
