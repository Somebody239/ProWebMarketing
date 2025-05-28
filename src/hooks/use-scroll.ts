import { useCallback, useEffect, useRef, useState } from 'react';

interface ScrollOptions {
  threshold?: number;
  scrollUpThreshold?: number;
  passive?: boolean;
}

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

export function useScroll({
  threshold = 50,
  scrollUpThreshold = 10,
  passive = true,
}: ScrollOptions = {}): ScrollState {
  // Initialize with default values
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
    isAtTop: true,
    isAtBottom: false,
  });

  // Use a ref to store previous scrollY and direction to avoid stale closure
  const prevScrollYRef = useRef(0);
  const prevDirectionRef = useRef<"up" | "down" | null>(null);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentScrollY = window.scrollY;
    const previousScrollY = prevScrollYRef.current;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Determine scroll direction with a threshold to reduce jitter
    let direction: 'up' | 'down' | null = prevDirectionRef.current;
    if (currentScrollY < previousScrollY - scrollUpThreshold) {
      direction = 'up';
    } else if (currentScrollY > previousScrollY + scrollUpThreshold) {
      direction = 'down';
    }

    prevScrollYRef.current = currentScrollY;
    prevDirectionRef.current = direction;

    setScrollState({
      scrollY: currentScrollY,
      scrollDirection: direction,
      isScrolled: currentScrollY > threshold,
      isAtTop: currentScrollY <= 0,
      isAtBottom: Math.abs(scrollHeight - clientHeight - currentScrollY) < 5,
    });
  }, [threshold, scrollUpThreshold]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize with current scroll position
    const initialScrollY = window.scrollY;
    prevScrollYRef.current = initialScrollY;
    prevDirectionRef.current = null;
    setScrollState(prev => ({
      ...prev,
      scrollY: initialScrollY,
      isScrolled: initialScrollY > threshold,
      isAtTop: initialScrollY <= 0,
      isAtBottom:
        Math.abs(
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight -
            initialScrollY
        ) < 5,
    }));

    const options = { passive };
    window.addEventListener('scroll', handleScroll, options);

    return () => {
      window.removeEventListener('scroll', handleScroll, options);
    };
  }, [handleScroll, passive, threshold]);

  return scrollState;
}

export function useScrollTo() {
  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const scrollToElement = useCallback((elementId: string) => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(elementId);
    if (!element) return;

    // Get header height for offset (if available)
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset - 16; // 16px additional padding

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  const scrollToPosition = useCallback((position: number) => {
    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToTop, scrollToElement, scrollToPosition };
}

export function useScrollRestoration() {
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

  return null;
}
