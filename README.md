# Send Email from Message

A simple static website that allows users to send messages to an email address.

## Features

- Simple and clean user interface
- Message input form with name, email, and message fields
- Sends messages to paustudylaptop@gmail.com
- Success/error notifications
- Responsive design

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Create an email service:
   - Click "Add New Service"
   - Choose Gmail (or your preferred email provider)
   - Connect your email account
   - Note the **Service ID**

### 2. Create an Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Set up the template with these parameters:
   - **From name**: `{{from_name}}`
   - **From email**: `{{from_email}}`
   - **To email**: `paustudylaptop@gmail.com`
   - **Subject**: `New message from {{from_name}}`
   - **Content**: 
     ```
     You have received a new message from {{from_name}} ({{from_email}}):
     
     {{message}}
     ```
4. Save the template and note the **Template ID**

### 3. Get Your Public Key

1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (also called API Key)

### 4. Configure the Website

1. Open `script.js` in a text editor
2. Replace the placeholder values with your actual credentials:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## Usage

1. Open `index.html` in a web browser
2. Fill in your name, email, and message
3. Click "Send"
4. You'll see a success message when the email is sent

## Files

- `index.html` - The main HTML structure
- `style.css` - Styling for the website
- `script.js` - JavaScript for handling form submission and email sending

## Notes

- This is a static website that uses EmailJS service to send emails
- EmailJS free tier allows 200 emails per month
- The website can be hosted on any static hosting service (GitHub Pages, Netlify, Vercel, etc.)
- No backend server is required