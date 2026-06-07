'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Skill } from '@/src/domain/entities/Skill';

const LEVEL_LABEL: Record<Skill['level'], string> = {
  expert: 'Expert',
  advanced: 'Avançado',
  intermediate: 'Intermediário',
};

const LEVEL_WIDTH: Record<Skill['level'], string> = {
  expert: 'w-[95%]',
  advanced: 'w-[78%]',
  intermediate: 'w-[55%]',
};

const CATEGORY_LABEL: Record<Skill['category'], string> = {
  mobile: 'Mobile',
  frontend: 'Front-end',
  backend: 'Back-end',
  tools: 'Ferramentas',
};

interface Props {
  skills: Skill[];
}

export function SkillsSection({ skills }: Props) {
  const categories: Skill['category'][] = ['mobile', 'frontend', 'backend', 'tools'];

  return (
    <SectionWrapper id="skills" className="bg-[#0d0d0d]">
      <SectionTitle label="// habilidades" title="Stack & Tecnologias" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map((cat) => {
          const categorySkills = skills.filter((s) => s.category === cat);
          if (categorySkills.length === 0) return null;
          return (
            <div key={cat}>
              <h3 className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-5">
                {CATEGORY_LABEL[cat]}
              </h3>
              <div className="flex flex-col gap-4">
                {categorySkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-200 font-medium">{skill.name}</span>
                      <span className="text-zinc-500 text-xs">{LEVEL_LABEL[skill.level]}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full ${LEVEL_WIDTH[skill.level]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: undefined }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.3, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
