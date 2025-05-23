"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import CaseStudies from "@/components/case-studies";

interface PortfolioItemProps {
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const portfolioItems: PortfolioItemProps[] = [
  {
    category: "Web Design",
    title: "EcoSmart Products E-Commerce Platform",
    description: "A modern e-commerce platform for an eco-friendly product company, featuring a seamless shopping experience and powerful admin dashboard.",
    image: "/images/portfolio-1.jpg",
    slug: "ecosmart-ecommerce"
  },
  {
    category: "SEO",
    title: "TechSolutions Inc. Organic Growth",
    description: "Comprehensive SEO strategy that increased organic traffic by 210% and first-page rankings for 50+ key industry terms.",
    image: "/images/portfolio-2.jpg",
    slug: "techsolutions-seo"
  },
  {
    category: "Social Media",
    title: "GrowthFocus Instagram Campaign",
    description: "Strategic social media campaign that grew the client's Instagram following by 300% and increased engagement rates to 8.5%.",
    image: "/images/portfolio-3.jpg",
    slug: "growthfocus-social"
  },
  {
    category: "PPC",
    title: "InnovateBrand Google Ads Optimization",
    description: "PPC campaign optimization that reduced cost per acquisition by 42% while increasing conversion volume by 65%.",
    image: "/images/portfolio-4.jpg",
    slug: "innovate-ppc"
  },
  {
    category: "Branding",
    title: "HealthPlus Brand Identity Refresh",
    description: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines for a health tech company.",
    image: "/images/portfolio-5.jpg",
    slug: "healthplus-brand"
  },
  {
    category: "Web Design",
    title: "FinanceHub Website Redesign",
    description: "Modern, responsive website redesign that increased lead generation by 78% and reduced bounce rate by 45%.",
    image: "/images/portfolio-6.jpg",
    slug: "financehub-website"
  },
  {
    category: "SEO",
    title: "MediaPro Local SEO Campaign",
    description: "Local SEO strategy that helped a media production company dominate local search results and increase local leads by 130%.",
    image: "/images/portfolio-7.jpg",
    slug: "mediapro-local-seo"
  },
  {
    category: "Social Media",
    title: "NexGen B2B LinkedIn Strategy",
    description: "LinkedIn content and advertising strategy that established thought leadership and generated 200+ qualified B2B leads.",
    image: "/images/portfolio-8.jpg",
    slug: "nexgen-linkedin"
  },
  {
    category: "PPC",
    title: "GlobalBrand Multi-Channel Campaign",
    description: "Integrated PPC campaign across Google, Meta, and LinkedIn platforms that achieved 340% ROI and expanded market reach.",
    image: "/images/portfolio-9.jpg",
    slug: "globalbrand-multi-channel"
  }
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  // Update filtered items when tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item =>
        item.category.toLowerCase() === activeTab
      );
      setFilteredItems(filtered);
    }
  }, [activeTab]);

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
              Our <span className="text-gradient">Portfolio</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our latest work and see how we've helped businesses like yours achieve measurable digital success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio filter and grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="w-full mb-16">
            <div className="flex justify-center">
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="web design">Web Design</TabsTrigger>
                  <TabsTrigger value="seo">SEO</TabsTrigger>
                  <TabsTrigger value="social media">Social Media</TabsTrigger>
                  <TabsTrigger value="ppc">PPC</TabsTrigger>
                  <TabsTrigger value="branding">Branding</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
              variants={container}
              initial="hidden"
              animate="show"
              key={activeTab} // This forces re-render when filter changes
            >
              {filteredItems.map((project, index) => (
                <motion.div key={index} variants={item}>
                  <Link href={`/portfolio/${project.slug}`}>
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center text-white">
                            <p className="text-lg font-medium">{project.category}</p>
                          </div>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white font-medium px-4 py-2 border border-white/30 rounded-md">
                              View Project
                            </p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-primary mb-2">{project.category}</div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case studies section */}
      <CaseStudies />

      {/* Testimonials slider */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
              <span className="font-medium">Client Feedback</span>
            </div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Hear directly from the businesses we've worked with.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-10">
                <div className="text-primary mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0008 17.55C10.5508 17.55 10.1758 17.396 9.87575 17.088C9.57575 16.78 9.42575 16.405 9.42575 15.963C9.42575 15.588 9.52575 15.234 9.72575 14.9C9.92575 14.567 10.1508 14.309 10.4008 14.125C10.7175 13.875 10.9758 13.617 11.1758 13.35C11.3758 13.084 11.4758 12.784 11.4758 12.45C11.4758 12.084 11.3425 11.775 11.0758 11.525C10.8091 11.275 10.4841 11.15 10.1008 11.15C9.71743 11.15 9.3841 11.292 9.10075 11.575C8.81743 11.859 8.67576 12.217 8.67576 12.65C8.67576 12.784 8.65075 12.9 8.60075 13C8.55075 13.1 8.46743 13.15 8.35077 13.15H6.82575C6.69243 13.15 6.58339 13.1082 6.49865 13.0245C6.41392 12.9407 6.37155 12.8347 6.37155 12.7064C6.37155 12.2397 6.4841 11.7897 6.7092 11.3564C6.9343 10.9231 7.23847 10.548 7.6217 10.2314C8.00493 9.91469 8.44827 9.66731 8.9517 9.48923C9.45513 9.31114 9.9842 9.2221 10.5491 9.2221C11.1025 9.2221 11.625 9.31336 12.1175 9.49586C12.61 9.67836 13.035 9.92461 13.3925 10.2346C13.75 10.5447 14.03 10.9131 14.2325 11.3398C14.435 11.7665 14.5366 12.2184 14.5366 12.6955C14.5366 13.1393 14.4633 13.5393 14.3167 13.8955C14.17 14.2518 13.9866 14.5643 13.7666 14.8331C13.5466 15.1018 13.3125 15.3372 13.0641 15.5393C12.8158 15.7414 12.6016 15.9331 12.4216 16.1143C12.2416 16.2956 12.0975 16.4768 11.9891 16.658C11.8808 16.8393 11.8266 17.0372 11.8266 17.2518C11.8266 17.3851 11.7841 17.4893 11.6991 17.5643C11.6141 17.6393 11.5175 17.6768 11.4091 17.6768H11.0008V17.55ZM10.0008 20.375C9.71743 20.375 9.48339 20.283 9.29865 20.0995C9.11392 19.916 9.02155 19.6839 9.02155 19.4031C9.02155 19.1223 9.11392 18.8902 9.29865 18.7067C9.48339 18.5233 9.71743 18.4316 10.0008 18.4316C10.2841 18.4316 10.5183 18.5233 10.7033 18.7067C10.8883 18.8902 10.9808 19.1223 10.9808 19.4031C10.9808 19.6839 10.8883 19.916 10.7033 20.0995C10.5183 20.283 10.2841 20.375 10.0008 20.375ZM16.8758 13.15C16.7425 13.15 16.6316 13.1082 16.5433 13.0245C16.455 12.9407 16.4108 12.8347 16.4108 12.7064C16.4108 12.2397 16.5233 11.7897 16.7483 11.3564C16.9733 10.9231 17.2775 10.548 17.6608 10.2314C18.0441 9.91469 18.4875 9.66731 18.9908 9.48923C19.4941 9.31114 20.0233 9.2221 20.5883 9.2221C21.1416 9.2221 21.6641 9.31336 22.1566 9.49586C22.6491 9.67836 23.0741 9.92461 23.4316 10.2346C23.7891 10.5447 24.0691 10.9131 24.2716 11.3398C24.4741 11.7665 24.5758 12.2184 24.5758 12.6955C24.5758 13.1393 24.5025 13.5393 24.3558 13.8955C24.2091 14.2518 24.0258 14.5643 23.8058 14.8331C23.5858 15.1018 23.3516 15.3372 23.1033 15.5393C22.855 15.7414 22.6408 15.9331 22.4608 16.1143C22.2808 16.2956 22.1366 16.4768 22.0283 16.658C21.92 16.8393 21.8658 17.0372 21.8658 17.2518C21.8658 17.3851 21.8233 17.4893 21.7383 17.5643C21.6533 17.6393 21.5566 17.6768 21.4483 17.6768H21.04C20.59 17.6768 20.215 17.523 19.915 17.215C19.615 16.907 19.465 16.532 19.465 16.09C19.465 15.715 19.565 15.361 19.765 15.027C19.965 14.694 20.19 14.436 20.44 14.252C20.7566 14.002 21.015 13.744 21.215 13.477C21.415 13.211 21.515 12.911 21.515 12.577C21.515 12.211 21.3816 11.902 21.115 11.652C20.8483 11.402 20.5233 11.277 20.14 11.277C19.7566 11.277 19.4233 11.419 19.14 11.702C18.8566 11.986 18.715 12.344 18.715 12.777C18.715 12.911 18.69 13.027 18.64 13.127C18.59 13.227 18.5066 13.277 18.39 13.277H16.8758V13.15ZM20.0008 20.375C19.7175 20.375 19.4833 20.283 19.2983 20.0995C19.1133 19.916 19.0208 19.6839 19.0208 19.4031C19.0208 19.1223 19.1133 18.8902 19.2983 18.7067C19.4833 18.5233 19.7175 18.4316 20.0008 18.4316C20.2841 18.4316 20.5183 18.5233 20.7033 18.7067C20.8883 18.8902 20.9808 19.1223 20.9808 19.4031C20.9808 19.6839 20.8883 19.916 20.7033 20.0995C20.5183 20.283 20.2841 20.375 20.0008 20.375Z" fill="currentColor"/>
                  </svg>
                </div>

                <p className="text-xl italic mb-8">
                  ProWeb Marketing transformed our entire digital strategy. Their team took the time to understand our business goals and developed a comprehensive plan that delivered real results. They're not just service providers; they're true partners in our success.
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted mr-4 flex items-center justify-center text-muted-foreground">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">Jennifer Davis</h3>
                    <p className="text-muted-foreground">CEO, TechSolutions Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Achieve Similar Results?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss how our team can help you transform your digital presence and achieve your business goals.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
