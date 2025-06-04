
import React, { useState } from 'react';
import { FlashcardExplorerProps } from '../../../interfaces/Actividades'; 

const FlashcardExplorer: React.FC<FlashcardExplorerProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setShowDefinition(false); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setShowDefinition(false); 
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleFlip = () => {
    setShowDefinition((prev) => !prev);
  };

  if (!cards || cards.length === 0) {
    return (
      <div className="text-center text-gray-600 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
        No hay tarjetas disponibles para esta sección.
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Conceptos Clave: Glosario Interactivo
      </h2>

      <div className="flex flex-col items-center justify-center min-h-[200px] mb-6">
        <div
          className={`relative w-full max-w-md h-48 bg-blue-100 rounded-lg shadow-lg flex items-center justify-center p-4 text-center cursor-pointer perspective-1000 ${showDefinition ? 'flipped' : ''}`}
          onClick={handleFlip}
          style={{ transition: 'transform 0.6s' }} 
        >
          
          <div
            className="absolute w-full h-full backface-hidden flex items-center justify-center"
            style={{ transform: showDefinition ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <p className="text-3xl font-semibold text-blue-700 select-none">
              {currentCard.term}
            </p>
          </div>

         
          <div
            className="absolute w-full h-full backface-hidden flex items-center justify-center bg-blue-200 rounded-lg"
            style={{ transform: showDefinition ? 'rotateY(0deg)' : 'rotateY(-180deg)' }}
          >
            <p className="text-lg text-gray-800 p-4 select-none">
              {currentCard.definition}
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>
        <span className="self-center text-gray-600 font-medium">
          {currentIndex + 1} / {cards.length}
        </span>
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
        >
          Siguiente
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FlashcardExplorer;