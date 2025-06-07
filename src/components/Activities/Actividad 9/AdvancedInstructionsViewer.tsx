
import React from 'react';
import { AdvancedInstructionsViewerData } from '../../../interfaces/Actividades';

const AdvancedInstructionsViewer: React.FC<AdvancedInstructionsViewerData> = ({ instructionTypes }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Conceptos Avanzados de Instrucciones PIC</h2>
      <div className="space-y-8">
        {instructionTypes.map((type, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{type.name}</h3>
            <p className="text-gray-700 mb-3">{type.description}</p>
            {type.examples && type.examples.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Ejemplos:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {type.examples.map((example, exIndex) => (
                    <li key={exIndex}>
                      <strong>{example.code}:</strong> {example.explanation}
                    </li>
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

export default AdvancedInstructionsViewer;