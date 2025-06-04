
import React from 'react';
import { motion} from 'framer-motion';

const Banner: React.FC = () => {

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.5 , delay: 0.5}}
    className='bg-[#B0DB9C]  text-1xl text-center font-black p-1 hidden lg:block relative'>
        Arquitectura de maquinas de computadoras
    </motion.div>
  );
};

export default Banner;