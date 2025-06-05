import React from "react";
import DnDComponentImage from "../../DnDComponents/DnDComponentImage";
import DnDComponentText from "../../DnDComponents/DnDComponentText";

const EvaluationComponent: React.FC = () => {
  const images = {
    "zona-von-neumann": "/images/von_Neumann_architecture.png",
    "zona-harvard": "/images/Harvard_architecture.png",
  };
  const texts = {
    "zona-diagrama-bloques":
      "Es una representación gráfica simplificada de la estructura y operatividad de " +
      "un sistema o proceso, enfocándose en las relaciones funcionales y el flujo de información.",
    "zona-memoria-unica":
      "Esto simplifica el diseño pero puede crear un 'cuello de botella de Von Neumann " +
      "ya que solo se puede acceder a una cosa a la vez.",
    "zona-memoria-datos":
      "Almacenamiento separado exclusivamente para datos. Permite acceder a datos simultáneamente " +
      "con la búsqueda de instrucciones.",
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-12">
        <h3 className="mb-5">
          1. Coloque los items en los cuadros que corresponden:
        </h3>
        <DnDComponentImage
          items={["Harvard", "Von Neumann"]}
          zones={["zona-von-neumann", "zona-harvard"]}
          allowedDropMap={{
            "Von Neumann": "zona-von-neumann",
            Harvard: "zona-harvard",
          }}
          images={images}
        />
      </div>
      <div>
        <h3 className="mb-5">2. Seleccione la respuesta correcta:</h3>
        <DnDComponentText
          items={["Memoria de Datos", "Diagrama de bloques", "Memoria unica"]}
          zones={[
            "zona-diagrama-bloques",
            "zona-memoria-unica",
            "zona-memoria-datos",
          ]}
          allowedDropMap={{
            "Diagrama de bloques": "zona-diagrama-bloques",
            "Memoria de Datos": "zona-memoria-datos",
            "Memoria unica": "zona-memoria-unica",
          }}
          texts={texts}
        />
      </div>
    </div>
  );
};

export default EvaluationComponent;
