"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Globe,
  MousePointerClick,
  PenTool,
  BarChart4,
  Search,
  Code,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import WebsiteIframe from "@/components/website-iframe";

// Define 6 services with portfolio-style presentation
const servicesData = [
  {
    icon: <Globe size={32} />,
    category: "Business Website",
    title: "Professional Business Websites",
    description: "Custom-designed websites that establish your professional online presence and help you connect with customers.",
    features: ["Responsive Design", "Contact Forms", "SEO Optimized", "Professional Layout"],
    price: "$219.99",
    exampleUrl: "https://businessexamplar-proweb.netlify.app",
    previewImage: "/images/previews/business-preview.jpg",
    slug: "business-websites"
  },
  {
    icon: <MousePointerClick size={32} />,
    category: "E-commerce Store",
    title: "Online Store Solutions",
    description: "Complete e-commerce platforms with shopping cart, secure payments, and inventory management systems.",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Processing"],
    price: "$349.99",
    exampleUrl: "https://onlinestoreexemple.netlify.app/",
    previewImage: "/images/previews/ecommerce-preview.jpg",
    slug: "ecommerce-solutions"
  },
  {
    icon: <PenTool size={32} />,
    category: "Portfolio Site",
    title: "Creative Portfolio Websites",
    description: "Stunning portfolio websites that showcase your work and attract potential clients with visual impact.",
    features: ["Gallery Layouts", "Project Showcases", "Client Testimonials", "Contact Integration"],
    price: "$219.99",
    exampleUrl: "https://creative-portfolio-example.com",
    previewImage: "/images/previews/portfolio-preview.jpg",
    slug: "portfolio-websites"
  },
  {
    icon: <BarChart4 size={32} />,
    category: "Landing Page",
    title: "High-Converting Landing Pages",
    description: "Focused landing pages designed to convert visitors into customers with compelling design and clear calls-to-action.",
    features: ["Conversion Focused", "Lead Capture", "A/B Testing", "Analytics Integration"],
    price: "$219.99",
    exampleUrl: "https://landingpagep-prowebexamplar.netlify.app/",
    previewImage: "/images/previews/landing-preview.jpg",
    slug: "landing-pages"
  },
  {
    icon: <Search size={32} />,
    category: "Content Site",
    title: "Blog & Content Platforms",
    description: "Content management systems that help you share knowledge, build authority, and engage with your audience.",
    features: ["Content Management", "SEO Optimized", "Social Sharing", "Comment System"],
    price: "$219.99",
    exampleUrl: "https://industry-blog-example.com",
    previewImage: "/images/previews/blog-preview.jpg",
    slug: "blog-content-sites"
  },
  {
    icon: <Code size={32} />,
    category: "Web Application",
    title: "Custom Web Applications",
    description: "Tailored web applications and platforms built to meet your specific business needs and workflows.",
    features: ["Custom Features", "User Management", "Database Integration", "API Development"],
    price: "$349.99",
    exampleUrl: "https://memberhub-example.com",
    previewImage: "/images/previews/webapp-preview.jpg",
    slug: "custom-web-solutions"
  }
];

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="preload-fade-in w-full max-w-full overflow-x-hidden">
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Web Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Professional website creation solutions designed to help businesses establish their online presence and drive results.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {servicesData
              .filter(service => 
                service.previewImage && 
                service.previewImage.startsWith('/images/') && 
                service.exampleUrl && 
                service.exampleUrl.includes('netlify.app')
              )
              .map((service) => (
              <motion.div key={service.slug} variants={item}>
                <a
                  href={service.exampleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      {/* Preview Image */}
                      <WebsiteIframe
                        src={service.exampleUrl}
                        title={`${service.title} Preview`}
                        icon={service.icon}
                        category={service.category}
                        previewImage={service.previewImage}
                      />

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-2">Key Features:</div>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature) => (
                              <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="text-lg font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground">Click to view example →</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your New Website?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is ready to help you build a website that perfectly represents your business and helps you connect with more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
