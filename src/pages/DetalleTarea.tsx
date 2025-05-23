import React from 'react';
import { useParams } from 'react-router-dom';
import { useTareas } from '../hooks/useTareas';

const DetalleTarea: React.FC = () => {
  const { id } = useParams();
  const tareas = useTareas();
  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) return <div className="p-6">Tarea no encontrada.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>
    </div>
  );
};

export default DetalleTarea;