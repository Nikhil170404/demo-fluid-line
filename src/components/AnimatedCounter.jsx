import React from 'react';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  id, 
  className = "text-4xl font-bold text-white mb-2",
  duration = 2000 
}) => {
  const { count } = useAnimatedCounter(end, duration, id);
  
  return (
    <span id={id || `counter-${end}-${suffix}`} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;