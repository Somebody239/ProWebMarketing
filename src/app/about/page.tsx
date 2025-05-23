"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedinIcon, TwitterIcon, Mail } from "lucide-react";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";

export default function AboutPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -bottom-24 hero-gradient bg-gradient-to-b from-background via-background/80 to-primary/10"></div>
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <p className="text-white text-xl font-medium">Company Overview Image</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-xl blur-3xl"></div>
            </motion.div>
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
