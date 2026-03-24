// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types retained as is

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "Productivity",
    badgeOuter: "Meet TaskNest",
    titleBefore: "Organize Your Tasks with",
    titleHighlight: "TaskNest",
    titleAfter: "",
    subtitle: "TaskNest helps you and your team stay on top of your to-dos with collaborative lists, simple tracking, and a clean dashboard.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Explore features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "TaskNest dashboard preview",
  },

  sponsors: {
    heading: "Teams trust TaskNest",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  benefits: {
    eyebrow: "Why TaskNest",
    heading: "Collaborative To-Do Management",
    description: "TaskNest is designed for individuals and teams who want to organize, track, and get things done together—without friction.",
    items: [
      {
        icon: "Blocks",
        title: "Work Together",
        description: "Share, prioritize, and complete tasks across your team—everyone stays in sync.",
      },
      {
        icon: "LineChart",
        title: "Streamlined Workflow",
        description: "Visualize progress at a glance and keep your work moving forward.",
      },
      {
        icon: "Wallet",
        title: "Free To Start",
        description: "Sign up in seconds, invite your teammates, and start tracking your to-dos—no credit card required.",
      },
      {
        icon: "Sparkle",
        title: "Clean, Modern Dashboard",
        description: "Enjoy a delightful interface—so managing tasks is actually enjoyable.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "Everything You Need to Stay Productive",
    subtitle: "TaskNest brings your team together to organize, track, and achieve more with less chaos.",
    items: [
      {
        icon: "ListTodo",
        title: "Collaborative To-Do Lists",
        description: "Easily create and share lists to manage tasks as a team or on your own.",
      },
      {
        icon: "CheckCircle2",
        title: "Simple Task Management",
        description: "Add, prioritize, and check off tasks to keep work moving forward.",
      },
      {
        icon: "RefreshCcw",
        title: "Real-Time Updates",
        description: "See changes instantly across all your devices and team members.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "TaskNest Capabilities",
    subtitle: "From personal to team productivity, TaskNest adapts to how you work best.",
    items: [
      { title: "Team Collaboration", description: "Work together in shared lists, assign tasks, and track as a group.", pro: false },
      { title: "Individual Productivity", description: "Stay on top of your personal goals, errands, or side projects.", pro: false },
      { title: "Status Tracking", description: "See what’s done, what’s coming up, and what needs attention.", pro: false },
      { title: "Modern, Intuitive UI", description: "No training needed—get started in seconds.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "What Teams Say About TaskNest",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "TaskNest transformed the way our team manages daily operations. Lists and tasks finally feel organized.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "I love how easy it is to invite team members and start tracking to-dos. Great onboarding experience.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "TaskNest’s collaborative lists keep everyone in sync—essential as we grow.", rating: 4.9 },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the TaskNest Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder & Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Choose Your Plan",
    subtitle: "Start free. Upgrade any time as your team grows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Perfect for getting started solo or with a small team.",
        buttonText: "Sign Up Free",
        benefits: [
          "Unlimited to-do lists",
          "Collaboration for up to 5 users",
          "Basic task management",
          "Simple sharing"
        ],
      },
      {
        title: "Pro",
        popular: false,
        price: 9,
        description: "Advanced features and more space for bigger teams.",
        buttonText: "Start Pro Plan",
        benefits: [
          "Unlimited members",
          "Task assignment",
          "Reminders & notifications",
          "Priority support"
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Contact the TaskNest Team",
    description: "Have a question or need help getting started? Reach out and our team will reply promptly.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Address", value: "Remote-first" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "adan@bidx.ai" },
      hours: { label: "Working Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["General Inquiry", "Getting Started", "Feedback"],
    formSubmitLabel: "Send Message",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Is TaskNest free?", answer: "Yes! You can organize your tasks and collaborate at no cost. Upgrade anytime for advanced features." },
      { question: "Can I invite my team?", answer: "Absolutely. TaskNest is built for collaboration and makes it easy to manage lists as a group." },
      { question: "Does TaskNest support reminders?", answer: "Reminders and notifications are available on paid plans—you’ll never miss a deadline." },
      { question: "Is my data secure?", answer: "We take security seriously. All data is encrypted and access-controlled." },
    ],
  },

  footer: {
    brandName: "TaskNest",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Support", href: "mailto:adan@bidx.ai" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "LinkedIn", href: "https://linkedin.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 TaskNest.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "TaskNest",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "TaskNest preview" },
    features: [
      { title: "Collaborative To-Do Lists", description: "Work together to stay productive and organized." },
      { title: "Real-Time Sync", description: "Instant updates across your devices and team." },
      { title: "Simple, Modern UI", description: "Enjoy a delightful and efficient experience." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}