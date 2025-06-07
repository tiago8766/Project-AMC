import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { MaintenanceCategory } from '../../interfaces/Actividades';
import { maintenanceCategories } from './maintenanceCategories';


interface MaintenanceCategoryCardProps {
  category: MaintenanceCategory;
  onClick: (id: string) => void;
}

const MaintenanceCategoryCard: React.FC<MaintenanceCategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      className={` color: 'bg-green-600' rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 ${category.color}`}
      onClick={() => onClick(category.id)}
    >
      <div className="text-white text-6xl mb-4">
        {category.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
      <p className="text-gray-100 text-sm leading-relaxed">{category.shortDescription}</p>
    </div>
  );
};


const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryId: string) => {
    navigate(`/recursos/${categoryId}`); 
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-center text-base font-semibold uppercase tracking-wide text-blue-600 mb-2">
          Guía de Mantenimiento
        </h2>
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
          Consejos para Cuidar tu Computadora
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {maintenanceCategories.map((category) => (
            <MaintenanceCategoryCard
              key={category.id}
              category={category}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;