import { useEffect, useRef } from "react";

export default function CosmicCursor() {
  const cursorRef = useRef(null);
  const flareRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const flare = flareRef.current;
    let clickTimer = 0;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    document.body.classList.add("cosmic-cursor-enabled");

    const setCursorPosition = (x, y) => {
      cursorX = x;
      cursorY = y;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
    };

    const handlePointerMove = (event) => {
      setCursorPosition(event.clientX, event.clientY);
    };

    const handlePointerDown = (event) => {
      setCursorPosition(event.clientX, event.clientY);
      flare?.style.setProperty("--flare-x", `${cursorX}px`);
      flare?.style.setProperty("--flare-y", `${cursorY}px`);
      flare?.classList.remove("is-active");
      void flare?.offsetWidth;
      flare?.classList.add("is-active");
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => flare?.classList.remove("is-active"), 620);
    };

    setCursorPosition(cursorX, cursorY);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      document.body.classList.remove("cosmic-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.clearTimeout(clickTimer);
    };
  }, []);

  return (
    <>
      <div className="cosmic-cursor" ref={cursorRef} aria-hidden="true">
        <span />
      </div>
      <div className="cosmic-cursor-flare" ref={flareRef} aria-hidden="true" />
    </>
  );
}
