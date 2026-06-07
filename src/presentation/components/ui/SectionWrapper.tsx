'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-24 px-6 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
