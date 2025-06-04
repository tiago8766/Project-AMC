
import React, { useState, useMemo } from 'react';
import { ProcessorTimelineProps, ProcessorData } from '../../../interfaces/Actividades';

const ProcessorTimeline: React.FC<ProcessorTimelineProps> = ({ processors }) => {
  const [selectedProcessor, setSelectedProcessor] = useState<ProcessorData | null>(null);

  const sortedProcessors = useMemo(() => {
    return [...processors].sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.name.localeCompare(b.name);
    });
  }, [processors]);

  const minYear = useMemo(() => sortedProcessors[0]?.year || 0, [sortedProcessors]);
  const maxYear = useMemo(() => sortedProcessors[sortedProcessors.length - 1]?.year || 0, [sortedProcessors]);
  const yearRange = maxYear - minYear;

  const getProcessorPosition = (year: number) => {
    if (yearRange === 0) return 50;
    return ((year - minYear) / yearRange) * 100;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Evolución de los Microprocesadores
      </h2>

      <div className="relative flex items-center h-24 mb-12 px-4">
        <div className="absolute left-0 right-0 h-1 bg-blue-400 rounded-full"></div>

        {sortedProcessors.map((processor) => (
          <div
            key={processor.name + processor.year}
            className="absolute flex flex-col items-center cursor-pointer group"
            style={{
              left: `${getProcessorPosition(processor.year)}%`,
              transform: 'translateX(-50%)',
            }}
            onClick={() => setSelectedProcessor(processor)}
          >
            <div
              className={`w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-800 transition-all duration-200
                ${selectedProcessor?.name === processor.name ? 'scale-150 ring-4 ring-blue-300' : 'hover:scale-125'}`}
            ></div>
            <span className="absolute top-full mt-2 text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {processor.name} ({processor.year})
            </span>
          </div>
        ))}
      </div>

      {selectedProcessor ? (
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 animate-fadeInUp">
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">
            {selectedProcessor.name} ({selectedProcessor.year})
          </h3>
          <p className="text-gray-700 mb-2">
            <strong className="text-blue-700">Arquitectura:</strong> {selectedProcessor.architecture}
          </p>
          <p className="text-gray-700 mb-2">
            <strong className="text-blue-700">Núcleos:</strong> {selectedProcessor.cores}
          </p>
          <p className="text-gray-700 mb-2">
            <strong className="text-blue-700">Frecuencia:</strong> {selectedProcessor.frequency}
          </p>
          <p className="text-gray-700 mb-2">
            <strong className="text-blue-700">Transistores:</strong> {selectedProcessor.transistors}
          </p>
          <p className="text-gray-700">
            <strong className="text-blue-700">Características:</strong> {selectedProcessor.characteristics}
          </p>
        </div>
      ) : (
        <div className="text-center text-gray-600 p-6 bg-blue-50 rounded-lg border border-blue-200">
          Haz clic en un procesador en la línea de tiempo para ver sus detalles.
        </div>
      )}
    </div>
  );
};

export default ProcessorTimeline;