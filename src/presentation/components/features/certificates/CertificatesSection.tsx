'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Certificate } from '@/src/domain/entities/Certificate';

interface Props {
  certificates: Certificate[];
}

export function CertificatesSection({ certificates }: Props) {
  return (
    <SectionWrapper id="certificates">
      <SectionTitle label="// certificações" title="Formação & Certificados" />
      <div className="flex flex-wrap gap-3">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-violet-600/50 hover:bg-violet-950/30 transition-all duration-300 cursor-default"
          >
            <Award size={14} className="text-violet-400 shrink-0" />
            <div>
              <p className="text-zinc-200 text-sm font-medium leading-none">{cert.name}</p>
              <p className="text-zinc-600 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
