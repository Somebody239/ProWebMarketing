"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactSection from "@/components/contact-section";

export default function ContactPage() {
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
      // Usually you would submit to an API here
      // For demo purposes, we'll just simulate success
      setFormStatus("success");

      // Reset form after success
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        services: [],
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to transform your digital presence? Let's start a conversation about your marketing goals.
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
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="aspect-square w-full bg-muted rounded-xl overflow-hidden relative mb-8">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <p className="text-white text-xl font-medium">Calendar Widget</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Choose a convenient time</h3>
                        <p className="text-sm text-muted-foreground">Select from available slots in your timezone</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Confirm your details</h3>
                        <p className="text-sm text-muted-foreground">We'll send a calendar invite to your email</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Join the call</h3>
                        <p className="text-sm text-muted-foreground">Connect via video or phone at the scheduled time</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

      {/* Office locations */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
              <span className="font-medium">Our Locations</span>
            </div>
            <h2 className="section-title">Visit Our Offices</h2>
            <p className="text-xl text-muted-foreground">
              While most of our work happens virtually, we welcome in-person meetings at any of our office locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-primary mb-2">Headquarters</div>
                    <h3 className="text-xl font-semibold">New York</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>123 Marketing Street</p>
                    <p>Suite 456</p>
                    <p>New York, NY 10001</p>
                    <p className="pt-2">(212) 555-7890</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-primary mb-2">West Coast</div>
                    <h3 className="text-xl font-semibold">San Francisco</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>456 Tech Avenue</p>
                    <p>Floor 3</p>
                    <p>San Francisco, CA 94105</p>
                    <p className="pt-2">(415) 555-1234</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-primary mb-2">European Office</div>
                    <h3 className="text-xl font-semibold">London</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>789 Digital Lane</p>
                    <p>Canary Wharf</p>
                    <p>London, E14 5AB, UK</p>
                    <p className="pt-2">+44 20 7946 0958</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
