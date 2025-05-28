"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Component that adds preload link hints to the document head
 * This optimizes critical resources loading for better performance
 */
export default function HeadPreload() {
  const pathname = usePathname();
  const preloadedPaths = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Critical paths to preload, excluding the current path
    const criticalPaths = [
      '/services',
      '/about',
      '/contact',
    ].filter(path => path !== pathname);

    // Add prefetch links for critical routes only if they haven't been preloaded
    for (const path of criticalPaths) {
      if (!preloadedPaths.current.has(path)) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        link.setAttribute('data-preload-link', 'true');

        document.head.appendChild(link);
        preloadedPaths.current.add(path);
      }
    }

    // Clean up on unmount
    return () => {
      // Remove all prefetch links we added
      for (const el of document.querySelectorAll('link[data-preload-link="true"]')) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    };
  }, [pathname]);

  return null;
}
