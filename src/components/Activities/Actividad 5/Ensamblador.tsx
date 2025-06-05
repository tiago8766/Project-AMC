import { ActivityDetailSection, EvaluationData } from '../../../interfaces/Actividades';

export const EnsambladorIx86: ActivityDetailSection[] = [
  {
    id: 'glosario',
    title: 'Glosario de Conceptos',
    content: 'Explora las definiciones de constantes, operadores, directivas y más en el ensamblador ix86.',
    interactiveComponent: 'assemblyConceptsViewer',
    data: {
      type: 'assemblyConceptsViewer',
      concepts: [
        {
          term: 'Constantes',
          definition: 'Valores que no cambian durante la ejecución del programa.',
          examples: [
            { type: 'Inmediatos', description: 'MOV AX, 5' },
            { type: 'Etiquetas', description: 'MI_ETIQUETA: MOV AX, BX' },
          ],
        },
        {
          term: 'Operadores',
          definition: 'Símbolos que realizan operaciones sobre operandos.',
          examples: [
            { type: 'Aritméticos', description: 'ADD, SUB, MUL, DIV' },
            { type: 'Lógicos', description: 'AND, OR, XOR, NOT' },
            { type: 'Desplazamiento/Rotación', description: 'SHL, SHR, ROL, ROR' },
            { type: 'Comparación', description: 'CMP' },
          ],
        },
        {
          term: 'Directivas de Ensamblador',
          definition: 'Instrucciones que controlan el ensamblado o definen la estructura del programa.',
          examples: [
            { type: '.MODEL', description: 'Define el modelo de memoria.' },
            { type: '.STACK', description: 'Reserva espacio para la pila.' },
            { type: '.DATA', description: 'Declara el segmento de datos.' },
            { type: '.CODE', description: 'Indica el inicio del código.' },
            { type: 'ASSUME', description: 'Asocia registros con segmentos.' },
            { type: 'END', description: 'Marca el final del archivo fuente.' },
          ],
        },
      ],
    },
  },
  {
    id: 'uso-de-macros',
    title: 'Uso de Macros',
    content: 'Aprende qué son las macros en ensamblador y cómo utilizarlas.',
    interactiveComponent: 'assemblyCodeViewer',
    data: {
      type: 'assemblyCodeViewer',
      exercises: [
        {
          id: 'macro-compare',
          title: 'Ejemplo de Macro: COMPARE',
          description: 'Macro para comparar dos valores y guardar el mayor.',
          code: `
COMPARE MACRO
  cmp al, bl
  jg AL_IS_GREATER
  mov al, bl
AL_IS_GREATER:
  mov max_num, al
ENDM

.model small
.stack 100h
.data
  num1 db 5
  num2 db 10
  max_num db ?
  msg db 'El numero mayor es: $'
.code
  main proc
    mov ax, @data
    mov ds, ax
    mov al, num1
    mov bl, num2
    COMPARE
    mov ah, 09h
    lea dx, msg
    int 21h
    mov ah, 02h
    mov dl, max_num
    add dl, '0'
    int 21h
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,
          expectedOutput: 'El numero mayor es: [el numero mayor]'
        },
      ],
    },
  },
  {
    id: 'evaluacion-act5',
    title: 'Evaluación de Ensamblador ix86',
    content: 'Evalúa tus conocimientos sobre las estructuras de programación en ensamblador.',
    interactiveComponent: 'evaluationAct5',
     data: {
           
            } as EvaluationData,
    
  }
];
