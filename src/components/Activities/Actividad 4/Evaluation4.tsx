import React from "react";
import DnDComponentText from "../../DnDComponents/DnDComponentText";

const EvaluationAct4: React.FC = () => {
  const texts = {
    "zona-1": "Palabras con significado especial como MOV, ADD, JMP.",
    "zona-2":
      "Formato típico: [etiqueta:] [instrucción] [operandos] [;comentario].",
    "zona-3": "Define áreas de memoria para código, datos y pila.",
    "zona-4": "Métodos para especificar la ubicación de los operandos.",
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="mb-5">1. Seleccione la respuesta correcta:</h3>
        <DnDComponentText
          items={[
            "Formato de una Sentencia",
            "Palabras Reservadas",
            "Modos de Direccionamiento",
            "Declaración de Segmentos",
          ]}
          zones={["zona-1", "zona-2", "zona-3", "zona-4"]}
          allowedDropMap={{
            "Palabras Reservadas": "zona-1",
            "Formato de una Sentencia": "zona-2",
            "Declaración de Segmentos": "zona-3",
            "Modos de Direccionamiento": "zona-4",
          }}
          texts={texts}
        />
      </div>
    </div>
  );
};

export default EvaluationAct4;
