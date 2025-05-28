import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PPCPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PPC Advertising Services</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Drive targeted traffic and generate immediate results with our data-driven PPC campaign strategies.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Accelerate Your Growth with Paid Advertising</h2>
            <p>
              Our PPC advertising services deliver immediate visibility and qualified leads through strategic ad campaigns
              across search engines, social media platforms, and display networks.
            </p>

            <h2>Our PPC Management Services</h2>
            <ul>
              <li>
                <strong>Google Ads Management</strong> - We create, optimize, and manage search, display, shopping, and YouTube ad campaigns to maximize ROI.
              </li>
              <li>
                <strong>Social Media Advertising</strong> - We develop targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter to reach your ideal audience.
              </li>
              <li>
                <strong>Audience Targeting</strong> - We identify and segment your target audience based on demographics, interests, behaviors, and intent signals.
              </li>
              <li>
                <strong>Ad Creative Development</strong> - We craft compelling ad copy and visuals that capture attention and drive conversions.
              </li>
              <li>
                <strong>Landing Page Optimization</strong> - We design and optimize conversion-focused landing pages aligned with your ad messaging.
              </li>
              <li>
                <strong>Bid Management</strong> - We implement advanced bidding strategies to maximize your advertising budget and achieve your campaign goals.
              </li>
              <li>
                <strong>A/B Testing</strong> - We continuously test ad variations, landing pages, and targeting to improve performance over time.
              </li>
            </ul>

            <h2>Why Choose Our PPC Services?</h2>
            <p>
              We take a data-driven approach to PPC management, focusing on maximizing your return on ad spend (ROAS).
              Our team is certified in all major ad platforms and stays current with the latest features and best practices.
              We provide transparent reporting and strategic insights to continuously improve your campaigns.
            </p>

            <h2>Measurable Results</h2>
            <p>
              Our PPC campaigns deliver measurable results you can track in real-time. We provide detailed reports on key metrics
              including click-through rates, conversion rates, cost per acquisition, and ROAS. We focus not just on traffic,
              but on qualified leads and sales that drive business growth.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free PPC Audit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started with PPC</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
