"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="absolute inset-0 hero-gradient -z-10" />

      <motion.div
        className="text-center max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 text-primary"
        >
          <div className="font-mono text-7xl font-bold mb-2">404</div>
          <div className="text-lg text-foreground/80">Page Not Found</div>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold mb-4"
          variants={itemVariants}
        >
          Oops! Looks like you've ventured into uncharted territory.
        </motion.h1>

        <motion.p
          className="text-muted-foreground mb-8"
          variants={itemVariants}
        >
          The page you're looking for doesn't exist or has been moved to a new location.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button asChild>
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16"
          variants={itemVariants}
        >
          <h2 className="text-lg font-medium mb-4">Try exploring these sections instead:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/services" className="p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors">
              <div className="text-primary mb-2 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="font-medium text-center">Services</div>
            </Link>

            <Link href="/about" className="p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors">
              <div className="text-primary mb-2 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="font-medium text-center">About Us</div>
            </Link>

            <Link href="/pricing" className="p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors">
              <div className="text-primary mb-2 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="font-medium text-center">Pricing</div>
            </Link>

            <Link href="/pricing" className="p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors">
              <div className="text-primary mb-2 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="font-medium text-center">Pricing</div>
            </Link>

            <Link href="/contact" className="p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors">
              <div className="text-primary mb-2 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="font-medium text-center">Contact</div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
