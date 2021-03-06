import type { CSSProperties, FC } from "react";
import { useCallback } from "react";
import { useDrop } from "react-dnd";
import { DraggableItem } from "./DraggableItem";
import { Item, DragItem } from "./model";
import { Paper } from "@mui/material";
import { updateItemPosition } from "../store/items";
import { useDispatch, useSelector } from "react-redux";
import { selectAllItems } from "../store/selector";

export const Container: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const moveItem = useCallback(
    (id: number, left: number, top: number) => {
      dispatch(updateItemPosition({ id, left, top }));
    },
    [items]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ["CARD", "DECK", "CARD_PLACE"],
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);

        moveItem(item.id, left, top);
        return undefined;
      },
    }),
    [moveItem]
  );

  return (
    <div ref={drop} style={styles}>
      <Paper
        elevation={2}
        style={{ width: "100%", height: "100%", backgroundColor: "#DFFFFF" }}
      >
        {items.map((item, i) => (
          <DraggableItem key={i} {...item} />
        ))}
      </Paper>
    </div>
  );
};

const styles: CSSProperties = {
  width: "90vw",
  height: "90vh",
  position: "relative",
};
