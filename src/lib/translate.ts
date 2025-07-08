export const translations = {
 en: {
  navHome: 'Home',
  navWorks: 'Works',
  navExperiences: 'Experiences',
  navContact: 'Contact',
  heroPrefix: "Let's create ",
  heroHighlight: 'cool',
  heroSuffix: ' stuff together',
  contactButton: 'Contact me',
  getInTouch: 'Get in Touch',
  contactIntro:
   "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  quote:
   '“There are only two kinds of programming languages: those people always complain about, and those nobody uses.”',
  quoteAuthor: '\u2014 Bjarne Stroustrup',
  overYears: 'Over <b>4</b> Years',
  current: 'Current',
  visit: 'Visit',
  developer: 'Full Stack Developer',
  portfolio: 'Portfolio',
  blog: 'Blog',
 },
 es: {
  navHome: 'Inicio',
  navWorks: 'Trabajo',
  navExperiences: 'Experiencia',
  navContact: 'Contacto',
  heroPrefix: 'Creemos cosas ',
  heroHighlight: 'geniales',
  heroSuffix: ' juntos',
  contactButton: 'Cont\u00E1ctame',
  getInTouch: 'Ponte en contacto',
  contactIntro:
   'Siempre estoy abierto a hablar sobre nuevos proyectos, ideas creativas u oportunidades para formar parte de tu visi\u00F3n. \u00A1No dudes en escribirme!',
  quote:
   '“Solo hay dos tipos de lenguajes de programación: los que la gente siempre critica y los que nadie usa.”',
  quoteAuthor: '\u2014 Bjarne Stroustrup',
  overYears: 'M\u00E1s de <b>4</b> a\u00F1os',
  current: 'Actual',
  visit: 'Visitar',
  developer: 'Desarrollador Full Stack',
  portfolio: 'Portafolio',
  blog: 'Blog',
 },
} as const;

export type TranslationKey = keyof typeof translations.en;
export type Locale = keyof typeof translations;

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}
