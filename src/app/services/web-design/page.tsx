import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WebDesignPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design & Development Services</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Create stunning, functional websites that deliver exceptional user experiences and drive conversions.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Websites That Convert Visitors Into Customers</h2>
            <p>
              We design and develop websites that not only look great but also deliver measurable business results
              through strategic UX design, compelling content, and conversion-focused elements.
            </p>

            <h2>Our Web Design & Development Services</h2>
            <ul>
              <li>
                <strong>Custom Website Design</strong> - We create unique, branded designs tailored to your business goals and target audience.
              </li>
              <li>
                <strong>Responsive Development</strong> - We build mobile-first websites that provide optimal experiences across all devices.
              </li>
              <li>
                <strong>UX/UI Design</strong> - We craft intuitive user experiences that guide visitors toward conversion while providing delightful interactions.
              </li>
              <li>
                <strong>E-commerce Development</strong> - We build powerful online stores with seamless checkout processes and integrations.
              </li>
              <li>
                <strong>Content Management Systems</strong> - We implement user-friendly CMS solutions that make website updates simple.
              </li>
              <li>
                <strong>Performance Optimization</strong> - We ensure your website loads quickly and performs flawlessly for all users.
              </li>
              <li>
                <strong>Web Application Development</strong> - We build custom web applications to streamline your business processes.
              </li>
              <li>
                <strong>Ongoing Maintenance</strong> - We provide reliable support and updates to keep your website secure and functioning optimally.
              </li>
            </ul>

            <h2>Our Design Process</h2>
            <p>
              Our collaborative design process begins with understanding your business objectives and user needs.
              We then move through strategic planning, wireframing, design concepts, development, testing,
              and launch with clear communication at every stage.
            </p>

            <h2>Technologies We Use</h2>
            <p>
              We work with modern technologies including React, Next.js, WordPress, Shopify, and custom solutions
              depending on your specific requirements. Our development practices emphasize security, scalability,
              and future maintainability.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started with Web Design</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
