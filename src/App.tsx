import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Navbar/Banner';
import Hero from './components/Hero/Hero';
import Info from './components/Info/info';
import Programs from './components/Programs/Programs';
import { programsDataList } from './interfaces/ProgramsData';
import OurActivities from './components/Activities/Activities';
import CardSection from './components/Card/CardSection';
import ActivityDetail from './components/Activities/ActivitiesDetails';
import TodasLasActividadesPage from './components/Activities/Todas Actividades/TodasLasActividadesPage';
import DetalleActividadPage from './components/Activities/Todas Actividades/DetalleActividadPage';
import ResourcesPage from './components/Resources/ResourcesPage';
import MaintenanceDetailPage from './components/Resources/MaintenanceDetailPage';


const App: React.FC = () => {
  return (
    <Router> 
      <main className='overflow-x-hidden'>
        <Navbar />
        <Banner />
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Info />
                <Programs dataList={programsDataList} />
                <OurActivities />
                <CardSection />
              </>
            }
          />
          <Route
            path="/recursos"
            element={<ResourcesPage />}
          />

          <Route path="/todas-las-actividades" element={<TodasLasActividadesPage />} />
          <Route path="/actividades/:id" element={<ActivityDetail />} />
          <Route
            path="/actividades/detalles/:id"
            element={<DetalleActividadPage />}
          />
          <Route
          path="/recursos/:id"
          element={<MaintenanceDetailPage />}
        />

          {/* <Route path="/todas-las-actividades" element={<div>Página de todas las actividades aquí</div>} /> */}

          {/* Opcional: Ruta para manejar URLs no encontradas (404) */}
          {/* <Route path="*" element={<div>404 - Página no encontrada</div>} /> */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;