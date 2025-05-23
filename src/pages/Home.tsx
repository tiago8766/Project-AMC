import React from "react";
import Card from "../components/TarjetaTarea";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Card
        title="Tarea 1"
        description="Descripción de la tarea 1"
        imageUrl="https://via.placeholder.com/150"
      />
      <Card
        title="Tarea 2"
        description="Descripción de la tarea 2"
        imageUrl="https://via.placeholder.com/150"
      />
      <Card
        title="Tarea 3"
        description="Descripción de la tarea 3"
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default Home;
