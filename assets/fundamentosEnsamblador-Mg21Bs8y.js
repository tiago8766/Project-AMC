const e=[{id:"fundamentos-conceptos",title:"Fundamentos del Lenguaje Ensamblador e Interrupciones",content:"Explora las bases del lenguaje ensamblador, sus componentes esenciales y los tipos de interrupciones en microcontroladores.",interactiveComponent:"assemblyFundamentalsViewer",data:{type:"assemblyFundamentalsViewer",sections:[{name:"Fundamentos del Lenguaje Ensamblador",description:"El lenguaje ensamblador es un lenguaje de bajo nivel que se comunica directamente con la arquitectura del microprocesador. Incluye:",items:[{term:"Expresiones, operaciones y operadores",detail:"Definen cómo se manipulan los datos (ej. ADD, OR)."},{term:"Directivas",detail:"Instrucciones para el ensamblador (ej. .DATA, .CODE)."},{term:"Macroinstrucciones",detail:"Bloques de código reutilizables definidos por el usuario."},{term:"Subrutinas",detail:"Secuencias de instrucciones llamadas y retornadas desde el programa principal."},{term:"Organización de un programa",detail:"Estructura lógica de un programa ensamblador (segmentos, inicio, fin)."},{term:"Sistemas MPLAB y PROTEUS",detail:"Entornos de desarrollo y simulación para microcontroladores."}]},{name:"Interrupciones del Lenguaje Ensamblador",description:"Señales que alteran el flujo normal de un programa para que el procesador atienda una tarea especial.",items:[{term:"Fijas",detail:"Tienen una dirección de rutina de atención predeterminada que no se puede cambiar (ej. división por cero, interrupciones de hardware)."},{term:"Sectorizadas (Vectoreadas)",detail:"El vector (número de interrupción) determina la dirección de la rutina de atención. Son más flexibles (ej. INT 21h, INT 10h en BIOS/DOS)."},{term:"Contexto de Interrupción",detail:"El sistema guarda automáticamente el contexto básico (IP, CS, FLAGS) para interrupciones por software; para hardware o personalizadas, puede requerir guardar registros adicionales manualmente."}]}]}},{id:"ejercicios-simulacion",title:"Ejercicios de Simulación y Verificación en MPLAB Xpress",content:"Comprueba y simula programas de microcontroladores PIC en C, incluyendo control de LEDs, lectura de botones, ADC y comunicación USART.",interactiveComponent:"mplabSimulationViewer",data:{type:"mplabSimulationViewer",simulations:[{id:"led-boton-toggle",title:"1. Encender/Apagar LED con Botón (Toggle)",description:"Alterna el estado de un LED conectado a RB1 cada vez que se presiona un botón conectado a RB0, usando C con ASM in-line para el toggle.",code:`
#include <xc.h>
#pragma config WDTE = OFF
#pragma config PWRTE = OFF
#pragma config FOSC = XT
#pragma config CP = OFF

void main(void) {
  TRISBbits.TRISB0 = 1; // RB0 como entrada (botón)
  TRISBbits.TRISB1 = 0; // RB1 como salida (LED)
  PORTB = 0;            // Limpiar puerto

  while(1) {
    if (PORTBbits.RB0 == 0) { // Si el botón está presionado (RB0=0)
      _asm("movf PORTB, W");
      _asm("xorlw 0x02"); // XOR con el bit 1 (RB1) para toggle
      _asm("movwf PORTB");
      for (int i=0; i < 10000; i++); // Pequeña espera antirrebote
      while(PORTBbits.RB0 == 0); // Esperar que se suelte el botón
      for (int i=0; i < 10000; i++); // Otro retardo antirrebote
    }
  }
}
          `,verification:"Verifica que el LED en RB1 cambia de estado (encendido/apagado) con cada pulsación del botón en RB0."},{id:"contador-porta",title:"2. Incrementar Contador en PORTA con Botón",description:"Incrementa un contador y muestra su valor en PORTA cada vez que se presiona un botón conectado a RB0.",code:`
#include <xc.h>
#define _XTAL_FREQ 4000000 // Frecuencia del oscilador (4 MHz)

void main(void) {
  TRISA = 0x00; // PORTA como salida
  TRISB = 0x01; // RB0 como entrada
  PORTA = 0x00; // Inicializar PORTA en 0

  unsigned char contador = 0;

  while(1) {
    if (PORTBbits.RB0 == 0) { // Si se presiona el botón (RB0 = 0)
      _delay_ms(20); // Antirrebote
      if (PORTBbits.RB0 == 0) { // Verifica que aún está presionado
        contador++;
        PORTA = contador; // Mostrar en PORTA
      }
      while(PORTBbits.RB0 == 0); // Esperar a que se suelte el botón
      _delay_ms(20); // Otro retardo antirrebote
    }
  }
}
          `,verification:"Observa que los LEDs conectados a PORTA actúan como un contador binario que se incrementa con cada pulsación del botón."},{id:"usart-enviar-char",title:"3. Enviar Carácter por Puerto Serie (USART)",description:'Envía el carácter "A" por el puerto serie (USART) cada segundo.',code:`
#include <xc.h>
#define _XTAL_FREQ 4000000 // Frecuencia del oscilador

void USART_Init(void) {
  SPBRG = 25;       // Configurar baud rate para 9600 bps (con Fosc = 4MHz)
  TXSTAbits.BRGH = 0; // Baja velocidad (BRGH=0)
  TXSTAbits.SYNC = 0; // Modo asíncrono
  RCSTAbits.SPEN = 1; // Habilita puerto serie (TX/RX)
  TXSTAbits.TXEN = 1; // Habilita transmisión
}

void USART_TxChar(char c) {
  while (!TXSTAbits.TRMT); // Esperar a que el buffer esté vacío
  TXREG = c;               // Enviar carácter
}

void main(void) {
  USART_Init(); // Inicializa USART
  while (1) {
    USART_TxChar('A'); // Enviar carácter 'A'
    _delay_ms(1000);   // Espera 1 segundo
  }
}
          `,verification:'Utiliza una terminal serial (como PuTTY o el monitor serial de MPLAB Xpress) para verificar que se recibe el carácter "A" cada segundo.'},{id:"interrupcion-toggle-porta",title:"4. Interrupción Externa: Toggle en PORTA con ASM in-line",description:"Alterna el estado de PORTA (o un bit específico) mediante una interrupción externa activada por un botón.",code:`
#include <xc.h>
#pragma config FOSC = XT
#pragma config WDTE = OFF
#pragma config PWRTE = ON
#pragma config CP = OFF

void __interrupt() isr (void) {
  if (INTCONbits.INTF) { // Verifica si la interrupción externa fue activada (RB0/INT)
    _asm("movf PORTA, W"); // Lee el valor actual de PORTA a W
    _asm("xorlw 0x01");    // XOR con 0x01 para alternar el bit 0 (RA0)
    _asm("movwf PORTA");   // Escribe el nuevo valor de vuelta a PORTA
    INTCONbits.INTF = 0;   // Limpia la bandera de interrupción externa
  }
}

void main(void) {
  TRISA = 0x00; // Todo PORTA como salida (o 0xFE para RA0 como salida, el resto entrada)
  TRISB = 0xFF; // Todo PORTB como entrada
  PORTA = 0x00; // Inicializar PORTA en 0

  INTCONbits.INTE = 1; // Habilitar interrupción externa (RB0/INT)
  INTCONbits.GIE = 1;  // Habilitar interrupciones globales
  INTCONbits.INTF = 0; // Limpiar bandera de interrupción

  while(1) {
    // El microcontrolador puede estar haciendo otras tareas o en espera de interrupción
  }
}
          `,verification:"Verifica que al presionar el botón conectado al pin de interrupción externa (RB0), el estado del bit RA0 en PORTA cambia."}]}}];export{e as FundamentosEnsambladorInterrupciones};
