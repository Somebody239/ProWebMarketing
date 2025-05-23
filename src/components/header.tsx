"use client";

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import ThemeToggle from './theme-toggle';

// For the services dropdown
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem as MenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Icons } from './icons';

// Temporarily recreate scroll hooks logic
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

    // Initialize
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Return only the relevant state
  return {
    isScrolled: scrollState.isScrolled,
    scrollDirection: scrollState.scrollDirection,
  };
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

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

  // Dynamic header classes
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

  // Apply body overflow when mobile menu is open
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group md:hidden" onClick={closeMobileMenu}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
              Pro<span className="text-gray-800 dark:text-gray-100 font-normal">Web</span>
            </span>
            <span className="text-xl font-light ml-0.5">Marketing</span>
          </Link>
          <Link href="/" className="hidden md:block">
            <span className="text-xl font-bold text-gradient">Pro Web Marketing</span>
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
                <NavigationMenuTrigger
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname.startsWith('/services') ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/services/web-design"
                      >
                        <Icons.monitor className="h-6 w-6 text-primary" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Website Creation
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Custom, responsive websites built to help you succeed online
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="grid grid-rows-3 gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/web-design"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Business Websites</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional sites for businesses of all sizes
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/web-design"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">E-commerce Solutions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom online stores for selling products
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/web-design"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Portfolio Sites</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Showcase your work with a beautiful portfolio
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
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
                  href="/portfolio"
                  className={`
                    text-sm font-medium transition-colors animated-underline
                    ${pathname === '/portfolio' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  aria-current={pathname === '/portfolio' ? 'page' : undefined}
                >
                  Portfolio
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

        {/* Mobile Menu Button and Theme Toggle */}
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto flex h-full flex-col px-4 pt-20 pb-8">
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <nav className="flex-1">
            <ul className="space-y-6 py-6">
              <li>
                <Link
                  href="/"
                  className={`
                    text-lg font-medium transition-colors hover:text-primary
                    ${pathname === '/' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  onClick={closeMobileMenu}
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary
                    className={`
                      text-lg font-medium transition-colors hover:text-primary cursor-pointer
                      ${pathname.startsWith('/services') ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                    `}
                  >
                    Services
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/services/web-design"
                      className="block text-base font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      Website Creation
                    </Link>
                    <Link
                      href="/services/web-design"
                      className="block text-base font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      Business Websites
                    </Link>
                    <Link
                      href="/services/web-design"
                      className="block text-base font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      E-commerce Solutions
                    </Link>
                    <Link
                      href="/services/web-design"
                      className="block text-base font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      Portfolio Sites
                    </Link>
                  </div>
                </details>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`
                    text-lg font-medium transition-colors hover:text-primary
                    ${pathname === '/about' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  onClick={closeMobileMenu}
                  aria-current={pathname === '/about' ? 'page' : undefined}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={`
                    text-lg font-medium transition-colors hover:text-primary
                    ${pathname === '/portfolio' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  onClick={closeMobileMenu}
                  aria-current={pathname === '/portfolio' ? 'page' : undefined}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`
                    text-lg font-medium transition-colors hover:text-primary
                    ${pathname === '/pricing' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
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
                    text-lg font-medium transition-colors hover:text-primary
                    ${pathname === '/contact' ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}
                  `}
                  onClick={closeMobileMenu}
                  aria-current={pathname === '/contact' ? 'page' : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
