import { motion, useInView, useReducedMotion } from 'motion/react';
import type { ComponentType } from 'react';
import { useEffect, useRef, useState } from 'react';

export type AnimatedPageSectionConfig = {
  id: string;
  Component: ComponentType;
  y?: number;
  scale?: number;
  amount?: number;
  delay?: number;
  hero?: boolean;
};

type ResolvedAnimatedPageSectionConfig = Required<
  Omit<AnimatedPageSectionConfig, 'Component'>
> & {
  Component: ComponentType;
};

type AnimatedPageSectionsProps = {
  sections: AnimatedPageSectionConfig[];
  dataAttribute?: `data-${string}`;
};

type AnimatedPageSectionProps = {
  section: AnimatedPageSectionConfig;
  index: number;
  dataAttribute: `data-${string}`;
  prefersReducedMotion: boolean | null;
};

const resolveSection = (
  section: AnimatedPageSectionConfig,
  index: number,
): ResolvedAnimatedPageSectionConfig => {
  const hero = section.hero ?? index === 0;

  return {
    id: section.id,
    Component: section.Component,
    y: section.y ?? (hero ? 0 : 34),
    scale: section.scale ?? (hero ? 1 : 0.994),
    amount: section.amount ?? (hero ? 0.38 : 0.22),
    delay: section.delay ?? (hero ? 0 : 0.06),
    hero,
  };
};

function AnimatedPageSection({
  section,
  index,
  dataAttribute,
  prefersReducedMotion,
}: AnimatedPageSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [fallbackInView, setFallbackInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const resolvedSection = resolveSection(section, index);
  const SectionComponent = resolvedSection.Component;
  const isInView = useInView(ref, {
    once: true,
    amount: resolvedSection.amount,
    margin: '0px 0px -10% 0px',
  });
  const isVisible = resolvedSection.hero || isInView || fallbackInView;
  const shouldShow = isVisible && hasEntered;
  const delaySeconds = prefersReducedMotion
    ? 0
    : resolvedSection.delay;
  const durationSeconds = prefersReducedMotion
    ? 0.001
    : resolvedSection.hero
      ? 0.72
      : 0.64;
  const hiddenTransform = `translate3d(0, ${resolvedSection.y}px, 0) scale(${resolvedSection.scale})`;
  const dataProps = {
    [dataAttribute]: resolvedSection.id,
  };

  useEffect(() => {
    if (resolvedSection.hero || fallbackInView) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    let checkTimer = 0;

    const revealIfVisible = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const triggerPoint = viewportHeight * (1 - resolvedSection.amount);

      if (rect.top < triggerPoint && rect.bottom > 0) {
        setFallbackInView(true);
      }
    };

    const scheduleCheck = () => {
      if (checkTimer) {
        return;
      }

      checkTimer = window.setTimeout(() => {
        checkTimer = 0;
        revealIfVisible();
      }, 80);
    };

    const initialCheck = window.setTimeout(revealIfVisible, 0);
    const intervalCheck = window.setInterval(revealIfVisible, 250);

    window.addEventListener('scroll', scheduleCheck, { passive: true });
    window.addEventListener('resize', scheduleCheck);

    return () => {
      window.clearTimeout(initialCheck);
      window.clearInterval(intervalCheck);
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);

      if (checkTimer) {
        window.clearTimeout(checkTimer);
      }
    };
  }, [fallbackInView, resolvedSection.amount, resolvedSection.hero]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const enterTimer = window.setTimeout(
      () => setHasEntered(true),
      prefersReducedMotion ? 0 : 16,
    );

    return () => window.clearTimeout(enterTimer);
  }, [isVisible, prefersReducedMotion]);

  useEffect(() => {
    if (!shouldShow) {
      return;
    }

    const releaseTimer = window.setTimeout(
      () => setAnimationComplete(true),
      (delaySeconds + durationSeconds) * 1000 + 80,
    );

    return () => window.clearTimeout(releaseTimer);
  }, [delaySeconds, durationSeconds, shouldShow]);

  return (
    <motion.div
      ref={ref}
      key={resolvedSection.id}
      {...dataProps}
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: prefersReducedMotion
          ? 'none'
          : shouldShow
            ? 'translate3d(0, 0, 0) scale(1)'
            : hiddenTransform,
        transitionDelay: animationComplete ? '0s' : `${delaySeconds}s`,
        transitionDuration: animationComplete ? '0s' : `${durationSeconds}s`,
        transitionProperty: animationComplete ? 'none' : 'opacity, transform',
        transitionTimingFunction: prefersReducedMotion
          ? 'ease-out'
          : 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible && !animationComplete ? 'opacity, transform' : 'auto',
      }}
    >
      <SectionComponent />
    </motion.div>
  );
}

export function AnimatedPageSections({
  sections,
  dataAttribute = 'data-page-section',
}: AnimatedPageSectionsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {sections.map((section, index) => (
        <AnimatedPageSection
          key={section.id}
          section={section}
          index={index}
          dataAttribute={dataAttribute}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </>
  );
}
