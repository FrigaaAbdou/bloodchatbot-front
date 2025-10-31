import { useEffect, useRef, useState } from "react";

const VARIANTS = {
  fadeIn: "motion-safe:animate-fade-in",
  fadeDown: "motion-safe:animate-fade-down",
  slideUp: "motion-safe:animate-slide-up",
};

export function AnimatedSection({
  as: Component = "div",
  variant = "fadeIn",
  delay = 0,
  className = "",
  children,
  once = true,
  threshold = 0.2,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const animationClass = isVisible ? VARIANTS[variant] ?? VARIANTS.fadeIn : "";
  const initialClass = isVisible ? "" : "opacity-0 translate-y-6";

  return (
    <Component
      ref={ref}
      className={`${initialClass} ${animationClass} transition duration-700 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
