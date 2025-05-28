"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, CheckCircle, MessageSquare, Send, Smartphone, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function CustomBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  // Generate available time slots
  const getAvailableTimeSlots = () => {
    const slots = [];

    // Morning slot: 12:00 PM - 1:15 PM (15-minute intervals)
    const morningStart = 12 * 60; // 12:00 PM in minutes
    const morningEnd = 13 * 60 + 15; // 1:15 PM in minutes

    for (let time = morningStart; time <= morningEnd - 30; time += 15) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const displayHours = hours > 12 ? hours - 12 : hours;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const timeString = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      const value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      slots.push({ value, display: timeString });
    }

    // Afternoon slot: 3:30 PM - 6:30 PM (30-minute intervals)
    const afternoonStart = 15 * 60 + 30; // 3:30 PM in minutes
    const afternoonEnd = 18 * 60 + 30; // 6:30 PM in minutes

    for (let time = afternoonStart; time <= afternoonEnd - 30; time += 30) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const displayHours = hours > 12 ? hours - 12 : hours;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const timeString = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      const value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      slots.push({ value, display: timeString });
    }

    return slots;
  };

  // Get minimum date (1 day in advance, weekdays only)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // If tomorrow is weekend, move to next Monday
    while (tomorrow.getDay() === 0 || tomorrow.getDay() === 6) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }

    return tomorrow.toISOString().split('T')[0];
  };

  // Check if date is a weekday
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [notificationMethod, setNotificationMethod] = useState<"sms" | "email" | "both">("sms");
  const [stepErrors, setStepErrors] = useState<{ [key: number]: string[] }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors for this field
    setStepErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(newErrors).forEach(step => {
        newErrors[Number(step)] = newErrors[Number(step)].filter(error => !error.includes(name));
      });
      return newErrors;
    });
  };

  // Step validation functions
  const validateStep = (step: number): string[] => {
    const errors: string[] = [];
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) errors.push("Name is required");
        if (!formData.email.trim()) errors.push("Email is required");
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errors.push("Email is invalid");
        break;
      case 2:
        if (!formData.preferredDate) errors.push("Preferred date is required");
        if (!formData.preferredTime) errors.push("Preferred time is required");
        if (formData.preferredDate && !isWeekday(formData.preferredDate)) errors.push("Please select a weekday");
        break;
      case 3:
        // No required fields in step 3, just review
        break;
    }
    
    return errors;
  };

  const canProceed = (step: number): boolean => {
    const errors = validateStep(step);
    setStepErrors(prev => ({ ...prev, [step]: errors }));
    return errors.length === 0;
  };

  const nextStep = () => {
    if (canProceed(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Basic Information";
      case 2: return "Timing & Contact";
      case 3: return "Goals & Confirmation";
      default: return "";
    }
  };

  // Auto-compose SMS for customer to send to business
  const openSMSApp = () => {
    const businessPhone = "+12899012627"; // Business phone number
    
    // Format the date and time for better readability
    const formattedDate = new Date(formData.preferredDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Convert 24-hour time to 12-hour format
    const [hours, minutes] = formData.preferredTime.split(':');
    const hour12 = Number.parseInt(hours) > 12 ? Number.parseInt(hours) - 12 : Number.parseInt(hours);
    const ampm = Number.parseInt(hours) >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hour12}:${minutes} ${ampm}`;

    // Create the SMS message
    const smsMessage = `🗓️ BOOKING REQUEST

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || 'Not provided'}

📅 Preferred Date: ${formattedDate}
⏰ Preferred Time: ${formattedTime}

💬 Message: ${formData.message || 'No additional message'}

Please call me to confirm this 30-minute strategy consultation.`;

    // Create SMS URL - works on both mobile and desktop
    const smsUrl = `sms:${businessPhone}${navigator.userAgent.includes('iPhone') ? '&' : '?'}body=${encodeURIComponent(smsMessage)}`;
    
    // Open SMS app
    window.open(smsUrl, '_blank');
    
    return true;
  };

  // Send email notification via EmailJS (free service)
  const sendEmailNotification = async () => {
    try {
      // Format the date and time for better readability
      const formattedDate = new Date(formData.preferredDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Convert 24-hour time to 12-hour format
      const [hours, minutes] = formData.preferredTime.split(':');
      const hour12 = Number.parseInt(hours) > 12 ? Number.parseInt(hours) - 12 : Number.parseInt(hours);
      const ampm = Number.parseInt(hours) >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hour12}:${minutes} ${ampm}`;

      const templateParams = {
        to_email: 'prowebmarketing2025@gmail.com',
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone || 'Not provided',
        preferred_date: formattedDate,
        preferred_time: formattedTime,
        message: formData.message || 'No additional message',
        booking_type: '30-Minute Strategy Consultation'
      };

      // EmailJS configuration - these need to be set up in EmailJS dashboard
      // For now, we'll use a fallback method if EmailJS isn't configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        return { success: true, method: 'EmailJS' };
      } else {
        // Fallback: Use mailto link
        const subject = '🗓️ New Booking Request - Strategy Consultation';
        const body = `New booking request received:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || 'Not provided'}

📅 Preferred Date: ${formattedDate}
⏰ Preferred Time: ${formattedTime}

💬 Message: ${formData.message || 'No additional message'}

Please call the customer to confirm this 30-minute strategy consultation.`;

        const mailtoUrl = `mailto:prowebmarketing2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
        
        return { success: true, method: 'Email Client' };
      }
    } catch (error) {
      console.error('Error sending email notification:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all steps before submitting
    const allErrors = [];
    for (let step = 1; step <= 3; step++) {
      const errors = validateStep(step);
      if (errors.length > 0) {
        allErrors.push(...errors);
        setStepErrors(prev => ({ ...prev, [step]: errors }));
      }
    }
    
    if (allErrors.length > 0) {
      alert("Please fix all errors before submitting");
      return;
    }
    
    setStatus("submitting");

    try {
      let emailSent = false;
      let smsSent = false;

      // Handle different notification methods
      if (notificationMethod === "email" || notificationMethod === "both") {
        try {
          await sendEmailNotification();
          emailSent = true;
          console.log('Email notification sent successfully');
        } catch (emailError) {
          console.log('Email notification failed:', emailError);
        }
      }

      if (notificationMethod === "sms" || notificationMethod === "both") {
        try {
          openSMSApp();
          smsSent = true;
          console.log('SMS app opened successfully');
        } catch (smsError) {
          console.log('SMS app failed to open:', smsError);
        }
      }

      setStatus("success");

      // Reset form after 10 seconds (longer to give time for SMS sending)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          message: ""
        });
        setCurrentStep(1);
        setStepErrors({});
        setStatus("idle");
      }, 10000);
    } catch (error) {
      console.error('Failed to submit booking:', error);
      setStatus("idle");
      alert('There was an error submitting your booking. Please try again or call us directly at (289) 901-2627.');
    }
  };

  if (status === "success") {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3">Booking Submitted!</h3>
          <div className="space-y-3 mb-4">
            {notificationMethod === "sms" && (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Smartphone className="h-4 w-4" />
                <span className="text-sm font-medium">SMS app opened</span>
              </div>
            )}
            {notificationMethod === "email" && (
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">Email client opened</span>
              </div>
            )}
            {notificationMethod === "both" && (
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1 text-green-600">
                  <Smartphone className="h-4 w-4" />
                  <span className="text-sm">SMS</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Email</span>
                </div>
              </div>
            )}
            
            <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1 flex items-center text-sm">
                <MessageSquare className="h-3 w-3 mr-1" />
                Next Steps:
              </h4>
              <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-0.5">
                <li>• Send the pre-filled message</li>
                <li>• We'll call within 2-4 hours</li>
                <li>• 30-min consultation confirmed</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Can't send? Call <strong>(289) 901-2627</strong>
          </p>
        </CardContent>
      </Card>
    );
  }

  // Step content renderers
  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center text-sm">
          <User className="h-3 w-3 mr-1" />
          Full Name *
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          className="h-9"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center text-sm">
          <Mail className="h-3 w-3 mr-1" />
          Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your@email.com"
          className="h-9"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center text-sm">
          <Phone className="h-3 w-3 mr-1" />
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(555) 123-4567"
          className="h-9"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="preferredDate" className="text-xs">Date * (Weekdays)</Label>
          <Input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => {
              if (isWeekday(e.target.value)) {
                handleInputChange(e);
              } else {
                alert("Please select a weekday");
              }
            }}
            min={getMinDate()}
            className="h-9 text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredTime" className="text-xs">Time *</Label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="flex h-9 w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select time</option>
            {getAvailableTimeSlots().map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.display}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded text-xs text-blue-700 dark:text-blue-300">
        Available: Mon-Fri, 12:00-1:15 PM & 3:30-6:30 PM
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center text-sm">
          <MessageSquare className="h-3 w-3 mr-1" />
          Marketing Goals (optional)
        </Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="What are your main marketing challenges?"
          className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-semibold flex items-center">
          <Send className="h-3 w-3 mr-1" />
          Notification Method *
        </Label>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-accent">
            <input
              type="radio"
              name="notificationMethod"
              value="sms"
              checked={notificationMethod === "sms"}
              onChange={(e) => setNotificationMethod(e.target.value as "sms")}
              className="text-primary"
            />
            <Smartphone className="h-4 w-4 text-green-600" />
            <div className="text-sm">
              <div className="font-medium">Text Message</div>
            </div>
          </label>
          
          <label className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-accent">
            <input
              type="radio"
              name="notificationMethod"
              value="email"
              checked={notificationMethod === "email"}
              onChange={(e) => setNotificationMethod(e.target.value as "email")}
              className="text-primary"
            />
            <Mail className="h-4 w-4 text-blue-600" />
            <div className="text-sm">
              <div className="font-medium">Email</div>
            </div>
          </label>

          <label className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-accent">
            <input
              type="radio"
              name="notificationMethod"
              value="both"
              checked={notificationMethod === "both"}
              onChange={(e) => setNotificationMethod(e.target.value as "both")}
              className="text-primary"
            />
            <div className="flex space-x-1">
              <Smartphone className="h-3 w-3 text-green-600" />
              <Mail className="h-3 w-3 text-blue-600" />
            </div>
            <div className="text-sm">
              <div className="font-medium">Both Methods</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center pb-3">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="h-5 w-5 text-primary mr-1" />
          <Clock className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-lg font-bold">Book Free 30-Min Strategy Call</CardTitle>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-2 mt-3">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                step < currentStep ? 'bg-green-500 text-white' :
                step === currentStep ? 'bg-primary text-white' :
                'bg-muted text-muted-foreground'
              }`}>
                {step < currentStep ? <Check className="h-3 w-3" /> : step}
              </div>
              {step < 3 && (
                <div className={`w-8 h-0.5 ${
                  step < currentStep ? 'bg-green-500' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">
          Step {currentStep} of 3: {getStepTitle(currentStep)}
        </p>
      </CardHeader>

      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          {/* Error Display */}
          {stepErrors[currentStep]?.length > 0 && (
            <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs">
              {stepErrors[currentStep].map((error, index) => (
                <div key={index}>• {error}</div>
              ))}
            </div>
          )}

          {/* Step Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="min-h-[200px]"
            >
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center"
            >
              <ChevronLeft className="h-3 w-3 mr-1" />
              Back
            </Button>

            {currentStep < 3 ? (
              <Button
                type="button"
                size="sm"
                onClick={nextStep}
                className="flex items-center"
              >
                Next
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="sm"
                disabled={status === "submitting"}
                className="flex items-center"
              >
                {status === "submitting" ? (
                  <>
                    <Clock className="h-3 w-3 mr-1 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-3 w-3 mr-1" />
                    Submit
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
