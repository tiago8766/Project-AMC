import React from "react";
import { NavbarMenu } from "../../services/tareaService";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <nav>
                <div className="relative w-full h-16 flex items-center px-4 justify-between"> {/* Added justify-between here */}

                    {/* Logo a la izquierda - Ajustado para centrado */
                    // Este div ahora estará a la izquierda, pero el contenido interno puede ser flex para centrar el logo y texto
                    }
                    <div className="flex items-center gap-2"> {/* Added flex and gap for icon and text */}
                        <MdComputer className="text-3xl text-cyan-950" />
                        <span className="font-bold text-lg">AMC</span> {/* Added text-lg for slight size increase for visibility */}
                    </div>


                    {/* Menú centrado */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex items-center gap-6">
                            {NavbarMenu().map((i) => (
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
        </>
    );
};

export default Navbar;