"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const autoRevealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-auto-reveal], [data-footer-reveal]")
    );
    autoRevealItems.forEach((item, index) => {
      item.dataset.reveal = "true";
      item.classList.add("reveal-up");
      if (!item.style.getPropertyValue("--reveal-delay")) {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
      }
    });

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    revealItems.forEach((item, index) => {
      if (
        !item.classList.contains("reveal-up") &&
        !item.classList.contains("reveal-scale") &&
        !item.classList.contains("reveal-left") &&
        !item.classList.contains("reveal-right")
      ) {
        item.classList.add(index % 3 === 0 ? "reveal-scale" : "reveal-up");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 24% 0px", threshold: 0.01 }
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    const updateParallax = () => {
      frame = 0;
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const offset = rect.top * -0.055;
        item.style.setProperty("--parallax-y", `${offset}px`);
      });
    };

    const requestParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
