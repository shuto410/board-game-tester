export interface DragItem {
  id: number;
  type: ItemType;
  left: number;
  top: number;
}

export interface Item extends DragItem {
  contents: Contents;
}

export interface Contents {
  title: string;
  imageUrl?: string;
  description?: string;
}

export type ItemType = "CARD" | "DECK" | "CARD_PLACE";
