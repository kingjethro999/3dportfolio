import React from 'react';
import { motion } from 'framer-motion';

type ElementTag = keyof React.JSX.IntrinsicElements;

// Cache motion.create(tag) instances so React preserves component identity across renders
const motionComponentCache = new Map<ElementTag, React.ComponentType<any>>();

function getMotionComponent(tag: ElementTag) {
  let Component = motionComponentCache.get(tag);
  if (!Component) {
    Component = motion.create(tag as any);
    motionComponentCache.set(tag, Component);
  }
  return Component;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementTag;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
}) => {
  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};
