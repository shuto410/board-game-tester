export interface DragItem {
  id: number;
  type: ItemType;
  left: number;
  top: number;
}

export interface Item extends DragItem {
  contents: CardContents | DeckContents;
}

export interface CardContents {
  title: string;
  imageUrl?: string;
  description?: string;
}

export interface DeckContents {
  title: string;
  imageUrl?: string;
}

export type ItemType = "card" | "deck";
