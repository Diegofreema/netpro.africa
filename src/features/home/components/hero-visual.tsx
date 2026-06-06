import { useEffect, useRef } from 'react';
import { assetUrl } from '@/shared/config/site';

const heroBackgroundSrc = assetUrl('/assets/netpro/background.jpg');

export function HeroVisual() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!image || reduceMotion) {
      return;
    }

    const parallaxImage = image;
    let frameId = 0;

    function updateParallax() {
      frameId = 0;
      const offset = Math.min(window.scrollY * 0.36, 220);

      parallaxImage.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
    }

    function requestUpdate() {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateParallax);
    }

    parallaxImage.style.willChange = 'transform';
    updateParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      parallaxImage.style.removeProperty('transform');
      parallaxImage.style.removeProperty('will-change');
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        ref={imageRef}
        src={heroBackgroundSrc}
        alt=""
        className="np-hero-image absolute inset-x-0 -top-48 h-[calc(100%+24rem)] w-full scale-[1.12] object-cover object-[50%_42%]"
        fetchPriority="high"
      />
      <div className="np-hero-overlay absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,9,.52),rgba(8,8,9,.5)_42%,rgba(8,8,9,.88)),radial-gradient(circle_at_50%_40%,rgba(255,255,255,.05),transparent_34%)]" />
      <div className="np-hero-grid absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-size-[56px_56px]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-background to-transparent" />
    </div>
  );
}
