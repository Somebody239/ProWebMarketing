"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, MousePointerClick, PenTool, BarChart4, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, href, index }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
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
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 -mt-12 relative bg-gradient-to-b from-transparent via-background/95 to-background" ref={sectionRef}>
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
            href="/services/web-design"
            index={0}
          />

          <ServiceCard
            icon={<MousePointerClick size={24} />}
            title="E-commerce Solutions"
            description="Custom online stores that help you sell products and services with secure payment processing and inventory management."
            href="/services/web-design"
            index={1}
          />

          <ServiceCard
            icon={<PenTool size={24} />}
            title="Portfolio Websites"
            description="Showcase your work with a beautifully designed portfolio website that highlights your skills and accomplishments."
            href="/services/web-design"
            index={2}
          />

          <ServiceCard
            icon={<BarChart4 size={24} />}
            title="Landing Pages"
            description="High-converting landing pages designed to promote specific products, services, or campaigns and drive action."
            href="/services/web-design"
            index={3}
          />

          <ServiceCard
            icon={<Search size={24} />}
            title="Blog & Content Sites"
            description="Content-focused websites that help you share information, build authority, and engage with your audience."
            href="/services/web-design"
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
  );
}
