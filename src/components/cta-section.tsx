"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white relative" style={{ overflow: 'initial' }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 30%, rgba(80, 98, 177, 0.2) 0%, transparent 40%), radial-gradient(circle at 90% 70%, rgba(199, 91, 50, 0.2) 0%, transparent 40%)"
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm mb-4">
              <span className="font-medium">Establish Your Online Presence</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Create Your Website?
            </h2>

            <p className="text-xl text-white/80 max-w-xl">
              Let us help you build a professional, affordable website that represents your business and connects you with more customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  <CalendarDays className="mr-2 h-5 w-5" /> Schedule a Free Consultation
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">
                  View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl shadow-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 8L10.5 13L9 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Professional Design</h3>
                    <p className="text-white/70 text-sm">Modern, responsive websites that look great on all devices</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.33008 14.4999L9.71008 16.8799L16.6701 9.91992" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Affordable Pricing</h3>
                    <p className="text-white/70 text-sm">Quality websites at prices small businesses can afford</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 13H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 17H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Quick Turnaround</h3>
                    <p className="text-white/70 text-sm">Get your website up and running in just 2-4 weeks</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    size="lg"
                    className="w-full bg-primary/20 hover:bg-primary/30 text-white border border-white/10"
                    asChild
                  >
                    <Link href="/services">
                      Explore Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/30 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-[#c75b32]/30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
