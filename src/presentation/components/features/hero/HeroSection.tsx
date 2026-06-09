'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/src/presentation/components/ui/icons';
import { useEffect, useState, useRef } from 'react';
import type { Profile } from '@/src/domain/entities/Profile';

const TITLES = [
  'Software Engineer',
  'Mobile Developer',
  'React Native Specialist',
  'Full Stack Developer',
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span className="text-violet-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function FloatingOrb({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

interface Props {
  profile: Profile;
}

export function HeroSection({ profile }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <FloatingOrb delay={0} size={500} x="10%" y="10%" />
      <FloatingOrb delay={2} size={350} x="60%" y="50%" />
      <FloatingOrb delay={4} size={250} x="30%" y="70%" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-violet-400 border border-violet-800 px-4 py-2 rounded-full bg-violet-950/30">
            Disponível para oportunidades
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight"
        >
          {profile.name.split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="text-zinc-400">{profile.name.split(' ').slice(2).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-xl sm:text-2xl font-light text-zinc-400"
        >
          <TypewriterText texts={TITLES} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-base text-zinc-500 max-w-xl mx-auto leading-relaxed"
        >
          {profile.bio.split('\n')[0]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-violet-500 transition-all duration-300"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-900/40"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          {profile.socialLinks.email && (
            <a
              href={`mailto:${profile.socialLinks.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-violet-500 transition-all duration-300"
            >
              <Mail size={16} />
              Email
            </a>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
