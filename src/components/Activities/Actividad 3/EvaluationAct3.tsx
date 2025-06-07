import React from "react";
import DnDComponentImage from "../../DnDComponents/DnDComponentImage";
import DnDComponentText from "../../DnDComponents/DnDComponentText";

const EvaluationAct3: React.FC = () => {
  const texts = {
    "zona-1":
      "Registro contador del programa que contiene la dirección de la siguiente instrucción a leer de la memoria.",
    "zona-2":
      "Registro de direcciones de memoria donde se pone la dirección de memoria a la que se quiere acceder.",
    "zona-3":
      "Controlador de Interrupciones Programable (PIC) que gestiona y prioriza múltiples interrupciones de hardware, liberando al procesador de esta tarea.",
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-5">1. Seleccione la respuesta correcta:</h3>
      <DnDComponentText
        items={[
          "Memory Address Register (MAR)",
          "8259 (PIC)",
          "Program Counter (PC)",
        ]}
        zones={["zona-1", "zona-2", "zona-3"]}
        allowedDropMap={{
          "Program Counter (PC)": "zona-1",
          "Memory Address Register (MAR)": "zona-2",
          "8259 (PIC)": "zona-3",
        }}
        texts={texts}
      />
    </div>
  );
};

export default EvaluationAct3;
