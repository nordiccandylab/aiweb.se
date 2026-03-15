from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional
from datetime import datetime
import uuid

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=100)
    company: Optional[str] = Field(None, max_length=100)
    email: EmailStr
    website: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None

    @validator('website')
    def validate_website(cls, v):
        if v and v.strip():
            if not v.startswith(('http://', 'https://')):
                v = 'https://' + v
        return v

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    company: Optional[str] = Field(None, max_length=100)
    email: EmailStr
    website: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)

    @validator('website')
    def validate_website(cls, v):
        if v and v.strip():
            if not v.startswith(('http://', 'https://')):
                v = 'https://' + v
        return v

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

class ContactErrorResponse(BaseModel):
    success: bool = False
    error: str