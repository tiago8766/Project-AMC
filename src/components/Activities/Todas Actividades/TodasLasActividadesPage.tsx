import React from 'react';
import { Actividades, Activity } from '../../../interfaces/Actividades'; 
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';


const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
      delayChildren: 0.1
    }
  }
};

const listItemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const TodasLasActividadesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleActivityClick = (activityId: string) => {
    navigate(`/actividades/detalles/${activityId}`);
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
          Todas Nuestros laboratorios
        </h1>
        

       
        <motion.div
          className="max-w-3xl mx-auto space-y-4" 
          initial="hidden"
          animate="visible"
          variants={listContainerVariants}
        >
          {Actividades.map((activity: Activity) => (
            <motion.div
              key={activity.id}
              className={`flex items-center p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer 
                          ${activity.color} hover:bg-opacity-80`} 
              variants={listItemVariants}
              onClick={() => handleActivityClick(activity.id)}
            >
              <div className="flex-shrink-0 text-3xl mr-4">
                {activity.icon} 
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {activity.name}
                </h2>
                <p className="text-gray-700 text-sm">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TodasLasActividadesPage;