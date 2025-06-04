import React from "react";
import DnDComponentImage from "../../DnDComponents/DnDComponentImage";
import DnDComponentText from "../../DnDComponents/DnDComponentText";

const EvaluationComponent: React.FC = () => {
  const images = {
    "zona-cpu": "/images/cpu.png",
    "zona-ram": "/images/memoria_ram.png",
    "zona-monitor": "/images/monitor.png",
    "zona-keyboard": "/images/keyboard.png",
  };
  const texts = {
    "zona-1":
      "Es un elemento esencial de un computador, este es el encargado de llevar " +
      "a cabo operaciones aritméticas, lógicas y de control sobre los datos.",
    "zona-2":
      "Es una secuencia de celdas de almacenamiento que pueden ser direccionadas " +
      "en forma individual o en bloque.",
    "zona-3":
      "Movimiento de datos o recursos de un lugar a otro. Puede ocurrir entre componentes " +
      "dentro de una misma computadora",
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-12">
        <h3 className="mb-5">
          1. Coloque los items en los cuadros que corresponden:
        </h3>
        <DnDComponentImage
          items={["RAM", "CPU", "TECLADO", "MONITOR"]}
          zones={["zona-cpu", "zona-ram", "zona-monitor", "zona-keyboard"]}
          allowedDropMap={{
            CPU: "zona-cpu",
            RAM: "zona-ram",
            MONITOR: "zona-monitor",
            TECLADO: "zona-keyboard",
          }}
          images={images}
        />
      </div>
      <div>
        <h3 className="mb-5">2. Seleccione la respuesta correcta:</h3>
        <DnDComponentText
          items={["Transferencia", "Dispositivo de procesamiento", "Memoria"]}
          zones={["zona-1", "zona-2", "zona-3"]}
          allowedDropMap={{
            "Dispositivo de procesamiento": "zona-1",
            Memoria: "zona-2",
            Transferencia: "zona-3",
          }}
          texts={texts}
        />
      </div>
    </div>
  );
};

export default EvaluationComponent;
