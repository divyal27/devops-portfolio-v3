'use client';

import React, { useEffect, useState } from 'react';

interface CountUpProps {
  from: number;
  to: number;
  duration: number;
}

export default function CountUp({ from, to, duration }: CountUpProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const current = Math.floor(from + (to - from) * progress);
      setCount(current);

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return <>{count}</>;
}
