const e=[{id:"conceptos-ccp",title:"Conceptos y Configuración de Módulos CCP",content:"Investiga los módulos de Captura, Comparación y PWM (CCP), su configuración de registros y la generación de señales periódicas.",interactiveComponent:"ccpConceptsViewer",data:{type:"ccpConceptsViewer",concepts:[{term:"Módulos de Comparación y Captura (CCP)",definition:"Periféricos versátiles en microcontroladores PIC que interactúan con temporizadores para mediciones precisas de tiempo, generación de eventos y creación de señales PWM."},{term:"Configuración del Registro CCP1CON y CCP2CON",definition:"Registros de 8 bits que controlan el modo de operación de los módulos CCP1 y CCP2. Los bits CCPxM<3:0> definen el modo (Captura, Comparación o PWM) y las condiciones específicas (ej. flanco ascendente).",details:["Modo Captura CCP1: La configuración de CCP1CON define el tipo de flanco que dispara la captura (ej. 0101 para flanco ascendente).","Modo Comparación CCP1: CCP1CON determina la acción al coincidir valores, como generar una interrupción o alternar el pin."]},{term:"Generación de Señales Periódicas (Timer1 y CCP1)",definition:"Se puede lograr a través del modo Comparación o PWM. En modo Comparación, Timer1 cuenta hasta un valor en CCPR1, y CCP1 alterna el pin o genera una interrupción.",details:["Para PWM, el Timer2 es el temporizador más comúnmente asociado en PIC16F877A debido a su capacidad para generar el período y ciclo de trabajo."]}]}},{id:"ejercicios-ccp-usart",title:"Ejercicios Prácticos con Módulos CCP y USART",content:"Realiza y comprende la simulación de programas para PWM con CCP1 y captura de flanco con CCP2, incluyendo el uso de interrupciones y comunicación UART.",interactiveComponent:"ccpCodeExamplesViewer",data:{type:"ccpCodeExamplesViewer",exercises:[{id:"pwm-ccp1",title:"Ejercicio 2: PWM con CCP1 - 1 kHz y 50% Duty Cycle (PIC16F877A)",description:"Configuración y generación de una señal PWM de 1 kHz con un ciclo de trabajo del 50% utilizando el módulo CCP1 y Timer2.",code:`
void PWM_Init() {
  // Configurar CCP1 en modo PWM
  CCP1CON = 0b00001100; // PWM mode

  // Establecer PR2 para 1 kHz (con Fosc=20MHz, prescaler=16, PR2=249)
  PR2 = 249; // Frecuencia 1.25 kHz (ajusta si Fosc es diferente)

  // Cargar valor del Duty Cycle (50%)
  CCPR1L = 500 >> 2; // Parte alta de los 10 bits del Duty Cycle (500/4)
  CCP1CONbits.DC1B = 500 & 0x03; // Bits menos significativos (los 2 bits más bajos de 500)

  // Configurar Timer2
  T2CON = 0b00000101; // Prescaler = 16, encender TMR2 (0b00000101)

  // Configurar el pin CCP1 (RC2) como salida
  TRISCbits.TRISC2 = 0; // RC2 como salida
}

void main() {
  PWM_Init();
  while(1); // El PWM se ejecuta automáticamente en hardware
}
          `,verification:"Verifica la señal PWM con un osciloscopio en el pin RC2: frecuencia de 1 kHz y ciclo de trabajo del 50%."},{id:"captura-ccp2",title:"Ejercicio 3: Captura de Flanco Ascendente con CCP2 (Polling y UART)",description:"Captura el valor del Timer1 en el flanco ascendente de un evento externo (en RC1) y envía el valor capturado por UART.",code:`
#include <xc.h>
#include <stdio.h> // Para sprintf

#define _XTAL_FREQ 20000000 // Frecuencia del oscilador = 20 MHz

// UART: Inicialización a 9600 bps
void UART_Init(void) {
  TRISCbits.TRISC6 = 0; // TX como salida
  TRISCbits.TRISC7 = 1; // RX como entrada
  SPBRG = 129;          // Para 9600 bps con Fosc = 20 MHz, BRGH=1
  TXSTAbits.BRGH = 1;   // High speed
  TXSTAbits.SYNC = 0;   // Asíncrono
  RCSTAbits.SPEN = 1;   // Activar puerto serie
  TXSTAbits.TXEN = 1;   // Habilitar transmisión
}

// Enviar un carácter por UART
void UART_Write(char data) {
  while (!TXSTAbits.TRMT); // Esperar que se vacíe el buffer
  TXREG = data;
}

// Enviar una cadena por UART
void UART_Write_Text(const char* text) {
  while (*text) {
    UART_Write(*text++);
  }
}

void main(void) {
  UART_Init();     // Iniciar UART
  TRISCbits.TRISC1 = 1; // RC1 (CCP2) como entrada
  TRISCbits.TRISC6 = 0; // TX como salida (UART)
  TRISCbits.TRISC7 = 1; // RX como entrada (UART)

  // Configurar Timer1
  T1CON = 0x01; // TMR1 on, prescaler 1:1, Fosc/4

  // Configurar CCP2 en modo captura en flanco ascendente
  CCP2CON = 0b00000101; // Modo captura, cada flanco ascendente
  PIR2bits.CCP2IF = 0;  // Limpiar bandera de interrupción

  UART_Write_Text("Esperando captura de flanco en RC1...\\r\\n");

  while (1) {
    if (PIR2bits.CCP2IF) { // Si se detecta un flanco
      PIR2bits.CCP2IF = 0; // Limpiar bandera

      // Leer el valor capturado (16 bits)
      unsigned int valor = ((unsigned int) CCPR2H << 8) | CCPR2L;

      // Convertir a texto y enviar por UART
      char mensaje [32];
      sprintf(mensaje, "Captura: %u\\r\\n", valor);
      UART_Write_Text(mensaje);
    }
  }
}
          `,verification:"Monitorea la salida UART con una terminal serial. Envía pulsos al pin RC1 y verifica que se capture y muestre el valor del Timer1."},{id:"captura-ccp2-interrupciones",title:"Ejercicio 3, Opción A: Captura con CCP2 usando Interrupciones",description:"Similar al ejercicio anterior, pero utiliza interrupciones para manejar la captura de flanco, mostrando el valor capturado por UART.",code:`
#include <xc.h>
#include <stdio.h>

#define _XTAL_FREQ 20000000 // Frecuencia del oscilador = 20 MHz

volatile unsigned int valorCapturado = 0;
volatile unsigned char nuevoValor = 0; // Bandera para saber cuándo imprimir (usa unsigned char en lugar de bit)

// Inicializar UART a 9600 bps
void UART_Init(void) {
  TRISCbits.TRISC6 = 0; // TX
  TRISCbits.TRISC7 = 1; // RX
  SPBRG = 129;          // Para 9600 bps con Fosc = 20 MHz
  TXSTAbits.BRGH = 1;   // Alta velocidad
  TXSTAbits.SYNC = 0;   // Asíncrono
  RCSTAbits.SPEN = 1;   // Habilitar puerto serial
  TXSTAbits.TXEN = 1;   // Habilitar transmisión
}

// Enviar un carácter por UART
void UART_Write(char data) {
  while (!TXSTAbits.TRMT);
  TXREG = data;
}

// Enviar cadena de texto por UART
void UART_Write_Text(const char* texto) {
  while (*texto)
    UART_Write(*texto++);
}

// Interrupción CCP2 Captura
void __interrupt() ISR (void) { // El nombre de la función de interrupción es 'ISR'
  if (PIR2bits.CCP2IF) {
    PIR2bits.CCP2IF = 0; // Limpiar bandera
    valorCapturado = ((unsigned int)CCPR2H << 8) | CCPR2L;
    nuevoValor = 1; // Establecer bandera
  }
}

void main(void) {
  UART_Init(); // UART

  // Configurar CCP2 en modo captura (flanco ascendente)
  CCP2CON = 0b00000101;

  // Configurar Timer1
  T1CON = 0b00000001; // TMR1 encendido, prescaler 1:1, Fosc/4

  // Configurar entrada CCP2 (RC1)
  TRISCbits.TRISC1 = 1;

  // Interrupciones
  PIR2bits.CCP2IF = 0;  // Limpiar bandera
  PIE2bits.CCP2IE = 1;  // Habilitar interrupción CCP2
  INTCONbits.PEIE = 1;  // Habilitar interrupciones periféricas
  INTCONbits.GIE = 1;   // Habilitar interrupciones globales

  UART_Write_Text("Esperando captura con interrupcion...\\r\\n");

  while (1) {
    if (nuevoValor) {
      nuevoValor = 0;
      char buffer[32];
      sprintf(buffer, "Captura (INT): %u\\r\\n", valorCapturado);
      UART_Write_Text(buffer);
    }
  }
}
          `,verification:"Verifica la salida UART. Al enviar pulsos a RC1, la interrupción debería activarse y el valor del Timer1 debería mostrarse en la terminal serial."}]}}];export{e as ModulosCcp};
