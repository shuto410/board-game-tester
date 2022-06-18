import type { CSSProperties, FC } from "react";
import type { XYCoord } from "react-dnd";
import { useDragLayer } from "react-dnd";
import { Item, ItemType } from "./interfaces";
import { Card } from "./Items/Card/Card";
import { Deck } from "./Items/Deck/Deck";

export const CustomDragLayer: FC = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem() as Item,
      itemType: monitor.getItemType() as ItemType,
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  function renderItem() {
    switch (itemType) {
      case "card":
        return (
          <div style={{ display: "inline-block" }}>
            <Card {...item.contents} />
          </div>
        );
      case "deck":
        return (
          <div style={{ display: "inline-block" }}>
            <Deck title={item.contents.title} />
          </div>
        );
      default:
        const exhaustiveCheck: never = itemType;
        return exhaustiveCheck;
    }
  }

  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};

const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  console.log("initial: ", initialOffset);
  console.log("transform: ", transform);
  return {
    transform,
    WebkitTransform: transform,
  };
}
