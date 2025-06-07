
import React from 'react';
import { CodeSnippetsReviewerData } from '../../../interfaces/Actividades';

const CodeSnippetsReviewer: React.FC<CodeSnippetsReviewerData> = ({ snippets }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fragmentos de Código y Precauciones con Memoria Externa</h2>
      <div className="space-y-8">
        {snippets.map((snippet, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{snippet.title}</h3>
            <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
              <pre>{snippet.code.trim()}</pre>
            </div>
            <p className="text-gray-700">{snippet.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippetsReviewer;