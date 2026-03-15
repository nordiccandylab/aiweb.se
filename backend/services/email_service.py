import os
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiosmtplib
from typing import Dict

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        self.smtp_user = os.environ.get('SMTP_USER', '')
        self.smtp_password = os.environ.get('SMTP_PASSWORD', '')
        self.email_from = os.environ.get('EMAIL_FROM', self.smtp_user)
        self.email_to = os.environ.get('EMAIL_TO', 'hej@aiweb.se')
        self.enabled = bool(self.smtp_user and self.smtp_password)
        
        if not self.enabled:
            logger.warning(
                "Email service not configured. Set SMTP_USER and SMTP_PASSWORD in .env"
            )

    async def send_contact_notification(self, contact_data: Dict) -> bool:
        """Send email notification for new contact form submission"""
        if not self.enabled:
            logger.info("Email service disabled. Would have sent email with data:")
            logger.info(contact_data)
            return True  # Return True in development mode

        try:
            # Create email message
            message = MIMEMultipart('alternative')
            message['Subject'] = f"Ny kontaktförfrågan från {contact_data['name']}"
            message['From'] = self.email_from
            message['To'] = self.email_to

            # Create HTML content
            html_content = f"""
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                  <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                    Ny kontaktförfrågan från AiWeb.se
                  </h2>
                  
                  <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                    <p><strong style="color: #2563eb;">Namn:</strong> {contact_data['name']}</p>
                    {f'<p><strong style="color: #2563eb;">Företag:</strong> {contact_data["company"]}</p>' if contact_data.get('company') else ''}
                    <p><strong style="color: #2563eb;">Email:</strong> <a href="mailto:{contact_data['email']}">{contact_data['email']}</a></p>
                    {f'<p><strong style="color: #2563eb;">Hemsida:</strong> <a href="{contact_data["website"]}">{contact_data["website"]}</a></p>' if contact_data.get('website') else ''}
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f0f7ff; border-left: 4px solid #2563eb; border-radius: 3px;">
                      <p style="margin: 0;"><strong style="color: #2563eb;">Meddelande:</strong></p>
                      <p style="margin-top: 10px; white-space: pre-wrap;">{contact_data['message']}</p>
                    </div>
                  </div>
                  
                  <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-radius: 5px; font-size: 12px; color: #666;">
                    <p style="margin: 0;"><strong>Inskickad:</strong> {contact_data.get('submitted_at', 'N/A')}</p>
                    {f'<p style="margin: 5px 0 0 0;"><strong>IP-adress:</strong> {contact_data["ip_address"]}</p>' if contact_data.get('ip_address') else ''}
                  </div>
                </div>
              </body>
            </html>
            """

            # Attach HTML content
            html_part = MIMEText(html_content, 'html')
            message.attach(html_part)

            # Send email
            await aiosmtplib.send(
                message,
                hostname=self.smtp_host,
                port=self.smtp_port,
                username=self.smtp_user,
                password=self.smtp_password,
                start_tls=True
            )

            logger.info(f"Contact notification email sent to {self.email_to}")
            return True

        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            return False

# Singleton instance
email_service = EmailService()