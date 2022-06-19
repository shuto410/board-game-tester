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

export interface CardPlaceContents {
  title?: string;
}

export type ItemType = "CARD" | "DECK" | "CARD_PLACE";
