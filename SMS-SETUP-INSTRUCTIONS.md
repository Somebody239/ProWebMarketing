# SMS Booking Notification System Setup

## Overview
The booking system has been modified to send SMS notifications instead of Google Calendar invites. When customers submit the booking form, an SMS will be sent to the business phone number (+1 (289) 901-2627) with all booking details.

## Twilio Account Setup

### Step 1: Create a Twilio Account
1. Go to [https://www.twilio.com/](https://www.twilio.com/)
2. Sign up for a free account
3. Complete phone verification

### Step 2: Get Your Credentials
1. From the Twilio Console Dashboard:
   - **Account SID**: Found on the main dashboard
   - **Auth Token**: Found on the main dashboard (click "Show" to reveal)
   - **Phone Number**: Purchase a phone number from Twilio Console

### Step 3: Purchase a Phone Number
1. In Twilio Console, go to Phone Numbers → Manage → Buy a number
2. Choose a number that can send SMS
3. Complete the purchase

## Environment Variables Setup

### Step 1: Update `.env.local`
Replace the placeholder values in `proweb-marketing/.env.local`:

```env
# Twilio SMS Configuration
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+1234567890

# Business phone number to receive SMS notifications  
BUSINESS_PHONE_NUMBER=+12899012627
```

### Step 2: Restart Development Server
After updating environment variables:
```bash
cd proweb-marketing
bun run dev
```

## Testing the System

### Test Mode (Without Twilio Setup)
The system includes a test mode that logs booking details to the console instead of sending SMS.

1. Ensure `NEXT_PUBLIC_BOOKING_MODE=test` in `.env.local`
2. Go to `http://localhost:3000/contact` (or wherever the booking form is located)
3. Fill out the booking form:
   - Name: Test Customer
   - Email: test@example.com
   - Phone: (555) 123-4567
   - Date: Select a weekday at least 1 day in advance
   - Time: Choose from available slots
   - Message: Test booking message
4. Submit the form
5. Check the browser console and server logs for the booking details

### Production Mode (With Twilio SMS)
1. Set up Twilio account and update environment variables
2. Change `NEXT_PUBLIC_BOOKING_MODE=production` in `.env.local`
3. Restart the development server
4. Test the booking form
5. Check the business phone number for the SMS notification

### Expected SMS Format
```
🗓️ NEW BOOKING REQUEST

👤 Name: Test Customer
📧 Email: test@example.com
📞 Phone: (555) 123-4567

📅 Preferred Date: Monday, January 15, 2024
⏰ Preferred Time: 2:00 PM

💬 Message: Test booking message

Please call the customer to confirm this 30-minute strategy consultation.
```

## How It Works

### Form Submission Flow
1. Customer fills out booking form
2. Form data is sent to `/api/send-booking-sms` endpoint
3. API validates the data and formats the SMS message
4. Twilio sends SMS to business phone number
5. Customer sees success message: "We'll call you to confirm your appointment"

### Changed Files
- `src/components/custom-booking.tsx` - Modified to use SMS API instead of Google Calendar
- `src/app/api/send-booking-sms/route.ts` - New API endpoint for SMS functionality
- `.env.local` - Environment variables for Twilio configuration

### Removed Features
- Google Calendar link generation
- Automatic calendar invite opening
- Calendar-related success messages

### New Features
- Real-time SMS notifications to business
- Formatted booking details in SMS
- Error handling for SMS failures
- Updated success messages for SMS workflow

## Troubleshooting

### Common Issues

**1. SMS Not Sending**
- Check that all environment variables are set correctly
- Verify Twilio account has sufficient balance
- Ensure phone numbers are in correct format (+1234567890)

**2. API Errors**
- Check browser developer console for error messages
- Verify Twilio credentials are correct
- Check that Twilio phone number is verified for SMS

**3. Environment Variables Not Loading**
- Restart the development server after changing `.env.local`
- Check that `.env.local` is in the project root directory
- Ensure no extra spaces around variable values

### Testing Without Twilio
The system includes a built-in test mode:
1. Set `NEXT_PUBLIC_BOOKING_MODE=test` in `.env.local`
2. Restart the development server
3. Submit a booking form
4. Check browser console and server logs for booking details
5. The test endpoint (`/api/test-booking`) will log all booking data without requiring Twilio

## Production Considerations

### Before Deploying
1. Ensure all environment variables are set in production environment
2. Test SMS functionality in production
3. Set up monitoring for failed SMS sends
4. Consider adding email backup notification if SMS fails

### Security
- Never commit real Twilio credentials to version control
- Use production-grade Twilio account for live deployment
- Monitor SMS usage to prevent unexpected charges

### Scaling
- Consider implementing SMS rate limiting
- Add queue system for high-volume bookings
- Implement backup notification methods (email, webhook)