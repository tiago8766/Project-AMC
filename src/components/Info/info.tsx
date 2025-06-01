import React from "react";
import { motion } from "framer-motion";
import { FaFan, FaCableCar, FaWrench, FaMemory } from "react-icons/fa6"; 

const tips = [
  {
    icon: <FaFan className="text-white text-5xl mb-4 drop-shadow-md" />, 
    title: "Mantén buena ventilación",
    description: "Asegúrate de que el equipo tenga espacio para disipar el calor y no se sobrecaliente. Evita obstruir las rejillas de ventilación."
  },
  {
    icon: <FaCableCar className="text-white text-5xl mb-4 drop-shadow-md" />,
    title: "Asegura bien los cables",
    description: "Si abres el gabinete, verifica que todos los cables internos estén correctamente conectados para evitar fallos y cortocircuitos."
  },
  {
    icon: <FaWrench className="text-white text-5xl mb-4 drop-shadow-md" />, 
    title: "Hazle mantenimiento preventivo",
    description: "No esperes a que falle. Realiza limpiezas periódicas del polvo y revisiones de componentes para alargar su vida útil."
  },
  {
    icon: <FaMemory className="text-white text-5xl mb-4 drop-shadow-md" />, 
    title: "Evita tocar los pines",
    description: "Nunca toques los pines del procesador o la memoria RAM directamente. La electricidad estática puede dañar los componentes."
  },
];

const Info: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-[#B0DB9C] py-16 px-4"> 
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
      >
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-start text-center p-6 bg-green-700 bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-sm border border-green-600 cursor-pointer" 
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }} 
          >
            {tip.icon}
            <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-lg leading-tight"> 
              {tip.title}
            </h3>
            <p className="text-lg text-white opacity-90 drop-shadow-md"> 
              {tip.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Info;