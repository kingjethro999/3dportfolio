import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { calculateCharRange } from '../utils/portfolioMath';

interface AnimatedCharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char === ' ' ? '\u00A0' : char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let globalCharCursor = 0;

  return (
    <p
      ref={containerRef}
      aria-label={text}
      className={className}
      style={style}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const isLastWord = wordIdx === words.length - 1;

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, cIdx) => {
                const charIndex = globalCharCursor++;
                const range = calculateCharRange(charIndex, totalChars);
                return (
                  <AnimatedChar
                    key={`${wordIdx}-${cIdx}`}
                    char={char}
                    progress={scrollYProgress}
                    range={range}
                  />
                );
              })}
            </span>
            {!isLastWord && (() => {
              const spaceIndex = globalCharCursor++;
              const range = calculateCharRange(spaceIndex, totalChars);
              return (
                <AnimatedChar
                  key={`space-${wordIdx}`}
                  char=" "
                  progress={scrollYProgress}
                  range={range}
                />
              );
            })()}
          </React.Fragment>
        );
      })}
    </p>
  );
};
