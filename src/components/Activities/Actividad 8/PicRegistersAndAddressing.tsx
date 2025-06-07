
import React from 'react';
import { PicRegistersAndAddressingData } from '../../../interfaces/Actividades';

const PicRegistersAndAddressing: React.FC<PicRegistersAndAddressingData> = ({ addressingModes, interruptConcepts, registerIdentification }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Direccionamiento, Interrupciones y Registros PIC</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Modos de Direccionamiento:</h3>
        <div className="space-y-4">
          {addressingModes.map((mode, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              <strong className="text-blue-700">{mode.mode}:</strong> {mode.description}
              <div className="bg-gray-800 text-white p-2 rounded-md font-mono text-sm mt-2">
                <pre>{mode.example}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Conceptos de Interrupciones:</h3>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p className="text-gray-700 mb-2"><strong>Definición:</strong> {interruptConcepts.definition}</p>
          <p className="text-gray-700 mb-2"><strong>Ejemplo de Evento:</strong> {interruptConcepts.eventExample}</p>
          <p className="text-gray-700 mb-2"><strong>Utilidad:</strong></p>
          <ul className="list-disc list-inside text-gray-600">
            {interruptConcepts.utility.map((util, index) => <li key={index}>{util}</li>)}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Identificación y Manipulación de Registros:</h3>
        <p className="text-gray-700 mb-4">{registerIdentification.description}</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Dirección</th>
                <th className="py-2 px-4 border-b">Registro</th>
                <th className="py-2 px-4 border-b">Tipo</th>
                <th className="py-2 px-4 border-b">Función</th>
              </tr>
            </thead>
            <tbody>
              {registerIdentification.registers.map((reg, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-center">{reg.address}</td>
                  <td className="py-2 px-4 border-b">{reg.register}</td>
                  <td className="py-2 px-4 border-b text-center">{reg.type}</td>
                  <td className="py-2 px-4 border-b">{reg.function}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-2"><strong>Ejemplo de Manipulación de Registros y Bancos:</strong></p>
        <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto">
          <pre>{registerIdentification.registerManipulationCode.trim()}</pre>
        </div>
      </div>
    </div>
  );
};

export default PicRegistersAndAddressing;