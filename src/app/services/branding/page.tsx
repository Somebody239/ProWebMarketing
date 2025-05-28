import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BrandingPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Branding & Creative Strategy</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Develop a distinctive brand identity that resonates with your audience and sets you apart from competitors.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Build a Powerful Brand Identity</h2>
            <p>
              Our branding services help businesses create meaningful connections with their audience through
              strategic brand development, compelling visual identities, and consistent messaging that communicates
              your unique value proposition.
            </p>

            <h2>Our Branding & Creative Services</h2>
            <ul>
              <li>
                <strong>Brand Strategy</strong> - We develop comprehensive brand strategies based on market research, competitive analysis, and audience insights.
              </li>
              <li>
                <strong>Logo & Visual Identity</strong> - We create distinctive, memorable visual systems including logos, color palettes, typography, and graphic elements.
              </li>
              <li>
                <strong>Brand Messaging</strong> - We craft compelling brand stories, value propositions, and messaging frameworks that resonate with your audience.
              </li>
              <li>
                <strong>Brand Guidelines</strong> - We develop detailed guidelines to ensure consistent application of your brand across all touchpoints.
              </li>
              <li>
                <strong>Marketing Collateral</strong> - We design business cards, brochures, presentations, and other print materials that reflect your brand.
              </li>
              <li>
                <strong>Digital Assets</strong> - We create web graphics, social media templates, email headers, and other digital brand elements.
              </li>
              <li>
                <strong>Brand Positioning</strong> - We help you define your unique position in the market and communicate it effectively.
              </li>
              <li>
                <strong>Brand Voice & Tone</strong> - We develop writing guidelines that ensure consistent communication across all channels.
              </li>
            </ul>

            <h2>Our Creative Process</h2>
            <p>
              Our collaborative branding process begins with discovery, where we immerse ourselves in your business,
              industry, and audience. We then move through strategic development, creative concept exploration,
              refinement, and implementation with clear communication at every stage.
            </p>

            <h2>Brand Implementation</h2>
            <p>
              Beyond creating your brand assets, we provide guidance on implementing your brand effectively
              across all customer touchpoints including your website, social media, advertising, packaging,
              internal communications, and customer experience.
            </p>

            <h2>Brand Evolution</h2>
            <p>
              For established businesses, we offer brand refresh and rebranding services to evolve your
              identity while maintaining brand equity. We help you stay relevant in changing markets while
              honoring your brand heritage.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Brand</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started with Branding</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
