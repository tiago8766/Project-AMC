// src/animations/index.ts
import { Variants } from 'framer-motion';
 
export const slideRight = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 }, 
  visible: {
    x: 0, 
    opacity: 1, 
    transition: {
      delay: delay,      
      duration: 0.7,     
      ease: "easeOut",  
    },
  },
});


export const fadeIn = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1.0,
      ease: "easeIn",
    },
  },
});

export const scaleUp = (delay: number): Variants => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});