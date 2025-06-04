import React, { useState } from 'react';
import { DiagramBuilderData } from '../../../interfaces/Actividades';

interface BlockDiagramBuilderProps {
  data: DiagramBuilderData;
}

const BlockDiagramBuilder: React.FC<BlockDiagramBuilderProps> = ({ data }) => {
  const [highlightedSlotId, setHighlightedSlotId] = useState<string | null>(null);
  const [selectedComponentInfo, setSelectedComponentInfo] = useState<{ name: string; description: string; type: string } | null>(null);

  if (!data || !data.components.length || !data.targetSlots.length) {
    return <p>No hay datos para construir el diagrama.</p>;
  }

  const handleComponentClick = (componentId: string, componentType: string) => {
    const component = data.components.find(c => c.id === componentId);
    if (!component) return;

    const slotToHighlight = data.targetSlots.find(
      slot => slot.correctComponentType === componentType
    );

    if (slotToHighlight) {
      setHighlightedSlotId(slotToHighlight.id);
      setSelectedComponentInfo({
        name: component.name,
        description: component.description,
        type: component.type
      });
    } else {
      setHighlightedSlotId(null);
      setSelectedComponentInfo({
        name: component.name,
        description: `No se encontró una ubicación específica en el diagrama para el tipo '${component.type}'.`,
        type: component.type
      });
    }
  };

  const clearHighlight = () => {
    setHighlightedSlotId(null);
    setSelectedComponentInfo(null);
  };

  return (
    <div className="block-diagram-explorer p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-xl font-bold text-gray-800 mb-4"> Diagrama de Bloques</h4>
      <p className="text-gray-700 mb-4">
        Haz clic en los componentes 
      </p>

      <div className="available-components mb-6 p-4 border border-dashed border-gray-300 rounded-md bg-gray-50 flex flex-wrap gap-3 justify-center">
        <h5 className="w-full text-center font-semibold text-gray-700 mb-2">Componentes</h5>
        {data.components.slice(0, 4).map(comp => (
          <button
            key={comp.id}
            onClick={() => handleComponentClick(comp.id, comp.type)}
            className={`px-4 py-2 rounded-md shadow-sm transition-colors
              ${selectedComponentInfo?.name === comp.name ? 'bg-indigo-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            title={`Tipo: ${comp.type}`}
          >
            {comp.name}
          </button>
        ))}
        <button
          onClick={clearHighlight}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-sm hover:bg-gray-400 transition-colors"
        >
          Limpiar 
        </button>
      </div>

      <div className="diagram-area relative w-full aspect-video bg-cover bg-center rounded-lg border-2 border-gray-400 overflow-hidden"
           style={{ backgroundImage: `url(${data.baseDiagramImage})` }}>
        {data.targetSlots.map(slot => (
          <div
            key={slot.id}
            className={`absolute flex items-center justify-center border-2 rounded-md bg-opacity-70 text-center text-sm p-1 transition-all duration-300 ease-in-out
              ${highlightedSlotId === slot.id ? 'border-green-500 bg-green-300' : 'border-indigo-400 bg-indigo-100'}`}
            style={{
                left: `${slot.position.left}%`,
                top: `${slot.position.top}%`,
                width: `${slot.position.width}%`,
                height: `${slot.position.height}%`,
            }}
          >
            <span className="font-semibold">{slot.label}</span>
          </div>
        ))}
      </div>

      {selectedComponentInfo && (
        <div className="selected-info mt-6 p-4 bg-teal-50 border border-teal-200 rounded-md">
          <h5 className="font-bold text-teal-800 mb-2">Información del Componente: {selectedComponentInfo.name}</h5>
          <p className="text-gray-800 text-sm">{selectedComponentInfo.description}</p>
        </div>
      )}
    </div>
  );
};

export default BlockDiagramBuilder;