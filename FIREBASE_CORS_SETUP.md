# Firebase Storage CORS Configuration Guide

## Problem
If you're seeing CORS errors when uploading files to Firebase Storage, you need to configure CORS settings in your Firebase project.

## 🚀 Quick Fix (Recommended)

**Run the automated setup script:**

```bash
./setup-cors.sh
```

This script will:
1. Check if Google Cloud SDK is installed
2. Authenticate you (if needed)
3. Create and apply CORS configuration
4. Verify the setup

**Or manually run these commands:**

```bash
# 1. Install Google Cloud SDK (if not installed)
brew install google-cloud-sdk

# 2. Authenticate
gcloud auth login

# 3. Set project
gcloud config set project moradabad-tech

# 4. Apply CORS (using the cors.json file in this directory)
gsutil cors set cors.json gs://moradabad-tech.firebasestorage.app
```

## Solution

### Option 1: Using gsutil (Recommended)

1. **Install Google Cloud SDK** (if not already installed):
   ```bash
   # macOS
   brew install google-cloud-sdk
   
   # Or download from: https://cloud.google.com/sdk/docs/install
   ```

2. **Authenticate with Google Cloud**:
   ```bash
   gcloud auth login
   ```

3. **Set your project**:
   ```bash
   gcloud config set project moradabad-tech
   ```

4. **Create a CORS configuration file** (`cors.json`):
   ```json
   [
     {
       "origin": ["*"],
       "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
       "maxAgeSeconds": 3600,
       "responseHeader": ["Content-Type", "Authorization"]
     }
   ]
   ```

5. **Apply CORS configuration**:
   ```bash
   gsutil cors set cors.json gs://moradabad-tech.firebasestorage.app
   ```

### Option 2: Using Firebase Console (Limited)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **moradabad-tech**
3. Go to **Storage** in the left sidebar
4. Click on **Rules** tab
5. Ensure your rules allow authenticated users to upload:
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /profiles/{userId}/{allPaths=**} {
         allow read: if request.auth != null;
         allow write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

### Option 3: Using Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select project: **moradabad-tech**
3. Navigate to **Cloud Storage** > **Buckets**
4. Click on your bucket: **moradabad-tech.firebasestorage.app**
5. Go to **Configuration** tab
6. Scroll to **CORS configuration**
7. Click **Edit CORS configuration**
8. Add the following JSON:
   ```json
   [
     {
       "origin": ["*"],
       "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
       "maxAgeSeconds": 3600,
       "responseHeader": ["Content-Type", "Authorization"]
     }
   ]
   ```
9. Click **Save**

## For Development (Localhost)

If you're testing on localhost, you can use a more permissive CORS configuration:

```json
[
  {
    "origin": ["http://localhost:3000", "http://localhost:3011", "http://127.0.0.1:3000", "http://127.0.0.1:3011"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Authorization", "Content-Length"]
  }
]
```

## Verify CORS Configuration

After setting up CORS, verify it's working:

```bash
gsutil cors get gs://moradabad-tech.firebasestorage.app
```

## Troubleshooting

1. **Still seeing CORS errors?**
   - Wait a few minutes for changes to propagate
   - Clear browser cache
   - Try in incognito mode
   - Check that your Storage rules allow the operation

2. **Permission denied errors?**
   - Check Firebase Storage Rules
   - Ensure user is authenticated
   - Verify the user ID matches the path

3. **Network errors?**
   - Check internet connection
   - Verify Firebase project is active
   - Check browser console for detailed error messages

## Security Note

The example CORS configuration above allows all origins (`"origin": ["*"]`). For production, you should restrict this to your specific domain:

```json
{
  "origin": ["https://yourdomain.com", "https://www.yourdomain.com"],
  "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
  "maxAgeSeconds": 3600,
  "responseHeader": ["Content-Type", "Authorization"]
}
```

