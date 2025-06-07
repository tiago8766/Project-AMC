
import React from 'react';
import { PicHardwareExplorerData } from '../../../interfaces/Actividades';

const PicHardwareExplorer: React.FC<PicHardwareExplorerData> = ({ components, instructions, peripheralsUse }) => {
  const getImageUrl = (imageName: string) => {

    return `/assets/diagrams/${imageName}`; 
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Identificación y Uso de Componentes PIC</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Componentes Principales:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((comp, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              {comp.image && (
                <img src={getImageUrl(comp.image)} alt={comp.name} className="w-full h-24 object-contain mb-2 rounded" />
              )}
              <strong className="text-blue-700">{comp.name}:</strong> {comp.description}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Conjunto de Instrucciones Básicas:</h3>
        <div className="space-y-3">
          {instructions.map((instr, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              <strong className="text-blue-700">{instr.name}:</strong> {instr.description}
              <div className="bg-gray-800 text-white p-2 rounded-md font-mono text-sm mt-2">
                <pre>{instr.exampleCode}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Uso de Periféricos en Aplicaciones Sencillas:</h3>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p className="text-gray-700 mb-2"><strong>Escenario:</strong> {peripheralsUse.scenario}</p>
          <p className="text-gray-700 mb-2"><strong>Periféricos Necesarios:</strong></p>
          <ul className="list-disc list-inside text-gray-600">
            {peripheralsUse.peripherals.map((p, index) => <li key={index}>{p}</li>)}
          </ul>
          <p className="text-gray-700 mt-2"><strong>Interacción:</strong> {peripheralsUse.interaction}</p>
        </div>
      </div>
    </div>
  );
};

export default PicHardwareExplorer;