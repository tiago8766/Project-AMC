import React from 'react';
import { ProgramsDataItem } from '../../interfaces/ProgramsData'; 

interface ProgramsProps {
  dataList: ProgramsDataItem[]; 
}


const Programs: React.FC<ProgramsProps> = ({ dataList }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {dataList.map((programItem, index) => {
          
          const imageOnRight = index % 2 !== 0; 

          const flexDirectionClasses = imageOnRight
            ? 'md:flex-row-reverse'
            : 'md:flex-row';
          const textPaddingClasses = imageOnRight
            ? 'md:pr-16' 
            : 'md:pl-16'; 

          return (
          
            <div key={programItem.id} className={`flex flex-col ${flexDirectionClasses} items-center justify-between ${index < dataList.length - 1 ? 'mb-20 md:mb-32' : ''}`}>
              {/* Columna de la Imagen */}
              <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
                <div className="relative w-full max-w-md bg-[#B0DB9C] rounded-2xl p-4 shadow-xl">
                  <img
                    src={programItem.imageSrc} 
                    alt={programItem.imageAlt}
                    className="w-full h-auto rounded-xl object-cover"
                  />
                
                  <div className="absolute top-4 left-4 text-blue-500 text-5xl opacity-75">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2zm2 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                    </svg>
                  </div>
                </div>
              </div>

           
              <div className={`md:w-1/2 w-full ${textPaddingClasses} text-center md:text-left`}>
                <p className="text-orange-500 uppercase text-sm font-semibold mb-2">
                  {programItem.subtitle} 
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {programItem.title} 
                </h2>
                <p className=" text-lg text-gray-600 mb-6">
                  {programItem.description} 
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                  {programItem.buttonText} 
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;