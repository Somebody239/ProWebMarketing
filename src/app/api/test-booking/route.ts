import { type NextRequest, NextResponse } from 'next/server';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingData = await request.json();
    const { name, email, phone, preferredDate, preferredTime, message } = body;

    // Validate required fields
    if (!name || !email || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required booking information' },
        { status: 400 }
      );
    }

    // Format the date and time for better readability
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Convert 24-hour time to 12-hour format
    const [hours, minutes] = preferredTime.split(':');
    const hour12 = Number.parseInt(hours) > 12 ? Number.parseInt(hours) - 12 : Number.parseInt(hours);
    const ampm = Number.parseInt(hours) >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hour12}:${minutes} ${ampm}`;

    // Log the formatted booking details to console (for testing)
    const bookingDetails = {
      name,
      email,
      phone: phone || 'Not provided',
      formattedDate,
      formattedTime,
      message: message || 'No additional message',
      receivedAt: new Date().toISOString()
    };

    console.log('📋 BOOKING REQUEST RECEIVED:');
    console.log(JSON.stringify(bookingDetails, null, 2));

    // Simulate SMS message that would be sent
    const simulatedSMS = `🗓️ NEW BOOKING REQUEST

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || 'Not provided'}

📅 Preferred Date: ${formattedDate}
⏰ Preferred Time: ${formattedTime}

💬 Message: ${message || 'No additional message'}

Please call the customer to confirm this 30-minute strategy consultation.`;

    console.log('📱 SIMULATED SMS MESSAGE:');
    console.log(simulatedSMS);

    return NextResponse.json({
      success: true,
      message: 'Booking test completed successfully',
      bookingDetails,
      simulatedSMS
    });

  } catch (error) {
    console.error('Error processing booking test:', error);
    return NextResponse.json(
      { error: 'Failed to process booking test' },
      { status: 500 }
    );
  }
}