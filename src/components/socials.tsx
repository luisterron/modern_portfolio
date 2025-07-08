'use client';

import { motion } from 'framer-motion';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/github.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ANIMATION_DURATION } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/locale-context';
import { t } from '@/lib/translate';

export default function Socials({ className }: { className?: string }) {
    const pathname = usePathname();
    const { locale } = useLocale();

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: ANIMATION_DURATION.MEDIUM,
                ease: 'easeOut',
            },
        }),
    };

    const isBlogPage = pathname === '/blog';
    const primaryLink = isBlogPage ? '/' : '/blog';
    const primaryText = isBlogPage ? t(locale, 'portfolio') : t(locale, 'blog');

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className={cn('flex items-center gap-5 z-10 justify-center', className)}
        >
            <Link
                className="text-theme-primary font-black hover:scale-125 duration-300 transition-transform delay-0"
                href={primaryLink}
                aria-label={`Luis Ángel Fernández's ${primaryText} (opens in the same tab)`}
            >
                <motion.div custom={0} variants={iconVariants}>
                    {primaryText}
                </motion.div>
            </Link>
            <Link
                href="https://www.linkedin.com/in/luis-fernandez-terron/"
                target="_blank"
                aria-label="Luis Ángel Fernández's LinkedIn profile (opens in a new tab)"
            >
                <motion.div custom={1} variants={iconVariants}>
                    <LinkedinIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
            <Link
                href="https://github.com/luisterron"
                target="_blank"
                aria-label="Luis Ángel Fernández's GitHub profile (opens in a new tab)"
            >
                <motion.div custom={2} variants={iconVariants}>
                    <GithubIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
