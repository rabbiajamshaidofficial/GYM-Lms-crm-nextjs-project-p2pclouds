import Footer from "@/components/landing/Footer";
import { Navbar } from "@/components/layout/Navbar";
import DiscountPopup from "@/components/DiscountPop";
import FAQSection from "@/components/sections/FAQSection";
import PlayNowSection from "@/components/landing/PlayNowSection";
import FeatureSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { PricingSection } from "@/components/landing/PricingSection";
import EcommerceSection from "@/components/landing/EcommerceSection";
import AdvantagesSection from "@/components/landing/AdventagesSection";
import MemberPortalSection from "@/components/landing/MemberPortalSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { AnalyzeDataSection } from "@/components/landing/AnalyzeDataSection";
import { FeaturePromoSection } from "@/components/landing/FeaturePromoSection";
import { DataAnalysisSection } from "@/components/landing/DataAnalysisSection";
import FeatureComparisonSection from "@/components/landing/FeatureComparisonSection";
import LMSLandingHero from "@/components/landing/LMSLandingHero";

export default function Home() {
  return (
    <main>
      <DiscountPopup />
      <Navbar />
      <div id="home">
        <LMSLandingHero />
      </div>
      <div id="features">
        <BenefitsSection />
        <FeatureSection />
        <FeaturePromoSection />
        <FeatureComparisonSection />
      </div>
      <div id="advantages">
        <AdvantagesSection />
        <DataAnalysisSection />
        <AnalyzeDataSection />
      </div>
      <div id="store">
        <EcommerceSection />
        <MemberPortalSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="reviews">
        <TestimonialSection />
        <PlayNowSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
