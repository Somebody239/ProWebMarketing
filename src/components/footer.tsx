"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-gradient">Pro Web Marketing</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creating affordable, high-quality websites for businesses looking to establish their online presence.
            </p>

            {/* Navigation Links */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About
                </Link>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
                <Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Pricing
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Free Consultation Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-primary" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Free Consultation</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ready to grow your business online? Book a free 30-minute consultation to discuss your project and get expert advice.
            </p>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Project strategy discussion</li>
              <li>• Custom solution recommendations</li>
              <li>• Timeline and pricing overview</li>
            </ul>
            <Button asChild className="w-full btn-glow mt-4">
              <Link href="/contact">
                Book Free 30-Min Call
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href="tel:+12899012627"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +1 (289) 901-2627
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:prowebmarketing2025@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm break-all"
                >
                  prowebmarketing2025@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Ontario, Canada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Pro Web Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
