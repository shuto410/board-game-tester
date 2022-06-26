import { RootState } from ".";

export const selectAllItems = (state: RootState) => {
  return state.items.value;
};

export const selectItem = (id: number) => (state: RootState) => {
  return state.items.value.find((item) => item.id === id);
};

export const selectContents = (id: number) => (state: RootState) => {
  return state.items.value.find((item) => item.id === id)?.contents;
};
