import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { ProgramsDataItem } from '../../interfaces/ProgramsData'; 

interface ProgramsProps {
  dataList: ProgramsDataItem[]; 
}


const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
};


const Programs: React.FC<ProgramsProps> = ({ dataList }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {dataList.map((programItem, index) => {
          
          const imageOnRight = index % 2 !== 0; 

          const flexDirectionClasses = imageOnRight
            ? 'md:flex-row-reverse'
            : 'md:flex-row';
          const textPaddingClasses = imageOnRight
            ? 'md:pr-16' 
            : 'md:pl-16'; 

          
          const imageVariants = imageOnRight ? slideInRight : slideInLeft;
          const textBlockVariants = imageOnRight ? slideInLeft : slideInRight;

          const handleButtonClick = (url: string) => {
            if (url) {
              window.open(url, "_blank"); 
            } else {
              console.warn("Button clicked, but no URL provided for:", programItem.title);
            }
          };

          return (
          
            <motion.div 
              key={programItem.id} 
              className={`flex flex-col ${flexDirectionClasses} items-center justify-between ${index < dataList.length - 1 ? 'mb-20 md:mb-32' : ''}`}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.4 }} 
            >
            
              <motion.div 
                className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0"
                variants={imageVariants} 
              >
                <div className="relative w-full max-w-md bg-[#B0DB9C] rounded-2xl p-4 shadow-xl">
                  <img
                    src={programItem.imageSrc} 
                    alt={programItem.imageAlt}
                    className="w-full h-auto rounded-xl object-cover"
                  />
                
                
                  <div className="absolute top-4 left-4 text-blue-500 text-5xl opacity-75">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2zm2 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

            
              <motion.div 
                className={`md:w-1/2 w-full ${textPaddingClasses} text-center md:text-left`}
                variants={textBlockVariants}
              >
                <motion.p 
                  className="text-orange-500 uppercase text-sm font-semibold mb-2"
                  variants={fadeIn}
                >
                  {programItem.subtitle} 
                </motion.p>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight"
                  variants={fadeIn}
                >
                  {programItem.title} 
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 mb-6"
                  variants={fadeIn}
                >
                  {programItem.description} 
                </motion.p>
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
                  onClick={() => handleButtonClick(programItem.buttonLink)} 
                  variants={fadeIn} 
                >
                  {programItem.buttonText} 
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;