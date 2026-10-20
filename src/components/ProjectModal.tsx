import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { MediaPreview } from './MediaPreview';

export interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-[36px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-4xl sm:text-6xl font-black text-[#D7E2EA] leading-none tabular-nums">
              {project.number}
            </span>
            <div>
              <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </p>
              <h2
                id="project-modal-title"
                className="text-2xl sm:text-3xl font-medium uppercase tracking-wide text-[#D7E2EA]"
              >
                {project.name}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed mb-4">
          {project.summary}
        </p>

        <div className="rounded-2xl border border-[#D7E2EA]/20 bg-[#141619] p-4 mb-5">
          <pre className="font-mono text-xs text-[#D7E2EA]/90 whitespace-pre-wrap">
            {project.terminalPreview}
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-6">
          {project.deliverables.map((item, idx) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {idx < project.deliverables.length - 1 && (
                <span aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-3xl overflow-hidden h-44 sm:h-52 bg-[#16181C] border border-[#D7E2EA]/15">
            <MediaPreview
              src={project.col1Image1}
              alt={`${project.name} gallery view 1`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 sm:h-52 bg-[#16181C] border border-[#D7E2EA]/15">
            <MediaPreview
              src={project.col1Image2}
              alt={`${project.name} gallery view 2`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 sm:h-52 bg-[#16181C] border border-[#D7E2EA]/15">
            <MediaPreview
              src={project.col2Image}
              poster={project.posterImage}
              alt={`${project.name} live video demo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors inline-flex items-center gap-2"
            >
              View on GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Open Live Deployment <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={() => onInquire(project)}
            className="rounded-full border border-[#D7E2EA]/40 px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
          >
            Collaborate with Jethro
          </button>
        </div>
      </div>
    </div>
  );
};
