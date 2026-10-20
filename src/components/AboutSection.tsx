import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import {
  ABOUT_CORNER_IMAGES,
  ABOUT_PARAGRAPH_TEXT,
  BEYOND_TERMINAL_TEXT,
  SKILLS_LIST,
  PROFILE_INFO,
} from '../data/portfolioData';

export interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <img
          src={ABOUT_CORNER_IMAGES.topLeftMoon}
          alt="3D Moon sculpture"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none z-0"
      >
        <img
          src={ABOUT_CORNER_IMAGES.bottomLeftObject}
          alt="3D geometric object"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <img
          src={ABOUT_CORNER_IMAGES.topRightLego}
          alt="3D Lego character"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none z-0"
      >
        <img
          src={ABOUT_CORNER_IMAGES.bottomRightGroup}
          alt="3D abstract cluster"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block"
        />
      </FadeIn>

      {/* Main Content Stack */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16 md:gap-20 max-w-3xl">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_PARAGRAPH_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.15} y={20}>
            <p className="text-[#D7E2EA]/75 font-light text-center text-sm sm:text-base max-w-[580px] leading-relaxed">
              {BEYOND_TERMINAL_TEXT}
            </p>
          </FadeIn>

          {/* Clean unboxed Knowledge & Skills list */}
          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 max-w-2xl text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/60 text-center">
              {SKILLS_LIST.map((skill, idx) => (
                <React.Fragment key={skill}>
                  <span className="text-[#D7E2EA]/85 font-normal">{skill}</span>
                  {idx < SKILLS_LIST.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} y={20} className="flex flex-col items-center gap-6">
          <ContactButton onClick={onOpenContact} />

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Portfolio
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PROFILE_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              X (@IamKingJethro)
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
