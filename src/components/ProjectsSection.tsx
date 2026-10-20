import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { PROJECTS_LIST, ProjectItem } from '../data/portfolioData';
import { calculateCardScale } from '../utils/portfolioMath';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start'],
  });

  const { targetScale, topOffsetPx } = calculateCardScale(index, totalCards);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="h-[85vh] sticky top-20 md:top-24 flex items-start justify-center"
    >
      <motion.article
        data-cursor="project"
        style={{
          scale,
          top: `${topOffsetPx}px`,
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top shadow-2xl"
      >
        {/* Top Row: Number, Focus Category + Project Name, Repo Link + Live Project Button */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 sm:mb-6 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-8 min-w-0">
            <span
              className="font-black text-[#D7E2EA] leading-none tabular-nums shrink-0"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 115px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-tight"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.25rem)' }}
              >
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 max-w-md line-clamp-2">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>GitHub Repo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <LiveProjectButton
              label={project.liveUrl ? 'Live Project' : 'Inspect Project'}
              ariaLabel={`Inspect ${project.name}`}
              onClick={() => onSelectProject(project)}
            />
          </div>
        </div>

        {/* Bottom Row: Two-column Image Grid (40% left stacked / 60% right tall) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Left Column (40%) */}
          <div className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-4">
            <div
              className="w-full rounded-[32px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#16181C]"
              style={{ height: 'clamp(120px, 14vw, 200px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[52px] block"
              />
            </div>

            <div
              className="w-full rounded-[32px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#16181C]"
              style={{ height: 'clamp(140px, 18vw, 280px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[52px] block"
              />
            </div>
          </div>

          {/* Right Column (60%) */}
          <div
            className="w-full sm:w-[60%] relative rounded-[32px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#16181C]"
            style={{
              height: 'clamp(272px, calc(32vw + 16px), 496px)',
            }}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} featured showcase`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[52px] block"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 sm:p-7 flex flex-col gap-2">
              <pre className="font-mono text-[11px] sm:text-xs text-[#D7E2EA]/90 whitespace-pre-wrap leading-relaxed">
                {project.terminalPreview}
              </pre>
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-[#D7E2EA]/70">
                {project.deliverables.map((item, idx) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {idx < project.deliverables.length - 1 && (
                      <span aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
        <p className="text-center text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm mb-16 sm:mb-20 md:mb-24">
          Selected Work &amp; Tooling from github.com/kingjethro999
        </p>
      </FadeIn>

      <div className="w-full max-w-6xl mx-auto">
        {PROJECTS_LIST.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS_LIST.length}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};
