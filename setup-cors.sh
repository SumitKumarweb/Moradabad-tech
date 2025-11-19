#!/bin/bash

# Firebase Storage CORS Setup Script
# This script configures CORS for Firebase Storage to allow file uploads from localhost

echo "🚀 Setting up Firebase Storage CORS configuration..."
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK (gcloud) is not installed."
    echo ""
    echo "Please install it first:"
    echo "  macOS: brew install google-cloud-sdk"
    echo "  Or download from: https://cloud.google.com/sdk/docs/install"
    echo ""
    exit 1
fi

# Check if gsutil is available
if ! command -v gsutil &> /dev/null; then
    echo "❌ gsutil is not installed."
    echo "Please install Google Cloud SDK which includes gsutil."
    exit 1
fi

# Set project
PROJECT_ID="moradabad-tech"
BUCKET_NAME="moradabad-tech.firebasestorage.app"

echo "📋 Project: $PROJECT_ID"
echo "📦 Bucket: $BUCKET_NAME"
echo ""

# Create CORS configuration file
cat > cors.json << 'EOF'
[
  {
    "origin": [
      "http://localhost:3000",
      "http://localhost:3011",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:3011",
      "http://localhost:*",
      "http://127.0.0.1:*"
    ],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
    "maxAgeSeconds": 3600,
    "responseHeader": [
      "Content-Type",
      "Authorization",
      "Content-Length",
      "x-goog-resumable"
    ]
  }
]
EOF

echo "✅ Created CORS configuration file (cors.json)"
echo ""

# Check if user is authenticated
echo "🔐 Checking authentication..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "⚠️  Not authenticated. Please login..."
    gcloud auth login
fi

# Set the project
echo "⚙️  Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# Apply CORS configuration
echo ""
echo "📤 Applying CORS configuration to Firebase Storage..."
gsutil cors set cors.json gs://$BUCKET_NAME

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ CORS configuration applied successfully!"
    echo ""
    echo "📋 Verifying configuration..."
    gsutil cors get gs://$BUCKET_NAME
    echo ""
    echo "🎉 Setup complete! You can now upload files from localhost."
    echo ""
    echo "Note: It may take a few minutes for changes to propagate."
else
    echo ""
    echo "❌ Failed to apply CORS configuration."
    echo ""
    echo "Troubleshooting:"
    echo "1. Make sure you have Storage Admin permissions"
    echo "2. Try: gcloud auth application-default login"
    echo "3. Check Firebase Console > Storage > Rules"
    exit 1
fi

# Cleanup
rm -f cors.json
echo "🧹 Cleaned up temporary files"

