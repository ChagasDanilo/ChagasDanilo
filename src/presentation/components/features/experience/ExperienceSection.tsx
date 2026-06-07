'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Experience } from '@/src/domain/entities/Experience';

interface Props {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: Props) {
  return (
    <SectionWrapper id="experience">
      <SectionTitle label="// experiência" title="Onde trabalhei" />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5" />
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="pl-12 relative"
            >
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-violet-950 border border-violet-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <p className="text-violet-400 text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  {exp.period}
                  {exp.current && <span className="ml-2 text-violet-400">● atual</span>}
                </span>
              </div>

              <ul className="flex flex-col gap-2 mb-4">
                {exp.description.map((line) => (
                  <li key={line} className="text-zinc-400 text-sm flex gap-2">
                    <span className="text-violet-500 mt-1 shrink-0">▸</span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
