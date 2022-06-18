import type { CSSProperties, FC } from "react";
import { memo, useEffect } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { Item } from "../../interfaces";

import { Deck } from "./Deck";

function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  console.log("draggablebox: ", transform);
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}

export type DraggableDeckProps = Omit<Item, "type">;

export const DraggableDeck: FC<DraggableDeckProps> = memo(
  function DraggableDeck({ id, left, top, contents }) {
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: "deck",
        item: { id, left, top, contents },
        collect: (monitor: DragSourceMonitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [id, left, top, contents]
    );

    useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
      <div ref={drag} style={getStyles(left, top, isDragging)}>
        <Deck title={contents.title} />
      </div>
    );
  }
);
