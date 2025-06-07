
import React from 'react';
import { CcpConceptsViewerData } from '../../../interfaces/Actividades';

const CcpConceptsViewer: React.FC<CcpConceptsViewerData> = ({ concepts }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Módulos CCP: Captura, Comparación y PWM</h2>
      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{concept.term}</h3>
            <p className="text-gray-700 mb-3">{concept.definition}</p>
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

export default CcpConceptsViewer;