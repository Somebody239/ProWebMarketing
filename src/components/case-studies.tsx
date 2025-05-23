"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CaseStudyProps {
  title: string;
  industry: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
}

const caseStudies: CaseStudyProps[] = [
  {
    title: "Business Consulting Firm",
    industry: "Professional Services",
    description: "A clean, professional website for a consulting firm featuring service information, team bios, and client testimonials.",
    features: ["Responsive design", "Contact form", "Team profiles", "Service descriptions", "Client testimonials"],
    image: "/images/case-study-1.jpg",
    slug: "business-consulting-firm"
  },
  {
    title: "Local Restaurant",
    industry: "Food & Beverage",
    description: "An appetizing website for a local restaurant with menus, hours, location information, and online reservation capabilities.",
    features: ["Menu showcase", "Online reservations", "Photo gallery", "Location map", "Mobile-friendly design"],
    image: "/images/case-study-2.jpg",
    slug: "local-restaurant"
  },
  {
    title: "Fitness Studio",
    industry: "Health & Wellness",
    description: "An energetic website for a fitness studio featuring class schedules, trainer bios, membership information, and a blog.",
    features: ["Class calendar", "Trainer profiles", "Membership plans", "Fitness blog", "Photo/video gallery"],
    image: "/images/case-study-3.jpg",
    slug: "fitness-studio"
  },
  {
    title: "E-commerce Fashion Boutique",
    industry: "Retail",
    description: "A stylish online store for a fashion boutique with product categories, secure checkout, and customer accounts.",
    features: ["Product catalog", "Shopping cart", "Secure payment", "Customer accounts", "Order tracking"],
    image: "/images/case-study-4.jpg",
    slug: "fashion-boutique"
  },
  {
    title: "Personal Portfolio",
    industry: "Creative Arts",
    description: "A visually striking portfolio website for a graphic designer showcasing their work, skills, and professional experience.",
    features: ["Project gallery", "Resume/CV", "Skill showcase", "Contact form", "Testimonials"],
    image: "/images/case-study-5.jpg",
    slug: "personal-portfolio"
  },
  {
    title: "Educational Platform",
    industry: "Education",
    description: "An interactive educational platform featuring courses, student profiles, progress tracking, and community forums.",
    features: ["Course catalog", "Student profiles", "Progress tracking", "Discussion forums", "Resource library"],
    image: "/images/case-study-6.jpg",
    slug: "educational-platform"
  }
];

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudyProps }) => (
  <Card className="card-glow border-none shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
    <CardContent className="p-0">
      <div className="relative aspect-video bg-muted/50 overflow-hidden">
        {/* Using a placeholder colored div since actual images would be uploaded */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center text-white">
          <p className="text-lg font-medium">{caseStudy.industry}</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {caseStudy.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground">{caseStudy.description}</p>

        <div>
          <h4 className="text-sm font-medium text-primary mb-2">Features</h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {caseStudy.features.map((feature, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function CaseStudies() {
  return (
    <section className="py-24 -mt-12 relative bg-gradient-to-b from-transparent via-background/95 to-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
            <span className="font-medium">Example Websites</span>
          </div>
          <h2 className="section-title">What We Can Build For You</h2>
          <p className="text-xl text-muted-foreground">
            Take a look at some examples of the types of websites we can create for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-border inline-block max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Ready to create your website?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to discuss your website needs and get started on your project.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
