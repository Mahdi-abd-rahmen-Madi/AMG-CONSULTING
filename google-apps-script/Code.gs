// Google Apps Script to handle contact form submissions
// Deploy this as a web app to get the URL for your frontend

function doPost(e) {
  try {
    console.log('doPost called with:', e);

    // Prefer FormData (application/x-www-form-urlencoded)
    var name = e.parameter && e.parameter.name;
    var email = e.parameter && e.parameter.email;
    var message = e.parameter && e.parameter.message;

    // If not present, try to parse JSON (for legacy/testing)
    if ((!name || !email || !message) && e.postData && e.postData.contents) {
      try {
        var data = JSON.parse(e.postData.contents);
        name = name || data.name;
        email = email || data.email;
        message = message || data.message;
      } catch (jsonErr) {
        // Ignore JSON parse error, will fail validation below
        console.log('JSON parse error:', jsonErr);
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return createResponse({
        success: false,
        error: 'Missing required fields: name, email, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return createResponse({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Get the active spreadsheet
    let spreadsheet;
    try {
      spreadsheet = SpreadsheetApp.openById('1gKZvRc9UIk6faOYMnOKUsj6iWMztIq6bHJkVdRzWGPM');
      console.log('Spreadsheet opened successfully');
    } catch (spreadsheetError) {
      console.log('Spreadsheet error:', spreadsheetError);
      return createResponse({
        success: false,
        error: 'Failed to access spreadsheet. Please check the spreadsheet ID and permissions.'
      });
    }

    // Get or create the sheet
    let sheet = spreadsheet.getSheetByName('Contact Submissions');
    if (!sheet) {
      console.log('Creating new sheet');
      sheet = spreadsheet.insertSheet('Contact Submissions');
      // Set up headers
      sheet.getRange(1, 1, 1, 4).setValues([[
        'Timestamp', 'Name', 'Email', 'Message']]);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    // Add the new submission
    const timestamp = new Date();
    const rowData = [timestamp, name, email, message];
    sheet.appendRow(rowData);
    console.log('Data added to sheet:', rowData);

    // Optional: Send email notification
    try {
      sendEmailNotification(name, email, message);
      console.log('Email notification sent');
    } catch (emailError) {
      console.log('Email notification failed:', emailError);
      // Don't fail the whole request if email fails
    }

    // Return success response
    return createResponse({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.log('Error in doPost:', error);
    return createResponse({
      success: false,
      error: 'Server error: ' + error.toString()
    });
  }
}

function doGet(e) {
  console.log('doGet called - this should not happen for form submissions');
  return createResponse({
    success: false,
    error: 'This endpoint only accepts POST requests'
  });
}

function doOptions(e) {
  console.log('doOptions called - handling CORS preflight');
  return createResponse('', true);
}

function createResponse(data, isOptions = false) {
  if (isOptions) {
    // Handle OPTIONS preflight request
    return HtmlService.createHtmlOutput('')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // For regular responses, use ContentService
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);

  return output;
}

function sendEmailNotification(name, email, message) {
  try {
    const subject = `New Contact Form Submission from ${name}`;
    const body = `
New contact form submission received:

Name: ${name}
Email: ${email}
Message: ${message}

Timestamp: ${new Date()}
    `;

    // Send to your email (replace with your email address)
    MailApp.sendEmail('amgconsulting0@gmail.com', subject, body);

  } catch (error) {
    console.log('Email notification failed:', error);
    throw error;
  }
}

// Test functions
function testConnection() {
  console.log('Testing connection...');
  return createResponse({
    success: true,
    message: 'Google Apps Script is working!',
    timestamp: new Date()
  });
}

function testSpreadsheetAccess() {
  try {
    const spreadsheet = SpreadsheetApp.openById('1gKZvRc9UIk6faOYMnOKUsj6iWMztIq6bHJkVdRzWGPM');
    const sheet = spreadsheet.getSheetByName('Contact Submissions');

    console.log('Spreadsheet access successful');
    console.log('Sheet exists:', sheet !== null);

    return {
      success: true,
      sheetExists: sheet !== null,
      spreadsheetName: spreadsheet.getName()
    };
  } catch (error) {
    console.log('Spreadsheet access failed:', error);
    return {
      success: false,
      error: error.toString()
    };
  }
}

function testFormSubmission() {
  // Simulate a FormData (parameter) submission
  const mockEvent = {
    parameter: {
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message"
    }
  };
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
  return result;
}