import { useState, useEffect, useCallback } from 'react';

export const useAnimatedCounter = (end, duration = 2000, id = null) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = useCallback(() => {
    if (hasAnimated) return;

    setHasAnimated(true);
    let startTime;
    const endValue = parseInt(end.toString().replace(/\D/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    const elementId = id || `counter-${end}`;
    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated, id, startAnimation]);

  return { count, isVisible };
};

export default useAnimatedCounter;