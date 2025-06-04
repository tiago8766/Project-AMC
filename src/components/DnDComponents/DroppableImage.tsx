import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children: ReactNode;
  hasItem: boolean;
  imageUrl?: string;
}

const DroppableImage: React.FC<DroppableProps> = ({
  id,
  children,
  hasItem,
  imageUrl,
}) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const bgColorClass = hasItem
    ? "bg-green-200"
    : isOver
    ? "bg-green-50"
    : "bg-white";

  return (
    <div className="flex grow flex-col items-center rounded-lg shadow-md p-4 min-w-[100px] max-w-[170px]">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Droppable"
          className="w-full h-24 object-contain rounded-t-lg mb-3 select-none pointer-events-none"
        />
      )}

      <div
        ref={setNodeRef}
        className={`cursor-pointer rounded-b-lg border-2 border-gray-300 transition-colors duration-300 p-4 w-full text-center ${bgColorClass} hover:shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default DroppableImage;
