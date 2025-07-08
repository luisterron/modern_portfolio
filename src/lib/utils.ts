import { SectionWithIndex } from './types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function generateUniqueTitleSections(
 titles: string[]
): SectionWithIndex[] {
 const titleIndexSet = new Set<string>();
 const uniqueSections: SectionWithIndex[] = [];

 titles.forEach((title, index) => {
  if (!titleIndexSet.has(title)) {
   titleIndexSet.add(title);
   uniqueSections.push({ title, index });
  }
 });

 return uniqueSections;
}

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export function estimateReadingTime(content: string): string {
 if (!content) return '0 min read';

 const words = content.split(/\s+/).length;
 const minutes = Math.ceil(words / 200);
 return `${minutes} min read`;
}
