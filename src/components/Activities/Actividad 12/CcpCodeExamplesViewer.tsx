
import React from 'react';
import { CcpCodeExamplesViewerData } from '../../../interfaces/Actividades';

const CcpCodeExamplesViewer: React.FC<CcpCodeExamplesViewerData> = ({ exercises }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ejercicios Prácticos con Módulos CCP y USART</h2>
      <div className="space-y-8">
        {exercises.map((exercise, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{exercise.title}</h3>
            <p className="text-gray-700 mb-3">{exercise.description}</p>
            {exercise.code && (
              <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
                <pre>{exercise.code.trim()}</pre>
              </div>
            )}
            {exercise.verification && (
              <p className="text-gray-600 text-sm">
                <strong className="text-gray-800">Verificación:</strong> {exercise.verification}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CcpCodeExamplesViewer;