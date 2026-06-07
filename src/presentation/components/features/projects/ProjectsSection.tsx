'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/src/presentation/components/ui/icons';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Project } from '@/src/domain/entities/Project';

function AndroidIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C14.15 1.23 13.1 1 12 1c-1.1 0-2.15.23-3.09.63L7.43.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.44 3.1 5.17 4.96 5 7h14c-.17-2.04-1.44-3.9-3.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}

function AppleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

interface Props {
  projects: Project[];
}

export function ProjectsSection({ projects }: Props) {
  return (
    <SectionWrapper id="projects" className="bg-[#0d0d0d]">
      <SectionTitle label="// projetos" title="O que construí" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => {
          const hasLinks = project.repoUrl || project.url || project.androidUrl || project.iosUrl;
          return (
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

              <div className="mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-800/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-violet-400" />
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-2">{project.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              {hasLinks && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium hover:text-white hover:border-white/20 transition-colors"
                    >
                      <GitHubIcon size={12} />
                      GitHub
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium hover:text-white hover:border-white/20 transition-colors"
                    >
                      <ExternalLink size={12} />
                      Web
                    </a>
                  )}
                  {project.androidUrl && (
                    <a
                      href={project.androidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#3ddc84]/10 border border-[#3ddc84]/20 text-[#3ddc84] text-xs font-medium hover:bg-[#3ddc84]/20 transition-colors"
                    >
                      <AndroidIcon size={12} />
                      Google Play
                    </a>
                  )}
                  {project.iosUrl && (
                    <a
                      href={project.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100/10 border border-zinc-100/20 text-zinc-300 text-xs font-medium hover:bg-zinc-100/20 transition-colors"
                    >
                      <AppleIcon size={12} />
                      App Store
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
