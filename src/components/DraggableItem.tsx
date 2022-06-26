import type { CSSProperties, FC } from "react";
import { memo, useEffect } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { Item } from "./model";
import { Card } from "./Items/Card/Card";
import { CardPlace } from "./Items/CardPlace/CardPlace";
import { Deck } from "./Items/Deck/Deck";

export interface DraggableItemProps extends Item {}
export const DraggableItem: FC<DraggableItemProps> = memo(
  function DraggableItem({ id, left, top, contents, type }) {
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type,
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

    const renderItem = (): JSX.Element => {
      switch (type) {
        case "CARD":
          return <Card id={id} />;
        case "DECK":
          return <Deck title={contents.title} />;
        case "CARD_PLACE":
          return <CardPlace title={contents.title} />;
        default:
          const exhaustiveCheck: never = type;
          return exhaustiveCheck;
      }
    };

    return (
      <div ref={drag} style={getStyles(left, top, isDragging)}>
        {renderItem()}
      </div>
    );
  }
);

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
