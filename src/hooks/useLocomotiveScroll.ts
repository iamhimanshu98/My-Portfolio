import { useEffect, useRef, RefObject } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = (
  containerRef: RefObject<HTMLElement>,
  options = {}
): LocomotiveScroll | null => {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
      smartphone: {
        smooth: true,
      },
      ...options,
    });

    // Update scroll on page content change
    const resizeObserver = new ResizeObserver(() => {
      locomotiveScrollRef.current?.update();
    });

    resizeObserver.observe(containerRef.current);

    // Clean up
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      locomotiveScrollRef.current?.destroy();
    };
  }, [containerRef, options]);

  return locomotiveScrollRef.current;
};