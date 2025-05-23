import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data for case studies
const caseStudies = [
  {
    title: "127% Growth in Organic Traffic for E-Commerce Brand",
    industry: "E-Commerce / Retail",
    client: "FashionTrend",
    challenge: "A leading e-commerce brand was struggling with declining organic traffic and conversion rates despite a significant investment in their product catalog. Their search visibility was suffering due to technical SEO issues, outdated content, and a lack of mobile optimization.",
    solution: "Implemented a comprehensive SEO strategy including technical site optimization, content enhancement, and structured data implementation. Our team conducted a thorough SEO audit to identify critical issues and opportunities. We then developed a roadmap that included fixing technical issues, creating a content strategy, implementing schema markup, and building a strategic backlinking program.",
    approach: [
      "Performed a comprehensive technical SEO audit and fixed critical issues",
      "Developed a keyword strategy targeting high-intent commercial terms",
      "Created optimized category and product descriptions",
      "Implemented schema markup for products and reviews",
      "Built a content marketing strategy focused on informational queries",
      "Established a backlinking program targeting industry publications"
    ],
    result: "127% increase in organic traffic and 85% increase in conversion rate within 6 months of implementation. The client also saw a 45% increase in revenue from organic search and improved rankings for over 150 target keywords, with 65 reaching the first page of Google.",
    testimonial: {
      quote: "The ProWeb team transformed our online visibility and helped us understand the value of strategic SEO. Their data-driven approach not only increased our traffic but directly impacted our bottom line.",
      author: "Sarah Chen",
      position: "Marketing Director, FashionTrend"
    },
    image: "/images/case-study-1.jpg",
    slug: "ecommerce-seo-growth"
  },
  {
    title: "340% ROI for B2B SaaS Company",
    industry: "SaaS / Technology",
    client: "CloudServe Solutions",
    challenge: "A B2B SaaS provider needed to increase qualified leads while reducing their cost per acquisition from digital advertising. Their previous campaigns were generating clicks but few conversions, resulting in a poor return on ad spend.",
    solution: "Developed a targeted PPC campaign with advanced audience segmentation, compelling ad creative, and optimized landing pages. We restructured their account architecture, implemented detailed tracking, and created a testing framework to continuously improve performance.",
    approach: [
      "Conducted competitor analysis and market research",
      "Restructured campaign architecture based on customer journey",
      "Developed custom audience segments for precise targeting",
      "Created multiple ad variations with compelling value propositions",
      "Built conversion-focused landing pages with clear CTAs",
      "Implemented A/B testing program for continual optimization",
      "Established automated bid strategies based on lead quality"
    ],
    result: "340% return on ad spend with a 45% reduction in cost per acquisition across Google and LinkedIn platforms. The client experienced a 78% increase in qualified leads and a 25% higher conversion rate from lead to customer, significantly impacting their sales pipeline.",
    testimonial: {
      quote: "ProWeb Marketing's strategic approach to our PPC campaigns has been transformative. They didn't just bring us more leads – they brought us better leads that actually convert to customers. The ROI speaks for itself.",
      author: "Michael Rodriguez",
      position: "CMO, CloudServe Solutions"
    },
    image: "/images/case-study-2.jpg",
    slug: "saas-ppc-campaign"
  },
  {
    title: "Website Redesign Drives 78% More Leads",
    industry: "Professional Services",
    client: "Meridian Financial Advisors",
    challenge: "A financial services firm's outdated website was creating a poor user experience and failing to convert visitors into leads. The site was not mobile-responsive, had slow loading times, and lacked clear conversion paths for potential clients.",
    solution: "Complete website redesign with focus on UX/UI, mobile responsiveness, and conversion rate optimization. We conducted user research, created a strategic information architecture, and developed a modern design system that aligned with their brand while enhancing the user experience.",
    approach: [
      "Conducted user research and competitor analysis",
      "Developed user personas and journey maps",
      "Created intuitive information architecture",
      "Designed mobile-first responsive interfaces",
      "Implemented conversion-focused page templates",
      "Optimized site speed and core web vitals",
      "Integrated CRM and analytics for lead tracking"
    ],
    result: "78% increase in lead generation with a 3X improvement in mobile conversion rates after launch. The average time on site increased by 45%, bounce rate decreased by 35%, and the client saw a 28% increase in returning visitors, indicating stronger engagement with their target audience.",
    testimonial: {
      quote: "Our new website has transformed how prospects engage with our firm. It perfectly balances professionalism with approachability, and the results have exceeded our expectations. ProWeb truly understood our business and delivered a website that works as a powerful lead generation tool.",
      author: "Jennifer Blackwell",
      position: "Partner, Meridian Financial Advisors"
    },
    image: "/images/case-study-3.jpg",
    slug: "financial-website-redesign"
  }
];

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
                <span className="font-medium">{caseStudy.industry}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-muted-foreground">Client: {caseStudy.client}</p>
            </div>

            <div className="aspect-video rounded-xl bg-muted/50 overflow-hidden">
              {/* Using a placeholder colored div since actual images would be uploaded */}
              <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center text-white">
                <p className="text-2xl font-medium">{caseStudy.industry} Case Study</p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>The Challenge</h2>
              <p>{caseStudy.challenge}</p>

              <h2>Our Solution</h2>
              <p>{caseStudy.solution}</p>

              <h2>Our Approach</h2>
              <ul>
                {caseStudy.approach.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>

              <h2>The Results</h2>
              <p>{caseStudy.result}</p>
            </div>

            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <blockquote className="italic text-lg mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 mr-4"></div>
                <div>
                  <p className="font-medium">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border space-y-6">
              <h2 className="text-2xl font-bold">Ready to achieve similar results?</h2>
              <p className="text-muted-foreground">
                Let's discuss how we can apply these strategies to help your business grow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">
                    Explore Our Services <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
