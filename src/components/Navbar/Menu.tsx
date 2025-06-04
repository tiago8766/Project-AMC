import React from 'react';
import { motion, AnimatePresence, Variants } from "framer-motion"
import { MenuProps } from "../../interfaces/Menu"
import { NavbarMenu } from '../../services/menuItem';
import MenuItemLink from './MenuItem';
import { MdClose } from "react-icons/md";



const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    const siderbarVariants: Variants = {
        closed: { x: "100%", transition: { when: "afterChildren" } },
        open: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.1 } }
    }
    const itemVariants: Variants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    }
    return (
        <AnimatePresence mode="wait">

            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={siderbarVariants}
                    className='fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 z-50 lg:hidden'>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        aria-label="Cerrar menú" 
                    >
                        <MdClose className="text-3xl" />
                    </button>

                    <div>
                        <ul className="space-y-4">
                            {NavbarMenu.map((item) => (
                                <MenuItemLink
                                    key={item.id}
                                    item={item}
                                    variants={itemVariants}
                                    onClick={() => {
                                        console.log("Enlace de menú clickeado:", item.titulo); 
                                        onClose();
                                    }}
                                />
                            ))}

                        </ul>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default Menu
