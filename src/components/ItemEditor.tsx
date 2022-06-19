import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItemSecondaryActionProps,
  TextField,
} from "@mui/material";
import { FC, memo, useState } from "react";

export interface ItemEditorProps {
  isOpen: boolean;
  contents: { label: string; value: string }[];
  closeModal: () => void;
}
export const ItemEditor: FC<ItemEditorProps> = memo(function ItemEditor({
  isOpen,
  contents,
  closeModal,
}) {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        {contents.map((content) => (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={content.label}
            //   type="email"
            value={content.value}
            fullWidth
            variant="standard"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
});
