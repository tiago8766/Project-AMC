import React from 'react';
import { Actividades, Activity} from '../../interfaces/Actividades'; 
import { useNavigate } from 'react-router-dom'; 

const OurActivities: React.FC = () => {
  const navigate = useNavigate(); 

  const handleActivityClick = (activityId: string) => {
    navigate(`/actividades/${activityId}`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
     
        <p className="text-orange-500 uppercase text-sm font-semibold mb-2">
          Laboratorios
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          ACTIVIDADES DE AMC
        </h2>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Actividades.map((actividad: Activity) => (
            <button
              key={actividad.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-200 
                          ${actividad.color} text-gray-800 text-lg font-medium cursor-pointer`}
              onClick={() => handleActivityClick(actividad.id)}
            >
              <span className="text-4xl mb-2">{actividad.icon}</span>
              <span>{actividad.name}</span>
            </button>
          ))}
        </div>

        
        <div className="mt-8">
          <button
            onClick={() => navigate('/todas-las-actividades')} 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Ver todas las actividades
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurActivities;