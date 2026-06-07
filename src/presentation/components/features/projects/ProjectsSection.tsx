'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/src/presentation/components/ui/icons';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Project } from '@/src/domain/entities/Project';

interface Props {
  projects: Project[];
}

export function ProjectsSection({ projects }: Props) {
  return (
    <SectionWrapper id="projects" className="bg-[#0d0d0d]">
      <SectionTitle label="// projetos" title="O que construí" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-violet-700/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-800/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-sm bg-violet-400" />
              </div>
              <div className="flex gap-2">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                    <GitHubIcon size={16} />
                  </a>
                )}
                {project.url && project.url !== '#' && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-white font-semibold text-base mb-2">{project.name}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
