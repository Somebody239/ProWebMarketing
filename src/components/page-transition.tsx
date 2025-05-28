'use client';

"use client";

import type React from 'react';
import { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ErrorBoundary } from './error-boundary';

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [key, setKey] = useState('');

  useEffect(() => {
    // Update the key when the pathname changes
    // This ensures the animation runs on every route change
    setKey(pathname);

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.3
          }}
          className="w-full flex-1"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default memo(PageTransition);
