"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsTyping(true);

    // Reset typing state after a delay
    setTimeout(() => setIsTyping(false), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Store the business name in sessionStorage to use on contact page
      sessionStorage.setItem('businessName', inputText.trim());
      router.push('/contact');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputText.trim()) {
      handleSubmit(e as any);
    }
  };

  return (
    <section className="relative pt-32 pb-32 overflow-hidden w-full" aria-label="Hero Section">
      {/* Extended background gradient that blends into next section */}
      <div className="absolute inset-0 -bottom-32 hero-gradient bg-gradient-to-b from-background via-background/60 to-transparent" aria-hidden="true"></div>

      {/* Fade to background overlay at the bottom - adapts to theme */}
      <div className="absolute -bottom-40 left-0 w-full h-96 bg-gradient-to-t from-white via-white/70 via-white/50 via-white/30 via-white/15 via-white/8 via-white/3 to-transparent dark:from-black dark:via-black/70 dark:via-black/50 dark:via-black/30 dark:via-black/15 dark:via-black/8 dark:via-black/3 z-20 pointer-events-none" aria-hidden="true"></div>

      {/* Enhanced background with flowing animations that extends beyond section */}
      <div className="absolute inset-0 -bottom-32 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

        {/* Additional blending gradient for seamless transition */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-transparent via-primary/2 to-transparent"></div>

        {/* Floating animated shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute top-3/4 left-1/3 w-6 h-6 rounded-full bg-primary/20"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/40"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-primary/15"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
            delay: 1.5
          }}
        ></motion.div>
      </div>

      <div className="container-custom relative z-10">
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
            {/* Interactive text input area with effects */}
            <motion.div
              className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
                  <p className="text-muted-foreground">Tell us about your business idea</p>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Enter your business name or idea..."
                      value={inputText}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="text-lg py-6 px-4 bg-white/80 dark:bg-black/80 border-2 border-primary/20 focus:border-primary/60 transition-all duration-300"
                    />

                    {inputText.trim() && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center"
                      >
                        <Button
                          type="submit"
                          className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                        >
                          Let's Build Your Website →
                        </Button>
                      </motion.div>
                    )}
                  </form>

                  {/* Animated typing indicator */}
                  {isTyping && (
                    <motion.div
                      className="absolute right-3 top-6 transform -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.1 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Dynamic content based on input */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inputText ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center space-x-2 text-sm text-muted-foreground"
                    animate={{ scale: inputText ? 1.05 : 1 }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500"
                      animate={{
                        opacity: inputText ? [0.5, 1, 0.5] : 0.3,
                        scale: inputText ? [1, 1.2, 1] : 1
                      }}
                      transition={{
                        repeat: inputText ? Number.POSITIVE_INFINITY : 0,
                        duration: 2
                      }}
                    />
                    <span>{inputText ? "Perfect! Click below to get started." : "Ready to bring your vision to life?"}</span>
                  </motion.div>
                </motion.div>

                {/* Floating feature badges */}
                <div className="flex justify-center space-x-4 pt-4">
                  {["Fast", "Affordable", "Professional"].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ambient glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-primary/15 to-primary/5 rounded-full blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
