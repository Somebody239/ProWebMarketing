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
      '/portfolio'
    ].filter(path => path !== pathname);

    // Add prefetch links for critical routes only if they haven't been preloaded
    criticalPaths.forEach(path => {
      if (!preloadedPaths.current.has(path)) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'prefetch'; // Use prefetch for better browser behavior
        linkElement.href = path;
        linkElement.setAttribute('data-preload-link', 'true');
        document.head.appendChild(linkElement);

        // Mark this path as preloaded
        preloadedPaths.current.add(path);
      }
    });

    // Clean up on unmount
    return () => {
      // Remove all prefetch links we added
      document.querySelectorAll('link[data-preload-link="true"]').forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [pathname]);

  return null;
}
