import { useEffect, useRef } from 'react';

/** Adds `.visible` class once the element scrolls into view. */
export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('reveal');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    io.observe(el);

    return () => io.disconnect();
  }, [threshold]);

  return ref;
}