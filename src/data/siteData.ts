export type LineIconName = 'people' | 'code' | 'calendar' | 'star' | 'bulb' | 'shield' | 'target' | 'eye'
export type ServiceIconName = 'code' | 'mobile' | 'cloud' | 'gear' | 'chart' | 'shield'
export type ServiceAccent = 'blue' | 'violet' | 'cyan'
export type ProjectCategory = 'Web Development' | 'Mobile Applications' | 'Cloud & DevOps' | 'UI/UX Design' | 'Custom Software'

export const aboutHero = {
  eyebrow: 'About Us',
  title: 'We Are More Than',
  titleSecondLine: 'Just a',
  titleAccent: 'Tech Company.',
  description: 'At CBT, we’re passionate developers, designers, and problem-solvers building digital solutions that help businesses grow, innovate, and stay ahead.',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85',
  imageAlt: 'A team of technology colleagues collaborating around a laptop',
  imageMessage: ['Build', 'Create', 'Grow'],
  actionLabel: 'Our Services',
  actionHref: '/services',
}

export const aboutStats: { icon: LineIconName; count: string; label: string; detail: string }[] = [
  { icon: 'people', count: '50+', label: 'Happy Clients', detail: 'Trusted by businesses worldwide' },
  { icon: 'code', count: '100+', label: 'Projects Delivered', detail: 'From idea to real impact' },
  { icon: 'calendar', count: '5+', label: 'Years of Experience', detail: 'Building digital success' },
  { icon: 'star', count: '25+', label: 'Skilled Professionals', detail: 'Designers, developers, and strategists' },
]

export const aboutStory = {
  image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
  imageAlt: 'Bright modern office interior',
  eyebrow: 'Our Story',
  title: ['From a Simple Idea', 'to a Growing Vision'],
  description: 'CBT started with a simple belief: technology can make life easier, businesses stronger, and ideas bigger. We create digital solutions that solve real problems and deliver lasting value.',
  learnMoreLabel: 'Learn More',
  learnMoreHref: '/services',
}

export const aboutMissionVision = [
  { title: 'Our Mission', icon: 'target' as const, description: 'To deliver innovative and reliable technology solutions that empower businesses and people.' },
  { title: 'Our Vision', icon: 'eye' as const, description: 'To be a global leader in digital transformation, creating a smarter, more connected future.' },
]

export type FeaturedService = {
  title: string
  description: string
  icon: Extract<ServiceIconName, 'code' | 'mobile' | 'cloud'>
  accent: ServiceAccent
  href: string
}

export const featuredServices: FeaturedService[] = [
  { title: 'Web Development', description: 'Modern, fast and responsive websites that turn visitors into customers.', icon: 'code', accent: 'blue', href: '#contact' },
  { title: 'Mobile Applications', description: 'Powerful and scalable mobile apps for iOS and Android platforms.', icon: 'mobile', accent: 'violet', href: '#contact' },
  { title: 'Cloud & DevOps', description: 'Reliable infrastructure and deployment for high performance and security.', icon: 'cloud', accent: 'cyan', href: '#contact' },
]

export type ServiceCatalogItem = {
  title: string
  description: string
  accent: ServiceAccent
  icon: ServiceIconName
}

export const serviceCatalog: ServiceCatalogItem[] = [
  { title: 'Web Development', description: 'Modern, responsive and scalable websites that turn visitors into loyal customers.', accent: 'blue', icon: 'code' },
  { title: 'Mobile Applications', description: 'Powerful and user-friendly mobile apps for iOS and Android platforms.', accent: 'violet', icon: 'mobile' },
  { title: 'Cloud & DevOps', description: 'Reliable infrastructure, deployment and automation for high performance.', accent: 'cyan', icon: 'cloud' },
  { title: 'Custom Software Development', description: 'Tailored solutions that fit your business processes and unique goals.', accent: 'violet', icon: 'gear' },
  { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that deliver great user experiences.', accent: 'cyan', icon: 'chart' },
  { title: 'IT Consulting & Support', description: 'Strategic guidance and ongoing support to keep your business ahead.', accent: 'violet', icon: 'shield' },
]

export const projectCategories = ['All Projects', 'Web Development', 'Mobile Applications', 'Cloud & DevOps', 'UI/UX Design', 'Custom Software'] as const

export type PortfolioProject = {
  name: string
  category: ProjectCategory
  description: string
  image: string
}

export const portfolioProjects: PortfolioProject[] = [
  { name: 'TravelVista', category: 'Web Development', description: 'A modern travel booking platform with real-time availability, secure payments, and personalized recommendations.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'FitTrack', category: 'Mobile Applications', description: 'A fitness and wellness app with personalized workouts, nutrition plans, and progress tracking.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'SkyManage', category: 'Cloud & DevOps', description: 'A cloud-based infrastructure management platform with automated deployment and monitoring.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'ShopEase', category: 'Web Development', description: 'A scalable e-commerce solution with seamless checkout and inventory management.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'HealthPlus', category: 'UI/UX Design', description: 'A healthcare dashboard with intuitive UI for patient and clinic management.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'Nova Creative', category: 'Web Development', description: 'A digital agency website with engaging visuals, portfolio showcases, and lead generation tools.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'LinguaLearn', category: 'Mobile Applications', description: 'A language learning app with interactive lessons, AI-powered feedback, and progress tracking.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'SafeLogix', category: 'Custom Software', description: 'A logistics management system with real-time tracking, route optimization, and delivery analytics.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&h=340&q=80' },
  { name: 'Finora', category: 'Cloud & DevOps', description: 'A secure digital banking platform with transaction management and financial insights.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&h=340&q=80' },
]

export const projectCategoryStyles: Record<ProjectCategory, string> = {
  'Web Development': 'bg-[#ddf5ff] text-[#087bb5]',
  'Mobile Applications': 'bg-[#ece6ff] text-[#6341d9]',
  'Cloud & DevOps': 'bg-[#dcfbfa] text-[#078a92]',
  'UI/UX Design': 'bg-[#eee9ff] text-[#6247c5]',
  'Custom Software': 'bg-[#e2efff] text-[#185db6]',
}

export const portfolioImpact = [
  { value: '100+', label: 'Projects Delivered', icon: '▣' },
  { value: '50+', label: 'Happy Clients', icon: '♧' },
  { value: '5+', label: 'Years of Experience', icon: '☆' },
  { value: '99%', label: 'Client Satisfaction', icon: '◉' },
]

export const portfolioTestimonial = {
  name: 'Sophia Garcia',
  role: 'CEO, Nova Creative',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  quote: 'CBT delivered exactly what we needed: a modern, fast, and reliable platform. Their team is professional, creative, and always responsive.',
}

export const contactDetails = {
  phone: '+1 (555) 123-4567',
  phoneHref: 'tel:+15551234567',
  hours: 'Mon–Fri, 9:00 AM–6:00 PM (GMT+7)',
  email: 'hello@cbt.tech',
  responseTime: 'We reply within 24 hours',
  officeName: 'Our Office',
  officeAddress: ['123 Innovation Drive,', 'Tech City, Bangkok 10110,', 'Thailand'],
  mapTitle: 'Map showing our Bangkok office',
  mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=100.475%2C13.735%2C100.525%2C13.78&layer=mapnik&marker=13.7563%2C100.5018',
  directionsUrl: 'https://maps.google.com/?q=13.7563,100.5018',
}

export type ContactMethod = {
  type: 'phone' | 'mail' | 'pin'
  label: string
  value: string
  href?: string
  note?: string
  detail?: string
  accent: ServiceAccent
}

export const contactMethods: ContactMethod[] = [
  { type: 'phone' as const, label: 'Phone', value: contactDetails.phone, href: contactDetails.phoneHref, note: contactDetails.hours, accent: 'blue' },
  { type: 'mail' as const, label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}`, note: contactDetails.responseTime, accent: 'violet' },
  { type: 'pin', label: 'Office Address', value: '123 Innovation Drive, Tech City,', detail: 'Bangkok 10110, Thailand', accent: 'cyan' },
]

export const contactSubjects = [
  'General Inquiry',
  'Web Development',
  'Mobile Applications',
  'Cloud & DevOps',
  'UI/UX Design',
  'Custom Software',
]

export const contactSocialLinks = [
  { label: 'LinkedIn', text: 'in', href: 'https://www.linkedin.com/' },
  { label: 'Facebook', text: 'f', href: 'https://www.facebook.com/' },
  { label: 'X', text: '𝕏', href: 'https://x.com/' },
  { label: 'Instagram', text: '◎', href: 'https://www.instagram.com/' },
  { label: 'YouTube', text: '▶', href: 'https://www.youtube.com/' },
]