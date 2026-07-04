import { ServiceItem, ProjectItem, TestimonialItem, FAQItem, TechItem, ProcessStep } from './types';

export const AGENCY_INFO = {
  name: "Nexora AI",
  tagline: "AI Websites That Help Your Business Grow",
  subheading: "We build lightning-fast, modern, AI-powered websites that impress customers and generate more leads for businesses worldwide.",
  phone: "+92 322 5590294",
  whatsappUrl: "https://wa.me/923225590294?text=Hello%20Nexora%20AI!%20I%20am%20interested%20in%20building%20a%20modern%20website.",
  email: "ainexora6@gmail.com",
  instagram: "https://www.instagram.com/nex0ra_ai/",
  location: "Online Business (Worldwide Service)"
};

export const STATISTICS = [
  { label: "Projects Designed", value: "100+", suffix: "", description: "Delivered to scaling enterprises & startups" },
  { label: "Client Satisfaction", value: "95", suffix: "%", description: "Consistently rated 5 stars for design speed" },
  { label: "Dedicated Support", value: "24/7", suffix: "", description: "Global timezone coverage via WhatsApp & Insta" },
  { label: "Global Reach", value: "Worldwide", suffix: "", description: "Serving USA, UK, Europe, Middle East & Asia" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-website-dev",
    title: "AI Website Development",
    description: "Cutting-edge web platforms embedded with AI chatbots, custom prompt engines, and dynamic smart personalization.",
    iconName: "Bot",
    badge: "Most Popular",
    features: ["Custom AI Agent Embeds", "Automated Lead Qualification", "Dynamic Content Generation"]
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "High-authority corporate websites designed to build instant market trust and convert executive visitors.",
    iconName: "Briefcase",
    features: ["Enterprise Glass UI", "Conversion Rate Optimized", "Lightning Page Speeds"]
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description: "Hyper-targeted campaign pages crafted for SaaS launches, ad funnels, and rapid customer acquisition.",
    iconName: "Rocket",
    badge: "High ROI",
    features: ["A/B Ready Architecture", "Action-Driven Micro-copy", "Sub-1s Load Time"]
  },
  {
    id: "ecommerce-websites",
    title: "E-commerce Websites",
    description: "Next-gen online stores with AI product recommendations, frictionless checkouts, and inventory sync.",
    iconName: "ShoppingBag",
    features: ["Smart Product Filtering", "Stripe & Crypto Checkouts", "Mobile App-like Experience"]
  },
  {
    id: "medical-clinic",
    title: "Medical & Clinic Websites",
    description: "HIPAA-compliant, reassuring portals for doctors, dental clinics, and wellness centers with instant booking.",
    iconName: "Stethoscope",
    features: ["Online Appointment Scheduling", "Patient Trust Showcase", "Local SEO Domination"]
  },
  {
    id: "real-estate",
    title: "Real Estate Websites",
    description: "Immersive property showcases featuring interactive map search, virtual tour embeds, and realtor lead forms.",
    iconName: "Building2",
    features: ["IDX / MLS Integration Ready", "Interactive Neighborhood Maps", "WhatsApp Lead Alerts"]
  },
  {
    id: "restaurant-websites",
    title: "Restaurant & Cafe Websites",
    description: "Mouth-watering digital menus, table reservation systems, and direct zero-commission ordering portals.",
    iconName: "UtensilsCrossed",
    features: ["QR Menu Integration", "Instant Table Booking", "Visual Dish Galleries"]
  },
  {
    id: "portfolio-websites",
    title: "Executive Portfolio Websites",
    description: "Sleek personal branding sites for founders, creators, architects, and agency owners to command higher rates.",
    iconName: "UserCheck",
    features: ["Interactive Bento Grids", "Editorial Space Typography", "Social Proof Modules"]
  },
  {
    id: "website-redesign",
    title: "Complete Website Redesign",
    description: "Transform outdated, slow legacy sites into ultra-modern Vercel & Linear-inspired masterpieces.",
    iconName: "RefreshCw",
    badge: "Fast Turnaround",
    features: ["Zero SEO Ranking Loss", "UX Audit & Overhaul", "Modern Tech Stack Migration"]
  },
  {
    id: "responsive-design",
    title: "Mobile-First Responsive Design",
    description: "Flawless rendering across iPhone 16 Pro Max, iPad, ultra-wide desktop displays, and foldable screens.",
    iconName: "Smartphone",
    features: ["Touch-Optimized Targets", "Fluid Typography Scaling", "Adaptive Navigation Drawers"]
  },
  {
    id: "seo-optimization",
    title: "Technical SEO Optimization",
    description: "Dominant organic search visibility with clean schema markup, core web vitals perfection, and semantic HTML.",
    iconName: "Search",
    features: ["Rich Snippets Schema", "Automated XML Sitemaps", "Open Graph Social Cards"]
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description: "Eliminate code bloat. We optimize assets and caching to achieve 99+ Google Lighthouse performance scores.",
    iconName: "Zap",
    features: ["Next-Gen Image Formats", "Code Splitting & Minifying", "Global Edge CDN Setup"]
  },
  {
    id: "website-maintenance",
    title: "24/7 Website Maintenance",
    description: "Continuous security monitoring, dependency updates, uptime assurance, and on-demand content edits.",
    iconName: "ShieldCheck",
    features: ["Daily Cloud Backups", "Malware & DDoS Protection", "Priority WhatsApp Support"]
  }
];

export const WHY_CHOOSE_US = [
  { title: "AI-Powered Workflow", desc: "We utilize advanced AI modeling to prototype layouts 10x faster than traditional agencies.", icon: "Cpu" },
  { title: "Lightning Fast Delivery", desc: "Get your initial production-ready prototype in days, not months.", icon: "Clock" },
  { title: "Modern Vercel-Grade UI/UX", desc: "Deep navy glassmorphism, abstract gradients, and crisp typography inspired by tech giants.", icon: "Sparkles" },
  { title: "Mobile-First Architecture", desc: "Over 75% of web traffic is mobile. We design mobile interactions first.", icon: "Smartphone" },
  { title: "Flawless Responsive Grid", desc: "Tested across 20+ screen viewports for pixel-perfect structural alignment.", icon: "Layout" },
  { title: "SEO Built Into Core Code", desc: "Clean semantic tags and structured metadata guarantee higher search indexability.", icon: "TrendingUp" },
  { title: "Sub-Second Performance", desc: "Optimized bundles and instant asset serving keep bounce rates near zero.", icon: "Gauge" },
  { title: "Enterprise-Grade Security", desc: "HTTPS enforcement, sanitized inputs, and zero third-party tracker bloat.", icon: "Lock" },
  { title: "Smooth Micro-Animations", desc: "Motion transitions that feel expensive without hurting CPU or battery life.", icon: "Activity" },
  { title: "Affordable Global Pricing", desc: "Silicon Valley design standards at accessible international investment rates.", icon: "DollarSign" },
  { title: "Worldwide Service", desc: "Seamless asynchronous collaboration regardless of your geographic timezone.", icon: "Globe" },
  { title: "Direct WhatsApp & Insta Access", desc: "No frustrating ticketing systems. Chat directly with lead engineers.", icon: "MessageSquare" }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Vision",
    description: "We discuss your business model, target demographic, competitor landscape, and exact conversion goals via WhatsApp or Instagram.",
    duration: "Day 1",
    keyDeliverable: "Project Scope & Sitemap"
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "We map out the user journey, conversion funnels, and wireframe structural hierarchies to maximize customer inquiries.",
    duration: "Day 2",
    keyDeliverable: "Interactive Wireframe"
  },
  {
    number: "03",
    title: "AI & Glass UI Design",
    description: "Our designers craft bespoke glassmorphism cards, glowing gradients, and custom Space Grotesk typography mockups.",
    duration: "Days 3-5",
    keyDeliverable: "Figma High-Fidelity UI"
  },
  {
    number: "04",
    title: "Clean Modular Dev",
    description: "We translate designs into production React / Tailwind code with zero bloat, mobile responsiveness, and custom motion physics.",
    duration: "Days 6-9",
    keyDeliverable: "Live Staging Applet"
  },
  {
    number: "05",
    title: "Rigorous QA & SEO",
    description: "We run Lighthouse benchmarks, test across iOS/Android hardware, inject Schema markup, and verify SSL security.",
    duration: "Day 10",
    keyDeliverable: "99+ Performance Report"
  },
  {
    number: "06",
    title: "Global Launch",
    description: "We deploy to high-speed cloud infrastructure, connect your custom domain, and hand over the keys with 24/7 VIP support.",
    duration: "Day 11+",
    keyDeliverable: "Live Revenue Generator"
  }
];

export const TECHNOLOGIES: TechItem[] = [
  { name: "React", category: "Frontend", icon: "Atom" },
  { name: "Next.js", category: "Frontend", icon: "Layers" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Palette" },
  { name: "JavaScript (ES6+)", category: "Frontend", icon: "FileCode" },
  { name: "HTML5 Semantic", category: "Frontend", icon: "Code2" },
  { name: "Modern CSS3", category: "Frontend", icon: "FileStyle" },
  { name: "Node.js", category: "Backend", icon: "Server" },
  { name: "Firebase Cloud", category: "Backend", icon: "Database" },
  { name: "Google AI Studio", category: "AI & Platform", icon: "Cpu" },
  { name: "Replit Cloud", category: "AI & Platform", icon: "Terminal" },
  { name: "Responsive Design", category: "Growth", icon: "MonitorSmartphone" },
  { name: "Technical SEO", category: "Growth", icon: "LineChart" }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "purecureclinic",
    title: "PureCure Medical & Aesthetics",
    category: "Medical & Clinic",
    description: "A high-converting aesthetic clinic website featuring instant WhatsApp triage dispatch, procedure bento showcases, and lightning fast 0.7s cloud load times.",
    gradient: "from-teal-500 via-emerald-600 to-cyan-700",
    tags: ["Clinic Website", "Aesthetics", "WhatsApp", "Fast Load"],
    metrics: "99+ PageSpeed Score",
    liveUrl: "https://purecureclinic.netlify.app"
  },
  {
    id: "emangynaeclinic",
    title: "Eman Gynae & Women's Health",
    category: "Healthcare & Medical",
    description: "Trust-centric specialty clinic portal with confidential appointment booking flows, specialist physician profile highlights, and mobile-first responsive care guides.",
    gradient: "from-pink-500 via-rose-600 to-purple-700",
    tags: ["Healthcare", "Women's Health", "React", "SEO"],
    metrics: "+240% Patient Bookings",
    liveUrl: "https://emangynaeclinic.netlify.app"
  },
  {
    id: "tinytreats-menu",
    title: "TinyTreats Artisan Bakery Menu",
    category: "Food & Bakery E-Commerce",
    description: "Interactive mobile digital menu and ordering web app for an artisan dessert boutique. Features instant allergen filtering and sleek floating cart checkout.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    tags: ["Bakery Store", "Digital Menu", "Mobile First", "UI/UX"],
    metrics: "0.6s Instant Navigation",
    liveUrl: "https://tinytreats-menu.netlify.app"
  },
  {
    id: "zaitoonbuilders",
    title: "Zaitoon Builders & Developers",
    category: "Real Estate & Construction",
    description: "Premium architectural and developer showcase. Highlighting luxury commercial plazas, interactive floorplan specs, and VIP investor contact desk.",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    tags: ["Construction", "Real Estate", "Tailwind", "Lead Gen"],
    metrics: "$25M+ Projects Showcased",
    liveUrl: "https://zaitoonbuilders.netlify.app"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vance AI Analytics (USA)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Nexora AI delivered our startup website in just 6 days. The glassmorphism dark theme looks like we spent $15,000 with a Silicon Valley agency. Our conversion rate tripled in week one!",
    rating: 5
  },
  {
    id: "t2",
    name: "Dr. Elena Rostova",
    role: "Medical Director",
    company: "Apex Aesthetic Clinic (UK)",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "Working with Nexora via Instagram & WhatsApp was incredibly smooth. They redesigned our outdated clinic site into a fast, reassuring portal. Patients love the instant WhatsApp booking button.",
    rating: 5
  },
  {
    id: "t3",
    name: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Gulf Skyline Real Estate (UAE)",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "The team at Nexora understands modern luxury web design. Their SEO optimization ranked our real estate agency on page 1 for our target keywords within 60 days. Truly world-class.",
    rating: 5
  },
  {
    id: "t4",
    name: "Sarah Jenkins",
    role: "Head of Marketing",
    company: "CloudScale SaaS (Canada)",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "Nexora AI's attention to typography and animations is unmatched. They built a lightning-fast landing page that loads instantly on mobile devices. Best agency experience we've ever had.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does it take to build a custom website?",
    answer: "Most custom websites and landing pages are designed, developed, and launched within 5 to 10 business days. For complex enterprise web apps or multi-language portals, we provide a guaranteed delivery timeline during our initial free WhatsApp/Instagram consultation."
  },
  {
    question: "Can you redesign my existing outdated website?",
    answer: "Yes, absolutely! Website redesign is one of our specialty services. We take your existing content and brand identity and upgrade it into a Vercel-grade modern interface with glassmorphism cards, lightning page speed, and zero loss of your existing SEO rankings."
  },
  {
    question: "Do you build AI-powered websites?",
    answer: "Yes! We specialize in embedding artificial intelligence into web platforms. This includes custom AI customer service chatbots, smart lead qualification wizards, automated dynamic content generation, and integrations with Google AI Studio and OpenAI."
  },
  {
    question: "Do you work with international clients worldwide?",
    answer: "Yes, 100%. We operate worldwide serving businesses in the USA, United Kingdom, Europe, UAE, Australia, and Asia. We collaborate asynchronously through Instagram, WhatsApp, and Email so timezone differences never slow down your project."
  },
  {
    question: "How much does a premium website cost?",
    answer: "Because we leverage AI in our design workflow, we offer high-end agency quality at a fraction of traditional Silicon Valley prices. Packages typically range from affordable starter landing pages to full corporate platforms. Contact us on Instagram or WhatsApp for an instant custom quote!"
  },
  {
    question: "What is the best way to contact Nexora AI?",
    answer: "Our most preferred communication channel is Instagram (@nex0ra_ai) or direct WhatsApp (+92 322 5590294). You can also email us at ainexora6@gmail.com. We respond to all inquiries within minutes!"
  }
];
