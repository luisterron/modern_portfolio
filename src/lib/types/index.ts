export type Direction = 'up' | 'down';

export enum Sections {
 Home = 0,
 Works = 1,
 Experience = 2,
 Contact = 3,
}

export type Section = {
 content: React.ReactNode;
 title: string;
};

export type SectionContextType = {
 sectionIndex: number;
 subsectionIndex: number;
 setSectionIndex: (index: number) => void;
 navigationDirection: Direction;
 setSubsectionIndex: (index: number) => void;
 isTransitioning: boolean;
};

export type SectionColors = {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
};

export type TranslatedText = { en: string; es: string };

import type { StaticImageData } from 'next/image';

export type WorkItem = {
  cover: StaticImageData | string;
  title: string;
  subject: string | TranslatedText;
  description: string | TranslatedText;
  link: string;
  techStack: string[];
};

export type SectionWithIndex = {
 title: string;
 index: number;
};

export type PostMetadata = {
 title: string;
 description: string;
 date: string | Date;
 cover: string;
 slug: string;
 readingTime: string;
 keywords: string[];
};

export type PostContent = {
 content: string;
 metadata: PostMetadata;
};
