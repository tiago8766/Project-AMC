import React from 'react';

import { FlowDiagramData } from '../../../interfaces/Actividades';

interface FlowDiagramProps {
  data: FlowDiagramData;
}

const FlowDiagramComponent: React.FC<FlowDiagramProps> = ({ data }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-3">Flujo de Procesos:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.flowSteps.map(step => (
          <div key={step.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <h5 className="font-bold text-blue-700">{step.name}</h5>
            <p className="text-gray-700 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
      <h4 className="text-xl font-semibold mt-6 mb-3">Componentes Clave de la CPU:</h4>
      <ul className="list-disc list-inside text-gray-700">
        {data.cpuComponents.map((component, index) => (
          <li key={index}>
            <strong>{component.name}:</strong> {component.desc}
          </li>
        ))}
      </ul>
     
    
    </div>
  );
};

export default FlowDiagramComponent;