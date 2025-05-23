"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-gradient">Pro Web Marketing</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Creating affordable, high-quality websites for businesses looking to establish their online presence.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio Websites
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  Blog & Content Sites
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary shrink-0 mt-1" />
                <a
                  href="mailto:prowebmarketing1234@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors break-all text-sm sm:text-base"
                >
                  prowebmarketing1234@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to our newsletter!");
                const form = e.target as HTMLFormElement;
                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                emailInput.value = '';
              }} className="flex max-w-md">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 rounded-r-none focus-visible:ring-primary"
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <p>© {new Date().getFullYear()} Pro Web Marketing. All rights reserved.</p>
              <div className="flex justify-start md:justify-end space-x-4 mt-2">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
