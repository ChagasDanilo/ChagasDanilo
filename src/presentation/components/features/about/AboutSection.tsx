'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Building2 } from 'lucide-react';
import { SectionWrapper } from '@/src/presentation/components/ui/SectionWrapper';
import { SectionTitle } from '@/src/presentation/components/ui/SectionTitle';
import type { Profile } from '@/src/domain/entities/Profile';

interface Props {
  profile: Profile;
}

export function AboutSection({ profile }: Props) {
  return (
    <SectionWrapper id="about">
      <SectionTitle label="// sobre mim" title="Quem sou eu" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-56 h-56 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-violet-600 rotate-3 opacity-20" />
            <div className="absolute inset-0 rounded-2xl bg-violet-500 -rotate-2 opacity-10" />
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={224}
              height={224}
              className="relative rounded-2xl object-cover w-full h-full border border-white/10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-zinc-300 text-lg leading-relaxed mb-6 whitespace-pre-line">{profile.bio}</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <MapPin size={16} className="text-violet-400" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <Building2 size={16} className="text-violet-400" />
              {profile.company}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
