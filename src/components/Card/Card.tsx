import React from 'react';
import { CardProps } from '../../interfaces/Cards'; 


const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};


const Card: React.FC<CardProps> = ({
  name,
  title,
  comment,
  rating,
}) => {
  return (

    <div className="
      bg-[#DDF6D2] p-6 rounded-lg shadow-md max-w-sm mx-auto
      transition-all duration-300 ease-in-out transform
      hover:scale-105 hover:shadow-xl hover:bg-[#E8F8E0]
      cursor-pointer
    ">
      <div className="flex items-center mb-4">
       
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4 text-justify">
        {comment}
      </p>

      <StarRating rating={rating} />
    </div>
  );
};

export default Card;