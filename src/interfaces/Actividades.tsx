
import React from 'react';

import { FaDesktop, FaMicrochip, FaTerminal, FaNetworkWired, FaCloud, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { DiNodejs, DiPython } from 'react-icons/di';
import { SiIrobot } from 'react-icons/si';

export interface FlowDiagramData {
  flowSteps: Array<{
    id: string;
    name: string;
    desc: string;
  }>;
  cpuComponents: Array<{
    name: string;
    desc: string;
  }>;
}

export interface MemoryPyramidData {
  hierarchy: Array<{
    level: string;
    desc: string;
  }>;
  characteristics: Array<{
    category: string;
    items: string[];
  }>;
}

export interface IOSimulatorData {
  devices: Array<{
    name: string;
    type: 'manual-entrada' | 'automatico-entrada' | 'visual-salida' | 'fisico-salida' | 'entrada-salida-almacenamiento' | 'entrada-salida-comunicacion';
  }>;
  communication: Array<{
    name: string;
    desc: string;
  }>;
}


export interface EvaluationQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswerId: string;
  explanation?: string; 
}


export interface EvaluationData {
  message?: string; 
  questions: EvaluationQuestion[];
}
export interface ArchitectureData {
  architectures: Array<{
    id: string;
    name: string;
    image: string;
    components: Array<{
      id: string;
      name: string;
      description: string;
      position?: { x: number; y: number; width: number; height: number };
    }>;
  }>;
}

export interface TerminalsData {
  mainImage: string;
  terminals: Array<{
    id: string;
    name: string;
    description: string;
    hotspotArea?: { x: number; y: number; width: number; height: number };
  }>;
}

export interface DiagramBuilderData {
  baseDiagramImage: string;
  components: {
    id: string;
    name: string;
    type: string;
    description: string;
  }[];
  targetSlots: {
    id: string;
    label: string;
    correctComponentType: string;
    position: {
      left: number;
      top: number;
      width: number;
      height: number;
    };
  }[];
}


export type InteractiveComponentDataType =
  | FlowDiagramData
  | MemoryPyramidData
  | IOSimulatorData
  | EvaluationData 
  | ArchitectureData
  | TerminalsData
  | DiagramBuilderData;


export interface ActivityDetailSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  interactiveComponent?: 'flowDiagram' | 'memoryPyramid' | 'ioClassifier' | 'evaluation' | 'architectureViewer' | 'terminalsViewer' | 'blockDiagramBuilder' | 'blockDiagramQuiz';
  data?: InteractiveComponentDataType;
}


export interface Activity {
  id: string;
  name: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  
  longDescription?: string;
  image?: string;

}
export const Actividades: Activity[] = [
  {
    id: "activity-1",
    name: "Estructura de la Computadora",
    icon: <FaDesktop />,
    color: "bg-[#DDF6D2]",
    description: "Comprende cómo los componentes de hardware y software interactúan para que una computadora funcione de manera eficiente.",
    image: "https://via.placeholder.com/600x300/e0f2f7/000000?text=Estructura+Computadora",
    longDescription: "Explora la estructura interna de una computadora, desde el procesamiento hasta la memoria y los sistemas de entrada/salida.",
   
  },
  {
    id: "activity-2",
    name: "Arquitectura del Microprocesador",
    icon: <FaMicrochip />,
    color: "bg-[#C7DB9C]",
    description: "Explora las arquitecturas de microprocesadores, sus terminales y la construcción de diagramas de bloques.",
    longDescription: "Esta actividad te sumerge en el corazón de la computadora: el microprocesador. Comprenderás las diferencias entre las arquitecturas Von Neumann y Harvard, identificarás las funciones de los terminales del microprocesador y aprenderás a interpretar y construir diagramas de bloques para representar sistemas complejos. A través de ejercicios interactivos y un quiz, reforzarás tu conocimiento sobre cómo estos elementos fundamentales interactúan para dar vida a los sistemas informáticos.",
    image: "https://via.placeholder.com/600x300/ffe4e6/e11d48?text=Microprocesador+Arch",
  },
  {
    id: "activity-3",
    name: "Actividad 3",
    icon: <DiNodejs />,
    color: "bg-[#DDF6D2]",
    description: "Aprende los fundamentos del desarrollo backend con Node.js y Express.",
    longDescription: "Esta actividad cubre los conceptos clave del desarrollo de servidores web con Node.js, incluyendo la creación de APIs RESTful, manejo de bases de datos y autenticación de usuarios. Ideal para quienes buscan construir la parte 'invisible' de las aplicaciones.",
    image: "https://via.placeholder.com/600x300/bfdbfe/3b82f6?text=Backend+Nodejs",
  },
  {
    id: "activity-4",
    name: "Actividad 4",
    icon: <DiPython />,
    color: "bg-[#DDF6D2]",
    description: "Introducción a la ciencia de datos, análisis y visualización con Python.",
    longDescription: "Sumérgete en el mundo de los datos con Python. Aprende a recolectar, limpiar, analizar y visualizar conjuntos de datos usando librerías populares como Pandas, NumPy y Matplotlib. Descubre cómo extraer insights valiosos de la información.",
    image: "https://via.placeholder.com/600x300/dbeafe/60a5fa?text=Data+Science+Python",
  },
  {
    id: "activity-5",
    name: "Actividad 5",
    icon: <FaDatabase />,
    color: "bg-[#DDF6D2]",
    description: "Comprende los distintos tipos de bases de datos y cuándo usar cada una.",
    longDescription: "Explora las diferencias entre bases de datos relacionales (SQL) y no relacionales (NoSQL). Aprende sobre sus estructuras, casos de uso y cómo interactuar con ellas para almacenar y recuperar información eficientemente en tus aplicaciones.",
    image: "https://via.placeholder.com/600x300/ccfbf1/0d9488?text=SQL+NoSQL+Databases",
  },
  {
    id: "activity-6",
    name: "Actividad 6",
    icon: <FaTerminal />,
    color: "bg-[#DDF6D2]",
    description: "Explora los sistemas operativos y aprende a manejar la línea de comandos.",
    longDescription: "Esta actividad te introduce a los principios de los sistemas operativos, cómo gestionan los recursos y los procesos. Además, dominarás la línea de comandos (shell) para interactuar con tu sistema de manera más potente y eficiente.",
    image: "https://via.placeholder.com/600x300/ffedd5/f97316?text=OS+Shell",
  },
  {
    id: "activity-7",
    name: "Actividad 7",
    icon: <FaDesktop />,
    color: "bg-[#C7DB9C]",
    description: "Conceptos fundamentales de la Programación Orientada a Objetos (POO).",
    longDescription: "Profundiza en los pilares de la POO: encapsulamiento, herencia, polimorfismo y abstracción. Aprende a diseñar y construir software más modular, reutilizable y fácil de mantener utilizando paradigmas orientados a objetos.",
    image: "https://via.placeholder.com/600x300/d1fae5/059669?text=POO+Concepts",
  },
  {
    id: "activity-8",
    name: "Actividad 8",
    icon: <FaNetworkWired />,
    color: "bg-[#C7DB9C]",
    description: "Introducción a los conceptos básicos de redes de computadoras.",
    longDescription: "Esta actividad te proporciona una base sólida en redes, cubriendo temas como el modelo OSI, protocolos TCP/IP, direcciones IP, routers, switches y la forma en que los dispositivos se comunican en una red global.",
    image: "https://via.placeholder.com/600x300/c7d2fe/6366f1?text=Networking",
  },
  {
    id: "activity-9",
    name: "Actividad 9",
    icon: <FaMobileAlt />,
    color: "bg-[#C7DB9C]",
    description: "Crea tus primeras aplicaciones para dispositivos móviles.",
    longDescription: "Aprende los principios del desarrollo de aplicaciones móviles para plataformas Android e iOS. Cubre la interfaz de usuario, la gestión de datos, la interacción con hardware del dispositivo y cómo desplegar tus aplicaciones.",
    image: "https://via.placeholder.com/600x300/fef3c7/f59e0b?text=Mobile+Apps",
  },
  {
    id: "activity-10",
    name: "Actividad 10",
    icon: <FaCloud />,
    color: "bg-[#C7DB9C]",
    description: "Introducción a los servicios y modelos de computación en la nube.",
    longDescription: "Descubre los conceptos fundamentales de la computación en la nube, incluyendo IaaS, PaaS, SaaS, y proveedores populares como AWS, Azure y Google Cloud. Entiende cómo la nube transforma la infraestructura y el desarrollo de software.",
    image: "https://via.placeholder.com/600x300/e0e7ff/4338ca?text=Cloud+Computing",
  },
  {
    id: "activity-11",
    name: "Actividad 11",
    icon: <FaMicrochip />,
    color: "bg-[#C7DB9C]",
    description: "Conceptos avanzados sobre el diseño y funcionamiento de computadoras.",
    longDescription: "Profundiza en temas como pipelines, paralelismo, memoria caché multinivel y arquitecturas de procesadores modernas, comprendiendo cómo se logran rendimientos superiores en el hardware actual.",
    image: "https://via.placeholder.com/600x300/ffe4e6/e11d48?text=Computer+Arch",
  },
  {
    id: "activity-12",
    name: "Actividad 12",
    icon: <SiIrobot />,
    color: "bg-[#C7DB9C]",
    description: "Introducción a la robótica, sus componentes y principios de automatización.",
    longDescription: "Esta actividad explora el mundo de la robótica, desde los fundamentos mecánicos y electrónicos hasta la programación de robots y la automatización de procesos industriales. Un vistazo al futuro de la interacción humano-máquina.",
    image: "https://via.placeholder.com/600x300/ecfdf5/065f46?text=Robotics+Automation",
  },
];