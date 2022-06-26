import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Contents, Item } from "../components/model";
import { initialData } from "../initial-data";
import { ToolbarProps } from "@mui/material";

export interface ItemsState {
  value: Item[];
}

const initialState: ItemsState = {
  value: initialData,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    updateContents: (
      state,
      newContents: PayloadAction<{ contents: Contents; id: number }>
    ) => {
      state.value = state.value.map((item) => {
        if (item.id === newContents.payload.id) {
          return { ...item, contents: newContents.payload.contents };
        }
        return item;
      });
    },
    updateItem: (state, newItem: PayloadAction<Item>) => {
      state.value = state.value.map((item) => {
        if (item.id === newItem.payload.id) {
          return newItem.payload;
        }
        return item;
      });
    },
    updateItemPosition: (
      state,
      action: PayloadAction<{ id: number; top: number; left: number }>
    ) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: item.id,
            top: action.payload.top,
            left: action.payload.left,
            type: item.type,
            contents: item.contents,
          };
        }
        return item;
      });
    },
    addItem: (state, newItem: PayloadAction<Item>) => {
      state.value.push(newItem.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateContents, updateItem, updateItemPosition, addItem } =
  itemsSlice.actions;

export default itemsSlice.reducer;
