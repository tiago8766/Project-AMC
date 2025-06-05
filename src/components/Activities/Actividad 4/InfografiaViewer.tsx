import React from 'react';

interface InfografiaSection {
  title: string;
  description: string;
  image?: string;
}

interface InfografiaViewerProps {
  data: {
    type: 'infografiaViewer';
    sections: InfografiaSection[];
  };
}

const InfografiaViewer: React.FC<InfografiaViewerProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Infografía: Conceptos de Ensamblador</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            {section.image && (
              <img src={section.image} alt={section.title} className="w-full h-32 object-contain mb-4 rounded" />
            )}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{section.title}</h3>
            <p className="text-gray-700 text-sm">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfografiaViewer;