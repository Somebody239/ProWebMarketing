'use client';

"use client";

import type React from 'react';
import { useEffect, memo } from 'react';
import ScrollToTop from '@/components/scroll-to-top';

interface ClientBodyProps {
  children: React.ReactNode;
}

const ClientBody: React.FC<ClientBodyProps> = ({ children }) => {
  // Simple scroll restoration implementation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Restore scroll position on page load
    const restoreScrollPosition = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, Number.parseInt(scrollPosition, 10));
        sessionStorage.removeItem('scrollPosition');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Use setTimeout to ensure the DOM is fully loaded
    const timeoutId = setTimeout(restoreScrollPosition, 0);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {children}
      <ScrollToTop />
    </div>
  );
};

export default memo(ClientBody);
