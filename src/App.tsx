import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Banner from './components/Navbar/Banner';
import Hero from './components/Hero/Hero'
const App: React.FC = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Banner />
      <Hero />
    </main>
  );
};

export default App;