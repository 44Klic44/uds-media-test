import React from 'react';

const Icon = ({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{ 
        color: color,
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      {...props}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;