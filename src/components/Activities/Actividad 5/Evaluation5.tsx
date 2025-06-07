import React from "react";
import DnDComponentText from "../../DnDComponents/DnDComponentText";

const EvaluationAct5: React.FC = () => {
  const texts = {
    "zona-1": "Valores que no cambian durante la ejecución del programa.",
    "zona-2":
      "Instrucciones que controlan el ensamblado o definen la estructura del programa.",
    "zona-3": "Símbolos que realizan operaciones sobre operandos.",
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="mb-5">1. Seleccione la respuesta correcta:</h3>
        <DnDComponentText
          items={["Operadores", "Constantes", "Directivas de Ensamblador"]}
          zones={["zona-1", "zona-2", "zona-3"]}
          allowedDropMap={{
            Constantes: "zona-1",
            "Directivas de Ensamblador": "zona-2",
            Operadores: "zona-3",
          }}
          texts={texts}
        />
      </div>
    </div>
  );
};

export default EvaluationAct5;
