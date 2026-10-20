import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { resolveCursorVariant, CursorVariantSpec } from '../utils/portfolioMath';
import { soundManager } from '../utils/soundEffects';

export interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 450, damping: 30, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30, mass: 0.35 });

  const dotX = useSpring(mouseX, { stiffness: 950, damping: 42, mass: 0.15 });
  const dotY = useSpring(mouseY, { stiffness: 950, damping: 42, mass: 0.15 });

  const [variant, setVariant] = useState<CursorVariantSpec>(() =>
    resolveCursorVariant({
      enabled,
      isInteractiveControl: false,
      isProjectCard: false,
    })
  );
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setVariant((prev) =>
      resolveCursorVariant({
        enabled,
        isInteractiveControl: prev.mode === 'control',
        isProjectCard: prev.mode === 'project',
      })
    );
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let lastHoveredElement: Element | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveControl = target.closest(
        'button, a, input, select, textarea, [role="button"], [role="switch"]'
      );
      const projectCard = target.closest('article, [data-cursor="project"]');

      const nextVariant = resolveCursorVariant({
        enabled,
        isInteractiveControl: Boolean(interactiveControl),
        isProjectCard: Boolean(projectCard),
      });

      setVariant((prev) =>
        prev.mode === nextVariant.mode ? prev : nextVariant
      );

      const activeHoverTarget = interactiveControl || projectCard;
      if (activeHoverTarget && activeHoverTarget !== lastHoveredElement) {
        lastHoveredElement = activeHoverTarget;
        soundManager.playHover();
      } else if (!activeHoverTarget) {
        lastHoveredElement = null;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsPressed(true);
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          'button, a, input, select, textarea, [role="button"], [role="switch"], article'
        )
      ) {
        soundManager.playClick();
      }
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enabled, isVisible, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div
      data-testid="custom-cursor"
      data-cursor-mode={variant.mode}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[60] hidden sm:block overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Outer Morphing Follower Shape */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: variant.width,
          height: variant.height,
          borderRadius: variant.borderRadius,
          scale: isPressed ? 0.86 : 1,
          backgroundColor:
            variant.mode === 'project'
              ? 'rgba(215, 226, 234, 0.95)'
              : variant.mode === 'control'
              ? 'rgba(182, 0, 168, 0.16)'
              : 'rgba(215, 226, 234, 0.04)',
          borderColor:
            variant.mode === 'control'
              ? 'rgba(187, 204, 215, 0.9)'
              : 'rgba(215, 226, 234, 0.45)',
        }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 26,
          mass: 0.3,
        }}
        className="fixed top-0 left-0 border flex items-center justify-center backdrop-blur-[2px]"
      >
        {variant.label && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0C0C0C] select-none">
            {variant.label}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.6 : variant.dotScale,
          opacity: variant.dotScale === 0 ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D7E2EA]"
      />
    </div>
  );
};
