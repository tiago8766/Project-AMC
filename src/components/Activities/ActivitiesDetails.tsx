
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Actividades, Activity, ActivityDetailSection } from '../../interfaces/Actividades';
import InteractiveComponentRenderer from './InteractiveComponent';



const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [sections, setSections] = useState<ActivityDetailSection[] | null>(null); 
  const [activeSectionId, setActiveSectionId] = useState<string | undefined>(undefined);
  const [loadingSections, setLoadingSections] = useState<boolean>(true); 
  const [loadError, setLoadError] = useState<string | null>(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const loadActivityData = async () => {
      setLoadingSections(true);
      setLoadError(null);

      const foundActivity = Actividades.find(act => act.id === id);

      if (!foundActivity) {
        navigate('/');
        return;
      }

      setActivity(foundActivity);

      try {
        let loadedSections: ActivityDetailSection[] = [];
 
        switch (id) {
          case 'activity-1': { 
            const { estructuraComputadoraSections } = await import('../Activities/Actividad 1/EstructuraComputadora');
            loadedSections = estructuraComputadoraSections;
            break;
          } 
          case 'activity-2': { 
            const { arquitecturaMicroprocesadorSections } = await import('../Activities/Actividad 2/Microprocesador');
            loadedSections = arquitecturaMicroprocesadorSections;
            break;
          } 
           case 'activity-3': { 
            const { ConceptosYProcesadores } = await import('../Activities/Actividad 3/ConceptosYProcesadores');
            loadedSections = ConceptosYProcesadores;
            break;
          } 
           case 'activity-4': { 
            const {  ProgramacionMicroprocesador} = await import('../Activities/Actividad 4/ProgramacionMicro');
            loadedSections = ProgramacionMicroprocesador;
            break;
          }
           case 'activity-5': { 
            const {  EnsambladorIx86} = await import('../Activities/Actividad 5/Ensamblador');
            loadedSections = EnsambladorIx86;
            break;
          }
        
  
          default:
            console.warn(`No se encontraron secciones detalladas para la actividad con ID: ${id}`);
            loadedSections = []; 
        }

        setSections(loadedSections);
        if (loadedSections.length > 0) {
          setActiveSectionId(loadedSections[0].id);
        } else {
          setActiveSectionId(undefined);
        }
      } catch (error) {
        console.error("Error al cargar las secciones de la actividad:", error);
        setLoadError("No se pudieron cargar los detalles de las secciones.");
      } finally {
        setLoadingSections(false);
      }
    };

    loadActivityData();
  }, [id, navigate]); 

  
  if (!activity || loadingSections) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-xl font-semibold">
        {loadError ? `Error al cargar: ${loadError}` : 'Cargando detalles de la actividad...'}
      </div>
    );
  }


  const currentSection = sections?.find(sec => sec.id === activeSectionId);

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

      
        {sections && sections.length > 0 ? (
          <div className="sections-container">

            <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
              {sections.map((section) => (
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


            {
            currentSection && (
              <div className="section-content-area">
                {currentSection.image && (
                  <img src={currentSection.image} alt={currentSection.title} className="w-full h-64 object-cover rounded-lg mb-4 shadow-sm" />
                )}
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  {currentSection.content}
                </p>


                {currentSection.interactiveComponent && (
                  <div className="interactive-component-wrapper bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
                    <InteractiveComponentRenderer section={currentSection} />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-gray-800 text-lg leading-relaxed mb-8">
            <p className="mb-4">{activity.longDescription || activity.description}</p>
            {!loadingSections && !sections?.length && !loadError && (
                 <p className="text-gray-500 italic">No hay secciones detalladas disponibles para esta actividad.</p>
            )}
             {loadError && <p className="text-red-500 font-bold">Error: {loadError}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityDetail;