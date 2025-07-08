'use client';

import { useSection } from '@/lib/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { t } from '@/lib/translate';

export default function SectionTitle() {
 const { sectionIndex } = useSection();
 const { locale } = useLocale();

 return (
  <AnimatePresence>
   {sectionIndex > 0 && (
    <motion.h2
     key={sectionIndex}
     initial={{ x: 20, opacity: 0, scale: 0.8 }}
     animate={{ x: 0, opacity: 1, scale: 1 }}
     exit={{ x: 20, opacity: 0, scale: 0.8 }}
     transition={{ duration: 0.5, ease: 'easeInOut' }}
     className="fixed right-5 sm:right-10 sm:bottom-10 lg:right-10 bottom-5 lg:bottom-auto lg:top-[50%] lg:text-6xl translate-y-[-50%] text-theme-primary font-semibold sm:text-4xl text-2xl"
    >
     {t(locale, (
      sectionIndex === 0
       ? 'navHome'
       : sectionIndex === 1
       ? 'navWorks'
       : sectionIndex === 2
       ? 'navExperiences'
       : 'navContact'
     ))}
    </motion.h2>
   )}
  </AnimatePresence>
 );
}
