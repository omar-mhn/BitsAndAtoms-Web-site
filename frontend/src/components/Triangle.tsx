
import React from 'react';

interface TriangleProps {
  rotation: number;
  delay: number;
  size?: number;
}

const Triangle: React.FC<TriangleProps> = ({ 
  rotation, 
  delay,
  size = 100
}) => {
  return (
    <div
      className="transform transition-transform duration-500 ease-in-out"
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: `rotate(${rotation}deg)`,
        // Agregamos esto para asegurar que la rotación ocurra desde el centro del div.
        transformOrigin: 'center',
        width: size,
        height: size,
        padding: 0,
        margin: 0,
        display: 'flex', 
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        className="block"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trayectoria actualizada para un triángulo centrado */}
        <path d="M0 0 L20 0 L20 20 Z" />
      </svg>
    </div>
  );
};

export default Triangle;

