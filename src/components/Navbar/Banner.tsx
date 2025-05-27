
import React from 'react';
import { motion} from 'framer-motion';

const Banner: React.FC = () => {

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.5 , delay: 0.5}}
    className='bg-blue-400 text-sm text-center font-semibold p-1 hidden lg:block relative'>
        amc amc amc amc amc amc
    </motion.div>
  );
};

export default Banner;