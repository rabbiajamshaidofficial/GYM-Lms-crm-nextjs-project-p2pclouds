import {
  BenefitItem,
  ComparisonFeature,
  FAQItem,
  FooterData,
  NavItem,
  NewFeatureItem,
  PricingPlan,
  ProgressCard,
  SiteColors,
  SiteConfig,
  Testimonial,
} from "@/types/allTypes";

// --- 1. Site Configuration (CRM FOCUSED) ---
export const siteConfig: SiteConfig = {
  name: "P2PClouds CRM",
  description:
    "Pakistan’s #1 Customer Relationship Management & Automation Platform — Built by P2P Clouds.",
};

// --- 2. Navigation Data (UNCHANGED) ---
export const navItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

// --- 3. Hero Section Data (CRM FOCUSED) ---
export const heroData = {
  heading: "Grow Your Business with Smart Automation 🎯",
  subheading:
    "Automate sales, manage customer relations, track pipeline performance, and nurture leads—all in one smart dashboard. Empower your team with AI-powered analytics, full customer history, and integrated marketing tools.",
  ctaPrimary: "Request a Demo",
  ctaSecondary: "Watch Overview",
};

// --- 4. Benefits Section Data (CRM FOCUSED) ---
export const benefitsData: BenefitItem[] = [
  {
    icon: "Target",
    title: "Accelerate Sales Pipeline",
    description:
      "Convert leads faster by automating your sales funnel, tracking deal progress, and ensuring no opportunity slips through the cracks.",
    ctaText: "Explore Sales Tools",
  },
  {
    icon: "Users",
    title: "360° Customer View",
    description:
      "Centralize all contacts, communication history, and preferences for a complete, unified profile of every customer and lead.",
    ctaText: "View Customer Profiles",
  },
  {
    icon: "Zap",
    title: "Marketing & Automation",
    description:
      "Automate email campaigns, scheduling, follow-ups, and repetitive tasks to free up your team for strategic customer engagement.",
    ctaText: "Discover Automation",
  },
];

// --- 5. New Features / Feature Section Data (CRM FOCUSED) ---
export const newFeaturesData: NewFeatureItem[] = [
  {
    icon: "MailOpen",
    number: "01",
    title: "Automated Lead Nurturing",
    description:
      "Create custom email sequences and auto-assign leads based on behavior to warm prospects effectively and consistently.",
  },
  {
    icon: "CreditCard",
    number: "02",
    title: "Subscription & Billing Management",
    description:
      "Automate invoice generation, payment tracking, and subscription renewal alerts — saving hours of manual billing work.",
  },
  {
    icon: "UserCheck",
    number: "03",
    title: "Customizable Customer Segments",
    description:
      "Create dynamic customer segments based on purchase history, activity level, and demographics for highly targeted marketing.",
  },
  {
    icon: "BarChart3",
    number: "04",
    title: "Real-Time Sales Forecasting",
    description:
      "View live sales pipeline progress, forecast future revenue, and analyze team performance through real-time charts and analytics.",
  },
];

// --- 6. Pricing Section Data (CRM FOCUSED) ---
export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter CRM",
    price: 29,
    duration: "per month",
    isPopular: false,
    features: [
      "Contact & Lead Management (2,500 Contacts)",
      "Basic Sales Pipeline (3 Stages)",
      "Automated Invoicing",
      "Standard Reports & Analytics",
      "Email Support",
    ],
    ctaText: "Start Now",
  },
  {
    name: "Professional CRM",
    price: 59,
    duration: "per month",
    isPopular: true,
    features: [
      "All Starter Features",
      "Unlimited Contacts & Leads",
      "Marketing Automation Tools",
      "Multi-Team Management",
      "Advanced Sales Forecasting Dashboard",
    ],
    ctaText: "Upgrade to Pro",
  },
  {
    name: "Enterprise Plan",
    price: 499,
    duration: "per year",
    isPopular: false,
    features: [
      "All Pro Features",
      "Custom Workflow Automation",
      "Dedicated Account Manager",
      "API Access & Integration",
      "White-Label Branding (Custom Domain)",
    ],
    ctaText: "Go Enterprise",
  },
];

// --- 7. Testimonial Section Data (CRM FOCUSED) ---
export const testimonialsData: Testimonial[] = [
  {
    quote:
      "Our sales management used to be a mess—now with P2PClouds CRM, lead tracking, invoices, and follow-ups all run automatically. Game changer for our business!",
    name: "Zeeshan Ali",
    title: "CEO, TechSolutions Pvt Ltd",
    avatarUrl: "https://placehold.co/100x100/1A1C28/FFFFFF?text=ZA",
  },
  {
    quote:
      "The 360-degree customer view is incredible. We can personalize every interaction, which has significantly boosted our customer retention rate.",
    name: "M. Basit",
    title: "Sales Director, Alpha Marketing",
    avatarUrl: "https://placehold.co/100x100/1A1C28/FFFFFF?text=MB",
  },
  {
    quote:
      "I expanded my business to three regions this year, and P2PClouds CRM made it super easy to handle all our sales teams and customers from one dashboard.",
    name: "Sana Ahmad",
    title: "Founder, CoreZone Services",
    avatarUrl: "https://placehold.co/100x100/1A1C28/FFFFFF?text=SA",
  },
];

// --- 8. Video Showcase Section Data (CRM FOCUSED) ---
export const videoShowcaseData = {
  heading: "Your Sales. Smarter. Simpler.",
  subheading:
    "Watch how P2PClouds CRM automates everything—from lead capture to deal closure to customer nurturing—all in one AI-powered platform.",
  imageUrl: "/images/hero.jpg",
  callToAction: "Play Demo Video",
};

// --- 9. Footer Section Data (UNCHANGED) ---
export const footerData: FooterData = {
  address: {
    street: "Arfa Karim Software Technology Park, Ferouzpur Road Lahore",
    city: "Lahore",
    state: "Lahore",
    zip: "Pakistan",
  },
  contact: {
    phone: "+923072770751",
    email: "info@p2pclouds.net",
  },
  socialLinks: [
    {
      name: "Facebook",
      icon: "Facebook",
      href: "https://www.facebook.com/p2pcloud",
    },
    {
      name: "Instagram",
      icon: "Instagram",
      href: "https://www.instagram.com/p2pclouds/#",
    },
    { name: "Twitter", icon: "Twitter", href: "https://x.com/P2PClouds" },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      href: "https://www.linkedin.com/company/p2pclouds",
    },
  ],
  linkGroups: [
    {
      title: "Sitemap",
      links: [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "https://p2pclouds.net/about/" },
        { label: "Careers", href: "https://p2pclouds.net/career/" },
        { label: "Contact Us", href: "https://p2pclouds.net/support/" },
        { label: "Blog", href: "https://p2pclouds.net/blogs/" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "https://p2pclouds.net/about/" },
  ],
};

// --- 10. FAQ Section Data (CRM FOCUSED) ---
export const faqData: FAQItem[] = [
  {
    question: "Can I manage multiple sales territories or teams?",
    answer:
      "Yes, P2PClouds CRM supports unlimited teams and territories. You can manage all pipeline activities and customer records from one admin dashboard.",
  },
  {
    question: "Do you offer marketing automation features?",
    answer:
      "Absolutely! Our platform includes automated email sequences, custom lead scoring, and campaign tracking to nurture leads effectively.",
  },
  {
    question: "Is there a custom API for integrations?",
    answer:
      "Yes! Enterprise plans include full API access to seamlessly integrate with your existing ERP, accounting, or marketing platforms.",
  },
  {
    question: "Can I download sales and revenue reports?",
    answer:
      "Yes, all sales, revenue, and customer activity reports are exportable in PDF or Excel formats.",
  },
];

// --- 11. Feature Comparison Section Data (RENAMED/REPURPOSED FOR CRM) ---
export const siteColors: SiteColors = {
  "gym-primary": "#10b981",
  "gym-secondary": "#059669",
  "gym-dark": "#1f2937",
};

// --- 12. Contact Page Topic Section Data (CRM FOCUSED) ---
export const newContactLeftData = {
  mainHeading: "P2PClouds CRM — The Ultimate Sales & Customer Platform.",
  blueBoxTitle: "Grow Faster with Smart CRM Automation:",
  blueBoxBenefits: [
    "360° Customer View & History",
    "AI Sales Forecasting & Alerts",
    "Marketing Automation & Pipeline Integration",
  ],
};

export const contactFormData = {
  formTitle: "Contact Sales",
  submitButtonText: "Request Demo",
};

// --- 13. Data Analysis Section (CRM FOCUSED) ---
export const dataAnalysisSectionData = {
  heading: "Smart Sales Analytics Dashboard",
  subheading:
    "Track active opportunities, revenue, and retention rates with real-time charts. Our analytics module helps you make data-driven sales decisions instantly.",
  cards: [
    {
      id: 1,
      name: "Q4 2025 Pipeline",
      metric: "Active Opportunities",
      avatarColor: "bg-green-500",
      graphColorClass: "text-green-500",
      percentage: "+450",
    },
    {
      id: 2,
      name: "Marketing Spend",
      metric: "Monthly Revenue",
      avatarColor: "bg-blue-500",
      graphColorClass: "text-green-500",
      percentage: "₨ 4.2M",
    },
    {
      id: 3,
      name: "Customer Success",
      metric: "Churn Rate",
      avatarColor: "bg-yellow-500",
      graphColorClass: "text-red-500",
      percentage: "5.5%",
    },
  ] as ProgressCard[],
};

// --- 14. Analyze Data Section (CRM FOCUSED) ---
export const analyzeDataSectionData = {
  label: "ANALYTICS & REPORTS",
  heading:
    "Powerful Sales Intelligence: Visualize Pipeline, Performance & Forecasts in Real-Time",
};

// --- 15. Feature Comparison Data (CRM FOCUSED vs LMS/BASIC) ---
export const comparisonData: ComparisonFeature[] = [
  // 1. SALES & LEAD MANAGEMENT
  {
    name: "Automated Lead Scoring & Routing",
    category: "Sales & Lead Management",
    gymValue: true,
    lmsValue: "Manual Assignment Only",
    isBenefit: true,
  },
  {
    name: "Customizable Sales Pipeline Stages",
    category: "Sales & Lead Management",
    gymValue: true,
    lmsValue: "Fixed or No Pipeline",
    isBenefit: true,
  },
  {
    name: "360° Customer Interaction History",
    category: "Sales & Lead Management",
    gymValue: true,
    lmsValue: "Basic Contact Details Only",
    isBenefit: true,
  },
  {
    name: "Opportunity Tracking & Revenue Forecasting",
    category: "Sales & Lead Management",
    gymValue: true,
    lmsValue: "Spreadsheet Based",
    isBenefit: true,
  },

  // 2. MARKETING & AUTOMATION
  {
    name: "Trigger-Based Email Campaigns",
    category: "Marketing & Automation",
    gymValue: true,
    lmsValue: "Manual Email Blasts",
    isBenefit: true,
  },
  {
    name: "Automated Task Creation (e.g., Follow-up)",
    category: "Marketing & Automation",
    gymValue: true,
    lmsValue: "Manual To-Do Lists",
    isBenefit: true,
  },
  {
    name: "Customer Segmentation & Targeting",
    category: "Marketing & Automation",
    gymValue: true,
    lmsValue: "No Segmentation Tools",
    isBenefit: true,
  },

  // 3. BILLING & ECOMMERCE (REPURPOSED)
  {
    name: "Automated Digital Invoicing & Reminders",
    category: "Billing & Subscriptions",
    gymValue: true,
    lmsValue: "Manual Invoice Creation",
    isBenefit: true,
  },
  {
    name: "Recurring Revenue & Subscription Tracking",
    category: "Billing & Subscriptions",
    gymValue: true,
    lmsValue: "Basic Fee Collection",
    isBenefit: true,
  },
  {
    name: "Integrated Product Sales / Inventory",
    category: "Billing & Subscriptions",
    gymValue: true,
    lmsValue: "No Product System",
    isBenefit: true,
  },
];