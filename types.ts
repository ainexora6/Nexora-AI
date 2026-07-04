export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Platform' | 'Growth';
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  keyDeliverable: string;
}
