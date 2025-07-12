# Google Sheets Contact Form Setup Guide

This guide will help you connect your AMG Consulting contact form to Google Sheets so that all form submissions are automatically stored in a spreadsheet.

## Overview

The setup involves:
1. Creating a Google Sheet to store submissions
2. Setting up a Google Apps Script to handle form data
3. Deploying the script as a web app
4. Updating the frontend to send data to the script

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "AMG Consulting Contact Form"
4. Keep this spreadsheet open - you'll need it for the next steps

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script/Code.gs`
4. Save the project as "AMG Contact Form Handler"

### Important: Update Email Address

In the `Code.gs` file, find this line:
```javascript
MailApp.sendEmail('your-email@example.com', subject, body);
```

Replace `'your-email@example.com'` with your actual email address to receive notifications when someone submits the form.

## Step 3: Deploy as Web App

1. In the Apps Script editor, click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
4. Click "Deploy"
5. Authorize the script when prompted (allow access to Google Sheets and Gmail)
6. **Copy the Web App URL** - you'll need this for the frontend

## Step 4: Update Frontend Code

1. Open `front/src/main.tsx`
2. Find this line:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web App URL you copied in Step 3

## Step 5: Test the Setup

1. Start your development server
2. Go to the contact form on your website
3. Fill out and submit the form
4. Check your Google Sheet - you should see a new "Contact Submissions" sheet with your data
5. Check your email for the notification (if you configured it)

## How It Works

### Frontend (React)
- The contact form now sends data via fetch API to your Google Apps Script
- Shows loading state while submitting
- Displays success/error messages
- Automatically resets the form on successful submission

### Backend (Google Apps Script)
- Receives POST requests with form data
- Validates the input
- Adds data to your Google Sheet
- Sends email notifications
- Returns success/error responses

### Google Sheet
- Automatically creates a "Contact Submissions" sheet
- Stores: Timestamp, Name, Email, Message
- Each submission adds a new row

## Troubleshooting

### CORS Errors
- Make sure the deployment is set to "Anyone" access
- The script includes CORS headers, but some browsers may still have issues

### Permission Errors
- Ensure you've authorized the script to access Google Sheets and Gmail
- Try redeploying the script if permissions are denied

### Form Not Submitting
- Check the browser console for errors
- Verify the Google Apps Script URL is correct
- Make sure the script is deployed and accessible

### Data Not Appearing in Sheet
- Check that you're looking at the correct Google Sheet
- The script will create a "Contact Submissions" sheet automatically
- Verify the script has permission to access the sheet

## Security Considerations

- The Web App URL will be public, but it only accepts POST requests with proper JSON data
- Consider adding additional validation for production use
- You may want to add rate limiting to prevent spam
- The script includes basic input validation

## Customization Options

### Add More Fields
To add more fields to the form:
1. Update the form HTML in `main.tsx`
2. Update the form submission logic to include the new fields
3. Update the Google Apps Script to handle the new fields
4. The sheet will automatically adjust to include new columns

### Change Email Notifications
Modify the `sendEmailNotification` function in `Code.gs` to:
- Send to multiple email addresses
- Include more information in the email
- Use HTML formatting
- Add attachments

### Custom Validation
Add more validation rules in the Google Apps Script:
- Email format validation
- Message length limits
- Spam detection
- Required field validation

## Files Modified

- `front/src/main.tsx` - Updated contact form logic
- `front/src/main.css` - Added status message styles
- `google-apps-script/Code.gs` - New Google Apps Script
- `google-apps-script/README.md` - Detailed setup instructions

## Support

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Check the Google Apps Script logs (View → Execution log)
3. Verify all URLs and permissions are correct
4. Test the Google Apps Script URL directly in a browser 