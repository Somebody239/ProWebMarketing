"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import {
  Search,
  MousePointerClick,
  Globe,
  BarChart4,
  PenTool,
  ArrowRight,
  Code,
  CheckSquare,
  BadgeCheck
} from "lucide-react";

// Define all services data
const allServicesData = [
  {
    icon: <Globe size={28} />,
    title: "Business Websites",
    description: "Professional websites designed for businesses of all sizes that want to establish a strong online presence and connect with customers.",
    features: [
      "Custom responsive design that works on all devices",
      "Professional content layout and structure",
      "Contact forms and business information",
      "SEO-friendly structure for better visibility",
      "Social media integration"
    ],
    benefits: [
      "Establish a professional online presence",
      "Showcase your products and services effectively",
      "Make it easy for customers to find and contact you",
      "Build trust and credibility with your audience",
      "Stay competitive in today's digital marketplace"
    ]
  },
  {
    icon: <MousePointerClick size={28} />,
    title: "E-commerce Solutions",
    description: "Custom online stores that help you sell products and services with secure payment processing, inventory management, and user-friendly shopping experience.",
    features: [
      "User-friendly product catalog and categories",
      "Secure payment gateway integration",
      "Shopping cart and checkout process",
      "Inventory and order management",
      "Customer account creation and management"
    ],
    benefits: [
      "Sell products or services 24/7 without geographic limitations",
      "Lower overhead costs compared to physical stores",
      "Reach customers beyond your local area",
      "Easily showcase your entire product catalog",
      "Scale your business more efficiently"
    ]
  },
  {
    icon: <PenTool size={28} />,
    title: "Portfolio Websites",
    description: "Showcase your work with a beautifully designed portfolio website that highlights your skills, projects, and accomplishments to potential clients or employers.",
    features: [
      "Visually striking gallery of your work",
      "Project or work categorization",
      "About section to highlight your skills",
      "Contact form for potential clients",
      "Mobile-optimized design for viewing on any device"
    ],
    benefits: [
      "Showcase your best work in an organized manner",
      "Establish your professional reputation",
      "Make a memorable impression on potential clients",
      "Demonstrate your expertise and style",
      "Attract more opportunities and clients"
    ]
  },
  {
    icon: <BarChart4 size={28} />,
    title: "Landing Pages",
    description: "High-converting landing pages designed to promote specific products, services, or campaigns and drive action from your visitors.",
    features: [
      "Focused, goal-oriented design",
      "Compelling headlines and content",
      "Clear calls-to-action",
      "Lead capture forms",
      "A/B testing capability"
    ],
    benefits: [
      "Higher conversion rates for specific campaigns",
      "Better ROI on advertising campaigns",
      "Capture leads for your business",
      "Promote new products or services effectively",
      "Measure success with integrated analytics"
    ]
  },
  {
    icon: <Search size={28} />,
    title: "Blog & Content Sites",
    description: "Content-focused websites that help you share information, build authority in your field, and engage with your audience through regular updates.",
    features: [
      "User-friendly content management system",
      "Category and tag organization",
      "Comment section for reader engagement",
      "Social sharing integration",
      "Newsletter subscription options"
    ],
    benefits: [
      "Establish yourself as an authority in your field",
      "Improve search engine visibility with fresh content",
      "Build an engaged community around your brand",
      "Share your knowledge and expertise",
      "Drive organic traffic to your website"
    ]
  },
  {
    icon: <Code size={28} />,
    title: "Custom Web Solutions",
    description: "Need something unique? We create custom web solutions tailored to your specific business needs, from membership sites to web applications.",
    features: [
      "Personalized project planning and strategy",
      "Custom feature development",
      "Integration with third-party services",
      "User account and management systems",
      "Ongoing support and maintenance"
    ],
    benefits: [
      "Get exactly what your business needs",
      "Stand out from competitors with unique functionality",
      "Streamline your business operations",
      "Create custom experiences for your users",
      "Scale and adapt as your business grows"
    ]
  }
];

// Simple service detail component
function ServiceDetail({ service, index }: { service: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="mb-24">
      <Card className="overflow-hidden border-none shadow-lg">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {service.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <div className="pt-4">
                <Button asChild>
                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-muted/30 p-8 lg:p-12 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckSquare className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <BadgeCheck className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="preload-fade-in w-full max-w-full overflow-x-hidden">
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Web Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Professional website creation solutions designed to help businesses establish their online presence, engage with customers, and grow their reach.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24">
        <div className="container-custom">
          {allServicesData.map((service, index) => (
            <ServiceDetail
              key={index}
              service={service}
              index={index}
            />
          ))}
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
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
