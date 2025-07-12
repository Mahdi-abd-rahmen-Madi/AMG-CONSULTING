# Google Apps Script Setup Guide

This guide will help you set up the Google Apps Script to handle contact form submissions and store them in Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "AMG Consulting Contact Form"
4. Keep this spreadsheet open - you'll need it for the next steps

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the contents of `Code.gs`
4. Save the project with a name like "AMG Contact Form Handler"

## Step 3: Deploy as Web App

1. Click on "Deploy" in the Apps Script editor
2. Select "New deployment"
3. Choose "Web app" as the type
4. Set the following options:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
5. Click "Deploy"
6. Authorize the script when prompted
7. Copy the Web App URL - you'll need this for the frontend

## Step 4: Connect to Your Google Sheet

1. In your Google Apps Script editor, make sure you're in the correct Google account
2. The script will automatically use the active spreadsheet
3. To specify a particular spreadsheet, replace this line in the code:
   ```javascript
   const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
   ```
   With:
   ```javascript
   const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
   ```
   (Get the ID from your spreadsheet URL)

## Step 5: Configure Email Notifications

1. In the `sendEmailNotification` function, replace `'your-email@example.com'` with your actual email address
2. This will send you an email notification whenever someone submits the contact form

## Step 6: Test the Setup

1. The script will automatically create a "Contact Submissions" sheet when the first form is submitted
2. You can test the connection by visiting your Web App URL in a browser
3. It should return a JSON response indicating success

## Step 7: Update Frontend

1. Copy the Web App URL from Step 3
2. Update the `GOOGLE_APPS_SCRIPT_URL` constant in your frontend code
3. The contact form will now send data to your Google Sheet

## Troubleshooting

- **CORS Errors**: The script includes CORS headers, but if you still get errors, make sure the deployment is set to "Anyone" access
- **Permission Errors**: Make sure you've authorized the script to access your Google Sheets and Gmail
- **Sheet Not Found**: The script will automatically create the "Contact Submissions" sheet on first use

## Security Notes

- The Web App URL will be public, but it only accepts POST requests with proper JSON data
- Consider adding additional validation or rate limiting for production use
- The script includes basic input validation but you may want to add more robust validation 