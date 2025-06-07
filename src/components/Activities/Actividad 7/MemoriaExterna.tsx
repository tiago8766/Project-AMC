// src/data/actividades/memoriaExternaSections.ts
import { ActivityDetailSection } from '../../../interfaces/Actividades';

export const MemoriaExterna: ActivityDetailSection[] = [
  {
    id: 'conceptos-fundamentales-memoria',
    title: 'Conceptos Fundamentales de Memoria y Periféricos',
    content: `Explora la clasificación de la memoria en microcontroladores y sus funciones principales, así como los periféricos clave.`,
    interactiveComponent: 'conceptosMemoriaViewer', 
    data: {
      type: 'conceptosMemoriaViewer',
      concepts: [
        {
          term: 'Almacenamiento de Programa (Memoria Flash)',
          definition: 'Memoria no volátil donde se guarda el firmware del microcontrolador. Mantiene los datos incluso sin energía.'
        },
        {
          term: 'Registros Especiales (SFRs)',
          definition: 'Registros internos del microcontrolador con funciones específicas para controlar operaciones y periféricos.'
        },
        {
          term: 'Memoria RAM',
          definition: 'Memoria volátil para almacenamiento temporal de datos y variables durante la ejecución del programa.'
        },
        {
          term: 'Memoria EEPROM',
          definition: 'Memoria no volátil para datos de configuración que deben persistir, pero que pueden ser modificados eléctricamente.'
        },
        {
          term: 'Entradas/Salidas (I/O)',
          definition: 'Pines y circuitos que permiten al microcontrolador interactuar con el mundo exterior (sensores, actuadores, otros chips).'
        }
      ]
    },
  },
  {
    id: 'tecnicas-acceso-memoria-externa',
    title: 'Técnicas de Acceso a Memoria Externa',
    content: `Comprende las dos principales formas en que un microcontrolador puede acceder a memoria fuera de su chip: memoria mapeada e I/O indirecto.`,
    interactiveComponent: 'accesoMemoriaExplorer', 
    data: {
      type: 'accesoMemoriaExplorer',
      methods: [
        {
          title: 'Memoria Mapeada (Memory-Mapped I/O)',
          description: 'La memoria externa se integra en el espacio de direcciones del microcontrolador. Acceder a una dirección de memoria específica es equivalente a acceder directamente a la celda de memoria externa. Fácil de programar usando punteros o acceso directo.',
          diagram: 'diagram_memory_mapped_io.png' 
        },
        {
          title: 'Acceso mediante Puertos I/O (Indirecto)',
          description: 'El microcontrolador usa instrucciones especiales (como IN, OUT) o registros para comunicarse con la memoria a través de buses o protocolos específicos (SPI, I2C, etc.). Requiere un manejo más específico por parte del programador.',
          diagram: 'diagram_port_io.png' 
        }
      ]
    },
  },
  {
    id: 'programacion-precauciones-memoria-externa',
    title: 'Programación y Precauciones con Memoria Externa',
    content: `Aprende las técnicas de programación y las consideraciones críticas al trabajar con memoria externa para evitar errores y optimizar el rendimiento.`,
    interactiveComponent: 'codeSnippetsReviewer', 
    data: {
      type: 'codeSnippetsReviewer',
      snippets: [
        {
          title: 'Uso de `volatile` para acceso a hardware',
          code: `volatile unsigned char *porta = (volatile unsigned char *)0x1000; // Puntero a un puerto en 0x1000\n\nvoid setup() {\n  *porta = 0xFF; // Escribir en el puerto\n  unsigned char val = *porta; // Leer del puerto\n}`,
          explanation: 'La palabra clave `volatile` indica al compilador que la variable puede ser modificada por hardware externo, previniendo optimizaciones que podrían llevar a lecturas o escrituras incorrectas.'
        },
        {
          title: 'Consideración de Tiempos de Acceso',
          code: `// Ejemplo conceptual, la implementación varía según el MCU\n\nvoid write_external_mem(unsigned int addr, unsigned char data) {\n  // Lógica para escribir en memoria externa\n  // Podría requerir un delay o esperar una señal de listo del hardware externo\n  delayMicroseconds(10); // Ejemplo: espera por el ciclo de escritura\n}\n`,
          explanation: 'La memoria externa puede ser más lenta que la interna. Es crucial considerar los tiempos de acceso y, si es necesario, añadir retardos o mecanismos de espera hasta que la operación esté completa.'
        },
        {
          title: 'Sincronización en Acceso Concurrente',
          code: `// Código de ejemplo conceptual con semáforos/mutex\n\nvoid task1() {\n  acquire_mutex(MEM_MUTEX);\n  // Acceso seguro a memoria externa\n  release_mutex(MEM_MUTEX);\n}\n\nvoid task2() {\n  acquire_mutex(MEM_MUTEX);\n  // Acceso seguro a memoria externa\n  release_mutex(MEM_MUTEX);\n}`,
          explanation: 'En sistemas con múltiples tareas o interrupciones que acceden a la misma memoria externa, se deben usar mecanismos de sincronización (como mutexes o semáforos) para evitar corrupción de datos.'
        },
      ]
    }
  },
];