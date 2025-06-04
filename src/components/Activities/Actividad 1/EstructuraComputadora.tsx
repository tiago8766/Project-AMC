
import { ActivityDetailSection, FlowDiagramData, MemoryPyramidData, IOSimulatorData, EvaluationData } from '../../../interfaces/Actividades';

export const estructuraComputadoraSections: ActivityDetailSection[] = [
  {
    id: "definicion",
    title: "01. Definición",
    content: "El modo en que los componentes tanto de hardware (CPU, RAM, Placa Base, etc.) como de software (Sistema Operativo, programas, etc.) están interrelacionados entre sí, definiendo la forma en que la computadora procesa, almacena y transmite la información para ejecutar tareas de manera eficiente.",
    image: "https://via.placeholder.com/600x300/a7f3d0/10b981?text=Definicion+Computadora",
  },
  {
    id: "procesamiento",
    title: "02. Procesamiento",
    content: "Un dispositivo de procesamiento es un elemento esencial de un computador, este es el encargado de llevar a cabo operaciones aritméticas, lógicas y de control sobre los datos. Su función es clave para el manejo de la información y la ejecución de tareas dentro del sistema. Tiene por nombre Unidad Central de Procesamiento (CPU, Central Processing Unit), aunque frecuentemente se le llama procesador. Como definición breve tenemos que la CPU es el cerebro del ordenador, donde se coordinan y ejecutan las operaciones necesarias para el funcionamiento del sistema.",
    image: "https://via.placeholder.com/600x300/bfdbfe/3b82f6?text=Procesamiento",
    interactiveComponent: 'flowDiagram',
    data: {
      flowSteps: [
        { id: "transferencia", name: "Transferencia", desc: "Movimiento de datos o recursos de un lugar a otro. Puede ocurrir entre componentes dentro de una misma computadora (como la transferencia de datos entre la CPU y la RAM), o entre computadoras distintas a través de redes. Por ejemplo, cuando copias un archivo de tu computadora a una unidad USB, estás realizando una transferencia de datos." },
        { id: "control", name: "Control", desc: "Implica la supervisión y gestión de los procesos para asegurar que se ejecuten correctamente y de acuerdo con las reglas o parámetros establecidas. Por ejemplo, cuando abres un programa en tu computadora, el sistema operativo gestiona el uso de la CPU para que el programa funcione sin conflictos con otros procesos." },
        { id: "almacenamiento", name: "Almacenamiento", desc: "Es la acción de guardar datos o recursos para su uso posterior. Esto puede ser en memoria, discos duros, bases de datos, etc. Este proceso asegura que la información no se pierda entre los usos y pueda ser recuperada cuando sea necesario." },
        { id: "procesamiento", name: "Procesamiento", desc: "Consiste en la manipulación o transformación de datos para producir información útil o para realizar una tarea específica. Por ejemplo, cuando ejecutas una operación matemática en una calculadora, la CPU procesa los números y te muestra el resultado." },
      ],
      cpuComponents: [
        { name: "Unidad de control", desc: "Controla el funcionamiento de la CPU y por tanto del computador." },
        { name: "Unidad aritmético-lógica (ALU)", desc: "Lleva a cabo las funciones de procesamiento de datos del computador." },
        { name: "Registros", desc: "Proporcionan almacenamiento interno a la CPU." },
        { name: "Interconexiones CPU", desc: "Mecanismos que proporcionan comunicación entre la unidad de control, la ALU y los registros." },
      ]
    } as FlowDiagramData,
  },
  {
    id: "memoria",
    title: "03. Sistema de Memoria",
    content: "Todo computador necesita un sistema de memoria para almacenar los programas que se ejecutan y los datos necesarios para ejecutar estos programas. Los programas que ejecuta el procesador central están almacenados en memoria. La memoria es una secuencia de celdas de almacenamiento que pueden ser direccionadas en forma individual o en bloque.",
    image: "https://via.placeholder.com/600x300/d1fae5/059669?text=Sistema+Memoria",
    interactiveComponent: 'memoryPyramid',
    data: {
      hierarchy: [
        { level: "Registros", desc: "Espacio de memoria dentro del procesador, acceso más rápido." },
        { level: "Caché", desc: "Memoria de capacidad reducida pero más rápida que la memoria principal, para reducir el tiempo de acceso." },
        { level: "Memoria principal", desc: "Almacena programas a ejecutar y sus datos. Tecnología DRAM." },
        { level: "Almacenamiento fuera de la tarjeta (Ej. Disco magnético, CD-ROM, DVD)", desc: "Dispositivos de almacenamiento secundario." },
        { level: "Almacenamiento fuera de línea (Ej. Cinta magnética, WORM)", desc: "Dispositivos de almacenamiento secundario." }
      ],
      characteristics: [
        { category: "Ubicación", items: ["Procesador", "Interna (principal)", "Externa (secundaria)"] },
        { category: "Capacidad", items: ["Tamaño de la palabra", "Número de palabras"] },
        { category: "Unidad de transferencia", items: ["Palabra", "Bloque"] },
        { category: "Método de acceso", items: ["Acceso secuencial", "Acceso directo", "Acceso aleatorio", "Acceso asociativo"] },
        { category: "Prestaciones", items: ["Tiempo de acceso", "Tiempo de ciclo", "Velocidad de transferencia"] },
        { category: "Dispositivo físico", items: ["Semiconductor", "Soporte magnético", "Soporte óptico", "Magneto-óptico"] },
        { category: "Características físicas", items: ["Volátil/no volátil", "Borrable/no borrable"] },
        { category: "Organización", items: [""] }
      ]
    } as MemoryPyramidData,
  },
  {
    id: "entrada-salida",
    title: "04. Sistema de Entrada-Salida",
    content: "Los sistemas de entradas y salidas son componentes que permiten que la computadora reciba información (entrada) y envíe información (salida) para interactuar con los usuarios o con otros sistemas. Los dispositivos de entrada introducen datos a la computadora y los de salida muestran o transmiten datos desde la computadora al exterior.",
    image: "https://via.placeholder.com/600x300/c7d2fe/6366f1?text=Input+Output",
    interactiveComponent: 'ioClassifier',
    data: {
      devices: [
        { name: "Teclado", type: "manual-entrada" },
        { name: "Mouse", type: "manual-entrada" },
        { name: "Pantalla táctil", type: "manual-entrada" },
        { name: "Escáner", type: "automatico-entrada" },
        { name: "Micrófono", type: "automatico-entrada" },
        { name: "Cámara", type: "automatico-entrada" },
        { name: "Monitor", type: "visual-salida" },
        { name: "Proyector", type: "visual-salida" },
        { name: "Impresora", type: "fisico-salida" },
        { name: "Fotocopiadora", type: "fisico-salida" },
        { name: "Memorias USB", type: "entrada-salida-almacenamiento" },
        { name: "Discos duros", type: "entrada-salida-almacenamiento" },
        { name: "Tarjetas de red", type: "entrada-salida-comunicacion" },
        { name: "Routers", type: "entrada-salida-comunicacion" },
        { name: "Módems", type: "entrada-salida-comunicacion" },
      ],
      communication: [
        { name: "E/S programada", desc: "La CPU controla directamente el dispositivo y espera su respuesta, puede hacer que la CPU se quede inactiva mientras el dispositivo trabaja (no óptimo)." },
        { name: "E/S por interrupciones", desc: "El dispositivo notifica a la CPU cuando está listo para enviar o recibir datos, liberando la CPU para otras tareas." },
        { name: "Acceso directo a memoria (DMA)", desc: "Permite que los dispositivos accedan a la memoria sin intervención de la CPU." },
      ]
    } as IOSimulatorData,
  },
  {
    id: "evaluacion",
    title: "05. Evaluación",
    content: "Seccion para evaluar lo aprendido",
    interactiveComponent: 'evaluation',
    data: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué componente de la CPU se encarga de realizar operaciones aritméticas y lógicas?',
          options: [
            { id: 'opt1', text: 'Unidad de Control' },
            { id: 'opt2', text: 'Unidad Aritmético-Lógica (ALU)' },
            { id: 'opt3', text: 'Registros' },
            { id: 'opt4', text: 'Memoria Caché' },
          ],
          correctAnswerId: 'opt2',
          explanation: 'La ALU es la responsable de todas las operaciones matemáticas y lógicas.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la característica principal de la memoria RAM?',
          options: [
            { id: 'opt1', text: 'No pierde datos al apagar el equipo' },
            { id: 'opt2', text: 'Es más lenta que el disco duro' },
            { id: 'opt3', text: 'Es volátil, pierde datos sin energía' },
            { id: 'opt4', text: 'Almacena el firmware de la BIOS' },
          ],
          correctAnswerId: 'opt3',
          explanation: 'La RAM es volátil, lo que significa que su contenido se borra al apagar el equipo.'
        },
        {
          id: 'q3',
          question: 'Según la "Jerarquía de Memoria", ¿qué tipo de memoria es la más rápida pero también la más pequeña y costosa?',
          options: [
            { id: 'optA', text: 'Almacenamiento Secundario (HDD/SSD)' },
            { id: 'optB', text: 'Memoria Principal (RAM)' },
            { id: 'optC', text: 'Registros' },
            { id: 'optD', text: 'Memoria Cache' },
          ],
          correctAnswerId: 'optC',
          explanation: 'Los registros están directamente en la CPU y son los más rápidos, aunque de menor capacidad.'
        },
        {
          id: 'q4',
          question: 'Un "Teclado" se clasifica principalmente como un dispositivo de:',
          options: [
            { id: 'optA', text: 'Salida' },
            { id: 'optB', text: 'Entrada' },
            { id: 'optC', text: 'Ambos (Entrada y Salida)' },
          ],
          correctAnswerId: 'optB',
          explanation: 'Un teclado es un dispositivo de entrada manual.'
        },
        {
          id: 'q5',
          question: '¿Qué tipo de dispositivo permite tanto la entrada como la salida de información, como una "Memoria USB"?',
          options: [
            { id: 'optA', text: 'Solo Entrada' },
            { id: 'optB', text: 'Solo Salida' },
            { id: 'optC', text: 'Ambos (Entrada y Salida)' },
          ],
          correctAnswerId: 'optC',
          explanation: 'Una memoria USB es un dispositivo de almacenamiento que puede leer y escribir datos, por lo que es de entrada y salida.'
        },
      ],
    } as EvaluationData,
  },
];