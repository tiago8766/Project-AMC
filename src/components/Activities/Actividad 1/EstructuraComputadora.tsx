
import { ActivityDetailSection, FlowDiagramData, MemoryPyramidData, IOSimulatorData, EvaluationData } from '../../../interfaces/Actividades';

export const estructuraComputadoraSections: ActivityDetailSection[] = [
  {
    id: "definicion",
    title: "01. Definición",
    content: "El modo en que los componentes tanto de hardware (CPU, RAM, Placa Base, etc.) como de software (Sistema Operativo, programas, etc.) están interrelacionados entre sí, definiendo la forma en que la computadora procesa, almacena y transmite la información para ejecutar tareas de manera eficiente.",
   
  },
  {
    id: "procesamiento",
    title: "02. Procesamiento",
    content: "Un dispositivo de procesamiento es un elemento esencial de un computador, este es el encargado de llevar a cabo operaciones aritméticas, lógicas y de control sobre los datos. Su función es clave para el manejo de la información y la ejecución de tareas dentro del sistema. Tiene por nombre Unidad Central de Procesamiento (CPU, Central Processing Unit), aunque frecuentemente se le llama procesador. Como definición breve tenemos que la CPU es el cerebro del ordenador, donde se coordinan y ejecutan las operaciones necesarias para el funcionamiento del sistema.",
    
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
   
    } as EvaluationData,
  },
];