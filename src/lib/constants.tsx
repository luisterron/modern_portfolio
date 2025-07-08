import { SectionColors, Sections } from './types';
export * from './data';
export const SECTION_TITLES = ['Home', 'Works', 'Experiences', 'Contact'];

export const THEMES: Record<string, SectionColors> = {
 main: {
  background: 'var(--theme-1-background)',
  primary: 'var(--theme-1-primary)',
  secondary: 'var(--theme-1-secondary)',
  accent: 'var(--theme-1-accent)',
 },
 oclemconcursos: {
  background: 'var(--theme-2-background)',
  primary: 'var(--theme-2-primary)',
  secondary: 'var(--theme-2-secondary)',
  accent: 'var(--theme-2-accent)',
 },
 loopguard: {
  background: 'var(--theme-3-background)',
  primary: 'var(--theme-3-primary)',
  secondary: 'var(--theme-3-secondary)',
  accent: 'var(--theme-3-accent)',
 },
 romancemaps: {
  background: 'var(--theme-4-background)',
  primary: 'var(--theme-4-primary)',
  secondary: 'var(--theme-4-secondary)',
  accent: 'var(--theme-4-accent)',
 },
 experiences: {
  background: 'var(--theme-5-background)',
  primary: 'var(--theme-5-primary)',
  secondary: 'var(--theme-5-secondary)',
  accent: 'var(--theme-5-accent)',
 },
 // Nuevos temas para los elementos 4, 5 y 6
 dividio: {
  background: 'var(--theme-6-background)',
  primary: 'var(--theme-6-primary)',
  secondary: 'var(--theme-6-secondary)',
  accent: 'var(--theme-6-accent)',
 },
 portfolio: {
  background: 'var(--theme-7-background)',
  primary: 'var(--theme-7-primary)',
  secondary: 'var(--theme-7-secondary)',
  accent: 'var(--theme-7-accent)',
 },
 pomodoro: {
  background: 'var(--theme-8-background)',
  primary: 'var(--theme-8-primary)',
  secondary: 'var(--theme-8-secondary)',
  accent: 'var(--theme-8-accent)',
 },
};

export const SECTION_THEME_MAP: {
 [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
 [Sections.Home]: THEMES.main,
 [Sections.Works]: {
  0: THEMES.oclemconcursos, // Oclem Concursos
  1: THEMES.loopguard, // LoopGuard
  2: THEMES.romancemaps, // Romance Maps
  3: THEMES.dividio, // Dividio
  4: THEMES.portfolio, // Portfolio
  5: THEMES.pomodoro, // Pomodoro Timer
 },
 [Sections.Experience]: THEMES.experiences,
 [Sections.Contact]: THEMES.main,
};
