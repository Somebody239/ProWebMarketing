import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SEOPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Optimization Services</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Drive organic traffic and improve your search engine rankings with our data-driven SEO strategies.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Boost Your Online Visibility</h2>
            <p>
              Our comprehensive SEO services help your business climb search engine rankings,
              increasing your visibility to potential customers actively searching for your products or services.
            </p>

            <h2>Our SEO Approach</h2>
            <ul>
              <li>
                <strong>Technical SEO Audit</strong> - We analyze your website structure, speed, mobile-friendliness, and crawlability to ensure search engines can properly index your content.
              </li>
              <li>
                <strong>Keyword Research & Strategy</strong> - We identify high-value keywords specific to your industry and audience to target opportunities with the best ROI.
              </li>
              <li>
                <strong>On-Page Optimization</strong> - We optimize your content, meta tags, URLs, and internal linking structure to maximize relevance for targeted keywords.
              </li>
              <li>
                <strong>Content Strategy</strong> - We develop engaging, valuable content that satisfies user intent and builds topical authority in your industry.
              </li>
              <li>
                <strong>Link Building</strong> - We acquire high-quality backlinks from reputable sources to increase your domain authority and rankings.
              </li>
              <li>
                <strong>Local SEO</strong> - We optimize your Google Business Profile and local citations to improve visibility in local search results.
              </li>
            </ul>

            <h2>Why Choose Our SEO Services?</h2>
            <p>
              We take a transparent, results-driven approach to SEO. Our team stays current with algorithm updates
              and industry best practices to ensure your strategy remains effective. We focus on sustainable growth
              through white-hat techniques that build long-term value for your business.
            </p>

            <h2>Measurable Results</h2>
            <p>
              We provide detailed monthly reports with key metrics including keyword rankings, organic traffic growth,
              conversion rates, and ROI. Our SEO strategies are continually refined based on performance data to
              maximize your results.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free SEO Audit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started with SEO</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
