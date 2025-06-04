// src/data/actividades/arquitecturaMicroprocesadorSections.ts
import { ActivityDetailSection, ArchitectureData, TerminalsData, DiagramBuilderData, EvaluationData } from '../../../interfaces/Actividades';

export const arquitecturaMicroprocesadorSections: ActivityDetailSection[] = [
  {
    id: "arquitecturas",
    title: "Arquitecturas: Von Neumann vs Harvard",
    content: "Comprende los dos modelos fundamentales que definen cómo los microprocesadores interactúan con la memoria para ejecutar instrucciones y manejar datos.",
    interactiveComponent: 'architectureViewer',
    data: {
      architectures: [
        {
          id: "von-neumann",
          name: "Von Neumann",
          image: "https://via.placeholder.com/400x200/a7f3d0/10b981?text=Von+Neumann+Diagram",
          components: [
            { id: "vn-memoria", name: "Memoria Única", description: "Almacena tanto instrucciones como datos en la misma ubicación. Esto simplifica el diseño pero puede crear un 'cuello de botella de Von Neumann' ya que solo se puede acceder a una cosa a la vez." },
            { id: "vn-cpu", name: "Unidad Central de Proceso (CPU)", description: "Procesa las instrucciones y los datos, comunicándose con la memoria a través de un único conjunto de buses." },
            { id: "vn-bus", name: "Bus de Control y Datos Unificado", description: "Un solo bus es utilizado para la transferencia de datos y control para instrucciones y datos." },
          ],
        },
        {
          id: "harvard",
          name: "Harvard",
          image: "https://via.placeholder.com/400x200/bfdbfe/3b82f6?text=Harvard+Diagram",
          components: [
            { id: "hv-memoria-inst", name: "Memoria de Instrucciones", description: "Almacenamiento separado exclusivamente para instrucciones. Permite la búsqueda de la siguiente instrucción mientras se ejecuta la actual." },
            { id: "hv-memoria-datos", name: "Memoria de Datos", description: "Almacenamiento separado exclusivamente para datos. Permite acceder a datos simultáneamente con la búsqueda de instrucciones." },
            { id: "hv-cpu", name: "Unidad Central de Proceso (CPU)", description: "Similar a Von Neumann, pero con buses separados para interactuar con las memorias de instrucciones y datos." },
            { id: "hv-bus-inst", name: "Bus de Instrucciones Dedicado", description: "Un bus específico para la transferencia de instrucciones." },
            { id: "hv-bus-datos", name: "Bus de Datos Dedicado", description: "Un bus específico para la transferencia de datos." },
          ],
        },
      ],
    } as ArchitectureData,
  },
  {
    id: "terminales",
    title: "Terminales del Microprocesador",
    content: "Conoce los diferentes pines o terminales de un microprocesador y su función vital para la interacción con otros componentes del sistema.",
    interactiveComponent: 'terminalsViewer',
    data: {
      mainImage: "https://via.placeholder.com/600x400/dbeafe/60a5fa?text=Microprocesador+Terminales",
      terminals: [
        { id: "t-alimentacion", name: "Alimentación", description: "Suministran energía al microprocesador (ej., VCC, VDD, VSS, GND)." },
        { id: "t-direccion", name: "Dirección", description: "Indican la ubicación de memoria a la que el microprocesador intenta acceder." },
        { id: "t-datos", name: "Datos", description: "Se utilizan para la transferencia de datos entre el microprocesador y otros componentes (memoria RAM, E/S)." },
        { id: "t-control", name: "Control", description: "Gestionan las señales de control que coordinan el funcionamiento del microprocesador con otros componentes del sistema." },
        { id: "t-entrada-salida", name: "Entrada/Salida", description: "Permiten que el microprocesador interactúe con dispositivos periféricos (teclados, pantallas, impresoras)." },
        { id: "t-reloj", name: "Reloj", description: "Conectados al generador de reloj, proporcionan una señal periódica que sincroniza todas las operaciones internas del microprocesador." },
        { id: "t-interrupciones", name: "Interrupciones", description: "Permiten que otros dispositivos envíen señales para interrumpir la operación normal y ejecutar una rutina de atención urgente." },
        { id: "t-reset", name: "Reset", description: "Permiten reiniciar el microprocesador a un estado inicial." },
      ],
    } as TerminalsData,
  },
  {
    id: "diagramas-bloques",
    title: "Diagrama de Bloques",
    content: "Un diagrama de bloques es una representación gráfica simplificada de la estructura y operatividad de un sistema o proceso, enfocándose en las relaciones funcionales y el flujo de información. Construye un diagrama básico de un sistema microprogramable.",
    interactiveComponent: 'blockDiagramBuilder',
    data: {
      baseDiagramImage: "https://via.placeholder.com/600x400/ccfbf1/0d9488?text=Diagrama+Base+Bloques",
      components: [
        { id: "comp-cpu", name: "Microprocesador (CPU)", type: "cpu", description: "El cerebro del sistema, ejecuta instrucciones y procesa datos." },
        { id: "comp-ram", name: "Memoria RAM", type: "memory", description: "Memoria volátil de lectura y escritura para datos temporales de programas." },
        { id: "comp-rom", name: "Memoria ROM", type: "memory", description: "Memoria de solo lectura que almacena el firmware y programas de arranque." },
        { id: "comp-io", name: "Unidades E/S", type: "io", description: "Permiten la comunicación entre el sistema y dispositivos externos." },
      ],
      targetSlots: [
        { id: "slot-cpu", label: "CPU", correctComponentType: "cpu", position: { left: 45, top: 10, width: 10, height: 10 } },
        { id: "slot-mem", label: "Memoria", correctComponentType: "memory", position: { left: 20, top: 40, width: 15, height: 15 } },
        { id: "slot-io", label: "E/S", correctComponentType: "io", position: { left: 45, top: 70, width: 10, height: 10 } },
      ],
    } as DiagramBuilderData,
  },
  {
    id: "quiz-bloques",
    title: "Evaluación",
    content: "Seccion para evaluar lo aprendido",
    interactiveComponent: 'blockDiagramQuiz',
    data: {
      questions: [
        {
          id: 'qa2-q1',
          question: '¿Qué característica principal diferencia la Arquitectura Harvard de la Von Neumann?',
          options: [
            { id: 'qa2-optA', text: 'Utiliza un único bus para datos e instrucciones.' },
            { id: 'qa2-optB', text: 'Tiene memorias y buses separados para datos e instrucciones.' },
            { id: 'qa2-optC', text: 'Solo puede ejecutar una instrucción a la vez.' },
          ],
          correctAnswerId: 'qa2-optB',
          explanation: 'La Arquitectura Harvard usa memorias y buses distintos, permitiendo acceso simultáneo a datos e instrucciones.'
        },
        {
          id: 'qa2-q2',
          question: '¿Qué tipo de terminal en un microprocesador es responsable de sincronizar todas las operaciones internas?',
          options: [
            { id: 'qa2-optA', text: 'Terminales de Datos' },
            { id: 'qa2-optB', text: 'Terminales de Control' },
            { id: 'qa2-optC', text: 'Terminal de Reloj (CLK)' },
          ],
          correctAnswerId: 'qa2-optC',
          explanation: 'La señal de reloj (CLK) es fundamental para la sincronización de todas las operaciones dentro del microprocesador.'
        },
        {
          id: 'qa2-q3',
          question: 'En un diagrama de bloques de un sistema microprogramable, ¿qué componente permite la comunicación con periféricos como teclados o pantallas?',
          options: [
            { id: 'qa2-optA', text: 'Memoria ROM' },
            { id: 'qa2-optB', text: 'Unidades E/S' },
            { id: 'qa2-optC', text: 'CPU' },
          ],
          correctAnswerId: 'qa2-optB',
          explanation: 'Las Unidades de Entrada/Salida (E/S) son las interfaces con los dispositivos externos.'
        },
      ],
    } as EvaluationData, 
  }
];