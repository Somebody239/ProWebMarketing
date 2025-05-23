"use client";

import {
  Award,
  Target,
  LightbulbIcon,
  Users,
  HeartHandshake,
  Rocket,
  Gem,
  CircleCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ icon, title, description, index }: ValueCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-muted/30 rounded-lg border border-border hover:border-primary/20 transition-colors duration-300"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const values = [
  {
    icon: <CircleCheck size={32} className="text-primary" />,
    title: "Quality First",
    description: "We build websites with clean code, modern design principles, and best practices to ensure your site performs beautifully."
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Client-Centered",
    description: "Your goals, brand, and vision guide our process. We listen carefully and create websites that truly represent your business."
  },
  {
    icon: <LightbulbIcon size={32} className="text-primary" />,
    title: "Modern Solutions",
    description: "We stay on top of the latest web technologies to provide you with a site that's fast, secure, and built for today's users."
  },
  {
    icon: <Gem size={32} className="text-primary" />,
    title: "Affordable Value",
    description: "We deliver high-quality websites at reasonable prices, making professional web presence accessible for businesses of all sizes."
  },
  {
    icon: <Rocket size={32} className="text-primary" />,
    title: "Fast Delivery",
    description: "We work efficiently to get your website up and running quickly, without sacrificing quality or attention to detail."
  },
  {
    icon: <HeartHandshake size={32} className="text-primary" />,
    title: "Ongoing Support",
    description: "Our relationship doesn't end when your site goes live. We provide support and guidance to help your online presence grow."
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 -mt-12 relative bg-gradient-to-b from-transparent via-background/95 to-background" ref={sectionRef}>
      <div className="container-custom">
        {/* Mission Statement */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-medium">Our Mission</span>
          </motion.div>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Our approach to website creation combines technical expertise, creative design, and a focus on delivering exceptional value.
          </p>
        </motion.div>

        {/* Core Values */}
        <div>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
              <span className="font-medium">Our Core Values</span>
            </div>
            <h2 className="section-title">The Principles That Guide Us</h2>
            <p className="text-xl text-muted-foreground">
              These foundational values define our culture and approach to every client relationship and project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
