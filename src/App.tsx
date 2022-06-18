import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/Container";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { Item, ItemType } from "./components/interfaces";

function App() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [itemId, setItemId] = useState<number>(0);

  useEffect(() => {
    // useStateの初期値で設定した場合、何故かドラッグ時の挙動がバグったのでここで初期化
    setItems([
      {
        id: 0,
        top: 10,
        left: 10,
        type: "deck",
        contents: { title: "Deck PlaceHolder" },
      },
      {
        id: 1,
        top: 140,
        left: 140,
        type: "card",
        contents: { title: "Card Title 2" },
      },
      {
        id: 2,
        top: 280,
        left: 280,
        type: "card",
        contents: { title: "Card Title 3" },
      },
    ]);
    setItemId(3);
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItem = (type: ItemType) => {
    const box: Item = {
      id: itemId,
      top: 0,
      left: 0,
      type: type,
      contents: { title: "Card Title", description: "description" },
    };

    console.log(items);
    setItems([...items, box]);
    setItemId(itemId + 1);
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container items={items} setItems={setItems} />
        <CustomDragLayer />
      </DndProvider>
      <Button variant="contained" onClick={() => addItem("card")}>
        +CARD
      </Button>
      <Button variant="contained" onClick={() => addItem("deck")}>
        +DECK
      </Button>
    </div>
  );
}

export default App;
