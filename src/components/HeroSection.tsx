import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { HERO_PORTRAIT_URL, PROFILE_INFO } from '../data/portfolioData';

export interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId === 'contact') {
      e.preventDefault();
      onOpenContact();
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Top Zone: Navbar + Massive Heading */}
      <div className="w-full relative z-20">
        <FadeIn
          as="nav"
          delay={0}
          y={-20}
          className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
        >
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </FadeIn>

        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11.5vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.2vw] mt-6 sm:mt-4 md:-mt-3 select-none">
              Hi, i&rsquo;m Jethro
            </h1>
          </FadeIn>
          <FadeIn delay={0.25} y={20}>
            <p className="text-center text-[#D7E2EA]/70 font-light uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mt-1 md:mt-2 px-4">
              {PROFILE_INFO.roles}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Centered 3D Character Portrait with Magnetic Hover */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={HERO_PORTRAIT_URL}
              alt="King Jethro Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block select-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-2">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[250px] md:max-w-[300px]"
              style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
            >
              {PROFILE_INFO.heroTagline}
            </p>
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors whitespace-nowrap"
            >
              <span>github.com/{PROFILE_INFO.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
