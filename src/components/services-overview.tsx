"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MousePointerClick, PenTool, BarChart4, Globe, Code, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import WebsiteIframe from "@/components/website-iframe";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index: number;
  external?: boolean;
}

const ServiceCard = ({ icon, title, description, href, index, external = false }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardContent = (
    <Card className="card-glow h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-accent/50 cursor-pointer group">
      <CardContent className="p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
          {description}
        </p>
        {external && (
          <div className="flex items-center text-sm text-primary">
            <ExternalLink className="w-4 h-4 mr-1" />
            View Live Example
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        <Link href={href}>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

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

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const examplesRef = useRef(null);
  const examplesInView = useInView(examplesRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Services Overview Section */}
      <section className="py-24 relative bg-gradient-to-b from-white via-white/80 to-white dark:from-black dark:via-black/80 dark:to-black" ref={sectionRef}>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Professional Website Creation Services</h2>
            <p className="text-xl text-muted-foreground">
              We build custom websites that are affordable, visually appealing, and help your business thrive online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe size={24} />}
              title="Business Websites"
              description="Professional websites designed for businesses of all sizes that want to establish a strong online presence."
              href="/services"
              index={0}
            />

            <ServiceCard
              icon={<MousePointerClick size={24} />}
              title="E-commerce Solutions"
              description="Custom online stores that help you sell products and services with secure payment processing and inventory management."
              href="https://onlinestoreexemple.netlify.app/"
              index={1}
              external={true}
            />

            <ServiceCard
              icon={<PenTool size={24} />}
              title="Portfolio Websites"
              description="Showcase your work with a beautifully designed portfolio website that highlights your skills and accomplishments."
              href="/services"
              index={2}
            />

            <ServiceCard
              icon={<BarChart4 size={24} />}
              title="Landing Pages"
              description="High-converting landing pages designed to promote specific products, services, or campaigns and drive action."
              href="https://landingpagep-prowebexamplar.netlify.app/"
              index={3}
              external={true}
            />

            <ServiceCard
              icon={<Search size={24} />}
              title="Blog & Content Sites"
              description="Content-focused websites that help you share information, build authority, and engage with your audience."
              href="/services"
              index={4}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="card-glow h-full bg-gradient-to-br from-primary/20 to-transparent hover:shadow-lg">
                <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  >
                    Custom Web Solutions
                  </motion.h3>
                  <p className="text-muted-foreground mb-4">
                    Need a unique website for your specific needs? We create custom web solutions tailored to your business.
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      href="/contact"
                      className="text-primary hover:underline font-medium flex items-center"
                    >
                      Let's discuss your project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Can Build For You Section */}
      <section className="py-24 -mt-12 relative bg-gradient-to-b from-transparent via-background/95 to-background" ref={examplesRef}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
              <span className="font-medium">Example Websites</span>
            </div>
            <h2 className="section-title">What We Can Build For You</h2>
            <p className="text-xl text-muted-foreground">
              Take a look at some examples of the types of websites we can create for your business.
            </p>
          </div>

          {/* Horizontal Scrolling Row */}
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <motion.div
                className="flex gap-8 w-max"
                variants={containerVariants}
                initial="hidden"
                animate={examplesInView ? "show" : "hidden"}
              >
                {servicesData
                  .filter(service => service.previewImage.startsWith('/images/'))
                  .map((service) => (
                    <motion.div key={service.slug} variants={item} className="w-80 flex-shrink-0">
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

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4">
              <div className="text-sm text-muted-foreground">← Scroll to see more examples →</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-border inline-block max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-2">Ready to create your website?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss your website needs and get started on your project.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
