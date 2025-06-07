const e=[{id:"ejercicios-basicos",title:"Ejercicios de Ensamblador",content:"Practica con ejercicios de código ensamblador para la arquitectura ix86.",interactiveComponent:"assemblyCodeViewer",data:{type:"assemblyCodeViewer",exercises:[{id:"ej1-hola-mundo",title:'1. Mostrar "Hola Mundo"',description:"Muestra un mensaje en pantalla usando interrupciones.",code:`
.model small
.stack 100h
.data
  mensaje db 'Hola Mundo!$'
.code
  main proc
    mov ax, @data
    mov ds, ax
    mov ah, 09h
    lea dx, mensaje
    int 21h
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,expectedOutput:"Hola Mundo!"},{id:"ej2-suma-numeros",title:"2. Suma de dos números",description:"Pide dos números, los suma y muestra el resultado.",code:`
.model small
.stack 100h
.data
  msg1 db 'Ingrese el primer numero: $'
  msg2 db 13,10,'Ingrese el segundo numero: $'
  msg_res db 13,10,'La suma es: $'
  num1 db ?
  num2 db ?
  res  db ?
.code
  main proc
    mov ax, @data
    mov ds, ax
    mov ah, 09h
    lea dx, msg1
    int 21h
    mov ah, 01h
    int 21h
    sub al, '0'
    mov num1, al
    mov ah, 09h
    lea dx, msg2
    int 21h
    mov ah, 01h
    int 21h
    sub al, '0'
    mov num2, al
    mov al, num1
    add al, num2
    add al, '0'
    mov res, al
    mov ah, 09h
    lea dx, msg_res
    int 21h
    mov ah, 02h
    mov dl, res
    int 21h
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,expectedOutput:"La suma es: [resultado]"},{id:"ej3-contar-digitos",title:"3. Contar el número de dígitos",description:"Cuenta los dígitos de un número ingresado como cadena.",code:`
.model small
.stack 100h
.data
  msg_input db 'Ingrese un numero: $'
  msg_res db 13,10,'Numero de digitos: $'
  buffer db 10, ?, 10 dup('$')
.code
  main proc
    mov ax, @data
    mov ds, ax
    mov ah, 09h
    lea dx, msg_input
    int 21h
    mov ah, 0Ah
    lea dx, buffer
    int 21h
    mov cl, buffer[1]
    add cl, '0'
    mov buffer[2], cl
    mov ah, 09h
    lea dx, msg_res
    int 21h
    mov ah, 02h
    mov dl, buffer[2]
    int 21h
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,expectedOutput:"Numero de digitos: [cantidad]"},{id:"ej4-invertir-numero",title:"4. Invertir un número de 16 bits",description:"Invierte un número ingresado por el usuario.",code:`
.model small
.stack 100h
.data
  msg_input db 'Ingrese un numero de 16 bits: $'
  msg_res db 13,10,'Numero invertido: $'
  input_num dw ?
.code
  main proc
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,expectedOutput:"Numero invertido: [valor]"},{id:"ej5-suma-arreglo",title:"5. Suma de un arreglo de números",description:"Suma los valores de un arreglo de 10 números.",code:`
.model small
.stack 100h
.data
  arreglo dw 1,2,3,4,5,6,7,8,9,10
  msg_res db 'La suma del arreglo es: $'
  suma dw 0
.code
  main proc
    mov ax, @data
    mov ds, ax
    mov cx, 10
    mov si, offset arreglo
    mov ax, 0
  bucle:
    add ax, [si]
    add si, 2
    loop bucle
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,expectedOutput:"La suma del arreglo es: [suma]"},{id:"ej6-multiplicacion",title:"6. Multiplicación de dos números",description:"Multiplica dos números y muestra el resultado.",code:`
.model small
.stack 100h
.data
  msg1 db 'Ingrese el primer numero: $'
  msg2 db 13,10,'Ingrese el segundo numero: $'
  msg_res db 13,10,'El producto es: $'
  num1 db ?
  num2 db ?
.code
  main proc
    mov ax, @data
    mov ds, ax
    mov ah, 09h
    lea dx, msg1
    int 21h
    mov ah, 01h
    int 21h
    sub al, '0'
    mov num1, al
    mov ah, 09h
    lea dx, msg2
    int 21h
    mov ah, 01h
    int 21h
    sub al, '0'
    mov num2, al
    mov al, num1
    mov bl, num2
    mul bl
    add al, '0'
    mov ah, 09h
    lea dx, msg_res
    int 21h
    mov ah, 02h
    mov dl, al
    int 21h
    mov ah, 4Ch
    int 21h
  main endp
end main
          `,expectedOutput:"El producto es: [producto]"}]}},{id:"evaluacion-act4",title:"Evaluación de Ensamblador",content:"Evalúa tus conocimientos sobre la programación en ensamblador.",interactiveComponent:"evaluationAct4",data:{}}];export{e as ProgramacionMicroprocesador};
