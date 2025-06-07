import React from 'react';
import { Actividades, Activity } from '../../interfaces/Actividades'; 
import { useNavigate } from 'react-router-dom'; 
import { motion, Variants } from 'framer-motion'; 


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    }
  }
};


const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};


const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.5 } }
};

const OurActivities: React.FC = () => {
  const navigate = useNavigate(); 

  const handleActivityClick = (activityId: string) => {
    navigate(`/actividades/${activityId}`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        
        <motion.p
          className="text-orange-500 uppercase text-sm font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Laboratorios
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ACTIVIDADES DE AMC
        </motion.h2>

       
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={containerVariants} 
        >
          {Actividades.map((actividad: Activity) => (
            <motion.button 
              key={actividad.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-200 
                          ${actividad.color} text-gray-800 text-lg font-medium cursor-pointer`}
              onClick={() => handleActivityClick(actividad.id)}
              variants={itemVariants} 
            >
              <span className="text-4xl mb-2">{actividad.icon}</span>
              <span>{actividad.name}</span>
            </motion.button>
          ))}
        </motion.div>

      
        <motion.div className="mt-8"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            variants={buttonVariants}
        >
          <button
            onClick={() => navigate('/todas-las-actividades')} 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Ver todas las actividades
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurActivities;