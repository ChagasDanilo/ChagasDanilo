'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Logo } from '@/src/presentation/components/ui/Logo';

const LINKS = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiência' },
  { href: '#projects', label: 'Projetos' },
  { href: '#certificates', label: 'Certificados' },
  { href: '#contact', label: 'Contato' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handler = () => {
      const sections = LINKS.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{}}
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
        style={{ opacity: bgOpacity }}
      />
      <nav className="relative max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer"
        >
          <Logo />
        </button>
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <li key={link.href}>
                <button
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    history.replaceState(null, '', link.href);
                  }}
                  className={`text-sm transition-colors duration-200 cursor-pointer ${
                    active === id
                      ? 'text-violet-400'
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
