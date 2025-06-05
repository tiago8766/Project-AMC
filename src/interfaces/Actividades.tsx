
import React from 'react';
import { FaDesktop, FaMicrochip, FaTerminal, FaNetworkWired, FaCloud, FaMobileAlt, FaDatabase } from 'react-icons/fa';
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

export interface ProcessorData {
  name: string;
  year: number;
  architecture: string;
  cores: number | string;
  frequency: string;
  transistors: string;
  characteristics: string;
}

export interface ProcessorTimelineProps {
  type: 'processorTimeline'; 
  processors: ProcessorData[];
}

export interface FlashcardData {
  term: string;
  definition: string;
}

export interface FlashcardExplorerProps {
  type: 'flashcardExplorer'; 
  cards: FlashcardData[];
}
export interface InfografiaViewerData {
  type: 'infografiaViewer';
  sections: {
    title: string;
    description: string;
    image?: string;
  }[];
}

export interface AssemblyCodeViewerData {
  type: 'assemblyCodeViewer';
  exercises: {
    id: string;
    title: string;
    description: string;
    code: string;
    expectedOutput: string;
  }[];
}
export interface AssemblyConceptsViewerData {
  type: 'assemblyConceptsViewer';
  concepts: {
    term: string;
    definition: string;
    examples?: {
      type: string;
      description: string;
    }[];
  }[];
}

export type InteractiveComponentDataType =
  | FlowDiagramData
  | MemoryPyramidData
  | IOSimulatorData
  | EvaluationData
  | ArchitectureData
  | TerminalsData
  | DiagramBuilderData
  | ProcessorTimelineProps 
  | FlashcardExplorerProps
  | InfografiaViewerData
  | AssemblyCodeViewerData
  | AssemblyConceptsViewerData;
export interface ActivityDetailSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  interactiveComponent?: 'flowDiagram' | 'memoryPyramid' | 'ioClassifier' | 'evaluation' | 'architectureViewer' | 'terminalsViewer' | 'blockDiagramBuilder' | 'blockDiagramQuiz' | 'processorTimeline' | 'flashcardExplorer' | 'evaluationAct3'| 'infografiaViewer' | 'assemblyCodeViewer'| 'evaluationAct4' |'assemblyConceptsViewer' | 'evaluationAct5';
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
    color: "bg-[#DDF6D2]",
    description: "Explora las arquitecturas de microprocesadores, sus terminales y la construcción de diagramas de bloques.",
    longDescription: "Esta actividad te sumerge en el corazón de la computadora: el microprocesador. Comprenderás las diferencias entre las arquitecturas Von Neumann y Harvard, identificarás las funciones de los terminales del microprocesador y aprenderás a interpretar y construir diagramas de bloques para representar sistemas complejos. A través de ejercicios interactivos, reforzarás tu conocimiento sobre cómo estos elementos fundamentales interactúan para dar vida a los sistemas informáticos.",
    image: "https://via.placeholder.com/600x300/ffe4e6/e11d48?text=Microprocesador+Arch",
  },
  {
    id: "activity-3",
    name: "Conceptos y Procesadores", 
    icon: <FaMicrochip />, 
    color: "bg-[#DDF6D2]", 
    description: "Explora conceptos clave de arquitectura y la evolución histórica de los microprocesadores.", 
    longDescription: "Sumérgete en los fundamentos de la arquitectura de computadoras, conociendo componentes clave como el 8255 y 8259, la comunicación serial y los modelos de memoria. Además, recorrerás la fascinante línea de tiempo de los microprocesadores, desde los primeros chips hasta las potentes unidades actuales, entendiendo su impacto y evolución.", 
    image: "https://via.placeholder.com/600x300/bfdbfe/3b82f6?text=Conceptos+y+Procesadores", 
  },
  {
    id: "activity-4",
    name: "Programación del Microprocesador",
    icon: <FaMicrochip />,
    color: "bg-[#DDF6D2]",
    description: "Programacion del microprocesador",
    longDescription: "Sumérgete en el lenguaje ensamblador y resuelve ejercicios prácticos.",
    image: "https://via.placeholder.com/600x300/dbeafe/60a5fa?text=Data+Science+Python",
  },
  {
    id: "activity-5",
    name: "Ensamblador",
    icon: <FaDatabase />,
    color: "bg-[#DDF6D2]",
    description: "Comprende los principios de las bases de datos relacionales y no relacionales.",
    longDescription: "Esta actividad cubre los diferentes tipos de bases de datos, su diseño, optimización y cómo interactuar con ellas.",
    image: "https://via.placeholder.com/600x300/ccfbf1/0d9488?text=SQL+NoSQL+Databases",
  },
  {
    id: "activity-6",
    name: "Sistemas Operativos y Shell",
    icon: <FaTerminal />,
    color: "bg-[#DDF6D2]",
    description: "Explora los sistemas operativos y la línea de comandos para gestionar el sistema.",
    longDescription: "Aprende sobre la estructura y funciones de los sistemas operativos, y domina el uso de la interfaz de línea de comandos (shell).",
    image: "https://via.placeholder.com/600x300/ffedd5/f97316?text=OS+Shell",
  },
  {
    id: "activity-7",
    name: "Programación Orientada a Objetos",
    icon: <FaDesktop />,
    color: "bg-[#C7DB9C]",
    description: "Conoce los conceptos fundamentales de la Programación Orientada a Objetos.",
    longDescription: "Profundiza en los pilares de la POO: encapsulamiento, herencia, polimorfismo y abstracción, a través de ejemplos prácticos.",
    image: "https://via.placeholder.com/600x300/d1fae5/059669?text=POO+Concepts",
  },
  {
    id: "activity-8",
    name: "Redes de Computadoras",
    icon: <FaNetworkWired />,
    color: "bg-[#C7DB9C]",
    description: "Introduce los conceptos básicos de redes, protocolos y topologías.",
    longDescription: "Esta actividad te guiará a través del mundo de las redes de computadoras, desde la capa física hasta la capa de aplicación.",
    image: "https://via.placeholder.com/600x300/c7d2fe/6366f1?text=Networking",
  },
  {
    id: "activity-9",
    name: "Desarrollo de Aplicaciones Móviles",
    icon: <FaMobileAlt />,
    color: "bg-[#C7DB9C]",
    description: "Aprende los fundamentos del desarrollo de aplicaciones para plataformas móviles.",
    longDescription: "Explora el diseño, desarrollo y despliegue de aplicaciones para dispositivos móviles, centrándote en buenas prácticas y frameworks.",
    image: "https://via.placeholder.com/600x300/fef3c7/f59e0b?text=Mobile+Apps",
  },
  {
    id: "activity-10",
    name: "Computación en la Nube",
    icon: <FaCloud />,
    color: "bg-[#C7DB9C]",
    description: "Introducción a los servicios y modelos de computación en la nube.",
    longDescription: "Comprende los conceptos esenciales de la computación en la nube, incluyendo IaaS, PaaS, SaaS y los principales proveedores de servicios.",
    image: "https://via.placeholder.com/600x300/e0e7ff/4338ca?text=Cloud+Computing",
  },
  {
    id: "activity-11",
    name: "Arquitectura de Computadoras Avanzada",
    icon: <FaMicrochip />,
    color: "bg-[#C7DB9C]",
    description: "Profundiza en arquitecturas avanzadas y principios de diseño de procesadores.",
    longDescription: "Esta actividad aborda temas más avanzados en la arquitectura de computadoras, como paralelismo, pipelines y diseño de sistemas complejos.",
    image: "https://via.placeholder.com/600x300/ffe4e6/e11d48?text=Computer+Arch",
  },
  {
    id: "activity-12",
    name: "Robótica y Automatización",
    icon: <SiIrobot />,
    color: "bg-[#C7DB9C]",
    description: "Introducción a la robótica, sus componentes y principios de automatización.",
    longDescription: "Explora los fundamentos de la robótica, incluyendo sistemas de control, sensores, actuadores y aplicaciones de automatización industrial.",
    image: "https://via.placeholder.com/600x300/ecfdf5/065f46?text=Robotics+Automation",
  },
];