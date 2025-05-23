"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialAvatar } from "./placeholder-image";

// Updated testimonials with more realistic text for a new company
const testimonials = [
  {
    id: 1,
    content:
      "Pro Web Marketing did an excellent job creating our business website. They were professional, responsive, and delivered a site that perfectly represents our brand. I'm very happy with the results.",
    name: "Sarah Johnson",
    role: "Business Owner",
    company: "Johnson Consulting",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    content:
      "Working with Pro Web Marketing was a great experience. They listened to our needs and designed a website that is not only beautiful but also easy to navigate. I highly recommend their services.",
    name: "Michael Chen",
    role: "Founder",
    company: "Chen Photography",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    content:
      "I'm impressed with the portfolio website Pro Web Marketing created for me. It showcases my work exactly how I wanted, and the team was a pleasure to work with throughout the process.",
    name: "Jessica Martinez",
    role: "Freelance Designer",
    company: "Design Works",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    content:
      "Pro Web Marketing built a beautiful e-commerce site for our small business. The process was smooth, and they were very helpful in explaining everything. The site works perfectly and looks great!",
    name: "Robert Williams",
    role: "Shop Owner",
    company: "Artisan Crafts",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 -mt-12 relative bg-gradient-to-b from-transparent via-background/95 to-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground">
            Here's what our clients have to say about working with us on their website projects.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="card-glow h-full">
      <CardContent className="p-6 space-y-6 h-full flex flex-col">
        <div className="text-primary">
          <Quote size={32} />
        </div>

        <p className="flex-1 text-foreground/90 italic leading-relaxed">
          "{testimonial.content}"
        </p>

        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 border-2 border-primary/20">
            <AvatarImage
              src={testimonial.avatar}
              alt={testimonial.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.style.display = "none";
              }}
            />
            <AvatarFallback className="bg-primary/10 text-primary flex items-center justify-center w-full h-full p-0">
              <TestimonialAvatar name={testimonial.name} />
            </AvatarFallback>
          </Avatar>

          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
