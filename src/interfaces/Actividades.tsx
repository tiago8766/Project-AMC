
import React from 'react';
import {
  FaDesktop,
  FaMicrochip,
  FaTerminal,

  FaMobileAlt,
  FaClock,
  FaMemory,
  FaLaptopCode,

  FaBookOpen,
  FaCogs,
  FaBolt
} from 'react-icons/fa';
import image8086 from '../images/Auto lote (Logo) (1).jpg';

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
export interface MicrocontrollerConceptsViewerData {
  type: 'microcontrollerConceptsViewer';
  concepts: {
    term: string;
    definition: string;
    examples?: {
      type: string;
      description: string;
    }[];
  }[];
}
export interface ArduinoProjectViewerData {
  type: 'arduinoProjectViewer';
  projects: {
    id: string;
    title: string;
    description: string;
    code: string;
    circuitImage?: string;
  }[];
}
export interface ConceptosMemoriaViewerData {
  type: 'conceptosMemoriaViewer';
  concepts: {
    term: string;
    definition: string;
    examples?: {
      type: string;
      description: string;
    }[];
  }[];
}


export interface AccesoMemoriaExplorerData {
  type: 'accesoMemoriaExplorer';
  methods: {
    title: string;
    description: string;
    diagram?: string;
  }[];
}

export interface CodeSnippetsReviewerData {
  type: 'codeSnippetsReviewer';
  snippets: {
    title: string;
    code: string;
    explanation: string;
  }[];
}
export interface PicConceptsViewerData {
  type: 'picConceptsViewer';
  concepts: {
    term: string;
    definition: string;
    examples?: {
      type: string;
      description: string;
    }[];
  }[];
}


export interface PicHardwareExplorerData {
  type: 'picHardwareExplorer';
  components: {
    name: string;
    description: string;
    image?: string;
  }[];
  instructions: {
    name: string;
    description: string;
    exampleCode: string;
  }[];
  peripheralsUse: {
    scenario: string;
    peripherals: string[];
    interaction: string;
  };
}

export interface PicRegistersAndAddressingData {
  type: 'picRegistersAndAddressing';
  addressingModes: {
    mode: string;
    description: string;
    example: string;
  }[];
  interruptConcepts: {
    definition: string;
    eventExample: string;
    utility: string[];
  };
  registerIdentification: {
    description: string;
    registers: {
      address: string;
      register: string;
      type: string;
      function: string;
    }[];
    registerManipulationCode: string;
  };
}

export interface MemoryMapBuilderData {
  type: 'memoryMapBuilder';
  incompleteMapExercise: {
    address: string;
    question: string;
    answerRegister: string;
    answerEffect: string;
  };
  customMapDesign: {
    description: string;
    template: {
      address: string;
      bank0: string;
      bank1: string;
      type: string;
    }[];
    notes: string[];
  };
}
export interface AdvancedInstructionsViewerData {
  type: 'advancedInstructionsViewer';
  instructionTypes: {
    name: string;
    description: string;
    examples: {
      code: string;
      explanation: string;
    }[];
  }[];
}

export interface PicPeripheralCodeViewerData {
  type: 'picPeripheralCodeViewer';
  projects: {
    id: string;
    title: string;
    description: string;
    code: string;

  }[];
}
export interface AssemblyFundamentalsViewerData {
  type: 'assemblyFundamentalsViewer';
  sections: {
    name: string;
    description: string;
    items: {
      term: string;
      detail: string;
    }[];
  }[];
}
export interface MplabSimulationViewerData {
  type: 'mplabSimulationViewer';
  simulations: {
    id: string;
    title: string;
    description: string;
    code: string;
    verification: string;
  }[];
}
export interface ParallelPortsViewerData {
  type: 'parallelPortsViewer';
  concepts: {
    name: string;
    description: string;
    details?: string[];
  }[];
  generalDiagram?: string;
}
export interface CcpConceptsViewerData {
  type: 'ccpConceptsViewer';
  concepts: {
    term: string;
    definition: string;
    details?: string[];
  }[];
}

export interface CcpCodeExamplesViewerData {
  type: 'ccpCodeExamplesViewer';
  exercises: {
    id: string;
    title: string;
    description: string;
    code: string;
    verification?: string;
  }[];
}

export interface ArduinoTimersAndIOViewerData {
  type: 'arduinoTimersAndIOViewer';
  exercises: {
    id: string;
    title: string;
    description: string;
    code: string;
    diagram?: string;
    truthTable?: {
      headers: string[];
      rows: string[][];
    };
    verification?: string;
  }[];
}
export interface MaintenanceCategory {
  id: string; 
  title: string;
  icon: React.ReactNode; 
  shortDescription: string; 
  color: string; 
}

export interface MaintenanceDetailContent {
  id: string; 
  title: string;
  fullContent: string; 

 
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
  | AssemblyConceptsViewerData
  | MicrocontrollerConceptsViewerData
  | ArduinoProjectViewerData
  | ConceptosMemoriaViewerData
  | AccesoMemoriaExplorerData
  | CodeSnippetsReviewerData
  | PicConceptsViewerData
  | PicHardwareExplorerData
  | PicRegistersAndAddressingData
  | MemoryMapBuilderData
  | AdvancedInstructionsViewerData
  | PicPeripheralCodeViewerData
  | AssemblyFundamentalsViewerData
  | MplabSimulationViewerData
  | ParallelPortsViewerData
  | ArduinoTimersAndIOViewerData
  | CcpConceptsViewerData
  | CcpCodeExamplesViewerData;

export interface ActivityDetailSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  interactiveComponent?: 'flowDiagram' | 'memoryPyramid' | 'ioClassifier' | 'evaluation' | 'architectureViewer' | 'terminalsViewer' | 'blockDiagramBuilder' | 'blockDiagramQuiz' | 'processorTimeline' | 'flashcardExplorer' | 'evaluationAct3' | 'infografiaViewer' | 'assemblyCodeViewer' | 'evaluationAct4' | 'assemblyConceptsViewer' | 'evaluationAct5' | 'microcontrollerConceptsViewer' | 'arduinoProjectViewer' | 'evaluationAct6' | 'conceptosMemoriaViewer' | 'accesoMemoriaExplorer' | 'codeSnippetsReviewer' | 'picConceptsViewer' | 'picHardwareExplorer' | 'picRegistersAndAddressing' | 'memoryMapBuilder' | 'advancedInstructionsViewer' | 'picPeripheralCodeViewer' | 'assemblyFundamentalsViewer' | 'mplabSimulationViewer' | 'parallelPortsViewer' | 'arduinoTimersAndIOViewer' | 'ccpConceptsViewer' | 'ccpCodeExamplesViewer';
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
    image: image8086,
    longDescription: "Explora la estructura interna de una computadora, desde el procesamiento hasta la memoria y los sistemas de entrada/salida.",
  },
  {
    id: "activity-2",
    name: "Arquitectura del Microprocesador",
    icon: <FaMicrochip />,
    color: "bg-[#DDF6D2]",
    description: "Explora las arquitecturas de microprocesadores, sus terminales y la construcción de diagramas de bloques.",
    longDescription: "Esta actividad te sumerge en el corazón de la computadora: el microprocesador. Comprenderás las diferencias entre las arquitecturas Von Neumann y Harvard, identificarás las funciones de los terminales del microprocesador y aprenderás a interpretar y construir diagramas de bloques para representar sistemas complejos. A través de ejercicios interactivos, reforzarás tu conocimiento sobre cómo estos elementos fundamentales interactúan para dar vida a los sistemas informáticos.",
    image: image8086,
  },
  {
    id: "activity-3",
    name: "Conceptos y Procesadores",
    icon: <FaBookOpen />,
    color: "bg-[#DDF6D2]",
    description: "Explora conceptos clave de arquitectura y la evolución histórica de los microprocesadores.",
    longDescription: "Sumérgete en los fundamentos de la arquitectura de computadoras, conociendo componentes clave como el 8255 y 8259, la comunicación serial y los modelos de memoria. Además, recorrerás la fascinante línea de tiempo de los microprocesadores, desde los primeros chips hasta las potentes unidades actuales, entendiendo su impacto y evolución.",
    image: image8086,
  },
  {
    id: "activity-4",
    name: "Programación del Microprocesador",
    icon: <FaLaptopCode />,
    color: "bg-[#DDF6D2]",
    description: "Programacion del microprocesador",
    longDescription: "Sumérgete en el lenguaje ensamblador y resuelve ejercicios prácticos.",
    image: image8086,
  },
  {
    id: "activity-5",
    name: "Ensamblador",
    icon: <FaTerminal />,
    color: "bg-[#DDF6D2]",
    description: "Comprende los principios de ensamblador",
    longDescription: "Esta actividad cubre los principios de ensamblador.",
    image: image8086,
  },
  {
    id: "activity-6",
    name: "Arquitectura de los Microcontroladores",
    icon: <FaMobileAlt />,
    color: "bg-[#DDF6D2]",
    description: "Explora los conceptos fundamentales, tipos, periféricos y aplicaciones de los microcontroladores y Arduino.",
    longDescription: "Conoce la arquitectura interna, los diferentes tipos de microcontroladores (AVR, ARM, 8051), sus periféricos comunes, tipos de memoria y aplicaciones. Incluye simulaciones de proyectos con Arduino.",
    image: image8086,
  },
  {
    id: "activity-7",
    name: "Memoria externa",
    icon: <FaMemory />,
    color: "bg-[#C7DB9C]",
    description: "Explora las técnicas de memoria externa y el almacenamiento de programa en microcontroladores.",
    longDescription: "Aprende sobre la estructura y funciones de la memoria externa, cómo se accede a ella y las precauciones importantes en la programación.",
    image: image8086,
  },
  {
    id: 'activity-8',
    name: 'Arquitectura de los PIC',
    icon: <FaMicrochip />,
    description: 'Conoce la arquitectura interna, modos de direccionamiento y manipulación de registros de los microcontroladores PIC.',
    longDescription: 'Sumérgete en las gamas de PIC, tipos de memoria (programa, datos, EEPROM), modos de direccionamiento, interrupciones, y cómo interactuar con registros y bancos de memoria, incluyendo ejercicios prácticos.',
    color: "bg-[#C7DB9C]",
    image: image8086,
  },
  {
    id: 'activity-9',
    name: 'Programación Avanzada de PIC',
    icon: <FaLaptopCode />,
    description: 'Aprende sobre instrucciones avanzadas, interrupciones y comunicación serial/I2C en microcontroladores PIC.',
    longDescription: 'Explora el repertorio de instrucciones (transferencia, aritmética, lógica, control de flujo, bits), y ejemplos prácticos de interrupciones, comunicación USART e I2C, incluyendo el mini proyecto de terminal serial con sensor LM75.',
    color: "bg-[#C7DB9C]",
    image: image8086,
  },
  {
    id: 'activity-10',
    name: 'Fundamentos y Simulación de Ensamblador e Interrupciones',
    icon: <FaBolt />,
    description: 'Comprende los fundamentos del lenguaje ensamblador e interrupciones, y aplica conocimientos en simulaciones.',
    longDescription: 'Aprende sobre expresiones, directivas, macros, subrutinas y la organización de programas ensamblador. Explora los tipos de interrupciones (fijas y sectorizadas) y realiza ejercicios prácticos de simulación con MPLAB Xpress.',
    color: "bg-[#C7DB9C]",
    image: image8086,
  },
  {
    id: 'activity-11',
    name: 'Puertos Paralelos y Temporizadores en Arduino',
    icon: <FaCogs />,
    description: 'Explora los puertos paralelos y el sistema de temporizadores, aplicándolos en ejercicios prácticos de E/S con Arduino.',
    longDescription: 'Aprende sobre los puertos paralelos (sus tipos, funciones y características), y profundiza en el sistema de temporizadores (Timer 0, 1, 2) y módulos CCP. Realiza ejercicios prácticos con Arduino para el control de LEDs, lectura de botones y contadores binarios.',
    color: "bg-[#C7DB9C]",
    image: image8086,
  },
  {
    id: 'activity-12',
    name: 'Módulos CCP: Captura, Comparación y PWM',
    icon: <FaClock />,
    description: 'Comprende los módulos CCP en PICs y aplica su configuración para generar señales PWM y capturar eventos.',
    longDescription: 'Aprende sobre la funcionalidad de los módulos de Captura, Comparación y PWM (CCP), su configuración de registros (CCPxCON) y la generación de señales periódicas con Timers. Realiza ejercicios prácticos para PWM y captura de flanco ascendente con interrupciones y comunicación UART.',
    color: "bg-[#C7DB9C]",
    image: image8086,
  },
];