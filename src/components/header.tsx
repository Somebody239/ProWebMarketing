"use client";

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import ThemeToggle from './theme-toggle';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem as MenuItem,
} from './ui/navigation-menu';

const useScroll = ({ threshold = 50 } = {}) => {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    scrollDirection: null as 'up' | 'down' | null,
    lastScrollY: 0,
  });

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentScrollY = window.scrollY;
    setScrollState(prev => {
      let direction = prev.scrollDirection;
      if (typeof prev.lastScrollY === 'number') {
        if (currentScrollY > prev.lastScrollY && currentScrollY > 100) {
          direction = 'down';
        } else if (currentScrollY < prev.lastScrollY && currentScrollY > 100) {
          direction = 'up';
        }
      }
      return {
        lastScrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
      };
    });
  }, [threshold]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    isScrolled: scrollState.isScrolled,
    scrollDirection: scrollState.scrollDirection,
  };
};



const Header: React.FC = () => {
  const pathname = usePathname();
  const { isScrolled, scrollDirection } = useScroll({ threshold: 50 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 w-full
    glass-header transition-all duration-300 ease-in-out
    ${isScrolled
      ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm py-2'
      : 'bg-transparent py-4'}
    ${scrollDirection === 'down' && isScrolled
      ? '-translate-y-full'
      : 'translate-y-0'}
  `;

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <>
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
            <span className="text-xl font-bold text-gradient">ProWeb Marketing</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              <MenuItem>
                <Link
                  href="/"
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname === '/' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/services"
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname.startsWith('/services') ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  aria-current={pathname.startsWith('/services') ? 'page' : undefined}
                >
                  Services
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/about"
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname === '/about' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  aria-current={pathname === '/about' ? 'page' : undefined}
                >
                  About
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  href="/pricing"
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname === '/pricing' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  aria-current={pathname === '/pricing' ? 'page' : undefined}
                >
                  Pricing
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/contact"
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname === '/contact' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  aria-current={pathname === '/contact' ? 'page' : undefined}
                >
                  Contact
                </Link>
              </MenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Theme Toggle and CTA */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="btn-glow">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

      {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>


    </header>

    {/* Mobile Menu Overlay - Compact Glassy Panel */}
    {mobileMenuOpen && (
      <div className="md:hidden fixed inset-0 z-[9999]">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        {/* Glass Menu Panel */}
        <div className="relative z-10 w-full">
          <div className="glass-header bg-white/15 dark:bg-gray-900/30 backdrop-filter backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-2xl">
            <div className="container mx-auto px-4 py-6">
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/"
                      className={`
                        block text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-1
                        ${pathname === '/' ? 'text-primary' : 'text-gray-800 dark:text-gray-100'}
                      `}
                      onClick={closeMobileMenu}
                      aria-current={pathname === '/' ? 'page' : undefined}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={`
                        block text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-1
                        ${pathname.startsWith('/services') ? 'text-primary' : 'text-gray-800 dark:text-gray-100'}
                      `}
                      onClick={closeMobileMenu}
                      aria-current={pathname.startsWith('/services') ? 'page' : undefined}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`
                        block text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-1
                        ${pathname === '/about' ? 'text-primary' : 'text-gray-800 dark:text-gray-100'}
                      `}
                      onClick={closeMobileMenu}
                      aria-current={pathname === '/about' ? 'page' : undefined}
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/pricing"
                      className={`
                        block text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-1
                        ${pathname === '/pricing' ? 'text-primary' : 'text-gray-800 dark:text-gray-100'}
                      `}
                      onClick={closeMobileMenu}
                      aria-current={pathname === '/pricing' ? 'page' : undefined}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={`
                        block text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-1
                        ${pathname === '/contact' ? 'text-primary' : 'text-gray-800 dark:text-gray-100'}
                      `}
                      onClick={closeMobileMenu}
                      aria-current={pathname === '/contact' ? 'page' : undefined}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mt-6 pt-4 border-t border-white/20 dark:border-white/10">
                <Button asChild className="w-full btn-glow">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default memo(Header);
