"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Users, Timer, Calendar } from "lucide-react";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import { Code, Palette, Rocket } from "lucide-react";
import { useRef } from "react";

function useMouseTilt(ref: React.RefObject<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 1
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 1
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 0.5;
    const yPct = (mouseY / height - 0.5) * 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave
  };
}

export default function AboutPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseTilt(cardRef);

  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -bottom-24 hero-gradient bg-gradient-to-b from-background via-background/80 to-primary/10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-gradient">Pro Web Marketing</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're a small team of passionate web developers and designers dedicated to helping businesses establish their online presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Work With Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our story section */}
      <section className="py-24 -mt-12 bg-gradient-to-b from-transparent via-background/95 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-2">
                  <span className="font-medium">Our Story</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2025, Pro Web Marketing began with a clear purpose: to help businesses succeed online by creating affordable, high-quality websites.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  As a team of three dedicated professionals, we bring together technical expertise, design talent, and project management skills to deliver websites that truly represent our clients' businesses.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our approach combines modern web technologies with user-focused design, ensuring that every website we create not only looks great but also provides an excellent experience for visitors and helps our clients achieve their goals.
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full aspect-video"
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-background via-background to-background border border-border rounded-xl overflow-hidden"
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    willChange: "transform",
                    transition: "transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      className="flex flex-col items-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Calendar className="w-8 h-8 text-primary" />
                      </motion.div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">Book a Free Consultation</h3>
                        <p className="text-muted-foreground max-w-md">
                          Let's discuss how we can help establish your online presence with a professionally designed website.
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Link href="/contact" className="inline-block">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
                          >
                            Schedule Meeting
                          </Button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl blur-3xl opacity-30" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-xl blur-3xl opacity-30" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core values section */}
      <AboutSection />

      {/* Team section */}
      <TeamSection />

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
              Ready to Create Your Website?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss how our team can help you establish your online presence with a professionally designed website.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us Today</Link>
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
