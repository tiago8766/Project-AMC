
import React from 'react';
import { AssemblyFundamentalsViewerData } from '../../../interfaces/Actividades';

const AssemblyFundamentalsViewer: React.FC<AssemblyFundamentalsViewerData> = ({ sections }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fundamentos del Lenguaje Ensamblador e Interrupciones</h2>
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{section.name}</h3>
            <p className="text-gray-700 mb-3">{section.description}</p>
            {section.items && section.items.length > 0 && (
              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <strong>{item.term}:</strong> {item.detail}
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

export default AssemblyFundamentalsViewer;