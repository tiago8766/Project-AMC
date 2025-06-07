
import React from 'react';
import { MemoryMapBuilderData } from '../../../interfaces/Actividades';

const MemoryMapBuilder: React.FC<MemoryMapBuilderData> = ({ incompleteMapExercise, customMapDesign }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Mapa de Memoria y Ejercicios Avanzados</h2>

      <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Ejercicio de Mapa de Memoria Incompleto:</h3>
        <p className="text-gray-700 mb-2">{incompleteMapExercise.question}</p>
        <p className="text-blue-700 font-semibold mb-1">Registro: {incompleteMapExercise.answerRegister}</p>
        <p className="text-gray-700">Efecto: {incompleteMapExercise.answerEffect}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Diseña tu Propio Mapa de Memoria:</h3>
        <p className="text-gray-700 mb-4">{customMapDesign.description}</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Dirección</th>
                <th className="py-2 px-4 border-b">Banco 0</th>
                <th className="py-2 px-4 border-b">Banco 1</th>
                <th className="py-2 px-4 border-b">Tipo de Registro</th>
              </tr>
            </thead>
            <tbody>
              {customMapDesign.template.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-center">{row.address}</td>
                  <td className="py-2 px-4 border-b">{row.bank0}</td>
                  <td className="py-2 px-4 border-b">{row.bank1}</td>
                  <td className="py-2 px-4 border-b">{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {customMapDesign.notes && customMapDesign.notes.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-medium text-gray-800 mb-2">Notas sobre los Registros Personalizados:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {customMapDesign.notes.map((note, index) => <li key={index}>{note}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryMapBuilder;