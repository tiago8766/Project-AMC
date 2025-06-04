import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa estos componentes

import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Navbar/Banner';
import Hero from './components/Hero/Hero';
import Info from './components/Info/info';
import Programs from './components/Programs/Programs';
import { programsDataList } from './interfaces/ProgramsData';
import OurActivities from './components/Activities/Activities'; // Asegúrate que la ruta sea correcta si cambiaste 'Activities'
import CardSection from './components/Card/CardSection';
import ActivityDetail from './components/Activities/ActivitiesDetails';

const App: React.FC = () => {
  return (
    <Router> {/* Envuelve toda tu aplicación en <Router> */}
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


          <Route path="/actividades/:id" element={<ActivityDetail />} />


          {/* <Route path="/todas-las-actividades" element={<div>Página de todas las actividades aquí</div>} /> */}

          {/* Opcional: Ruta para manejar URLs no encontradas (404) */}
          {/* <Route path="*" element={<div>404 - Página no encontrada</div>} /> */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;