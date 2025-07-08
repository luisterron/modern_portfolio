'use client';
import { motion } from 'framer-motion';
import NeonFigure from './neon-figure';
import { useLocale } from '@/lib/locale-context';
import { t } from '@/lib/translate';

export default function Contact() {
    const { locale } = useLocale();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start p-6 lg:p-10 mt-12 bg-theme-accent relative rounded-2xl mx-5 shadow-lg max-w-3xl"
        >
            <div className="flex flex-col">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl font-bold text-theme-primary mb-4"
                >
                    {t(locale, 'getInTouch')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg text-white mb-4"
                >
                    {t(locale, 'contactIntro')}
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    href="mailto:contacto@luisfernandezterron.com"
                    className="text-xl font-semibold text-theme-primary underline mb-6 hoverable "
                >
                    contacto@luisfernandezterron.com
                </motion.a>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="p-4 mt-8 rounded-xl right-5 left-5 z-30 lg:absolute bottom-5 bg-theme-background bg-opacity-20 shadow-md flex flex-col items-start"
                >
                    <span className="text-3xl md:text-4xl text-theme-primary">❝</span>
                    <p className="text-sm md:text-lg italic text-white mb-2">
                        {t(locale, 'quote')}
                    </p>
                    <p className="text-xs md:text-sm text-theme-primary font-semibold self-end">
                        {t(locale, 'quoteAuthor')}
                    </p>
                </motion.div>

            </div>
            <div className="relative bottom-20 hidden lg:block">
                <NeonFigure />
            </div>
        </motion.div>
    );
}
