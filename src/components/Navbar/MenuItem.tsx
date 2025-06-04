import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MenuItem } from '../../services/menuItem'; 

export interface MenuItemLink{
  item: MenuItem;
  variants: Variants; 
  onClick?: () => void;
}

const MenuItemLink: React.FC<MenuItemLink> = ({ item, variants, onClick }) => {
  return (
    <motion.li
      key={item.id}
      variants={variants}
      onClick={onClick}
    >
      <a
        href={item.link}
        className="block text-gray-700 hover:text-cyan-700 transition-colors duration-200 text-lg font-semibold"
      >
        {item.titulo}
      </a>
    </motion.li>
  );
};

export default MenuItemLink;