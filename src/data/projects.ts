import aghanajafiImg from '../../assets/screencapture-aghanajafi-2026-07-04-19_10_29.webp';
import fitnessImg from '../../assets/fitness.webp';
import luxshopImg from '../../assets/luxshop (1).webp';
import shokrzadeImg from '../../assets/screencapture-shokrzade-2026-07-04-18_49_03.webp';
import skycastImg from '../../assets/screencapture-baharfer-github-io-Skycast-Weather-2026-07-14-20_57_15.webp';
import veloraImg from '../../assets/velora.webp';
import restaurantImg from '../../assets/restuarnt.webp';

export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  fileName: string;
  tech: string[];
  demoUrl: string;
  githubUrl?: string;
}

/**
 * Portfolio order: most technically impressive first.
 * 1 Luxury Shop · 2 Velora Shop · 3 Fitness · 4 SkyCast · 5 Agha Najafi · 6 Shokrzade
 */
export const projects: Project[] = [
  {
    id: 'luxshop',
    index: '01',
    name: 'Luxury Shop',
    category: 'Full-Stack E-Commerce',
    description:
      'Premium full-stack storefront with product catalog, authentication, cart and order flow. Built for a realistic luxury shopping experience, end to end.',
    image: luxshopImg,
    imageAlt: 'Luxury Shop e-commerce website screenshot',
    fileName: 'assets/luxshop (1).webp',
    tech: ['React', 'TypeScript', 'Vite', 'PostgreSQL', 'Prisma', 'Full-stack'],
    demoUrl: 'https://store.baharferdosi.ir/',
    githubUrl: 'https://github.com/BaharFer/luxshop-fullstack-production',
  },
  {
    id: 'velora',
    index: '02',
    name: 'Velora Shop',
    category: 'React Storefront',
    description:
      'Modern animated storefront with product browsing, cart interactions and smooth motion throughout. Fast Vite SPA with a polished shopping UI.',
    image: veloraImg,
    imageAlt: 'Velora Shop website screenshot',
    fileName: 'assets/velora.webp',
    tech: ['React','Vite','React Router','Tailwind CSS','Framer Motion', 'GSAP + ScrollTrigger','lucide-react',],
    demoUrl: 'https://baharfer.github.io/Velora-Shop/',
    githubUrl: 'https://github.com/BaharFer/Velora-Shop',
  },
  {
    id: 'fitness',
    index: '03',
    name: 'Fitness Website',
    category: 'React Marketing Site',
    description:
      'Dark, high-energy fitness site with coaching programs, pricing, results and FAQ. Motion-driven sections with smooth scrolling.',
    image: fitnessImg,
    imageAlt: 'Fitness website screenshot',
    fileName: 'assets/fitness.webp',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://baharfer.github.io/fitness-website/',
    githubUrl: 'https://github.com/BaharFer/fitness-website',
  },
  {
    id: 'skycast',
    index: '04',
    name: 'SkyCast Weather',
    category: 'API Product — Weather',
    description:
      'Weather app with city search, current conditions plus 5-day forecast, geolocation, history and dark / light mode.',
    image: skycastImg,
    imageAlt: 'SkyCast weather app screenshot',
    fileName: 'assets/screencapture-baharfer-github-io-Skycast-Weather-2026-07-14-20_57_15.webp',
    tech: ['React', 'JavaScript', 'Vite', 'Weather API'],
    demoUrl: 'https://baharfer.github.io/Skycast-Weather/',
    githubUrl: 'https://github.com/BaharFer/Skycast-Weather',
  },
  {
    id: 'aghanajafi',
    index: '05',
    name: 'Agha Najafi',
    category: 'WordPress · Corporate Law',
    description:
      'Live WordPress site for a corporate law firm. Attorney profile, consultation pricing, case-type navigator, blog and office map — fully RTL.',
    image: aghanajafiImg,
    imageAlt: 'Agha Najafi law website screenshot',
    fileName: 'assets/screencapture-aghanajafi-2026-07-04-19_10_29.webp',
    tech: ['WordPress', 'Elementor', 'RTL', 'SEO'],
    demoUrl: 'https://aghanajafi.com/',
  },
  {
    id: 'shokrzade',
    index: '06',
    name: 'Shokrzade',
    category: 'WordPress · Attorney',
    description:
      'Live WordPress site for a first-degree attorney. Gold-on-charcoal design with services, consultation steps, pricing and contact funnel — fully RTL.',
    image: shokrzadeImg,
    imageAlt: 'Shokrzade law website screenshot',
    fileName: 'assets/screencapture-shokrzade-2026-07-04-18_49_03.webp',
    tech: ['WordPress', 'Elementor', 'RTL', 'SEO'],
    demoUrl: 'https://shokrzade.com/',
  },
  {
  id: 'restaurant',
  index: '07',
  name: 'Restaurant',
  category: 'WordPress · Restaurant',
  description:
    'Modern restaurant website with menu, online ordering, featured dishes and a responsive RTL experience.',
  image: restaurantImg,
  imageAlt: 'Restaurant website screenshot',
  fileName: 'assets/restuarnt.webp',
  tech: ['WordPress', 'Elementor', 'RTL'],
  demoUrl: 'https://restaurant.baharferdosi.ir/',
},
];

export const capabilities: Array<{ skill: string; note: string; level: string }> = [
  { skill: 'HTML / CSS', note: 'Advanced layout, RTL', level: '●●●●●' },
  { skill: 'JavaScript / TypeScript', note: 'SPA logic, APIs', level: '●●●●○' },
  { skill: 'React / Vite / Router', note: 'Velora, Fitness, SkyCast', level: '●●●●○' },
  { skill: 'Tailwind / Motion', note: 'Motion UI', level: '●●●●○' },
  { skill: 'Next.js / Prisma', note: 'Currently learning', level: '●●●○○' },
  { skill: 'WordPress / Elementor', note: 'Client sites, SEO', level: '●●●●●' },
];
export const services: Array<{ id: string; title: string; body: string }> = [
  {
    id: 'S.01',
    title: 'Frontend development',
    body: 'Modern React applications with TypeScript, Vite, responsive layouts, API integration, routing and thoughtful interactions.',
  },
  {
    id: 'S.02',
    title: 'Responsive & RTL design',
    body: 'Responsive websites and interfaces that work smoothly across mobile, tablet and desktop, in both English and Persian RTL.',
  },
  {
    id: 'S.03',
    title: 'WordPress development',
    body: 'Custom WordPress and Elementor builds for real businesses, with RTL support, performance, SEO, forms and booking.',
  },
  
];
