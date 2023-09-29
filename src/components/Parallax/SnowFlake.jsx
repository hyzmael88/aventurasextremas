import React from 'react';
import { motion } from 'framer-motion';

const SnowFlake = () => {
    const size = Math.random() * 6 + 5;
    const blur = Math.random() * 5 + 1;
  
    const initialY = -10 - size * 3;
  
    let initialX;
    if (typeof window !== 'undefined') {
      initialX = Math.random() * window.innerWidth;
    }
  
    const randomDuration = Math.random() * 10 + 5;  // Corregido: Definición de randomDuration
    const initialDelay = Math.random() * 5;  // Añadido: Definición de initialDelay
  
    return (
      <motion.div
        initial={{ x: initialX, y: initialY }}
        animate={{ y: '100vh' }}
        exit={{ opacity: 0 }}
        transition={{ duration: randomDuration, repeat: Infinity, delay: initialDelay }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          position: 'absolute',
          top: '0',
          opacity:"50%",
          zIndex:"20",
          backdropFilter: `blur(${blur}px)`,
        }}
      />
    );
  };
  
  export default SnowFlake;
