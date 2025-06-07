
import { ActivityDetailSection, EvaluationData } from '../../../interfaces/Actividades';

export const ConceptosYProcesadores: ActivityDetailSection[] = [
  {
    id: 'conceptos',
    title: 'Conceptos Clave',
    content: `Esta sección cubre los fundamentos esenciales de la arquitectura de computadoras, incluyendo interfaces programables, interrupciones, comunicación serial, y los modelos de memoria Von Neumann y Harvard.`,
    interactiveComponent: 'flashcardExplorer',
    data: {
      type: 'flashcardExplorer',
      cards: [
        { term: '8255 (PIC)', definition: 'Circuito integrado de 40 pines ampliamente utilizado en sistemas de microprocesadores. Su función principal es actuar como una interfaz entre el microprocesador y los dispositivos de entrada y salida, facilitando la comunicación entre ellos.' },
        { term: '8259 (PIC)', definition: 'Controlador de Interrupciones Programable (PIC) que gestiona y prioriza múltiples interrupciones de hardware, liberando al procesador de esta tarea.' },
        { term: 'Comunicación Serial', definition: 'Permite el intercambio de datos en forma de bits entre dispositivos, ya sea vía USB o pines TX/RX.' },
        { term: 'Arquitectura x86', definition: 'Conjunto de instrucciones y diseño de procesadores desarrollado por Intel, comenzando con el 8086 en 1978. Es la base de la mayoría de las computadoras personales y servidores, evolucionando de 16 bits a 32 bits y luego a 64 bits (x86-64), permitiendo mayor potencia y compatibilidad con software antiguo.' },
        { term: 'Modelo de Memoria Von Neumann', definition: 'Diseño que usa una memoria única para almacenar instrucciones y datos. Con este modelo surge el concepto de programa almacenado. Los programas se encuentran localizados en memoria y consisten de instrucciones, las cuales son ejecutadas por la CPU.' },
        { term: 'Modelo de Memoria Harvard', definition: 'Difiere del modelo Von Neumann al dividir la memoria en una memoria de instrucciones y otra memoria de datos, a las cuales el procesador accede de manera separada o simultánea. Se desarrolló con el objetivo de mitigar el cuello de botella del modelo Von Neumann.' },
        { term: 'Registros', definition: 'Elementos de memoria de acceso rápido ubicados en el procesador, utilizados como espacio de trabajo y almacenamiento temporal para la ejecución de instrucciones.' },
        { term: 'Program Counter (PC)', definition: 'Registro contador del programa que contiene la dirección de la siguiente instrucción a leer de la memoria.' },
        { term: 'Instruction Register (IR)', definition: 'Registro de instrucción que contiene la instrucción que hay que ejecutar.' },
        { term: 'Memory Address Register (MAR)', definition: 'Registro de direcciones de memoria donde se pone la dirección de memoria a la que se quiere acceder.' },
        { term: 'Memory Buffer Register (MBR)', definition: 'Registro donde la memoria deposita el dato leído o el dato que se quiere escribir.' },
      ],
    },
  },
  {
    id: 'tipos-procesadores',
    title: 'Tipos de Procesadores',
    content: `Explora la fascinante evolución de los microprocesadores, desde sus humildes comienzos en los años 70 hasta los potentes chips multinúcleo de la actualidad.`,

    interactiveComponent: 'processorTimeline',
    data: {
      type: 'processorTimeline',
      processors: [
        { name: 'Intel 4004', year: 1971, architecture: '4 bits', cores: 1, frequency: '740 kHz', transistors: '2,300', characteristics: 'Primer microprocesador comercial del mundo.' },
        { name: 'Intel 8008', year: 1972, architecture: '8 bits', cores: 1, frequency: '0.5-0.8 MHz', transistors: '3,500', characteristics: 'Primer microprocesador de 8 bits.' },
        { name: 'Intel 8080', year: 1974, architecture: '8 bits', cores: 1, frequency: '2 MHz', transistors: '4,500', characteristics: 'Clave en el desarrollo de las primeras computadoras personales.' },
        { name: 'Intel 8086', year: 1978, architecture: '16 bits', cores: 1, frequency: '5-10 MHz', transistors: '29,000', characteristics: 'Estableció la arquitectura x86.' },
        { name: 'Motorola 68000', year: 1979, architecture: '16/32 bits', cores: 1, frequency: '8-16 MHz', transistors: '68,000', characteristics: 'Influyente en Apple Macintosh y Sega Genesis.' },
        { name: 'Intel 80386', year: 1985, architecture: '32 bits', cores: 1, frequency: '12-40 MHz', transistors: '275,000', characteristics: 'Primer procesador de 32 bits de línea x86, impulsó PCs modernas.' },
        { name: 'Intel Pentium', year: 1993, architecture: '32 bits', cores: 1, frequency: '300 MHz', transistors: '3,100,000', characteristics: 'Primera arquitectura superscalar.' },
        { name: 'AMD K6', year: 1997, architecture: '32 bits', cores: 1, frequency: '550 MHz', transistors: '8,800,000', characteristics: 'Procesador económico y compatible con Pentium, buena opción a bajo costo.' },
        { name: 'Intel Pentium III', year: 1999, architecture: '32 bits', cores: 1, frequency: '1.4 GHz', transistors: '9,500,000', characteristics: 'Introdujo la tecnología SSE para multimedia y gráficos mejorados.' },
        { name: 'Intel Xeon', year: 2006, architecture: '64 bits', cores: 2, frequency: 'N/A', transistors: 'N/A', characteristics: 'Tecnología de doble núcleo, 80% más rendimiento por vatio.' },
        { name: 'AMD Phenom', year: 2008, architecture: '64 bits', cores: '3 o 4', frequency: 'N/A', transistors: 'N/A', characteristics: 'Primera generación de procesadores de tres y cuatro núcleos (K10).' },
        { name: 'Intel Core i3', year: 2010, architecture: '64 bits', cores: 2, frequency: 'N/A', transistors: 'N/A', characteristics: 'Doble núcleo con gráfico integrado y Hyper-Threading.' },
        { name: 'Intel Core Ivy Bridge', year: 2012, architecture: '64 bits', cores: 'Múltiples', frequency: 'N/A', transistors: 'Más (22 nm)', characteristics: 'Tercera generación, transistores de 22 nanómetros.' },
        { name: 'Intel Core Haswell', year: 2013, architecture: '64 bits', cores: 'Múltiples', frequency: 'N/A', transistors: 'N/A', characteristics: 'Cuarta generación, nuevas tecnologías para gaming y diseño gráfico, menor consumo.' },
        { name: 'Intel Core i7', year: 2017, architecture: '64 bits', cores: 'Múltiples', frequency: 'N/A', transistors: 'N/A', characteristics: 'Potencia y gran capacidad de respuesta para usuarios exigentes.' },
        { name: 'Ryzen 3 3100', year: 2020, architecture: '64 bits', cores: 4, frequency: 'N/A', transistors: 'N/A', characteristics: '4 núcleos y 8 hilos, doble capacidad multitarea.' },
        { name: 'Intel Core i9', year: 2021, architecture: '64 bits', cores: 8, frequency: '2.5 GHz (base) / 4.9 GHz (turbo)', transistors: 'N/A', characteristics: '8 núcleos y 16 hilos, alta velocidad de procesamiento.' },
        { name: 'Ryzen 7 8700G', year: 2024, architecture: '64 bits', cores: 8, frequency: '4.2 GHz (base) / 5.1 GHz (turbo)', transistors: '4 nm', characteristics: 'Alto rendimiento de escritorio, soporta DDR5 y PCIe 4.0.' },
      ],
    },
  },
  {
    id: 'evaluacion',
    title: 'Evaluacion',
    content: `Seccion para aprender`,
    interactiveComponent: 'evaluationAct3',
    data: {
   
    } as EvaluationData,
  },
];