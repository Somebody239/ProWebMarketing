# EmailJS Template Example

If you want to set up automatic email notifications (completely optional), here's the template to use in EmailJS:

## EmailJS Template Configuration

**Subject**: 🗓️ New Booking Request - {{booking_type}}

**Email Body**:
```
Hello Pro Web Marketing Team,

You have received a new booking request for a strategy consultation.

📋 BOOKING DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━

👤 Customer Name: {{customer_name}}
📧 Email Address: {{customer_email}}
📞 Phone Number: {{customer_phone}}

📅 Preferred Date: {{preferred_date}}
⏰ Preferred Time: {{preferred_time}}

💬 Customer Message:
{{message}}

🎯 Booking Type: {{booking_type}}

━━━━━━━━━━━━━━━━━━━━━━━

⚡ ACTION REQUIRED:
Please call the customer within 2-4 hours to confirm their consultation.

📞 Customer Phone: {{customer_phone}}
📧 Customer Email: {{customer_email}}

Best regards,
Pro Web Marketing Booking System
```

## Variable Names to Use in EmailJS Template

When creating your template in EmailJS, use these exact variable names:

- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{preferred_date}}`
- `{{preferred_time}}`
- `{{message}}`
- `{{booking_type}}`

## EmailJS Setup Steps

1. **Create EmailJS Account**: Go to https://www.emailjs.com/
2. **Add Email Service**: Connect your Gmail, Outlook, or other email provider
3. **Create Template**: Use the template above with the exact variable names
4. **Get Credentials**: Copy your Service ID, Template ID, and Public Key
5. **Update .env.local**: Add the credentials to your environment file

## Cost

- **FREE** up to 200 emails per month
- No credit card required for free tier
- Perfect for small businesses

## Fallback

Even if you don't set up EmailJS, the system works perfectly using the customer's email client (mailto links) as a fallback.