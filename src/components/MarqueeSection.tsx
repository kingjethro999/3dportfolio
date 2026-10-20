import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_GIFS } from '../data/portfolioData';
import { calculateMarqueeOffset } from '../utils/portfolioMath';
import { MediaPreview } from './MediaPreview';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [transforms, setTransforms] = useState({
    row1TranslateX: -200,
    row2TranslateX: 200,
  });

  const row1Images = MARQUEE_GIFS.slice(0, 11);
  const row2Images = MARQUEE_GIFS.slice(11, 21);

  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  useEffect(() => {
    const updateScrollOffset = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const { row1TranslateX, row2TranslateX } = calculateMarqueeOffset(
        window.scrollY,
        sectionTop,
        window.innerHeight
      );
      setTransforms({ row1TranslateX, row2TranslateX });
    };

    updateScrollOffset();
    window.addEventListener('scroll', updateScrollOffset, { passive: true });
    window.addEventListener('resize', updateScrollOffset, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollOffset);
      window.removeEventListener('resize', updateScrollOffset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Motion Showreel Marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: first 11 items tripled, moves RIGHT on scroll */}
        <div
          className="flex gap-3 justify-center"
          style={{
            transform: `translateX(${transforms.row1TranslateX}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((url, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#16181C] border border-[#D7E2EA]/15"
            >
              <MediaPreview
                src={url}
                alt={`King Jethro Tooling Showcase Row 1 Item ${(idx % 11) + 1}`}
                className="w-full h-full object-cover rounded-2xl block"
              />
            </div>
          ))}
        </div>

        {/* Row 2: remaining 10 items tripled, moves LEFT on scroll */}
        <div
          className="flex gap-3 justify-center"
          style={{
            transform: `translateX(${transforms.row2TranslateX}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((url, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#16181C] border border-[#D7E2EA]/15"
            >
              <MediaPreview
                src={url}
                alt={`King Jethro Tooling Showcase Row 2 Item ${(idx % 10) + 1}`}
                className="w-full h-full object-cover rounded-2xl block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
