// src/components/InteractiveComponents/Actividad 7/ConceptosMemoriaViewer.tsx
import React from 'react';
import { ConceptosMemoriaViewerData } from '../../../interfaces/Actividades';


const ConceptosMemoriaViewer: React.FC<ConceptosMemoriaViewerData> = ({ concepts }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Glosario de Conceptos de Memoria</h2>
      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{concept.term}</h3>
            <p className="text-gray-700 mb-3">{concept.definition}</p>
            {concept.examples && concept.examples.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Ejemplos:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {concept.examples.map((example, exIndex) => (
                    <li key={exIndex}>
                      <strong>{example.type}:</strong> {example.description}
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

export default ConceptosMemoriaViewer;