
import React from 'react';
import { PicPeripheralCodeViewerData } from '../../../interfaces/Actividades';

const PicPeripheralCodeViewer: React.FC<PicPeripheralCodeViewerData> = ({ projects }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Programación con Periféricos PIC</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto">
              <pre>{project.code.trim()}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicPeripheralCodeViewer;