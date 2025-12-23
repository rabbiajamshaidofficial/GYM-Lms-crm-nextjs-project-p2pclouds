export interface SiteConfig {
  name: string;
  description: string;
}
export interface NavItem {
  title: string;
  href: string;
}
export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  ctaText: string;
}
export interface NewFeatureItem {
  icon: string;
  number: string;
  title: string;
  description: string;
}
export interface PricingPlan {
  name: string;
  price: number;
  duration: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}
export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}
export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}
export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonFeature {
  name: string;
  category: string;
  gymValue: string | boolean;
  // The 'lmsValue' is used for the Regular GYM column
  lmsValue: string | boolean;
  isBenefit: boolean;
}
export interface ProgressCard {
  id: number;
  name: string;
  metric: string;
  avatarColor: string;
  graphColorClass: string;
  percentage: string;
}

export interface AnalysisPoint {
  id: number;
  text: string;
}
export interface WidgetData {
  title: string;
  value: string;
  subTitle?: string;
}
export interface FooterData {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
}
export interface SiteColors {
  "gym-primary": string;
  "gym-secondary": string;
  "gym-dark": string;
}
export interface ContactTopic {
  title: string;
  items: string[];
}

export interface PromoData {
  headline: string;
  subtitle: string;
  ctaText: string;
  imageUrl: string;
  imageAlt: string;
}
export interface PricingPlan {
  name: string;
  price: number;
  duration: string;
  ctaText: string;
  isPopular: boolean;
  features: string[];
}
