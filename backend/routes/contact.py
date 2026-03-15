from fastapi import APIRouter, HTTPException, Request
from typing import List
import logging
from datetime import datetime

from models.contact import (
    ContactSubmission,
    ContactSubmissionCreate,
    ContactResponse,
    ContactErrorResponse
)
from services.email_service import email_service
from server import db

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("", response_model=ContactResponse)
async def submit_contact_form(
    contact_data: ContactSubmissionCreate,
    request: Request
):
    """
    Submit a contact form
    Saves to database and sends email notification
    """
    try:
        # Create contact submission object
        contact = ContactSubmission(
            **contact_data.dict(),
            ip_address=request.client.host if request.client else None,
            user_agent=request.headers.get('user-agent')
        )

        # Save to database
        await db.contact_submissions.insert_one(contact.dict())
        logger.info(f"Contact submission saved: {contact.id}")

        # Send email notification
        email_data = {
            'name': contact.name,
            'company': contact.company,
            'email': contact.email,
            'website': contact.website,
            'message': contact.message,
            'submitted_at': contact.submitted_at.strftime('%Y-%m-%d %H:%M:%S'),
            'ip_address': contact.ip_address
        }
        
        email_sent = await email_service.send_contact_notification(email_data)
        
        if not email_sent:
            logger.warning(f"Email notification failed for submission {contact.id}")

        return ContactResponse(
            success=True,
            message="Tack för ditt meddelande! Vi återkommer inom kort.",
            id=contact.id
        )

    except Exception as e:
        logger.error(f"Error processing contact submission: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Ett fel uppstod. Försök igen senare."
        )

@router.get("", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """
    Get all contact submissions (admin endpoint)
    """
    try:
        submissions = await db.contact_submissions.find().sort('submitted_at', -1).to_list(100)
        return [ContactSubmission(**sub) for sub in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Kunde inte hämta kontaktförfrågningar"
        )