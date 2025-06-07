const e=[{id:"conceptos-microcontroladores",title:"Conceptos de Microcontroladores",content:"Investiga los fundamentos de los microcontroladores, sus tipos, periféricos y aplicaciones.",interactiveComponent:"microcontrollerConceptsViewer",data:{type:"microcontrollerConceptsViewer",concepts:[{term:"Arquitectura de los Microcontroladores",definition:"Un microcontrolador (MCU) es un circuito integrado que contiene en su interior los componentes fundamentales de un sistema computacional, como la unidad central de procesamiento (CPU), memoria y periféricos de entrada y salida. Está diseñado para ejecutar tareas específicas de forma autónoma mediante instrucciones grabadas en su memoria."},{term:"Diferentes tipos de Microcontroladores",definition:"Existen varios tipos de microcontroladores, cada uno con sus propias características y usos.",examples:[{type:"Microcontroladores AVR",description:"Fabricados por Atmel, conocidos por su arquitectura de conjunto de instrucciones simples y usados en Arduino."},{type:"Microcontroladores ARM",description:"Ampliamente utilizados en una variedad de dispositivos, desde móviles hasta sistemas integrados."},{type:"Microcontroladores 8051",description:"Una arquitectura clásica, popular por su sencillez y bajo costo, utilizada en muchas aplicaciones empotradas."}]},{term:"Periféricos comunes de los Microcontroladores",definition:"Los microcontroladores incluyen diversos periféricos integrados para interactuar con el mundo exterior.",examples:[{type:"Puertos de E/S (GPIO)",description:"Pines configurables como entrada o salida digital."},{type:"Temporizadores/Contadores (Timers/Counters)",description:"Para medir tiempo, generar retardos, y gestionar eventos."},{type:"Conversores Analógico-Digital (ADC) y Digital-Analógico (DAC)",description:"Para interactuar con señales analógicas."},{type:"Interfaces de Comunicación",description:"UART, SPI, I2C para comunicarse con otros dispositivos."},{type:"Controladores de Interrupciones",description:"Permiten al MCU responder rápidamente a eventos externos o internos."},{type:"Modulación por Ancho de Pulso (PWM)",description:"Para generar señales de ancho de pulso variable, útil en control de motores o LEDs."}]},{term:"Tipos de memoria en Microcontroladores",definition:"Los microcontroladores suelen incorporar diferentes tipos de memoria.",examples:[{type:"Memoria Flash (Memoria de Programa)",description:"No volátil, donde se almacena el código del programa."},{type:"RAM (Memoria de Acceso Aleatorio)",description:"Volátil, utilizada para almacenar datos temporales y variables durante la ejecución."},{type:"EEPROM (Memoria de Solo Lectura Programable y Borrable Eléctricamente)",description:"No volátil, para almacenar datos de configuración que deben persistir después de un reinicio."}]},{term:"Aplicaciones de los Microcontroladores",definition:"Los microcontroladores son el cerebro de innumerables dispositivos en la vida cotidiana.",examples:[{type:"IoT (Internet de las Cosas)",description:"Dispositivos inteligentes conectados a la red."},{type:"Automoción",description:"Sistemas de gestión de motor, control de frenos (ABS), infoentretenimiento."},{type:"Electrónica de Consumo",description:"Electrodomésticos, juguetes, controles remotos."},{type:"Control Industrial",description:"Automatización de procesos, robótica."},{type:"Medicina",description:"Equipos médicos portátiles, dispositivos de monitoreo."}]}]}},{id:"ejercicios-arduino",title:"Ejercicios con Arduino",content:"Explora ejemplos de simulación de semáforos y control de temperatura con Arduino.",interactiveComponent:"arduinoProjectViewer",data:{type:"arduinoProjectViewer",projects:[{id:"semaforo-arduino",title:"Simulación de Semáforo con Arduino",description:"Controla el flujo de tráfico simulando un semáforo con LEDs y Arduino.",code:`
// Definición de pines para los LEDs del semáforo
const int RED = 13;
const int YELLOW = 12;
const int GREEN = 11;

void setup() {
  // Configura los pines como salidas
  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
}

void loop() {
  // Ciclo del semáforo: Verde -> Amarillo -> Rojo
  digitalWrite(GREEN, HIGH);  // Enciende luz verde
  delay(3000);              // Espera 3 segundos
  digitalWrite(GREEN, LOW);   // Apaga luz verde

  digitalWrite(YELLOW, HIGH); // Enciende luz amarilla
  delay(500);               // Espera 0.5 segundos
  digitalWrite(YELLOW, LOW);  // Apaga luz amarilla

  digitalWrite(RED, HIGH);    // Enciende luz roja
  delay(2000);              // Espera 2 segundos

  // Antes de volver a verde, a veces se incluye un parpadeo amarillo
  // o un paso intermedio para alertar al tráfico cruzado
  digitalWrite(YELLOW, HIGH); // Amarillo de nuevo antes de cambiar a verde
  delay(500);
  digitalWrite(YELLOW, LOW);

  digitalWrite(RED, LOW);     // Apaga luz roja
}
          `,circuitImage:"image_95e841.png-412bbc0d-f41a-491f-adae-d09ba809172d"},{id:"control-temperatura-arduino",title:"Control de Temperatura con Sensor y Actuador",description:"Utiliza un sensor de temperatura y un actuador (como un ventilador) para mantener una temperatura constante.",code:`
// Definición de pines y variables
int Sensor = A0;      // Pin analógico donde está conectado el sensor de temperatura (ej. LM35)
int umbral = 30;      // Temperatura umbral en grados Celsius para activar el actuador
const int control = 9; // Pin digital para controlar el actuador (ej. ventilador, relé)

void setup() {
  Serial.begin(115200);   // Inicia comunicación serial para monitorear la temperatura
  pinMode(control, OUTPUT); // Configura el pin de control como salida
}

void loop() {
  // Leer el valor analógico del sensor
  int lectura = analogRead(Sensor);

  // Convertir el valor analógico a voltaje (para un sensor de 5V)
  float voltaje = lectura * (5.0 / 1023.0); // O 5.0/1024 como en el PDF, ajusta si es necesario

  // Convertir voltaje a temperatura en grados Celsius (para un LM35: 10mV/°C)
  float temp = (voltaje - 0.5) * 100; // Si es LM35 con offset de 0.5V para 0°C. Si no, solo voltaje * 100

  // Imprimir la temperatura en el monitor serial
  Serial.print("Temperatura: ");
  Serial.print(temp);
  Serial.println(" °C");

  // Lógica de control
  if (temp >= umbral) {
    digitalWrite(control, HIGH); // Activar el actuador (ej. encender ventilador)
    Serial.println("Actuador: ON (Temperatura alta)");
  } else {
    digitalWrite(control, LOW);  // Desactivar el actuador (ej. apagar ventilador)
    Serial.println("Actuador: OFF (Temperatura normal)");
  }

  delay(1000); // Pequeña pausa antes de la siguiente lectura
}
          `,circuitImage:"image_8af42f.png-a9578dfd-2bde-4d65-9a78-b275ba1f2f5a"}]}},{id:"evaluacion",title:"evaluacion",content:"Practica lo aprendido",interactiveComponent:"evaluationAct6",data:{}}];export{e as Microcontroladores};
