"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden w-full max-w-[100vw]" aria-label="Hero Section">
      {/* Background gradient with extended reach */}
      <div className="absolute inset-0 -bottom-24 hero-gradient bg-gradient-to-b from-background via-background/80 to-transparent" aria-hidden="true"></div>

      {/* Custom background instead of ParticleBackground */}
      <div className="absolute inset-0 -bottom-24 -z-10 overflow-hidden w-full max-w-full" aria-hidden="true">
        <div className="absolute -inset-[10%] bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

        {/* Animated dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container-custom relative z-10 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Create Your Online Presence with <span className="text-gradient">Pro Web Marketing</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We build affordable, high-quality websites that help businesses establish their online presence and connect with customers.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                asChild
                className="relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get a Free Consultation</span>
                  <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="relative overflow-hidden group"
              >
                <Link href="/services">
                  <span className="relative z-10">Explore Our Services</span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true"></span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Dashboard mockup image - would be replaced with actual marketing dashboard */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center"
                    animate={{
                      boxShadow: ["0 0 0 0 rgba(80, 98, 177, 0.4)", "0 0 0 10px rgba(80, 98, 177, 0)"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "loop"
                    }}
                    aria-hidden="true"
                  >
                    <div className="w-8 h-8 bg-primary/40 rounded-full"></div>
                  </motion.div>
                  <h3 className="text-xl font-medium mb-2">Marketing Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Real-time analytics & insights</p>
                </div>
              </div>
            </motion.div>

            {/* Floating elements around the dashboard - made sure they don't cause overflow */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg shadow-lg transform rotate-6 flex items-center justify-center p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              style={{ maxWidth: "calc(100% - 24px)" }}
              aria-hidden="true"
            >
              <div className="text-sm">
                <div className="font-bold">Pro Site</div>
                <div className="text-xs text-muted-foreground">Modern Design</div>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-8 -left-8 w-32 h-16 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg shadow-lg transform -rotate-3 flex items-center justify-center p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              style={{ maxWidth: "calc(100% - 32px)" }}
              aria-hidden="true"
            >
              <div className="text-sm">
                <div className="font-bold">Fast Launch</div>
                <div className="text-xs text-muted-foreground">Affordable Sites</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
