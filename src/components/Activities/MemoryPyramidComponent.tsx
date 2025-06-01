import React from 'react';
import { MemoryPyramidData } from '../../interfaces/Actividades';

interface MemoryPyramidProps {
  data: MemoryPyramidData;
}

const MemoryPyramidComponent: React.FC<MemoryPyramidProps> = ({ data }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-3">Jerarquía de Memoria:</h4>
      <div className="bg-gray-100 p-4 rounded-lg">
        {data.hierarchy.map((level, index) => (
          <div key={index} className="mb-3 p-3 bg-white rounded shadow-sm border-l-4 border-indigo-400">
            <h5 className="font-bold text-indigo-700">{level.level}</h5>
            <p className="text-gray-700 text-sm">{level.desc}</p>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold mt-6 mb-3">Características Clave:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.characteristics.map((charCategory, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <h5 className="font-bold text-green-700 mb-2">{charCategory.category}</h5>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {charCategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
     
    </div>
  );
};

export default MemoryPyramidComponent;