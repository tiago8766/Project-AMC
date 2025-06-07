import React from "react";
import DnDComponentText from "../../DnDComponents/DnDComponentText";

const EvaluationAct6: React.FC = () => {
  const texts = {
    "zona-1":
      "Los microcontroladores son el cerebro de innumerables dispositivos en la vida cotidiana.",
    "zona-2":
      "Instrucciones que controlan el ensamblado o definen la estructura del programa.",
    "zona-3":
      "Un microcontrolador (MCU) es un circuito integrado que contiene en su interior los componentes fundamentales de un sistema computacional, como la unidad central de procesamiento (CPU), memoria y periféricos de entrada y salida.",
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="mb-5">1. Seleccione la respuesta correcta:</h3>
        <DnDComponentText
          items={[
            "Periféricos comunes de los Microcontroladores",
            "Arquitectura de los Microcontroladores",
            "Aplicaciones de los Microcontroladores",
          ]}
          zones={["zona-1", "zona-2", "zona-3"]}
          allowedDropMap={{
            "Aplicaciones de los Microcontroladores": "zona-1",
            "Periféricos comunes de los Microcontroladores": "zona-2",
            "Arquitectura de los Microcontroladores": "zona-3",
          }}
          texts={texts}
        />
      </div>
    </div>
  );
};

export default EvaluationAct6;
