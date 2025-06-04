import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";

interface DraggableProps {
  id: string;
  children: ReactNode;
}

const Draggable: React.FC<DraggableProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style: React.CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div className="flex grow flex-col items-center min-w-[100px] max-w-[150px]">
      <button
        className="bg-green-200 border-2 border-b-emerald-950 rounded-b-lg p-1.5 w-full h-full"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        {children}
      </button>
    </div>
  );
};

export default Draggable;
