import { ActivityDetailSection } from '../../../interfaces/Actividades';

export const PuertosParalelosTimers: ActivityDetailSection[] = [
  {
    id: 'puertos-paralelos-conceptos',
    title: 'Puertos de Entrada y Salida Paralela',
    content: `Explora el funcionamiento, características y usos de los puertos paralelos en microcontroladores y cómo se conectan los periféricos comunes.`,
    interactiveComponent: 'parallelPortsViewer',
    data: {
      type: 'parallelPortsViewer',
      concepts: [
        {
          name: 'Puertos Paralelos (A, B, C, D, E, F, G)',
          description: 'Conjuntos de pines en un microcontrolador que permiten la transferencia de múltiples bits de datos simultáneamente. Son esenciales para la comunicación paralela.',
          details: [
            'Puerto A: Usos generales, entrada/salida.',
            'Puerto B: Usos generales, entrada/salida, a menudo con funciones de interrupción.',
            'Puerto C, D, E, F, G: Otros puertos multipropósito para diversas funciones de E/S.',
          ],
        },
        {
          name: 'Funciones Principales de los Puertos',
          description: 'Los puertos se utilizan para:',
          details: [
            'Envío de datos a dispositivos (como impresoras, pantallas LCD, controladores industriales).',
            'Recepción de señales desde dispositivos (como escáneres, sensores y actuadores, instrumentos de laboratorio).',
            'Sincronización mediante señales de control (ej. STROBE, ACK, BUSY).'
          ],
        },
        {
          name: 'Características de la Comunicación Paralela',
          description: 'Ventajas y desventajas de la transmisión paralela de datos:',
          details: [
            'Transmisión simultánea por múltiples líneas (bits en paralelo).',
            'Alta velocidad para distancias cortas (mayor ancho de banda).',
            'Mayor número de pines y cables requeridos.',
            'Mayor susceptibilidad al ruido en largas distancias.'
          ],
        },
        {
          name: 'Conexión de Periféricos Comunes (Concepto e Importancia)',
          description: 'Permiten integrar dispositivos externos al sistema y establecer una comunicación lógica entre el circuito electrónico y el dispositivo. Su importancia radica en ampliar la funcionalidad del sistema y permitir interacción con el entorno.',
        },
      ],
    },
  },
  {
    id: 'temporizadores-ejercicios-arduino',
    title: 'Sistema de Temporizadores y Ejercicios con Arduino',
    content: `Aplica conocimientos sobre Timer 0, Timer 1, Timer 2 y módulos CCP en diversos programas para Arduino y PIC.`,
    interactiveComponent: 'arduinoTimersAndIOViewer',
    data: {
      type: 'arduinoTimersAndIOViewer',
      exercises: [
        {
          id: 'timer0-base-tiempo',
          title: '1. Estudio del Timer 0 como Generador de Base de Tiempo',
          description: 'Configuración del Timer 0 para generar retardos e incrementar un contador en cada desbordamiento.',
          code: `
#include <xc.h>
#define _XTAL_FREQ 4000000

volatile unsigned int contador = 0;

void __interrupt() ISR() {
  if (INTCONbits.T0IF) {
    INTCONbits.T0IF = 0;
    TMR0 = 6;
    contador++;
  }
}

void configurar_Timer0_como_base_tiempo() {
  OPTION_REG = 0b00000111;
  INTCONbits.T0IE = 1;
  INTCONbits.T0IF = 0;
  INTCONbits.GIE = 1;
  TMR0 = 6;
}

void main(void) {
  TRISB = 0x00;
  PORTB = 0x00;
  configurar_Timer0_como_base_tiempo();

  while (1) {
    if (contador >= 1000) {
      PORTBbits.RB1 = ~PORTBbits.RB1;
      contador = 0;
    }
  }
}
          `,
          diagram: 'timer0_base_tiempo_circuit.png',
        },
        {
          id: 'timer0-contador-eventos',
          title: '2. El Timer 0 como Contador de Eventos Externos',
          description: 'Configuración del Timer 0 para contar pulsos en su pin T0CKI.',
          code: `
#include <xc.h>
#define _XTAL_FREQ 4000000

void configurar_Timer0_como_contador_eventos() {
  OPTION_REG = 0b00100000;
  TMR0 = 0;
  INTCONbits.T0IE = 1;
  INTCONbits.T0IF = 0;
  INTCONbits.GIE = 1;
}

void main(void) {
  TRISA = 0xFF;
  TRISB = 0x00;
  PORTB = 0x00;
  configurar_Timer0_como_contador_eventos();

  while(1) {
    PORTB = TMR0;
  }
}
          `,
          diagram: 'timer0_contador_circuit.png',
        },
        {
          id: 'retardo-timer0',
          title: '3. Rutinas de Retardo con Timer 0',
          description: 'Función de retardo que espera hasta que el Timer 0 desborda.',
          code: `
#include <xc.h>
#define _XTAL_FREQ 4000000

void retardo_usando_Timer0(unsigned int ciclos_desborde) {
  for (unsigned int i = 0; i < ciclos_desborde; i++) {
    TMR0 = 0;
    INTCONbits.T0IF = 0;
    while (!INTCONbits.T0IF);
  }
}

void main(void) {
  TRISB = 0x00;
  PORTB = 0x00;
  OPTION_REG = 0b00000111;

  while(1) {
    PORTBbits.RB0 = 1;
    retardo_usando_Timer0(100);
    PORTBbits.RB0 = 0;
    retardo_usando_Timer0(100);
  }
}
          `,
        },
        {
          id: 'generacion-senal-periodica-timer0',
          title: '4. Generación de Señales Periódicas utilizando el Timer 0',
          description: 'Alternar un pin (RB0) para generar una onda cuadrada usando el desbordamiento del Timer0.',
          code: `
#include <xc.h>
#define _XTAL_FREQ 4000000

void main(void) {
  TRISBbits.TRISB0 = 0;
  PORTBbits.RB0 = 0;

  OPTION_REG = 0b00000000;
  INTCONbits.T0IE = 1;
  INTCONbits.GIE = 1;
  INTCONbits.T0IF = 0;

  while (1) {}
}

void __interrupt() ISR() {
  if (INTCONbits.T0IF) {
    INTCONbits.T0IF = 0;
    TMR0 = 0;
    PORTBbits.RB0 = ~PORTBbits.RB0;
  }
}
          `,
        },
        {
          id: 'configuracion-timer1-timer2',
          title: '5. Estudio del Timer1, Timer2 y Módulos CCP (Conceptos y Configuración)',
          description: 'Muestra las configuraciones básicas de registros T1CON y T2CON para Timer1 y Timer2.',
          code: `
void configurar_Timer1() {
  T1CON = 0b00110001;
  TMR1H = 0;
  TMR1L = 0;
}

void configurar_Timer2() {
  T2CON = 0b00000111;
  PR2 = 255;
}

void main(void) {
  while(1);
}
          `,
        },
        {
          id: 'puerto-salida-valor-binario',
          title: '6. Configurar Puerto como Salida y Enviar Valor Binario',
          description: 'Configura un puerto (ej. PORTA) como salida y envía el valor binario `0b10101010` a sus pines.',
          code: `
// Para PIC
#include <xc.h>
void main() {
  TRISA = 0x00;
  PORTA = 0b10101010;
  while(1);
}

// Para Arduino
void setup() {
  DDRD = 0xFF;
  PORTD = 0b10101010;
}
void loop() {}
          `,
        },
        {
          id: 'detectar-dispositivo-externo',
          title: '7. Detectar Dispositivo Externo con Pulso en Puerto Paralelo',
          description: 'Diseño de circuito y código para detectar la conexión de un dispositivo externo enviando un pulso en una línea de entrada del puerto paralelo.',
          code: `
// Pseudocódigo
INICIO
CONFIGURAR pin_salida_pulso COMO SALIDA
CONFIGURAR pin_entrada_respuesta COMO ENTRADA
BUCLE_INFINITO
  ENVIAR PULSO POR pin_salida_pulso
  ESPERAR RESPUESTA EN pin_entrada_respuesta
  SI RESPUESTA RECIBIDA
    INDICAR DISPOSITIVO CONECTADO
  FIN_SI
FIN_BUCLE
          `,
        }
      ],
    },
  },
];
