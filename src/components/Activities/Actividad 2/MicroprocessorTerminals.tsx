
import React, { useState } from 'react';
import { TerminalsData } from '../../../interfaces/Actividades';

interface MicroprocessorTerminalsProps {
  data: TerminalsData;
}

const MicroprocessorTerminals: React.FC<MicroprocessorTerminalsProps> = ({ data }) => {
  const [hoveredTerminal, setHoveredTerminal] = useState<string | null>(null);

  if (!data || !data.mainImage || !data.terminals.length) {
    return <p>No hay datos de terminales disponibles.</p>;
  }

  return (
    <div className="terminals-viewer p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-xl font-bold text-gray-800 mb-4">Terminales del Microprocesador</h4>

      <div className="image-area relative mb-6">
       
        <img
          src={data.mainImage}
          alt="Microprocesador con terminales"
          className="w-full max-h-80 object-contain rounded-md border border-gray-200"
        />
       
      </div>

      <div className="terminals-list grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.terminals.map(terminal => (
          <div
            key={terminal.id}
            onMouseEnter={() => setHoveredTerminal(terminal.id)}
            onMouseLeave={() => setHoveredTerminal(null)}
            className={`p-3 border rounded-md transition-all duration-200
              ${hoveredTerminal === terminal.id ? 'bg-blue-100 border-blue-400 shadow-lg' : 'bg-white border-gray-200 shadow-sm'}`}
          >
            <h5 className="font-semibold text-gray-900">{terminal.name}</h5>
            {hoveredTerminal === terminal.id && (
              <p className="text-sm text-gray-700 mt-1">{terminal.description}</p>
            )}
          </div>
        ))}
      </div>

      {hoveredTerminal && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h6 className="font-bold text-blue-800">Descripción del Terminal Seleccionado:</h6>
          <p className="text-gray-800">
            {data.terminals.find(t => t.id === hoveredTerminal)?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default MicroprocessorTerminals;