import React, { useEffect, useState } from 'react';
import { calculateScrollPercentage } from '../utils/portfolioMath';

export const ScrollProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight || 0;
      const clientHeight =
        window.innerHeight || document.documentElement.clientHeight || 0;

      const percent = calculateScrollPercentage(
        scrollTop,
        scrollHeight,
        clientHeight
      );
      setScrollPercent(percent);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollPercent)}
      className="fixed top-0 left-0 right-0 z-50 h-[3px] w-full bg-white/[0.04] pointer-events-none"
    >
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${scrollPercent}%`,
          background:
            'linear-gradient(90deg, #646973 0%, #BBCCD7 40%, #B600A8 75%, #BE4C00 100%)',
          boxShadow: '0 0 8px rgba(182, 0, 168, 0.35)',
        }}
      />
    </div>
  );
};
