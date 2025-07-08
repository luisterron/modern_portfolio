import OclemConcursosCover from '@/assets/images/oclem-concursos.webp';
import LoopGuardCover from '@/assets/images/loopguard.webp';
import MapasRomanticosCover from '@/assets/images/mapas-romanticos.webp';
import DividioCover from '@/assets/images/dividio.webp';
import PortfolioCover from '@/assets/images/portfolio.webp';
import PomodoroCover from '@/assets/images/pomodoro.webp';

export const ANIMATION_DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8,
};

export const WORKS_ITEMS = [
 {
  cover: OclemConcursosCover,
  title: 'Oclem Concursos',
  subject: { en: 'Full Stack Development', es: 'Desarrollo Full Stack' },
  description: {
   en: 'Centralizes and manages the full public procurement cycle with expert support, and real-time chat.',
   es: 'Centraliza y gestiona todo el ciclo de contrataci\u00F3n p\u00FAblica con soporte experto y chat en tiempo real.',
  },
  link: 'https://oclemconcursos.com',
  techStack: [
   'React',
   'TypeScript',
   'PostgreSQL',
   'MongoDB',
   'Node.js',
   'Express',
   'Docker',
  ],
 },
 {
  cover: LoopGuardCover,
  title: 'LoopGuard',
  subject: { en: 'Frontend Development', es: 'Desarrollo Frontend' },
  description: {
   en: 'Website for LoopGuard, a cybersecurity company, showcasing their services and expertise.',
   es: 'Sitio web para LoopGuard, una empresa de ciberseguridad, muestra sus servicios y experiencia.',
  },
  link: 'https://loopguard.com',
  techStack: ['Next.js', 'Typescript', 'React', 'Tailwind CSS', 'Node.js'],
 },
 {
  cover: MapasRomanticosCover,
  title: 'Romance Maps',
  subject: { en: 'Full Stack Development', es: 'Desarrollo Full Stack' },
  description: {
   en: 'Web interface that creates PDF maps of romantic locations with customized inputs',
   es: 'Interfaz web que genera mapas PDF de lugares rom\u00E1nticos con entradas personalizadas',
  },
  link: 'https://github.com/luisterron/MapaCorazon',
  techStack: ['JavaScript', 'HTML', 'CSS'],
 },
 {
  cover: DividioCover,
  title: 'Dividio',
  subject: { en: 'Full Stack Development', es: 'Desarrollo Full Stack' },
  description: {
   en: 'Allows users to record all payment transactions and easily split them, clearly showing who owes whom.',
   es: 'Permite registrar todas las transacciones y dividirlas f\u00E1cilmente, mostrando qui\u00E9n debe a qui\u00E9n.',
  },
  link: 'https://github.com/luisterron/Dividio',
  techStack: ['Python', 'Flask', 'HTML', 'CSS'],
 },
 {
  cover: PortfolioCover,
  title: 'Portfolio',
  subject: { en: 'Frontend Development', es: 'Desarrollo Frontend' },
  description: {
   en: 'My old personal portfolio website, showcasing my skills and projects.',
   es: 'Mi antiguo portafolio personal, donde mostraba mis habilidades y proyectos.',
  },
  link: 'https://github.com/luisterron/Portfolio',
  techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
 },
 {
  cover: PomodoroCover,
  title: 'Pomodoro Timer',
  subject: { en: 'Software Development', es: 'Desarrollo de Software' },
  description: {
   en: 'A simple Pomodoro timer built with Python.',
   es: 'Un temporizador Pomodoro sencillo construido con Python.',
  },
  link: 'https://github.com/luisterron/Pomodoro',
  techStack: ['Python'],
 },
];

export const WORK_SUBSECTIONS = WORKS_ITEMS.length;

export const experiences = [
  { date: 'March 2024', title: 'Grupo Oclem', role: 'Full Stack Developer' },
  { date: 'Nov 2022', title: 'UNIR', role: 'Product Manager Assistant' },
  { date: 'Jun 2020', title: 'Freelance', role: 'Freelance Ecommerce Developer' },
];
