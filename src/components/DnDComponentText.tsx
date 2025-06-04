import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Alert from "@mui/material/Alert";

import Draggable from "./Draggable";
import DroppableText from "./DroppableText";

interface DnDProps {
  items: string[];
  zones: string[];
  allowedDropMap: Record<string, string>; // item -> correct zone
  successMessage?: string;
  images?: Record<string, string>; // zoneId => imageUrl
  texts?: Record<string, string>;
}

const DnDComponentText: React.FC<DnDProps> = ({
  items,
  zones,
  allowedDropMap,
  successMessage = "✅ ¡Todos los ítems fueron colocados correctamente!",
  images = {},
  texts = {},
}) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [droppedItems, setDroppedItems] = useState<
    Record<string, string | null>
  >(() => Object.fromEntries(zones.map((z) => [z, null])));

  const isAllCorrect = (itemsMap: Record<string, string | null>) => {
    return Object.entries(allowedDropMap).every(
      ([itemId, correctZone]) => itemsMap[correctZone] === itemId
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    const allowedZone = allowedDropMap[activeId];
    if (allowedZone === overId) {
      setDroppedItems((prev) => {
        const newDroppedItems = {
          ...prev,
          [overId]: activeId,
        };

        if (isAllCorrect(newDroppedItems)) {
          setShowSuccessAlert(true);
        }

        return newDroppedItems;
      });
    }
  };

  return (
    <>
      {showSuccessAlert && (
        <Alert severity="success" onClose={() => setShowSuccessAlert(false)}>
          {successMessage}
        </Alert>
      )}

      <DndContext onDragEnd={handleDragEnd}>
        {/* Draggables */}
        <div className="flex gap-4 flex-wrap mb-8 p-1">
          {items.map((item) =>
            Object.values(droppedItems).includes(item) ? null : (
              <Draggable key={item} id={item}>
                {item}
              </Draggable>
            )
          )}
        </div>

        {/* Droppables */}
        <div className="flex flex-col gap-4 p-1">
          {zones.map((zoneId) => (
            <DroppableText
              key={zoneId}
              id={zoneId}
              hasItem={!!droppedItems[zoneId]}
              imageUrl={images[zoneId]}
              text={texts[zoneId]}
            >
              {droppedItems[zoneId]
                ? `${droppedItems[zoneId]}`
                : "Arrastar aquí"}
            </DroppableText>
          ))}
        </div>
      </DndContext>
    </>
  );
};

export default DnDComponentText;
