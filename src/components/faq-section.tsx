"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const faqs = [
  {
    question: "What website services does Pro Web Marketing offer?",
    answer: "Pro Web Marketing offers a range of website creation services including business websites, e-commerce solutions, portfolio sites, landing pages, and blog/content sites. We customize each website to meet your specific needs, ensuring it's both visually appealing and functional."
  },
  {
    question: "How much does a website cost?",
    answer: "Our website costs vary based on the complexity, features, and functionality you need. We offer affordable options for small businesses and startups while providing the quality you'd expect from a professional website. Contact us for a free consultation to discuss your requirements and get a personalized quote."
  },
  {
    question: "How long will it take to build my website?",
    answer: "Most standard websites take between 2-4 weeks from concept to launch. E-commerce sites or more complex projects may take 4-8 weeks. During our initial consultation, we'll provide a specific timeline based on your project requirements and goals."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We specialize in creating websites for small businesses. We understand the budget constraints and specific needs of small business owners and strive to provide affordable, high-quality websites that help establish your online presence effectively."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Yes, all our websites are fully responsive and mobile-friendly. We design and develop with a mobile-first approach, ensuring your site looks great and functions perfectly on smartphones, tablets, and desktop computers."
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "Yes, we offer website maintenance services to keep your site secure, up-to-date, and running smoothly. This includes regular updates, security patches, backups, and technical support. We can discuss maintenance options once your website is complete."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes, we build our websites with user-friendly content management systems that allow you to easily update content, add pages, blog posts, or products without technical knowledge. We'll provide training to ensure you're comfortable making changes to your site."
  },
  {
    question: "What is your website design process?",
    answer: "Our process begins with understanding your business, goals, and target audience. We then create wireframes and design concepts for your approval. Once the design is approved, we move to development, followed by testing and refinement. After your final approval, we launch your site and provide training on how to manage it."
  }
];

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => (
  <div className="border-b border-border last:border-b-0">
    <button
      className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
      onClick={toggleOpen}
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-medium pr-4">{question}</h3>
      <div className="text-primary flex-shrink-0">
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      }`}
    >
      <div className="px-6">
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  </div>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
            <span className="font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">Common Questions About Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to the most frequently asked questions about our website creation services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Don't see your question here? We're happy to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Contact our team for more information →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
