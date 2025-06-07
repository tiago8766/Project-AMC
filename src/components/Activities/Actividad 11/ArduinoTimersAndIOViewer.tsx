
import React from 'react';
import { ArduinoTimersAndIOViewerData } from '../../../interfaces/Actividades';

const ArduinoTimersAndIOViewer: React.FC<ArduinoTimersAndIOViewerData> = ({ exercises }) => {


  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ejercicios de Temporizadores y E/S en Arduino/PIC</h2>
      <div className="space-y-8">
        {exercises.map((exercise, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{exercise.title}</h3>
            <p className="text-gray-700 mb-3">{exercise.description}</p>
            {exercise.diagram && (
              <div className="mb-4 text-center">
                
                
              </div>
            )}
            {exercise.code && (
              <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
                <pre>{exercise.code.trim()}</pre>
              </div>
            )}
            {exercise.truthTable && (
              <div className="mb-3">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Tabla de Verdad:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                      <tr>
                        {exercise.truthTable.headers.map((header, hIndex) => (
                          <th key={hIndex} className="py-2 px-4 border-b text-center">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {exercise.truthTable.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="hover:bg-gray-50">
                          {row.map((cell, cIndex) => (
                            <td key={cIndex} className="py-2 px-4 border-b text-center">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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

export default ArduinoTimersAndIOViewer;