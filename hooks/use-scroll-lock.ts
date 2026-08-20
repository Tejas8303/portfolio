"use client";

import { useEffect } from "react";

/**
 * Custom hook to lock body scrolling when a modal or dialog is active,
 * preventing background scroll leakage across the application and syncing with Lenis.
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const win = window as unknown as { lenis?: { stop: () => void; start: () => void } };
    if (win.lenis) {
      win.lenis.stop();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      if (win.lenis) {
        win.lenis.start();
      }
    };
  }, [isLocked]);
}

