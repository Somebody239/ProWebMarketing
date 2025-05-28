import HeroSection from '@/components/hero-section';
import ServicesOverview from '@/components/services-overview';
import AboutSection from '@/components/about-section';
import CtaSection from '@/components/cta-section';
import FAQSection from '@/components/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <FAQSection />
      <CtaSection />
    </div>
  );
}
