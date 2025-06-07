
import React from 'react';
import { ParallelPortsViewerData } from '../../../interfaces/Actividades';

const ParallelPortsViewer: React.FC<ParallelPortsViewerData> = ({ concepts, generalDiagram }) => {
  const getImageUrl = (imageName: string) => {

    return `/assets/diagrams/${imageName}`; 
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Puertos de Entrada y Salida Paralela</h2>
      {generalDiagram && (
        <div className="mb-8 text-center">
          <img
            src={getImageUrl(generalDiagram)}
            alt="Diagrama General de Puerto Paralelo"
            className="max-w-full h-auto rounded-md shadow-sm mx-auto"
          />
          <p className="text-gray-500 text-sm mt-2">Diagrama general de un puerto paralelo</p>
        </div>
      )}
      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{concept.name}</h3>
            <p className="text-gray-700 mb-3">{concept.description}</p>
            {concept.details && concept.details.length > 0 && (
              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {concept.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallelPortsViewer;