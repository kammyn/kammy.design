"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
};

const MAX_SPARKLES = 20;
const MIN_MOVE_PX = 14;
const SPARKLE_LIFETIME_MS = 750;

const STAR_PATH =
  "M51.8185 29.5511L49.7728 29.0369L41.2738 26.8139C37.0244 25.7015 33.6603 24.9937 29.2002 25.9908L26.5167 27.7778L22.8075 31.0956L19.4258 35.1368L13.9127 40.3471L13.6338 40.7968C13.5577 40.9199 13.0565 40.744 12.9941 40.5934L14.4509 37.9814L15.584 36.1612L17.3996 32.6753L18.5678 30.0985C19.1119 28.9 19.8178 27.2929 19.2718 25.7621C18.6497 24.3173 16.366 24.112 14.8624 24.3016L7.73445 25.201C6.43368 25.3652 5.18361 25.7855 3.85943 25.8618C2.53525 25.938 1.40219 26.4405 0 25.9341L4.00569 23.9673C5.86617 23.0543 7.90217 22.7434 9.83871 21.9848L11.5432 21.3162L13.2008 20.5752C14.4373 20.0219 16.2119 18.5888 16.5844 17.1655C17.4698 13.7871 15.5879 9.06557 14.1603 5.70867L11.3677 0.660613L11.3443 0.158154C11.3072 -0.666897 13.6747 1.9412 14.8214 3.2472L17.579 6.38709L19.0904 7.98831L21.181 10.3579C22.8094 12.2035 25.0716 12.8428 27.4645 12.7294C28.9369 12.659 30.3957 12.6062 31.7491 11.8516L36.2423 9.34906L39.9087 7.11829L48.6943 1.30775L49.9132 0.384945C49.999 0.320427 50.2896 0.142513 50.3598 0.216807L50.7342 0.619556L48.8991 2.516L47.2804 4.20911L45.5798 6.01758L43.9358 7.70678L42.7501 9.06166L40.4645 11.4762C39.739 12.2426 39.2398 13.2456 38.6801 14.1703C38.0755 15.1713 37.391 16.3757 37.7888 17.5898C38.3017 19.1617 39.7371 20.1001 40.9442 21.0659C41.9213 21.848 42.8184 22.4208 43.9261 22.9859L51.0384 26.6008L56.3703 29.0916L59.8104 30.9099C58.8216 31.2579 58.0006 31.1562 57.0782 30.9255L55.3308 30.4895L51.8127 29.5491L51.8185 29.5511Z";

function SparkleShape({
  size,
  rotation,
}: {
  size: number;
  rotation: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.68}
      viewBox="0 0 59.8104 40.8383"
      fill="none"
      aria-hidden
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  );
}

export function CursorSparkleTrail() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef(0);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    setMounted(true);

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setEnabled(finePointer && !reducedMotion);

    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function addSparkle(clientX: number, clientY: number) {
      const lastPoint = lastPointRef.current;

      if (lastPoint) {
        const dx = clientX - lastPoint.x;
        const dy = clientY - lastPoint.y;
        if (Math.hypot(dx, dy) < MIN_MOVE_PX) return;
      }

      lastPointRef.current = { x: clientX, y: clientY };

      const id = ++idRef.current;
      const sparkle: Sparkle = {
        id,
        x: clientX + (Math.random() - 0.5) * 10,
        y: clientY + (Math.random() - 0.5) * 10,
        size: (7 + Math.random() * 9) * 1.1,
        rotation: Math.random() * 360,
      };

      setSparkles((current) => [...current, sparkle].slice(-MAX_SPARKLES));

      const timeoutId = window.setTimeout(() => {
        setSparkles((current) => current.filter((item) => item.id !== id));
      }, SPARKLE_LIFETIME_MS);

      timeoutsRef.current.push(timeoutId);
    }

    function handlePointerMove(event: PointerEvent) {
      addSparkle(event.clientX, event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [enabled]);

  if (!mounted || !enabled || sparkles.length === 0) {
    return null;
  }

  return createPortal(
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[45] overflow-hidden text-accent"
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="cursor-sparkle absolute"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        >
          <SparkleShape size={sparkle.size} rotation={sparkle.rotation} />
        </div>
      ))}
    </div>,
    document.body,
  );
}
