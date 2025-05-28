"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/contact-section";
import CustomBooking from "@/components/custom-booking";

export default function ContactPage() {
  const [businessName, setBusinessName] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    services: [] as string[],
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    // Get business name from sessionStorage if available
    const storedBusinessName = sessionStorage.getItem('businessName');
    if (storedBusinessName) {
      setBusinessName(storedBusinessName);
      setFormState(prev => ({ ...prev, company: storedBusinessName }));
      // Clear from sessionStorage after using it
      sessionStorage.removeItem('businessName');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormState((prev) => ({
        ...prev,
        services: [...prev.services, value]
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        services: prev.services.filter(service => service !== value)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        services: [],
      });
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {businessName ? (
                <>Let's Build <span className="text-gradient">{businessName}</span></>
              ) : (
                <>Get In <span className="text-gradient">Touch</span></>
              )}
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {businessName
                ? `Ready to bring ${businessName} online? Let's discuss your vision and create something amazing together.`
                : "Ready to transform your digital presence? Let's start a conversation about your marketing goals."
              }
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact form and info section */}
      <ContactSection />

      {/* Schedule a call section */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center bg-white/10 text-primary px-4 py-2 rounded-full text-sm mb-2">
                  <span className="font-medium">Book a Strategy Call</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Schedule a Free 30-Minute Marketing Consultation</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Speak directly with one of our marketing strategists to discuss your goals and challenges. We'll provide insights and recommendations for your specific situation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 h-5 w-5" />
                    <span>Personalized strategies tailored to your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 h-5 w-5" />
                    <span>Analysis of your current digital marketing efforts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 h-5 w-5" />
                    <span>Actionable recommendations you can implement immediately</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1 h-5 w-5" />
                    <span>No obligation and no pressure - just expert advice</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button size="lg" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Now
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <CustomBooking />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ about contacting */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Answers to common questions about working with ProWeb Marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-3">How quickly will I receive a response?</h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 1 business day. For urgent matters, please indicate this in your message and we'll prioritize your request.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">Do you work with businesses outside the US?</h3>
              <p className="text-muted-foreground">
                Yes, we work with clients globally. Our team is equipped to handle international projects and can accommodate different time zones for meetings and communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">What information should I include in my inquiry?</h3>
              <p className="text-muted-foreground">
                To help us provide the most relevant information, please include your company name, website, current marketing challenges, and specific services you're interested in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">Can I schedule a call before committing to services?</h3>
              <p className="text-muted-foreground">
                Absolutely! We offer a free 30-minute consultation to discuss your needs and determine if we're a good fit for your business before any commitment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
