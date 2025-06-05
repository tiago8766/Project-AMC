import React from 'react';

interface AssemblyExercise {
  id: string;
  title: string;
  description: string;
  code: string;
  expectedOutput: string;
}

interface AssemblyCodeViewerProps {
  data: {
    type: 'assemblyCodeViewer';
    exercises: AssemblyExercise[];
  };
}

const AssemblyCodeViewer: React.FC<AssemblyCodeViewerProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ejercicios de Ensamblador</h2>
      <div className="space-y-8">
        {data.exercises.map((exercise) => (
          <div key={exercise.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{exercise.title}</h3>
            <p className="text-gray-700 mb-3">{exercise.description}</p>
            <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
              <pre>{exercise.code.trim()}</pre>
            </div>
            <p className="text-gray-600 text-sm">
              <strong className="text-gray-800">Salida Esperada:</strong> {exercise.expectedOutput}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssemblyCodeViewer;