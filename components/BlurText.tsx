"use client";

import React, { useEffect, useRef, useState } from "react";

export type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
};

export default function BlurText({
  text,
  className = "",
  delay = 70,
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Support prefers-reduced-motion
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      onAnimationComplete?.();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, onAnimationComplete]);

  const items = animateBy === "words" ? text.split(" ") : text.split("");
  const totalDuration = items.length * delay + 700;

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      onAnimationComplete?.();
    }, totalDuration);
    return () => clearTimeout(timer);
  }, [inView, totalDuration, onAnimationComplete]);

  const yOffset = direction === "top" ? -14 : 14;

  return (
    <span ref={ref} className={`blur-text ${className}`}>
      <span className="sr-only">{text}</span>
      {items.map((item, idx) => {
        const itemDelay = idx * delay;
        return (
          <span
            key={idx}
            aria-hidden="true"
            className="blur-text__word"
            style={{
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0px)" : "blur(10px)",
              transform: inView ? "translateY(0)" : `translateY(${yOffset}px)`,
              transition: `opacity 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms, filter 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms, transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms`,
            }}
          >
            {item}
            {animateBy === "words" && idx < items.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </span>
  );
}
