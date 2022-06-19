import { Item } from "./components/model";

export const initialData: Item[] = [
  {
    id: 0,
    top: 280,
    left: 280,
    type: "CARD_PLACE",
    contents: { title: "Place" },
  },
  {
    id: 1,
    top: 10,
    left: 10,
    type: "DECK",
    contents: { title: "Deck PlaceHolder" },
  },
  {
    id: 2,
    top: 140,
    left: 140,
    type: "CARD",
    contents: { title: "Card Title 2", description: "Card Description" },
  },
];
