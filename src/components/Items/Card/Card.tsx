import { CSSProperties, FC, useState } from "react";
import { memo } from "react";
import { Card as MuiCard, CardHeader, CardMedia } from "@mui/material";
import { CardContent, Typography, CardActions, Button } from "@mui/material";
import { Contents } from "../../model";
import { ItemEditor } from "../../ItemEditor";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { selectContents, selectItem } from "../../../store/selector";

export interface CardProps {
  id: number;
}
export const Card: FC<CardProps> = memo(function Card({ id }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contents = useSelector(selectContents(id));
  if (!contents) return null;
  return (
    <div style={{ ...styles }}>
      <MuiCard
        sx={{ minWidth: 200, minHeight: 300, maxWidth: 200, maxHeight: 300 }}
      >
        <CardHeader title={contents.title} />
        <CardMedia
          component="img"
          height="130"
          image={contents.imageUrl}
          alt="Card Image"
        />
        <CardContent>
          <Typography variant="body2">{contents.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setIsOpen(true)}>
            EDIT
          </Button>
        </CardActions>
      </MuiCard>
      <ItemEditor
        isOpen={isOpen}
        id={id}
        closeModal={() => setIsOpen(false)}
      ></ItemEditor>
    </div>
  );
});

const styles: CSSProperties = {
  // width: "40px",
  // height: "70px",
  // border: "1px solid gray",
  // padding: "0.2rem 0.5rem",
  // cursor: "move",
};
