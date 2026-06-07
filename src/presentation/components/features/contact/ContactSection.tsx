'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/src/presentation/components/ui/icons';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import type { Profile } from '@/src/domain/entities/Profile';

interface Props {
  profile: Profile;
}

export function ContactSection({ profile }: Props) {
  return (
    <SectionWrapper id="contact" className="bg-[#0d0d0d]">
      <div className="text-center max-w-2xl mx-auto">
        <motion.p
          className="text-xs font-mono tracking-[0.25em] uppercase text-violet-400 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {'// contato'}
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Vamos trabalhar juntos?
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Estou aberto a novas oportunidades, projetos freelance e colaborações. Se quiser conversar, minha caixa de entrada está sempre aberta.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {profile.socialLinks.email && (
            <a
              href={`mailto:${profile.socialLinks.email}`}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-900/40"
            >
              <Mail size={16} />
              Enviar email
            </a>
          )}
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-violet-500 hover:bg-white/10 transition-all duration-300"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 text-zinc-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
            <GitHubIcon size={14} />
            GitHub
          </a>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {profile.location}
          </span>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center text-zinc-700 text-xs font-mono">
        © {new Date().getFullYear()} {profile.name} — construído com Next.js & ♥
      </div>
    </SectionWrapper>
  );
}
