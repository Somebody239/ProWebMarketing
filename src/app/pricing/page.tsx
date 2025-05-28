"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const baseFeatures = [
  "Modern, responsive design",
  "Customized to match your brand",
  "Fast loading times",
  "Security & maintenance",
  "Multiple pages (Home, Services, Contact, etc.)",
  "Unique design elements",
  "Perfect for small businesses"
];

const premiumFeatures = [
  "Everything in Base Website",
  "User account integration",
  "Payment processing",
  "E-commerce capabilities",
  "User personalization",
  "Customer reviews",
  "Shipping management"
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -bottom-24 hero-gradient bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Simple <span className="text-gradient">Affordable</span> Pricing
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional website design at a fraction of the industry standard cost.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key benefits section */}
      <section className="py-12 -mt-12 bg-gradient-to-b from-transparent via-background/95 to-background relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Benefits for Your Business</h2>
            <p className="text-lg text-muted-foreground">
              Our websites offer essential features that every business needs to succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Connect with Customers",
                description: "Create a direct line of communication between your business and your customers."
              },
              {
                title: "Advertise Effectively",
                description: "Showcase your products and services to a global audience 24/7."
              },
              {
                title: "Grow Your Business",
                description: "Take your business to new heights with a professional online presence."
              },
              {
                title: "Modernize Your Image",
                description: "Present your business in the best light with a contemporary, professional website."
              }
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing plans section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-background/95 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
              <span className="font-medium">Transparent Pricing</span>
            </div>
            <h2 className="section-title">Choose the Right Plan for Your Business</h2>
            <p className="text-xl text-muted-foreground">
              Our pricing is straightforward and affordable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Base Website Plan */}
            <div className="relative rounded-2xl border border-border p-8 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-4 right-4 bg-primary text-white text-center py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-2">Base Website</h3>
                <p className="text-muted-foreground mb-4">The go-to solution for small businesses and casual advertising</p>

                <div className="flex items-baseline my-8">
                  <span className="text-5xl font-bold">$219.99</span>
                  <span className="text-muted-foreground ml-2">
                    <span className="line-through">$3000</span>
                    <span className="text-sm"> industry standard</span>
                  </span>
                </div>

                <Button
                  size="lg"
                  className="w-full mb-8"
                  asChild
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <h4 className="font-medium text-lg mb-4">Features include:</h4>
                <ul className="space-y-3">
                  {baseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Website Plan */}
            <div className="rounded-2xl border border-border p-8 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">User Integrated Premium</h3>
              <p className="text-muted-foreground mb-4">Necessary for E-commerce platforms, user accounts, and advanced functionality</p>

              <div className="flex items-baseline my-8">
                <span className="text-5xl font-bold">$349.99</span>
                <span className="text-muted-foreground ml-2">
                  <span className="line-through">$8000</span>
                  <span className="text-sm"> industry standard</span>
                </span>
              </div>

              <Button
                size="lg"
                className="w-full mb-8"
                variant="outline"
                asChild
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <h4 className="font-medium text-lg mb-4">Everything from Base, plus:</h4>
              <ul className="space-y-3">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-green-500 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section specific to pricing */}
      <section className="py-24 -mt-12 relative bg-gradient-to-b from-transparent via-background/95 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              {[
                {
                  question: "What's included in the pricing?",
                  answer: "The prices you see are all-inclusive. We believe in transparent pricing."
                },
                {
                  question: "Do you offer payment plans?",
                  answer: "Yes, we can arrange payment plans to accommodate your budget. Contact us to discuss options."
                },
                {
                  question: "What's the difference between the Base and Premium plans?",
                  answer: "The Base plan is perfect for informational websites, while the Premium plan includes user accounts, e-commerce capabilities, and more advanced features."
                },
                {
                  question: "How long does it take to build my website?",
                  answer: "Most Base websites take 2-4 weeks to complete. Premium websites typically take 4-8 weeks depending on complexity."
                },
                {
                  question: "Do you offer website maintenance?",
                  answer: "Yes, we provide ongoing maintenance services to ensure your website remains secure and up-to-date."
                }
              ].map((faq) => (
                <div key={faq.question} className="border-b border-border last:border-b-0">
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-b from-background via-background/80 to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today for a free consultation and let's create a website that takes your business to the next level.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
