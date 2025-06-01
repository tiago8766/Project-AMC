import React from 'react';
import { IOSimulatorData } from '../../interfaces/Actividades';

interface IOClassifierProps {
  data: IOSimulatorData;
}

const IOClassifierComponent: React.FC<IOClassifierProps> = ({ data }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-3">Dispositivos de Entrada/Salida:</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Categoría de Entrada */}
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h5 className="font-bold text-red-700 mb-2">Entrada</h5>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {data.devices.filter(d => d.type.includes('entrada')).map((device, index) => (
              <li key={index}>{device.name} ({device.type.split('-')[0]})</li>
            ))}
          </ul>
        </div>
        {/* Categoría de Salida */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h5 className="font-bold text-green-700 mb-2">Salida</h5>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {data.devices.filter(d => d.type.includes('salida')).map((device, index) => (
              <li key={index}>{device.name} ({device.type.split('-')[0]})</li>
            ))}
          </ul>
        </div>
        {/* Categoría de Entrada/Salida */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h5 className="font-bold text-blue-700 mb-2">Entrada/Salida</h5>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {data.devices.filter(d => d.type.includes('entrada-salida')).map((device, index) => (
              <li key={index}>{device.name} ({device.type.split('-')[1]})</li>
            ))}
          </ul>
        </div>
      </div>

      <h4 className="text-xl font-semibold mt-6 mb-3">Comunicación E/S con la CPU:</h4>
      <ul className="list-disc list-inside text-gray-700">
        {data.communication.map((method, index) => (
          <li key={index}>
            <strong>{method.name}:</strong> {method.desc}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default IOClassifierComponent;