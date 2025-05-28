import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SocialMediaPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Marketing Services</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Build an engaging social media presence that connects with your audience and drives business growth.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Grow Your Brand on Social Media</h2>
            <p>
              Our social media marketing services help businesses build meaningful connections with their audience,
              increase brand awareness, and drive measurable results through strategic content and community management.
            </p>

            <h2>Our Social Media Marketing Services</h2>
            <ul>
              <li>
                <strong>Social Media Strategy</strong> - We develop comprehensive strategies aligned with your business goals and target audience.
              </li>
              <li>
                <strong>Content Creation</strong> - We produce engaging, platform-optimized content including graphics, videos, and copy.
              </li>
              <li>
                <strong>Community Management</strong> - We actively engage with your audience, respond to comments, and build relationships.
              </li>
              <li>
                <strong>Social Media Advertising</strong> - We create and manage targeted paid campaigns to amplify your reach and results.
              </li>
              <li>
                <strong>Influencer Marketing</strong> - We identify and collaborate with relevant influencers to expand your brand reach.
              </li>
              <li>
                <strong>Social Listening</strong> - We monitor conversations about your brand and industry to gather valuable insights.
              </li>
              <li>
                <strong>Analytics & Reporting</strong> - We track performance metrics and provide actionable recommendations for improvement.
              </li>
              <li>
                <strong>Platform Management</strong> - We optimize your presence across platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and more.
              </li>
            </ul>

            <h2>Platforms We Specialize In</h2>
            <p>
              We deliver tailored strategies for each social platform, including:
            </p>
            <ul>
              <li><strong>Facebook & Instagram</strong> - Building community and driving engagement through compelling visual content and stories.</li>
              <li><strong>LinkedIn</strong> - Establishing thought leadership and generating B2B leads through professional content.</li>
              <li><strong>Twitter</strong> - Participating in industry conversations and providing responsive customer service.</li>
              <li><strong>TikTok</strong> - Creating trending, authentic content that resonates with younger audiences.</li>
              <li><strong>YouTube</strong> - Developing video content strategies that build subscribers and engagement.</li>
              <li><strong>Pinterest</strong> - Driving traffic through inspirational, product-focused content.</li>
            </ul>

            <h2>Why Choose Our Social Media Services?</h2>
            <p>
              We take a strategic approach to social media, focusing on content that builds your brand and
              drives meaningful business results. Our team stays current with platform algorithms and trends
              to ensure your content reaches your target audience effectively.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Social Media Audit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started with Social Media</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
