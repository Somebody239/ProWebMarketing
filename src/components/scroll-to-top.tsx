'use client';

"use client";

import type React from 'react';
import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    // Show button when page is scrolled down 300px
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial check
    checkScroll();

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', checkScroll, { passive: true });

    // Clean up
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary/90 dark:hover:bg-primary"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp className="h-5 w-5 text-white" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default memo(ScrollToTop);
