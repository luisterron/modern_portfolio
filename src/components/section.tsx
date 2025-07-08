'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useSection } from '@/lib/hooks';
import { ANIMATION_DURATION } from '@/lib/constants';
import Home from './home';
import Works from './works';
import Experiences from './experiences';
import Contact from './contact';
import { Direction } from '@/lib/types';

export default function Section() {
 const { sectionIndex, navigationDirection } = useSection();

 return (
  <div className="h-full flex items-center justify-center   bg-theme-background">
   <AnimatePresence mode="wait" custom={navigationDirection}>
    <motion.main
     key={sectionIndex}
     variants={variants}
     initial="enter"
     animate="center"
     exit="exit"
     custom={navigationDirection}
     transition={{
      duration: ANIMATION_DURATION.MEDIUM,
      damping: 10,
      stiffness: 100,
     }}
     className="flex items-center justify-center h-full"
    >
     {sectionIndex === 0 && <Home />}
     {sectionIndex === 1 && <Works />}
     {sectionIndex === 2 && <Experiences />}
     {sectionIndex === 3 && <Contact />}
    </motion.main>
   </AnimatePresence>
  </div>
 );
}

const variants = {
 enter: (direction: Direction) => ({
  opacity: 0,
  y: direction === 'down' ? 50 : -50,
 }),
 center: { opacity: 1, y: 0 },
 exit: (direction: 'up' | 'down') => ({
  opacity: 0,
  y: direction === 'down' ? -50 : 50,
 }),
};
