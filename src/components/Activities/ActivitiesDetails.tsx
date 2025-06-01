import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Actividades, Activity } from '../../interfaces/Actividades'; // Asegúrate de importar Activity y Actividades
import FlowDiagramComponent from './FlowDiagramComponent';
import IOClassifierComponent from './IOClassifierComponent';
import MemoryPyramidComponent from './MemoryPyramidComponent';
import EvaluationComponent from './Evaluation'; // Asegúrate de que la ruta a Evaluation.tsx es correcta

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string | undefined>(undefined); // Para la navegación por secciones
  const navigate = useNavigate();

  useEffect(() => {
    const foundActivity = Actividades.find(act => act.id === id);
    if (foundActivity) {
      setActivity(foundActivity);
      // Establece la primera sección como activa por defecto si hay secciones
      if (foundActivity.sections && foundActivity.sections.length > 0) {
        setActiveSectionId(foundActivity.sections[0].id);
      } else {
        setActiveSectionId(undefined); // No hay secciones interactivas
      }
    } else {
      console.warn(`Actividad con ID ${id} no encontrada.`);
      navigate('/');
    }
  }, [id, navigate]);

  if (!activity) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-xl font-semibold">
        Cargando detalles de la actividad...
      </div>
    );
  }

  // Encuentra la sección activa para mostrar su contenido
  const currentSection = activity.sections?.find(sec => sec.id === activeSectionId);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto border border-gray-200">
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Actividades
        </button>

        {activity.image && (
          <img src={activity.image} alt={activity.name} className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg" />
        )}

        <div className="flex flex-col md:flex-row items-center md:items-start mb-6 border-b pb-6 border-gray-200">
          <span className={`text-7xl mb-4 md:mb-0 md:mr-6 p-4 rounded-full ${activity.color.replace('bg-', 'bg-')} shadow-md border-4 border-indigo-300`}>
            {activity.icon}
          </span>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">{activity.name}</h1>
            <p className="text-gray-700 text-xl italic">{activity.description}</p>
          </div>
        </div>

        {activity.sections && activity.sections.length > 0 ? (
          
          <div className="sections-container">
           
            <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
              {activity.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                    ${activeSectionId === section.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Contenido de la sección activa */}
            {currentSection && (
              <div className="section-content-area">
                {currentSection.image && (
                  <img src={currentSection.image} alt={currentSection.title} className="w-full h-64 object-cover rounded-lg mb-4 shadow-sm" />
                )}
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  {currentSection.content}
                </p>

                {currentSection.interactiveComponent && (
                  <div className="interactive-component-wrapper bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
                   

                    {currentSection.interactiveComponent === 'flowDiagram' && currentSection.data && (
                      <FlowDiagramComponent data={currentSection.data} />
                    )}

                    {currentSection.interactiveComponent === 'memoryPyramid' && currentSection.data && (
                      <MemoryPyramidComponent data={currentSection.data} />
                    )}

                    {currentSection.interactiveComponent === 'ioClassifier' && currentSection.data && (
                      <IOClassifierComponent data={currentSection.data} />
                    )}

                    {currentSection.interactiveComponent === 'evaluation' && (
                      <EvaluationComponent />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-gray-800 text-lg leading-relaxed mb-8">
            <p className="mb-4">{activity.longDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityDetail;