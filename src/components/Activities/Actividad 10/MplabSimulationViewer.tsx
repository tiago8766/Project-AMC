
import React from 'react';
import { MplabSimulationViewerData } from '../../../interfaces/Actividades';

const MplabSimulationViewer: React.FC<MplabSimulationViewerData> = ({ simulations }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ejercicios de Simulación en MPLAB Xpress</h2>
      <div className="space-y-8">
        {simulations.map((sim, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{sim.title}</h3>
            <p className="text-gray-700 mb-3">{sim.description}</p>
            <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
              <pre>{sim.code.trim()}</pre>
            </div>
            <p className="text-gray-600 text-sm">
              <strong className="text-gray-800">Verificación (Simulación):</strong> {sim.verification}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MplabSimulationViewer;