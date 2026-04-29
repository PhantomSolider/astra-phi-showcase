import { useEffect, useRef } from "react";

export default function CosmicCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const flareRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const flare = flareRef.current;
    let frame = 0;
    let clickTimer = 0;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let trailX = cursorX;
    let trailY = cursorY;

    document.body.classList.add("cosmic-cursor-enabled");

    const draw = () => {
      trailX = cursorX;
      trailY = cursorY;
      cursor?.style.setProperty("--cursor-x", `${cursorX}px`);
      cursor?.style.setProperty("--cursor-y", `${cursorY}px`);
      trail?.style.setProperty("--trail-x", `${trailX}px`);
      trail?.style.setProperty("--trail-y", `${trailY}px`);
      frame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      trailX = cursorX;
      trailY = cursorY;
      cursor?.style.setProperty("--cursor-x", `${cursorX}px`);
      cursor?.style.setProperty("--cursor-y", `${cursorY}px`);
      trail?.style.setProperty("--trail-x", `${trailX}px`);
      trail?.style.setProperty("--trail-y", `${trailY}px`);
    };

    const handlePointerDown = (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      trailX = cursorX;
      trailY = cursorY;
      cursor?.style.setProperty("--cursor-x", `${cursorX}px`);
      cursor?.style.setProperty("--cursor-y", `${cursorY}px`);
      trail?.style.setProperty("--trail-x", `${trailX}px`);
      trail?.style.setProperty("--trail-y", `${trailY}px`);
      flare?.style.setProperty("--flare-x", `${cursorX}px`);
      flare?.style.setProperty("--flare-y", `${cursorY}px`);
      flare?.classList.remove("is-active");
      void flare?.offsetWidth;
      flare?.classList.add("is-active");
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => flare?.classList.remove("is-active"), 620);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    frame = window.requestAnimationFrame(draw);

    return () => {
      document.body.classList.remove("cosmic-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(clickTimer);
    };
  }, []);

  return (
    <>
      <div className="cosmic-cursor" ref={cursorRef} aria-hidden="true">
        <span />
      </div>
      <div className="cosmic-cursor-trail" ref={trailRef} aria-hidden="true" />
      <div className="cosmic-cursor-flare" ref={flareRef} aria-hidden="true" />
    </>
  );
}
