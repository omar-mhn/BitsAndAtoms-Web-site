
import React, { useState, useEffect } from 'react';
import Triangle from './Triangle';

const TILE_SIZE = typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150;

const Logo: React.FC = () => {
  const [layoutIndex, setLayoutIndex] = useState<number>(0);

  // Define una serie de diseños, cada uno con una cuadrícula y un texto.
  const layouts: { grid: (number | null)[]; text: string }[] = [
    {
      grid: [
        0,  0, 0,
        0,  0, 0,
        0,  0, 0,
      ],
      text: "bits & atoms"
    },
    {
      grid: [
        90,  180, 0,
        270,  0, 0,
        180,  90, 0,
      ],
      text: "fablab"
    },
    {
      grid: [
        270,  0, 0,
        270,  180, 0,
        0,  90, 90,
      ],
      text: "let creativity fly"
    },
    {
      grid: [
        270,  90, 180,
        90,  180, 270,
        0,  270, 90,
      ],
      text: "library"
    },
    {
      grid: [
        0,  0, 0,
        0,  180, 0,
        0,  0, 0,
      ],
      text: "it's all about balance"
    },
    {
      grid: [
        180,  90, 0,
        0,  0, 270,
        0,  0, 180,
      ],
      text: "protect your beliefs"
    },
    {
      grid: [
        270,  270, 90,
        270,  180, 0,
        270,  270, 90,
      ],
      text: "studio"
    },
    {
      grid: [
        180,  180, 0,
        180,  180, 180,
        180,  180, 180,
      ],
      text: "what if they are wrong"
    },
  ];

  useEffect(() => {
    // Determina la duración en función de si es el primer diseño o no.
    const duration = layoutIndex === 0 ? 3000 : 1000;
    
    // Usa setTimeout para tener control sobre la duración de cada diseño.
    const timer = setTimeout(() => {
      setLayoutIndex((prevIndex) => (prevIndex + 1) % layouts.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [layoutIndex, layouts.length]);
  
  const currentLayout = layouts[layoutIndex];

  return (
    <div className="flex flex-col items-center gap-12">
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(3, ${TILE_SIZE}px)`, // 3 columnas de 100px
          width: `${TILE_SIZE * 3}px`, // Ancho total forzado a 300px
        }}
      >
        {currentLayout.grid.map((rotation, index) => {
          // Si la rotación es nula, renderiza un marcador de posición para mantener la estructura de la cuadrícula.
          if (rotation === null) {
            return <div key={index} style={{ width: TILE_SIZE, height: TILE_SIZE }} />;
          }
          
          const row = Math.floor(index / 3);
          const col = index % 3;
          // El retraso crea un efecto de onda que se mueve de arriba a la izquierda a abajo a la derecha.
          const delay = (row + col) * 50; 
          
          return (
            <Triangle
              key={index}
              rotation={rotation}
              delay={delay}
              size={TILE_SIZE}
            />
          );
        })}
      </div>
      <p 
        key={layoutIndex} 
        className=" font-mono tracking-wider animate-slideInLeft text-center"
        fill="currentColor"

        style={{fontWeight: 1000, fontSize: 25}}
      >
        {currentLayout.text}
      </p>
    </div>
  );
};

export default Logo;

