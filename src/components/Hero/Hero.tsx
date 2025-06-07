import React from 'react';
import { motion, Variants } from 'framer-motion';
import image from "../../images/compu.png";
import { slideRight } from '../../animations/index';
import { FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
    const videoUrl = "https://www.youtube.com/watch?v=atIbZdCPgMo"; 

  const handlePlayVideo = () => {
    window.open(videoUrl, "_blank"); 
   
  }

  return (
    <div
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative items-center" 
    >
      <div className="flex flex-col justify-center md:pr-16 xl:pr-40 md:py-0"> 
        <motion.div
          className="text-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.p
            variants={slideRight(0)}
            className="text-orange-600 uppercase font-semibold"
          >
            Un espacio autodidacta
          </motion.p>

          <motion.h1
            variants={slideRight(0)}
            className="text-5xl font-semibold lg:text-6xl !leading-tight"
          >
           Descubre la Arquitectura de las computadoras
          </motion.h1>

        </motion.div>

        <div className="flex gap-8 justify-center md:justify-start !mt-8 items-center">
          <motion.button
            variants={slideRight(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
            onClick={() => console.log(" OLA")}
          >
            Inicia
          </motion.button>
           <motion.button
            variants={slideRight(0.7)} 
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition-colors"
            onClick={handlePlayVideo}
            
          >
            <FaPlay className="text-lg" /> 
             Video
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 md:p-0">
        <motion.img
          src={image}
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;