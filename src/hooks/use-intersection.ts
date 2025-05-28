import { useState, useEffect, useRef, useCallback } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  triggerOnce?: boolean;
}

export function useIntersection<T extends Element = HTMLDivElement>(
  options: IntersectionOptions = {},
) {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    freezeOnceVisible = false,
    triggerOnce = false
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T | null>(null);
  const frozen = useRef(false);

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);

    // If we only care about elements that become visible, we can
    // freeze the observer after the element is visible
    if (freezeOnceVisible && entry.isIntersecting) {
      frozen.current = true;
      setIsIntersecting(true);
      return;
    }

    // For one-time triggers
    if (triggerOnce && entry.isIntersecting) {
      setIsIntersecting(true);
      if (elementRef.current && observer.current) {
        observer.current.unobserve(elementRef.current);
      }
      return;
    }

    setIsIntersecting(entry.isIntersecting);
  }, [freezeOnceVisible, triggerOnce]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Skip if SSR or the element doesn't exist
    if (typeof window === 'undefined' || !elementRef.current || frozen.current) return;

    // Cleanup old observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create new observer with the given options
    const observerInstance = new IntersectionObserver([updateEntry], {
      root,
      rootMargin,
      threshold,
    });

    observer.current = observerInstance;
    observerInstance.observe(elementRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, updateEntry]);

  return { ref: elementRef, entry, isIntersecting };
}

export function useScrollAnimation(options: IntersectionOptions = {}) {
  const { ref, isIntersecting } = useIntersection({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  return { ref, isVisible: hasAnimated };
}
