# Admin Panel Setup Guide

## Overview
The admin panel provides comprehensive user management and analytics for your website. It includes:
- User management (view, search, delete users)
- Complete user profiles with progress tracking
- Analytics dashboard with charts and statistics
- Activity tracking

## Setup Instructions

### Step 1: Create Admin Credentials in Firestore

You need to manually add an admin account to Firestore:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `moradabad-tech`
3. Navigate to **Firestore Database**
4. Create a new collection called `admins` (if it doesn't exist)
5. Add a new document with the following fields:

```
Collection: admins
Document ID: (auto-generated)
Fields:
  - email: "admin@yourdomain.com" (string)
  - password: "your-secure-password" (string)
  - isActive: true (boolean)
  - createdAt: (timestamp - current date/time)
```

**Important Security Notes:**
- ⚠️ In production, use proper password hashing (bcrypt, etc.)
- ⚠️ Change the default password after first login
- ⚠️ Use strong, unique passwords
- ⚠️ Consider implementing Firebase Admin SDK for better security

### Step 2: Access Admin Panel

1. Navigate to `/admin/login` in your browser
2. Enter the admin email and password you created
3. You'll be redirected to `/admin/dashboard` upon successful login

### Step 3: Using the Admin Panel

#### Analytics Tab
- View total users, active users, and problem-solving statistics
- See charts for user registrations and problem-solving activity
- View top users by problems solved

#### User Management Tab
- Search users by name, email, or phone
- View complete user profiles including:
  - Profile information (name, email, phone, LinkedIn, LeetCode)
  - Progress statistics (DSA problems, JS questions, streaks)
  - Recent activities
- Delete users (with confirmation)

## Routes

- `/admin/login` - Admin login page
- `/admin/dashboard` - Admin dashboard (protected route)

## Security Considerations

1. **Password Storage**: Currently, passwords are stored in plain text in Firestore. For production:
   - Use Firebase Admin SDK
   - Implement password hashing (bcrypt)
   - Use Firebase Authentication with custom claims for admin roles

2. **Access Control**: The admin panel uses localStorage for session management. Consider:
   - Implementing server-side session validation
   - Adding token expiration
   - Using Firebase Admin SDK for role-based access control

3. **Firestore Security Rules**: Update your Firestore security rules to protect the `admins` collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admins collection - only readable by authenticated admins
    match /admins/{adminId} {
      allow read: if request.auth != null && 
        exists(/databases/$(database)/documents/admins/$(request.auth.uid));
      allow write: if false; // Only allow writes via Admin SDK
    }
    
    // Profiles - admins can read all
    match /profiles/{userId} {
      allow read: if request.auth != null && 
        exists(/databases/$(database)/documents/admins/$(request.auth.uid));
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // User progress - admins can read all
    match /user_progress/{userId} {
      allow read: if request.auth != null && 
        exists(/databases/$(database)/documents/admins/$(request.auth.uid));
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Features

### Analytics Dashboard
- **Total Users**: Count of all registered users
- **Active Users**: Users active in the last 7 days
- **DSA Problems Solved**: Total DSA problems solved by all users
- **JS Questions Solved**: Total JavaScript questions solved
- **Charts**: Visual representation of user growth and activity
- **Top Users**: Leaderboard of most active problem solvers

### User Management
- **Search**: Filter users by name, email, or phone
- **View Details**: Complete user profile with:
  - Personal information
  - Progress statistics
  - Recent activities
- **Delete Users**: Remove users from the system (with confirmation)

## Troubleshooting

### Can't login to admin panel
- Verify admin credentials exist in Firestore `admins` collection
- Check that `isActive` field is set to `true`
- Verify email and password match exactly (case-sensitive)

### Analytics not loading
- Check Firestore permissions
- Verify data exists in `profiles` and `user_progress` collections
- Check browser console for errors

### Users not showing
- Verify users exist in Firestore `profiles` collection
- Check Firestore security rules allow admin access

## Future Enhancements

Consider adding:
- User role management
- Bulk user operations
- Export user data (CSV/JSON)
- Advanced filtering and sorting
- User activity timeline
- Email notifications
- Admin activity logs

