import image8086 from '../images/8086.png';
import imageMplab from '../images/mplab.png';

export interface ProgramsDataItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const INFO = "El Emu8086 es un programa emulador que permite simular el funcionamiento del microprocesador Intel 8086 en una computadora moderna. Está diseñado principalmente para el aprendizaje de lenguaje ensamblador";
const INFO2 = "MPLAB es un entorno de desarrollo integrado (IDE) creado por Microchip Technology para programar microcontroladores PIC y dsPIC.";
export const programsDataList: ProgramsDataItem[] = [
  {
    id: "program1",
    imageSrc: image8086,
    imageAlt: "8086 Microprocessor Program",
    subtitle: "Programa utilizado",
    title: "LENGUAJE ENSAMBLADOR",
    description: INFO,
    buttonText: "VER",
    buttonLink: "https://emu8086-microprocessor-emulator.es.download.it/"
  },
  {
    id: "program-2",
    imageSrc: imageMplab,
    imageAlt: "MPLAB IDE Program",
    subtitle: "Programa utilizado",
    title: "MPLAB",
    description: INFO2,
    buttonText: "VER",
    buttonLink: "https://www.microchip.com/en-us/tools-resources/develop/mplab-xpress"
  },
];