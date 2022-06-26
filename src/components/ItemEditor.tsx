import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  selectClasses,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateContents } from "../store/items";
import { selectContents } from "../store/selector";

export interface ItemEditorProps {
  isOpen: boolean;
  id: number;
  closeModal: () => void;
}
export const ItemEditor: FC<ItemEditorProps> = memo(function ItemEditor({
  isOpen,
  id,
  closeModal,
}) {
  const contents = useSelector(selectContents(id));
  const dispatch = useDispatch();
  if (!contents) return null;
  const textFieldProps: TextFieldProps = {
    autoFocus: true,
    fullWidth: true,
    margin: "dense",
    id: "name",
    variant: "standard",
  };
  const updateTitle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newContents = { ...contents, title: event.target.value };
    dispatch(updateContents({ id, contents: newContents }));
  };
  const updateImageUrl = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newContents = { ...contents, imageUrl: event.target.value };
    dispatch(updateContents({ id, contents: newContents }));
  };
  const updateDescription = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newContents = { ...contents, description: event.target.value };
    dispatch(updateContents({ id, contents: newContents }));
  };
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={contents.title}
          {...textFieldProps}
          onChange={updateTitle}
        />
        <TextField
          label="Image URL"
          value={contents.imageUrl}
          {...textFieldProps}
          onChange={updateImageUrl}
        />
        <TextField
          label="Description"
          value={contents.description}
          {...textFieldProps}
          onChange={updateDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
});
