import { useEffect, useRef, useState } from "react";

// Fires once a ref'd element scrolls into view, used to trigger the
// fade-up / slide-in-from-side / drop-down reveal animations defined
// in index.css (.reveal-up, .reveal-left, .reveal-right, .reveal-down).
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}