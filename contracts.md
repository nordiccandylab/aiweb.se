# AiWeb.se - Contracts & Integration Plan

## Overview
Modern, professional website for AiWeb.se with contact form functionality. Frontend is built with React, Framer Motion animations, and Shadcn components.

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- **Contains**: 
  - Services data (6 items)
  - Features data (4 items)
  - Company information
  - AI Assistant benefits

## API Contracts

### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "company": "string (optional)",
  "email": "string (required, valid email)",
  "website": "string (optional, valid URL)",
  "message": "string (required)"
}
```

**Response Success (200)**:
```json
{
  "success": true,
  "message": "Meddelande mottaget",
  "id": "string (MongoDB ObjectId)"
}
```

**Response Error (400)**:
```json
{
  "success": false,
  "error": "Error message"
}
```

**Email Requirements**:
- Send email notification to: `hej@aiweb.se`
- Subject: "Ny kontaktförfrågan från [namn]"
- Include all form fields in email body

## Backend Implementation Plan

### 1. Database Schema (MongoDB)
**Collection**: `contact_submissions`
```javascript
{
  _id: ObjectId,
  name: String (required),
  company: String,
  email: String (required),
  website: String,
  message: String (required),
  submitted_at: DateTime (default: now),
  ip_address: String,
  user_agent: String
}
```

### 2. Email Service Integration
- Use SendGrid or similar email service
- Template for email notifications
- Environment variables needed:
  - `EMAIL_SERVICE_API_KEY`
  - `EMAIL_FROM` (sender email)
  - `EMAIL_TO` (hej@aiweb.se)

### 3. Backend Files to Create/Modify
1. `/app/backend/models/contact.py` - Pydantic model for contact submission
2. `/app/backend/routes/contact.py` - API endpoint for contact form
3. `/app/backend/services/email_service.py` - Email sending logic
4. `/app/backend/server.py` - Add contact router

### 4. Frontend Integration Changes
**File**: `/app/frontend/src/components/ContactForm.jsx`

**Current Mock Implementation (Line 28-39)**:
```javascript
// Mock submission - will be replaced with backend API
setTimeout(() => {
  console.log('Form submitted:', formData);
  toast({
    title: "Meddelande skickat!",
    description: "Tack för ditt meddelande. Vi återkommer inom kort.",
  });
  setFormData({...});
  setIsSubmitting(false);
}, 1000);
```

**Replace with**:
```javascript
try {
  const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
  if (response.data.success) {
    toast({
      title: "Meddelande skickat!",
      description: "Tack för ditt meddelande. Vi återkommer inom kort.",
    });
    setFormData({...reset values...});
  }
} catch (error) {
  toast({
    title: "Ett fel uppstod",
    description: "Kunde inte skicka meddelandet. Försök igen senare.",
    variant: "destructive"
  });
} finally {
  setIsSubmitting(false);
}
```

### 5. Environment Variables
Add to `/app/backend/.env`:
```
EMAIL_SERVICE_API_KEY=<to_be_provided>
EMAIL_FROM=noreply@aiweb.se
EMAIL_TO=hej@aiweb.se
```

## Testing Checklist
- [ ] Backend API endpoint receives and validates data
- [ ] Data is saved to MongoDB
- [ ] Email is sent successfully to hej@aiweb.se
- [ ] Frontend receives success response
- [ ] Toast notification appears
- [ ] Form is cleared after submission
- [ ] Error handling works for failed submissions
- [ ] Email format is professional and readable

## Notes
- All content is in Swedish
- Contact form is the only backend integration needed
- Services and features remain static (no CMS needed)
- Consider rate limiting for contact form (prevent spam)
- Add reCAPTCHA if spam becomes an issue
