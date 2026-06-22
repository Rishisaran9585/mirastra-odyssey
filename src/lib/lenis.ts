import Lenis from "lenis";

export function initLenis() {
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.0,
    smoothWheel: true,
    syncTouch: false, // avoid jank on mobile — native touch scroll feels better at 60fps
  });
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}
