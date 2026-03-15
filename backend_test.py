#!/usr/bin/env python3
"""
Backend API Testing Script for AiWeb Contact Form
Tests the contact form API endpoint with various scenarios
"""

import requests
import json
from datetime import datetime
import sys
import os

# Use the production backend URL from frontend .env
BACKEND_URL = "https://aiweb-pro.preview.emergentagent.com/api"

class ContactFormTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.results = []
        
    def log_result(self, test_name, passed, message, details=None):
        """Log test result"""
        status = "✅ PASS" if passed else "❌ FAIL"
        self.results.append({
            'test': test_name,
            'passed': passed,
            'message': message,
            'details': details
        })
        print(f"{status}: {test_name}")
        print(f"   {message}")
        if details:
            print(f"   Details: {details}")
        print()
    
    def test_successful_contact_form_with_all_fields(self):
        """Test successful contact form submission with all fields"""
        test_name = "Contact form submission with all fields"
        
        payload = {
            "name": "Test User",
            "company": "Test AB",
            "email": "test@example.com",
            "website": "https://example.com",
            "message": "This is a test message for AiWeb contact form"
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=payload)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') == True and 'message' in data:
                    # Check if message is in Swedish
                    expected_message = "Tack för ditt meddelande! Vi återkommer inom kort."
                    if data['message'] == expected_message:
                        self.log_result(test_name, True, 
                                      f"Success! Response: {data}")
                    else:
                        self.log_result(test_name, False, 
                                      f"Success response but wrong message. Got: {data['message']}")
                else:
                    self.log_result(test_name, False, 
                                  f"Invalid response structure: {data}")
            else:
                self.log_result(test_name, False, 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_contact_form_with_required_fields_only(self):
        """Test contact form with only required fields"""
        test_name = "Contact form with required fields only"
        
        payload = {
            "name": "John Doe",
            "email": "john@test.se",
            "message": "Hej, jag vill veta mer om era AI-lösningar"
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=payload)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') == True:
                    self.log_result(test_name, True, 
                                  f"Success with required fields only: {data}")
                else:
                    self.log_result(test_name, False, 
                                  f"Invalid response: {data}")
            else:
                self.log_result(test_name, False, 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_validation_missing_required_field(self):
        """Test validation error for missing required field"""
        test_name = "Validation - missing required field (message)"
        
        payload = {
            "name": "Test",
            "email": "test@test.se"
            # Missing required 'message' field
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=payload)
            
            if response.status_code == 422:
                self.log_result(test_name, True, 
                              f"Correctly returned validation error: {response.status_code}")
            else:
                self.log_result(test_name, False, 
                              f"Expected 422 validation error, got {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_validation_invalid_email(self):
        """Test validation error for invalid email"""
        test_name = "Validation - invalid email format"
        
        payload = {
            "name": "Test",
            "email": "invalid-email",
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=payload)
            
            if response.status_code == 422:
                self.log_result(test_name, True, 
                              f"Correctly returned validation error for invalid email: {response.status_code}")
            else:
                self.log_result(test_name, False, 
                              f"Expected 422 validation error, got {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_get_contact_submissions(self):
        """Test retrieving contact submissions"""
        test_name = "Get contact submissions"
        
        try:
            response = requests.get(f"{self.base_url}/contact")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result(test_name, True, 
                                  f"Successfully retrieved {len(data)} submissions")
                else:
                    self.log_result(test_name, False, 
                                  f"Expected array, got: {type(data)}")
            else:
                self.log_result(test_name, False, 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_api_health_check(self):
        """Test basic API health check"""
        test_name = "API Health Check"
        
        try:
            response = requests.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == "Hello World":
                    self.log_result(test_name, True, "API is responding correctly")
                else:
                    self.log_result(test_name, False, f"Unexpected response: {data}")
            else:
                self.log_result(test_name, False, 
                              f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all test cases"""
        print(f"🧪 Starting Contact Form API Tests")
        print(f"Backend URL: {self.base_url}")
        print(f"Timestamp: {datetime.now().isoformat()}")
        print("=" * 60)
        print()
        
        # Run tests in order
        self.test_api_health_check()
        self.test_successful_contact_form_with_all_fields()
        self.test_contact_form_with_required_fields_only()
        self.test_validation_missing_required_field()
        self.test_validation_invalid_email()
        self.test_get_contact_submissions()
        
        # Summary
        print("=" * 60)
        print("🎯 TEST SUMMARY")
        print("=" * 60)
        
        passed_count = sum(1 for r in self.results if r['passed'])
        total_count = len(self.results)
        
        for result in self.results:
            status = "✅" if result['passed'] else "❌"
            print(f"{status} {result['test']}")
        
        print(f"\nResults: {passed_count}/{total_count} tests passed")
        
        if passed_count == total_count:
            print("🎉 All tests passed!")
            return True
        else:
            print(f"⚠️  {total_count - passed_count} test(s) failed")
            return False

if __name__ == "__main__":
    tester = ContactFormTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)