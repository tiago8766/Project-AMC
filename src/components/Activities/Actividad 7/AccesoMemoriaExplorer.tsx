
import React from 'react';
import { AccesoMemoriaExplorerData } from '../../../interfaces/Actividades';

const AccesoMemoriaExplorer: React.FC<AccesoMemoriaExplorerData> = ({ methods }) => {
 
 

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Técnicas de Acceso a Memoria Externa</h2>
      <div className="space-y-8">
        {methods.map((method, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{method.title}</h3>
            <p className="text-gray-700 mb-3">{method.description}</p>
            {method.diagram && (
              <div className="mb-4 text-center">
              
               
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccesoMemoriaExplorer;