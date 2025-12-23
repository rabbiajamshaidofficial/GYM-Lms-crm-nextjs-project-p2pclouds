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

// --- 1. Site Configuration ---
export const siteConfig: SiteConfig = {
  name: "P2P Cloud LMS",
  description:
    "The leading Learning Management System for organizations to accelerate skill development and measure knowledge mastery.",
};

// --- 2. Navigation Data (No change needed) ---
export const navItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

// --- 3. Hero Section Data ---
export const heroData = {
  heading: "Run Your Learning Program Like a Business 🎓",
  subheading:
    "Automate course enrollment, track learner progress, manage assessments, and analyze engagement—all in one smart dashboard. Empower your training with AI-powered insights and seamless multi-device access.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "Watch Overview",
};

// --- 4. Benefits Section Data (Updated in previous step) ---
export const benefitsData: BenefitItem[] = [
  {
    icon: "BookOpen",
    title: "Comprehensive Course Catalog",
    description:
      "Offer structured learning paths, dynamic content, and multimedia lessons. Easily manage course creation, updates, and access permissions for all users.",
    ctaText: "Explore Course Creation",
  },
  {
    icon: "Zap",
    title: "Automated Student & Progress Tracking",
    description:
      "Track enrollment, completion rates, and individual student progress in real-time. Automated alerts ensure learners stay on track and administrators are informed.",
    ctaText: "View Analytics Dashboard",
  },
  {
    icon: "BarChart3",
    title: "Integrated Quizzes & Certification",
    description:
      "Seamlessly deploy graded assessments, track scores, and auto-generate professional certificates upon course completion. Verify learner mastery instantly.",
    ctaText: "Explore Assessment Tools",
  },
];

// --- 5. New Features / Feature Section Data (LMS Focus) ---
export const newFeaturesData: NewFeatureItem[] = [
  {
    icon: "Layers", // QrCode -> Layers
    number: "01",
    title: "Drag-and-Drop Course Builder",
    description:
      "Quickly assemble and deploy custom courses using our intuitive visual builder. Add videos, PDFs, quizzes, and interactive elements with ease.",
  },
  {
    icon: "GraduationCap", // CreditCard -> GraduationCap
    number: "02",
    title: "Skill & Competency Mapping",
    description:
      "Map every course outcome to specific skills. Track how your learners' competencies grow over time with detailed reporting.",
  },
  {
    icon: "Trophy", // Package -> Trophy
    number: "03",
    title: "Gamified Learning Paths",
    description:
      "Boost engagement with points, badges, leaderboards, and certifications. Make learning competitive and rewarding for your teams.",
  },
  {
    icon: "Activity", // BarChart3 -> Activity (Focus on Engagement)
    number: "04",
    title: "Real-time Engagement Metrics",
    description:
      "View course consumption, time spent, interaction rates, and completion times through actionable, real-time charts and analytics.",
  },
];

// --- 6. Pricing Section Data (LMS Focus) ---
export const pricingPlans: PricingPlan[] = [
  {
    name: "Standard Learning",
    price: 49,
    duration: "per admin/month",
    isPopular: false,
    features: [
      "Core Course Management & Content Library",
      "Basic Student Enrollment & Tracking",
      "Standard Quiz/Assessment Module",
      "1,000 Active Learners Limit",
      "Email & Chat Support",
    ],
    ctaText: "Start Free Trial",
  },
  {
    name: "Professional Education",
    price: 99,
    duration: "per admin/month",
    isPopular: true,
    features: [
      "All Standard Features",
      "Advanced Skill Mapping & Reporting",
      "Gamification & Badges System",
      "Integrated Certification Generator",
      "5,000 Active Learners Limit",
    ],
    ctaText: "Upgrade to Pro",
  },
  {
    name: "Enterprise LMS",
    price: 999,
    duration: "per year",
    isPopular: false,
    features: [
      "All Professional Features",
      "Unlimited Active Learners & Admins",
      "API Integrations (HRIS/CRM)",
      "Custom White-Label Branding",
      "Dedicated Account Manager",
    ],
    ctaText: "Go Enterprise",
  },
];

// --- 7. Testimonial Section Data (LMS Focus) ---
export const testimonialsData: Testimonial[] = [
  {
    quote:
      "Deploying P2P Cloud LMS transformed our employee training. We saw a 40% increase in course completion rates thanks to the automated tracking and gamification.",
    name: "Zeeshan Ali",
    title: "Head of L&D, TechFirm Solutions",
    avatarUrl: "https://placehold.co/100x100/1A1C28/FFFFFF?text=ZA",
  },
  {
    quote:
      "The course builder is incredibly easy to use. We converted our entire training manual into engaging online modules in just one week.",
    name: "M. Basit",
    title: "Training Manager, Alpha Corp.",
    avatarUrl: "https://placehold.co/100x100/1A1C28/FFFFFF?text=MB",
  },
  {
    quote:
      "The integrated assessment and certification feature drastically cut down our compliance overhead. The reports are invaluable for audits.",
    name: "Sana Ahmad",
    title: "HR Director, CoreZone Holdings",
    avatarUrl: "https://placehold.co/100x100/1A1C28/FFFFFF?text=SA",
  },
];

// --- 8. Video Showcase Section Data (LMS Focus) ---
export const videoShowcaseData = {
  heading: "Your Training. Smarter. Measurable.",
  subheading:
    "Watch how P2P Cloud LMS streamlines course creation, learner enrollment, progress tracking, and certification—all in one powerful platform.",
  imageUrl: "/public/images/hero1.png", // Reusing the LMS image from Hero
  callToAction: "Play Demo Video",
};

// --- 9. Footer Section Data (No change for contact/socials) ---
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

// --- 10. FAQ Section Data (LMS Focus) ---
export const faqData: FAQItem[] = [
  {
    question: "Can I host my own training videos and content?",
    answer:
      "Yes, P2P Cloud LMS supports hosting a wide range of content, including video, documents (PDFs), presentations, and external links, all within your course structure.",
  },
  {
    question: "Does the platform generate course completion certificates?",
    answer:
      "Absolutely! Upon successful completion of a course and its final assessment, the system automatically generates a custom, verifiable certificate for the learner.",
  },
  {
    question: "Is there a feature for live virtual classroom sessions?",
    answer:
      "Yes, the platform integrates with popular virtual meeting tools to schedule and track live sessions alongside your self-paced courses.",
  },
  {
    question: "Can I download reports on learner performance?",
    answer:
      "Yes, all reports—including assessment scores, course completion times, and engagement metrics—are exportable in CSV or PDF formats.",
  },
];

// --- 11. Feature Comparison Section Data (Unchanged - not LMS specific) ---
export const siteColors: SiteColors = {
  "gym-primary": "#10b981",
  "gym-secondary": "#059669",
  "gym-dark": "#1f2937",
};

// --- 12. Contact Page Topic Section Data (LMS Focus) ---
export const newContactLeftData = {
  mainHeading: "P2P Cloud LMS — The Ultimate Corporate Education Platform.",
  blueBoxTitle: "Drive Learning Success with Smart Automation:",
  blueBoxBenefits: [
    "Drag-and-Drop Course Authoring Tools",
    "AI Progress Tracking & Alert System",
    "Integrated Certification & Reporting",
  ],
};

export const contactFormData = {
  formTitle: "Contact Us",
  submitButtonText: "Submit",
};

// --- 13. Data Analysis Section (LMS Focus) ---
export const dataAnalysisSectionData = {
  heading: "Smart Learning Analytics Dashboard",
  subheading:
    "Track course engagement, completion rates, and knowledge gaps with real-time charts. Our analytics module helps you measure training ROI instantly.",
  cards: [
    {
      id: 1,
      name: "Tech Mastery",
      metric: "Enrollments",
      avatarColor: "bg-green-500",
      graphColorClass: "text-green-500",
      percentage: "+450",
    },
    {
      id: 2,
      name: "Sales Pro",
      metric: "Completion Rate",
      avatarColor: "bg-blue-500",
      graphColorClass: "text-green-500",
      percentage: "87%",
    },
    {
      id: 3,
      name: "Leadership 101",
      metric: "Average Score",
      avatarColor: "bg-yellow-500",
      graphColorClass: "text-green-500",
      percentage: "93%",
    },
  ] as ProgressCard[],
};

// --- 14. Analyze Data Section (LMS Focus) ---
export const analyzeDataSectionData = {
  label: "Analytics",
  heading:
    "Powerful Reporting Engine: Visualize Skill Mastery, Engagement, and ROI in Real-Time",
};
export const comparisonData: ComparisonFeature[] = [
  // 1. CONTENT & DELIVERY
  {
    name: "Drag-and-Drop Course Builder",
    category: "Content & Delivery",
    gymValue: true, // Assuming your previous gym site had a visual builder for something (e.g., plans/products)
    lmsValue: "External Tool Required",
    isBenefit: true,
  },
  {
    name: "SCORM/AICC Content Support",
    category: "Content & Delivery",
    gymValue: true,
    lmsValue: "Proprietary Format Only",
    isBenefit: true,
  },
  {
    name: "Multimedia Lesson Support (Video, Quiz, PDF)",
    category: "Content & Delivery",
    gymValue: true,
    lmsValue: "Limited File Types",
    isBenefit: true,
  },
  {
    name: "Certification Generation (Automated)",
    category: "Content & Delivery",
    gymValue: true,
    lmsValue: "Manual Certificate Creation",
    isBenefit: true,
  },

  // 2. LEARNER MANAGEMENT & PROGRESS
  {
    name: "Automated Learner Enrollment & Progress Tracking",
    category: "Learner Management & Progress",
    gymValue: true,
    lmsValue: "Manual Tracking",
    isBenefit: true,
  },
  {
    name: "Role-Based Access (Admin / Instructor / Learner)",
    category: "Learner Management & Progress",
    gymValue: true,
    lmsValue: "Single User Level",
    isBenefit: true,
  },
  {
    name: "Skill Mapping & Competency Tracking",
    category: "Learner Management & Progress",
    gymValue: true,
    lmsValue: "Not Available",
    isBenefit: true,
  },
  {
    name: "Gamification Engine (Badges, Leaderboards)",
    category: "Learner Management & Progress",
    gymValue: true,
    lmsValue: "No Engagement Tools",
    isBenefit: true,
  },

  // 3. ANALYTICS & REPORTING
  {
    name: "Completion Rate & Assessment Score Reports",
    category: "Analytics & Reporting",
    gymValue: true,
    lmsValue: "Basic Tables Only",
    isBenefit: true,
  },
  {
    name: "Learner Engagement Analytics (Time Spent, Activity)",
    category: "Analytics & Reporting",
    gymValue: true,
    lmsValue: "No Activity Logs",
    isBenefit: true,
  },
  {
    name: "Auto PDF / Excel Export of Performance Data",
    category: "Analytics & Reporting",
    gymValue: true,
    lmsValue: "Manual Export",
    isBenefit: true,
  },

  // 4. TECH, BRANDING & PRICING (LMS adjustments)
  {
    name: "White-Labeled Education Portal",
    category: "Branding & Security",
    gymValue: true,
    lmsValue: "Generic Branding",
    isBenefit: true,
  },
  {
    name: "Custom Domain Integration",
    category: "Branding & Security",
    gymValue: true,
    lmsValue: "Not Supported",
    isBenefit: true,
  },
  {
    name: "Pricing Model (Per Admin vs. Per Learner)",
    category: "Pricing Model",
    gymValue: "Per Admin/Flat Fee",
    lmsValue: "Per Learner Fee",
    isBenefit: true,
  },
];