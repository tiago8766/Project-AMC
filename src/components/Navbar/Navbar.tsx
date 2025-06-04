import React from "react";
import { NavbarMenu } from "../../services/menuItem.ts";
import { MdComputer, MdMenu } from "react-icons/md";
import Menu from "./Menu.tsx"

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleCloseMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav>
                <div className="relative w-full h-16 flex items-center px-4 justify-between"> 

                   
                    <div className="flex items-center gap-2">
                        <MdComputer className="text-3xl text-cyan-950" />
                        <span className="font-bold text-lg">AMC</span>
                    </div>


                    {/* Menú centrado */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex items-center gap-6">
                            {NavbarMenu.map((i) => (
                                <li key={i.id}>
                                    <a
                                        href={i.link}
                                        className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3
                                                  hover:text-secondary transition-all duration-300 font-semibold"
                                    >
                                        {i.titulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Botón de menú móvil a la derecha */}
                    <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className="text-4xl"/>
                    </div>

                </div>
            </nav>
            <Menu isOpen={isOpen} onClose={handleCloseMenu} />
        </>
    );
};

export default Navbar;