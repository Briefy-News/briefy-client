const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

export const smoothScroll = (scrollRef: React.RefObject<HTMLUListElement>, targetScrollLeft: number, duration: number) => {
  if (!scrollRef.current) return;
  const start = scrollRef.current.scrollLeft;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    if (!scrollRef.current) return;
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const ease = easeInOutQuad(elapsedTime / duration);
      const newScrollLeft = start + (targetScrollLeft - start) * ease;

      scrollRef.current.scrollLeft = newScrollLeft;
      requestAnimationFrame(animateScroll);
    } else {
      scrollRef.current.scrollLeft = targetScrollLeft;
    }
  };

  requestAnimationFrame(animateScroll);
};
