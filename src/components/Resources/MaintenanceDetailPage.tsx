import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MaintenanceDetailContent } from '../../interfaces/Actividades'; 
import { maintenanceDetails } from './maintenanceCategories';

const MaintenanceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  const [detail, setDetail] = useState<MaintenanceDetailContent | null>(null);

  useEffect(() => {
    if (id) {
      const foundDetail = maintenanceDetails.find(item => item.id === id);
      if (foundDetail) {
        setDetail(foundDetail);
      } else {
       
        navigate('/recursos');
      }
    }
  }, [id, navigate]);

  if (!detail) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-xl font-semibold">
        Cargando detalles del mantenimiento...
      </div>
    );
  }


  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto border border-gray-200">
        <button
          onClick={() => navigate('/recursos')}
          className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Tips de Mantenimiento
        </button>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{detail.title}</h1>
       
        <p className="text-gray-800 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
          {detail.fullContent}
        </p>

        

      </div>
    </div>
  );
};

export default MaintenanceDetailPage;