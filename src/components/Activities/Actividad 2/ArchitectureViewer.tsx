
import React, { useState } from 'react';
import { ArchitectureData } from '../../../interfaces/Actividades';

interface ArchitectureViewerProps {
  data: ArchitectureData;
}

const ArchitectureViewer: React.FC<ArchitectureViewerProps> = ({ data }) => {
  const [selectedArchitectureId, setSelectedArchitectureId] = useState<string>(data.architectures[0]?.id || '');

  const selectedArchitecture = data.architectures.find(arch => arch.id === selectedArchitectureId);

  if (!data || !data.architectures.length) {
    return <p>No hay datos de arquitectura disponibles.</p>;
  }

  return (
    <div className="architecture-viewer p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {data.architectures.map(arch => (
          <button
            key={arch.id}
            onClick={() => setSelectedArchitectureId(arch.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200
              ${selectedArchitectureId === arch.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {arch.name}
          </button>
        ))}
      </div>

      {selectedArchitecture ? (
        <div className="selected-architecture-detail p-5 border border-indigo-200 rounded-lg bg-indigo-50">
          <h5 className="text-2xl font-bold text-indigo-800 mb-3">{selectedArchitecture.name}</h5>
         
          <div className="components-list grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedArchitecture.components.map(comp => (
              <div key={comp.id} className="p-3 bg-white rounded-md shadow-sm border border-gray-100">
                <h6 className="font-semibold text-gray-900">{comp.name}</h6>
                <p className="text-sm text-gray-700">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">Selecciona</p>
      )}
    </div>
  );
};

export default ArchitectureViewer;