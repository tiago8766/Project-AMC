
import { ActivityDetailSection } from '../../../interfaces/Actividades';

export const ArquitecturaPic: ActivityDetailSection[] = [
  {
    id: 'conceptos-clave-pic',
    title: 'Conceptos Clave de Arquitectura PIC',
    content: `Explora la arquitectura de los microcontroladores PIC, sus gamas, y los tipos de memoria de programa y datos.`,
    interactiveComponent: 'picConceptsViewer', 
    data: {
      type: 'picConceptsViewer',
      concepts: [
        {
          term: 'Arquitectura de los PIC',
          definition: 'Estructura de hardware desarrollada por Microchip Technology, ampliamente utilizada en sistemas embebidos por su simplicidad, bajo costo y facilidad de programación.',
        },
        {
          term: 'Gamas de PIC',
          definition: 'Clasificación de los PIC por su complejidad y capacidad.',
          examples: [
            { type: 'Gama baja', description: '8 bits, como el PIC10, PIC12, PIC16. Simples y económicos.' },
            { type: 'Gama media', description: 'PIC16 más avanzado. Más periféricos y memoria.' },
            { type: 'Gama alta', description: 'PIC18, PIC24, dsPIC. Más potentes, con capacidades extendidas.' },
          ],
        },
        {
          term: 'Memoria de Programa',
          definition: 'Memoria no volátil (Flash) que guarda el código del usuario (firmware), incluso cuando el dispositivo está apagado. La CPU lee instrucciones de aquí.',
        },
        {
          term: 'Memoria de Datos',
          definition: 'Memoria RAM donde se almacenan temporalmente variables, registros, pilas y datos intermedios durante la ejecución. Se puede leer y escribir dinámicamente.',
        },
        {
          term: 'Mapa de Memoria (SFR y GPR)',
          definition: 'La memoria RAM se divide en bancos. SFRs (Special Function Registers) son registros de control para hardware; GPRs (General Purpose Registers) son para variables del usuario.',
        },
        {
          term: 'Memoria EEPROM',
          definition: 'Memoria no volátil que permite guardar datos de configuración incluso cuando el microcontrolador se apaga, ideal para persistencia de datos.'
        },
        {
          term: 'Modos de Direccionamiento',
          definition: 'Métodos para especificar la ubicación de los operandos en las instrucciones.',
          examples: [
            { type: 'Inmediato', description: 'El valor está directamente en la instrucción. Ej: MOVWF 0x3A' },
            { type: 'Directo', description: 'Se especifica la dirección de memoria. Ej: MOVWF PORTB' },
            { type: 'Indirecto', description: 'Usa un registro puntero (FSR) y accede con INDF.' },
            { type: 'Relativo', description: 'Para saltos condicionales con desplazamiento.' },
            { type: 'Por bit', description: 'Permite manipular bits individuales.' },
          ],
        },
      ],
    },
  },
  {
    id: 'identificacion-uso-componentes',
    title: 'Identificación y Uso de Componentes y Periféricos',
    content: `Identifica los componentes clave de un PIC, sus instrucciones básicas y cómo interactúan los periféricos en aplicaciones sencillas.`,
    interactiveComponent: 'picHardwareExplorer', 
    data: {
      type: 'picHardwareExplorer',
      components: [
        { name: 'CPU', description: 'El "cerebro" del microcontrolador. Ejecuta las instrucciones del programa, controlando el flujo lógico y operaciones aritméticas.',  }, 
        { name: 'Memoria de Programa (ROM/Flash)', description: 'Almacena el código que el microcontrolador ejecutará. Suele ser regrabable (Flash).', },
        { name: 'Memoria de Datos (RAM)', description: 'Guarda temporalmente datos, variables y resultados intermedios durante la ejecución.',},
        { name: 'Puertos de Entrada/Salida (GPIO)', description: 'Permiten interactuar con el mundo exterior (sensores, LEDs, relés).',},
        { name: 'Timer/Contador', description: 'Mide el tiempo o cuenta eventos externos, generando interrupciones o retardos.', },
        { name: 'Control de Interrupciones', description: 'Gestiona la suspensión temporal del programa para atender eventos urgentes.', },
      ],
      instructions: [
        { name: 'MOVLW', description: 'Carga un valor constante (literal) en el registro de trabajo W. Ejemplo: `MOVLW 0x3A`', exampleCode: 'MOVLW 0x3A' },
        { name: 'MOVWF', description: 'Mueve el contenido del registro W a una dirección específica de memoria RAM o registro especial (SFR). Ejemplo: `MOVWF PORTB`', exampleCode: 'MOVWF PORTB' },
        { name: 'GOTO', description: 'Salto incondicional a una dirección específica del programa. Útil para bucles. Ejemplo: `GOTO Loop`', exampleCode: 'GOTO Loop' },
      ],
      peripheralsUse: {
        scenario: 'Encender y apagar un LED con un botón.',
        peripherals: [
          'Entradas Digitales (GPIO como entrada para el botón).',
          'Salidas Digitales (GPIO como salida para el LED).',
          'Temporizador o retardo por software (opcional, para evitar el rebote del botón).'
        ],
        interaction: 'El pin del botón se configura como entrada (ej. RA0) y el del LED como salida (ej. RA1). El PIC lee el estado del botón; si se presiona, alterna el estado del LED. Se puede usar un retardo para el antirrebote.'
      }
    },
  },
  {
    id: 'direccionamiento-interrupciones-registros',
    title: 'Direccionamiento, Interrupciones y Registros',
    content: `Profundiza en los modos de direccionamiento, el manejo de interrupciones y la identificación/manipulación de registros en los PIC.`,
    interactiveComponent: 'picRegistersAndAddressing',
    data: {
      type: 'picRegistersAndAddressing',
      addressingModes: [
        {
          mode: 'Direccionamiento Directo',
          description: 'La instrucción especifica directamente la dirección del operando (registro o posición de memoria).',
          example: 'MOVWF 0x20 ; Mueve el contenido de W a la dirección de memoria 0x20.',
        },
        {
          mode: 'Direccionamiento Indirecto',
          description: 'La dirección del operando se guarda en un registro puntero (FSR). Se accede al dato usando INDF, que actúa como un "puntero".',
          example: 'MOVLW 0x20 ; Carga 0x20 en W\nMOVWF FSR ; Mueve 0x20 a FSR\nMOVF INDF, W ; Lee el contenido de la dirección apuntada por FSR a W.',
        },
      ],
      interruptConcepts: {
        definition: 'Una interrupción es un mecanismo para suspender temporalmente la ejecución normal del programa para atender un evento urgente (ISR).',
        eventExample: 'Interrupción por cambio de estado en un pin de entrada (ej. INTO al presionar un botón).',
        utility: [
          'Evitan la espera activa (polling), ahorrando procesamiento.',
          'Permiten respuesta inmediata a eventos críticos.',
          'Facilitan la multitarea en sistemas con recursos limitados.'
        ],
      },
      registerIdentification: {
        description: 'Mapa de memoria parcial del PIC16F84A, mostrando SFRs y GPRs.',
        registers: [
          { address: '0x00', register: 'INDF', type: 'SFR', function: 'Acceso indirecto a memoria' },
          { address: '0x01', register: 'TMRO', type: 'SFR', function: 'Temporizador de 8 bits' },
          { address: '0x02', register: 'PCL', type: 'SFR', function: 'Byte menos significativo del contador de programa' },
          { address: '0x03', register: 'STATUS', type: 'SFR', function: 'Estado de la CPU y selección de banco' },
          { address: '0x04', register: 'FSR', type: 'SFR', function: 'Registro puntero de acceso indirecto' },
          { address: '0x05', register: 'PORTA', type: 'SFR', function: 'Entrada/salida digital del puerto A (RA0-RA4)' },
          { address: '0x06', register: 'PORTB', type: 'SFR', function: 'Entrada/salida digital del puerto B (RB0-RB7)' },
          { address: '0x08', register: 'EEDATA', type: 'SFR', function: 'Datos de memoria EEPROM' },
          { address: '0x09', register: 'EEADR', type: 'SFR', function: 'Dirección de memoria EEPROM' },
          { address: '0x0A', register: 'PCLATH', type: 'SFR', function: 'Byte alto del contador de programa' },
          { address: '0x0B', register: 'INTCON', type: 'SFR', function: 'Control e indicadores de interrupciones' },
          { address: '0x0C-0x4F', register: 'GPR', type: 'GPR', function: 'Registros de propósito general' },
        ],
        
        registerManipulationCode: `
; Rutina para cambiar bancos y manipular registros
; Asumiendo que estamos en el banco 1 y queremos ir al banco 0
bcf STATUS, RP0 ; RP0 = 0
bcf STATUS, RP1 ; RP1 = 0
; Ahora estamos en el banco 0

; Escribir 0xAA en PORTA (que está en el banco 0)
movlw 0xAA
movwf PORTA

; Regresar al banco 1 (RP1:RP0 = 01)
bsf STATUS, RP0 ; RP0 = 1
bcf STATUS, RP1 ; RP1 = 0
; Ahora estamos en el banco 1

; Escribir 0x55 en PORTB (que puede estar en el banco 0 o 1, dependiendo del PIC)
movlw 0x55
movwf PORTB
`
      }
    },
  },
  {
    id: 'mapa-memoria-personalizado',
    title: 'Mapa de Memoria y Ejercicios Avanzados',
    content: `Resuelve ejercicios de mapa de memoria incompleto y diseña tu propio mapa con SFRs y GPRs.`,
    interactiveComponent: 'memoryMapBuilder', 
    data: {
      type: 'memoryMapBuilder',
      incompleteMapExercise: {
        address: '0x05',
        question: '¿Qué registro se encuentra en la dirección 0x05 (en el banco 0) y qué haría si escribes 0xF0 en esa dirección?',
        answerRegister: 'PORTA',
        answerEffect: 'Escribir 0xF0 en PORTA hará que los pines RA4 a RA7 se activen (alto) y RA0 a RA3 se apaguen (bajo), si y solo si esos pines están configurados como salidas.',
      },
      customMapDesign: {
        description: 'Diseña tu propio mapa de memoria con 8 registros SFR y 16 GPRs, dividiendo la memoria en 2 bancos.',
        template: [ 
          { address: '0x00', bank0: 'INDF', bank1: 'INDF', type: 'SFR (Indirecto)' },
          { address: '0x01', bank0: 'STATUS', bank1: 'STATUS', type: 'SFR (Estado CPU)' },
          { address: '0x02', bank0: 'PORTX', bank1: 'TRISX', type: 'SFR (GPIO/Dir)' },
          { address: '0x03', bank0: 'TIMERO', bank1: 'OPTION', type: 'SFR (Temporizador/Ctrl)' },
          { address: '0x04', bank0: 'UARTDATA', bank1: 'UARTCTRL', type: 'SFR (UART)' },
          { address: '0x05', bank0: 'SPIBUF', bank1: 'SPICTRL', type: 'SFR (SPI)' },
          { address: '0x06', bank0: 'ADCRES', bank1: 'ADCCONF', type: 'SFR (ADC resultado/config)' },
          { address: '0x07', bank0: 'INTFLAGS', bank1: 'INTENABLE', type: 'SFR (Interrupciones)' },
          { address: '0x08-0x0F', bank0: 'GPR0-GPR7', bank1: 'GPR8-GPR15', type: 'GPR (Propósito general)' },
        ],
        notes: [
          'PORTX: Registro de entrada/salida digital.',
          'TRISX: Dirección de los pines de PORTX (1=entrada, 0=salida).',
          'UARTDATA: Buffer de transmisión/recepción serial.',
          'UARTCTRL: Configuración del UART (baudrate, bits, etc.).',
          'SPIBUF: Buffer de datos SPI.',
          'SPICTRL: Control del módulo SPI.',
          'ADCRES: Resultado de conversión analógica.',
          'ADCCONF: Configuración del ADC (canal, justificación, etc.).',
          'INTFLAGS: Banderas de interrupción.',
          'INTENABLE: Habilitadores de interrupción.',
        ]
      }
    }
  },
 
];