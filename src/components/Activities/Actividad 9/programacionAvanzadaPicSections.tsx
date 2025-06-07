
import { ActivityDetailSection } from '../../../interfaces/Actividades';

export const ProgramacionAvanzadaPic: ActivityDetailSection[] = [
    {
        id: 'conceptos-instrucciones',
        title: 'Conceptos Avanzados de Instrucciones',
        content: `Profundiza en el repertorio de instrucciones de los microcontroladores PIC: transferencia de datos, aritmética, lógica, control de flujo y manipulación de bits.`,
        interactiveComponent: 'advancedInstructionsViewer',
        data: {
            type: 'advancedInstructionsViewer',
            instructionTypes: [
                {
                    name: 'Repertorio de Instrucciones',
                    description: 'Conjunto completo de comandos que un microcontrolador puede ejecutar, escritos en lenguaje ensamblador o código máquina.',
                    examples: [],
                },
                {
                    name: 'Instrucciones de Transferencia de Datos',
                    description: 'Permiten mover datos entre registros, memoria y puertos de E/S.',
                    examples: [
                        { code: 'MOV', explanation: 'Copia el contenido de una fuente a un destino.' },
                        { code: 'LD/ST', explanation: 'Carga o almacena datos desde/hacia la memoria (conceptos generales).' },
                        { code: 'IN/OUT', explanation: 'Lee o escribe en un puerto de E/S.' },
                    ],
                },
                {
                    name: 'Instrucciones Aritméticas y Lógicas',
                    description: 'Realizan operaciones matemáticas y de lógica binaria a nivel de bit.',
                    examples: [
                        { code: 'ADD, SUB, INC, DEC', explanation: 'Suma, resta, incremento, decremento (Aritméticas).' },
                        { code: 'AND, OR, XOR, NOT', explanation: 'Operaciones lógicas a nivel de bit.' },
                        { code: 'CMP', explanation: 'Compara dos valores (afecta los flags).' },
                        { code: 'CLR', explanation: 'Borra el contenido de un registro.' },
                    ],
                },
                {
                    name: 'Control de Flujo de Programa',
                    description: 'Alteran la secuencia normal de ejecución de instrucciones (ciclos, decisiones, subrutinas).',
                    examples: [
                        { code: 'JMP etiqueta', explanation: 'Salto incondicional a una dirección específica.' },
                        { code: 'JZ (Jump if Zero), JC (Jump if Carry), JNZ, JE, JNE', explanation: 'Saltos condicionales basados en flags del procesador.' },
                    ],
                },
                {
                    name: 'Instrucciones de Bits',
                    description: 'Manipulan directamente bits individuales de registros o puertos, crucial para periféricos.',
                    examples: [
                        { code: 'SETB', explanation: 'Establece un bit en 1.' },
                        { code: 'CLR', explanation: 'Borra un bit.' },
                        { code: 'CPL', explanation: 'Invierte (complementa) un bit.' },
                        { code: 'JB, JNB', explanation: 'Salto si un bit está en 1 o 0.' },
                    ],
                },
            ],
        },
    },
    {
        id: 'programacion-perifericos',
        title: 'Programación con Periféricos: Interrupciones y Comunicación',
        content: `Explora ejemplos prácticos de control de LEDs, lectura de sensores, PWM, y comunicación serial e I2C en microcontroladores PIC.`,
        interactiveComponent: 'picPeripheralCodeViewer',
        data: {
            type: 'picPeripheralCodeViewer',
            projects: [
                {
                    id: 'led-retardo',
                    title: '1. Encender y Apagar un LED con Retardo',
                    description: 'Controla el parpadeo de un LED conectado al pin RC0.',
                    code: `
#include <xc.h>
#define _XTAL_FREQ 8000000 // Frecuencia del oscilador (8 MHz)

void main(void) {
  TRISCbits.TRISC0 = 0; // Configura RC0 como salida
  PORTCbits.RC0 = 0;    // Inicializa RC0 en bajo (apagado)

  while (1) {
    PORTCbits.RC0 = 1;  // Enciende el LED
    _delay_ms(500);     // Retardo de 500 ms
    PORTCbits.RC0 = 0;  // Apaga el LED
    _delay_ms(500);     // Retardo de 500 ms
  }
}
          `,
                },
                {
                    id: 'boton-led',
                    title: '2. Leer un Botón y Encender un LED',
                    description: 'Si se presiona un botón conectado a RA0, enciende un LED en RC0.',
                    code: `
#include <xc.h>
#define _XTAL_FREQ 8000000 // Frecuencia del oscilador

void main(void) {
  TRISAbits.TRISA0 = 1; // RA0 como entrada (botón)
  TRISCbits.TRISC0 = 0; // RC0 como salida (LED)
  PORTCbits.RC0 = 0;    // LED apagado inicialmente

  while(1) {
    if (PORTAbits.RA0 == 1) { // Si el botón está presionado (nivel alto)
      PORTCbits.RC0 = 1;      // Enciende el LED
    } else {
      PORTCbits.RC0 = 0;      // Apaga el LED
    }
  }
}
          `,
                },
                {
                    id: 'adc-led-umbral',
                    title: '3. Medir Voltaje con ADC y Encender LED',
                    description: 'Mide un voltaje analógico en RA0. Si supera 2V, enciende un LED en RC0.',
                    code: `
#include <xc.h>
#include <stdint.h>
#define _XTAL_FREQ 8000000 // Frecuencia del oscilador
#define UMBRAL 409         // Umbral ADC para 2V con Vref = 5V (10 bits de resolución)

void ADC_Init(void) {
  ADCON0 = 0b00000001; // Canal AN0 (RA0), ADC habilitado
  ADCON1 = 0b10000000; // Justificación a la izquierda, Vref = Vdd
}

uint16_t ADC_Read(void) {
  _delay_us(5);     // Tiempo de adquisición
  GO_DONE = 1;      // Iniciar conversión
  while (GO_nDONE); // Esperar fin de conversión
  return ((ADRESH << 8) + ADRESL); // Valor ADC 10 bits
}

void main(void) {
  TRISAbits.TRISA0 = 1; // RA0 como entrada (AN0)
  TRISCbits.TRISC0 = 0; // RC0 como salida (LED)
  PORTCbits.RC0 = 0;    // LED apagado inicialmente
  ADC_Init();           // Inicializar ADC

  while (1) {
    uint16_t valor_adc = ADC_Read(); // Leer voltaje
    if (valor_adc > UMBRAL) {
      PORTCbits.RC0 = 1; // Encender LED
    } else {
      PORTCbits.RC0 = 0; // Apagar LED
    }
    _delay_ms(100); // Pequeño retardo
  }
}
          `,
                },
                {
                    id: 'pwm-motor',
                    title: '4. PWM para Controlar Velocidad de Motor',
                    description: 'Genera una señal PWM con duty cycle del 50% usando CCP1 (RC2).',
                    code: `
#include <xc.h>
#include <stdint.h>
#define _XTAL_FREQ 8000000 // Oscilador de 8 MHz

void PWM_Init(void) {
  // Configurar el Timer2
  T2CON = 0b00000101; // Prescaler 1:4, Timer2 ON
  PR2 = 249;          // Periodo PWM para 5kHz con 8 MHz y prescaler 4

  // Configurar CCP1 en modo PWM
  CCP1CON = 0b00001100; // CCP1 en modo PWM

  // Duty Cycle del 50% -> (PR2+1)*4 = 1000; 1000/2 = 500
  CCPR1L = 0b01111100; // Parte alta del duty (500>>2 = 125, 0b01111101 -> 125)
  CCP1CONbits.DC1B = 0b00; // Bits menos significativos (opcionales, si 500 no es divisible por 4)

  // Pin RC2 como salida
  TRISCbits.TRISC2 = 0;
}

void main(void) {
  PWM_Init();
  while (1) {
    // El PWM sigue funcionando automáticamente
    // Puedes variar CCPR1L y DC1B para cambiar el duty cycle
  }
}
          `,
                },
                {
                    id: 'interrupcion-externa',
                    title: '1. Ejemplo con Interrupciones: Botón Activa Interrupción Externa',
                    description: 'Cuando se presione un botón conectado a RB0 (INT), se enciende un LED en RC0 por 1 segundo usando una interrupción externa.',
                    code: `
#include <xc.h>
#define _XTAL_FREQ 8000000 // Frecuencia del oscilador

void __interrupt() ISR (void) {
  if (INTF) { // Verifica si la interrupción externa fue activada
    INTF = 0; // Limpia la bandera de interrupción
    PORTCbits.RC0 = 1;  // Enciende el LED
    _delay_ms(1000);    // Espera 1 segundo
    PORTCbits.RC0 = 0;  // Apaga el LED
  }
}

void main(void) {
  TRISBbits.TRISB0 = 1; // RB0 como entrada (botón)
  TRISCbits.TRISC0 = 0; // RC0 como salida (LED)
  PORTCbits.RC0 = 0;    // Asegura que el LED esté apagado al inicio

  // Configuración de interrupción externa
  INTCONbits.GIE = 1;       // Habilita interrupciones globales
  INTCONbits.INTE = 1;      // Habilita interrupción externa en RB0
  INTCONbits.INTF = 0;      // Limpia bandera de interrupción externa
  OPTION_REGbits.INTEDG = 1; // Interrupción por flanco de subida (cambiar a 0 si es por bajada)

  while(1) {
    // El microcontrolador puede estar haciendo otra cosa o estar en modo de bajo consumo
  }
}
          `,
                },
                {
                    id: 'usart-enviar',
                    title: '2. Ejemplo con USART: Enviar Datos por UART',
                    description: 'Envía un texto por el puerto serial continuamente usando el módulo USART del PIC.',
                    code: `
#include <xc.h>
#include <stdint.h>
#define _XTAL_FREQ 8000000 // Frecuencia del oscilador (8 MHz)
#define BAUD 9600          // Velocidad de baudios para USART

// Función para inicializar el USART
void USART_Init(void) {
  SPBRG = (_XTAL_FREQ / (64 * BAUD)) - 1; // Configurar el baud rate para 9600
  TXSTAbits.SYNC = 0;  // Modo asincrónico
  TXSTAbits.TX9 = 0;   // 8 bits de datos
  TXSTAbits.TXEN = 1;  // Habilitar transmisión
  RCSTAbits.SPEN = 1;  // Habilitar puerto serial (RX y TX)
  RCSTAbits.CREN = 1;  // Habilitar recepción
}

// Función para enviar un carácter por USART
void USART_Write(char data) {
  while (!PIR1bits.TXIF); // Esperar a que el buffer esté vacío
  TXREG = data;           // Enviar el dato
}

// Función para enviar una cadena de caracteres
void USART_WriteString(const char *str) {
  while (*str != '\\0') {
    USART_Write(*str); // Enviar cada carácter de la cadena
    str++;
  }
}

void main(void) {
  USART_Init(); // Inicializar el USART
  while (1) {
    USART_WriteString("Hola, esto es un mensaje continuo.\\r\\n"); // Enviar mensaje
    __delay_ms(1000); // Esperar 1 segundo antes de enviar nuevamente
  }
}
          `,
                },
                {
                    id: 'mini-proyecto-i2c-uart',
                    title: 'Mini Proyecto: Terminal Serial con Sensor I2C (LM75)',
                    description: 'Terminal serial que consulta temperatura a un sensor LM75 vía I2C al presionar un botón (interrupción externa) y la envía por UART.',
                    code: `
#include <xc.h>
#define _XTAL_FREQ 4000000 // Frecuencia del oscilador (4 MHz)

// 1. Configuración de UART
void UART_Init() {
  TXSTA = 0x24; // TX habilitado, asincrónico, BRGH=1
  RCSTA = 0x90; // RX habilitado, puerto serie habilitado
  SPBRG = 25;   // 9600 baudios para 4MHz
  TRISCbits.TRISC6 = 0; // TX (RC6) como salida
  TRISCbits.TRISC7 = 1; // RX (RC7) como entrada
}

void UART_Write(char ch) {
  while (!PIR1bits.TXIF); // Espera a que el buffer de transmisión esté vacío
  TXREG = ch;             // Envía un carácter
}

void UART_Write_Text(const char *txt) {
  while (*txt) {
    UART_Write(*txt++); // Envía cada carácter
  }
}

// 2. Manejo de I2C y lectura del LM75 (Funciones básicas)
void I2C_Init() {
  SSPCON = 0x28;   // Habilita MSSP en modo I2C master
  SSPCON2 = 0x00;
  SSPADD = 9;      // 100kHz para Fosc = 4MHz (con prescaler adecuado)
  SSPSTAT = 0;
  TRISCbits.TRISC3 = 1; // SCL como entrada
  TRISCbits.TRISC4 = 1; // SDA como entrada
}

void I2C_Wait() {
  while ((SSPCON2 & 0x1F) || (SSPSTAT & 0x04)); // Espera hasta que el bus esté libre
}

void I2C_Start() {
  I2C_Wait();
  SEN = 1; // Start condition
}

void I2C_Stop() {
  I2C_Wait();
  PEN = 1; // Stop condition
}

void I2C_Write(unsigned char data) {
  I2C_Wait();
  SSPBUF = data; // Enviar byte
}

unsigned char I2C_Read() {
  I2C_Wait();
  RCEN = 1; // Habilita recepción
  I2C_Wait();
  return SSPBUF; // Lee el byte
}

void I2C_Ack() {
  I2C_Wait();
  ACKDT = 0; // 0 = ACK, 1 = NACK
  ACKEN = 1; // Enviar ACK
}

void I2C_Nack() {
  I2C_Wait();
  ACKDT = 1; // 0 = ACK, 1 = NACK
  ACKEN = 1; // Enviar NACK
}

float LM75_ReadTemp() {
  unsigned char msb, lsb;
  int16_t raw_temp;
  float temp_c;

  I2C_Start();
  I2C_Write(0x90); // Dirección del LM75 (escritura)
  I2C_Write(0x00); // Registro de temperatura

  I2C_Start(); // Repeated start
  I2C_Write(0x91); // Dirección del LM75 (lectura)

  msb = I2C_Read();
  I2C_Ack();
  lsb = I2C_Read();
  I2C_Nack(); // Último byte, no ACK
  I2C_Stop();

  raw_temp = ((int16_t)msb << 8) | lsb;
  raw_temp >>= 5; // Desplazar para obtener valor de 11 bits (LM75)
  temp_c = raw_temp * 0.125; // Resolución de 0.125 °C por bit

  return temp_c;
}

// 3. Interrupción externa (RB0)
volatile bit temperatura_pendiente = 0;

void __interrupt() ISR(void) {
  if (INTCONbits.INTF) { // Verifica si la interrupción externa fue activada
    INTCONbits.INTF = 0; // Limpia la bandera de interrupción
    temperatura_pendiente = 1; // Indica que hay una lectura pendiente
  }
}

// 4. Main
void main() {
  // Configuración de fuses (generalmente en MPLAB X, aquí solo para referencia)
  // #pragma config FOSC = XT
  // ...

  UART_Init(); // Inicializa UART
  I2C_Init();  // Inicializa I2C

  // Configuración del botón de interrupción
  TRISBbits.TRISB0 = 1; // RB0 como entrada
  INTCONbits.GIE = 1;   // Habilita interrupciones globales
  INTCONbits.INTE = 1;  // Habilita interrupción externa en RB0
  INTCONbits.INTF = 0;  // Limpia bandera de interrupción externa
  OPTION_REGbits.INTEDG = 1; // Flanco de subida (ajustar si es bajada)

  UART_Write_Text("Mini Proyecto: Terminal Serial - Sensor LM75\\r\\n");
  UART_Write_Text("Presione el boton conectado a RB0 para leer temperatura.\\r\\n");

  while (1) {
    if (temperatura_pendiente) {
      temperatura_pendiente = 0; // Limpia la bandera
      float temp = LM75_ReadTemp();

      char buffer[20];
      sprintf(buffer, "Temperatura: %.2f C\\r\\n", temp);
      UART_Write_Text(buffer);
    }
  }
}
          `,
                },
            ],
        },
    },

];