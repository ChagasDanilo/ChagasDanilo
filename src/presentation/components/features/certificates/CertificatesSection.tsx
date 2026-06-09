'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Certificate } from '@/src/domain/entities/Certificate';
import type { Education } from '@/src/domain/entities/Education';

interface Props {
  certificates: Certificate[];
  education: Education[];
}

export function CertificatesSection({ certificates, education }: Props) {
  return (
    <SectionWrapper id="certificates">
      <SectionTitle label="// formação & certificações" title="Formação & Certificados" />

      <div className="mb-10">
        <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-violet-400 mb-4">Formação Acadêmica</h3>
        <div className="flex flex-col gap-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet-600/40 hover:bg-violet-950/20 transition-all duration-300"
            >
              <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-violet-950/60 border border-violet-800/50 flex items-center justify-center">
                <GraduationCap size={16} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-zinc-200 text-sm font-medium leading-snug">{edu.name}</p>
                <p className="text-zinc-500 text-xs mt-1">{edu.institution}</p>
              </div>
              <div className="shrink-0 text-right">
                <span className={`text-xs font-mono px-2 py-1 rounded-full ${edu.current ? 'bg-violet-950/60 text-violet-300 border border-violet-800/50' : 'bg-white/[0.04] text-zinc-500 border border-white/10'}`}>
                  {edu.current ? `Em curso · ${edu.period}` : edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-violet-400 mb-4">Certificados</h3>
        <div className="flex flex-wrap gap-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-violet-600/50 hover:bg-violet-950/30 transition-all duration-300 cursor-default"
            >
              <Award size={14} className="text-violet-400 shrink-0" />
              <div>
                <p className="text-zinc-200 text-sm font-medium leading-none">{cert.name}</p>
                <p className="text-zinc-400 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
