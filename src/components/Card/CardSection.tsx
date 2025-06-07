
import React from 'react';
import Card from './Card';
import { CardProps } from '../../interfaces/Cards'


const testimonials: CardProps[] = [
  {
    id: '1',
    name: 'Eloisse Molina',
    title: 'Estudiante',
    comment:
      'Clase bastante practica e interesante',
    rating: 5,
  },
  {
    id: '2',
    name: 'Andres Guido',
    title: 'Estudiante',

    comment:
      'Clase bastante dinamica y autodidacta',
    rating: 5,
  },
  {
    id: '3',
    name: 'Santiago Ocampo',
    title: 'Estudiante',

    comment:
      'Clase bastante practica y autodidacta ',
    rating: 5,
  },

];

const CardSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-base font-semibold uppercase tracking-wide text-orange-600 mb-2">
          Nuestros Testimonios
        </h2>
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
          Comentarios
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (

            <Card key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;