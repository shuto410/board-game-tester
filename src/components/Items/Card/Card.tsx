import { CSSProperties, FC, useState } from "react";
import { memo } from "react";
import { Card as MuiCard } from "@mui/material";
import { CardContent, Typography, CardActions, Button } from "@mui/material";
import { CardContents } from "../../model";
import { ItemEditor } from "../../ItemEditor";

export interface CardProps extends CardContents {}
export const Card: FC<CardProps> = memo(function Card({
  title,
  imageUrl,
  description,
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div style={{ ...styles }}>
      <MuiCard sx={{ minWidth: 150, minHeight: 250, maxWidth: 150 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setIsOpen(true)}>
            EDIT
          </Button>
        </CardActions>
      </MuiCard>
      <ItemEditor
        isOpen={isOpen}
        contents={[
          { label: "Title", value: title },
          { label: "Image", value: imageUrl || "" },
          { label: "Description", value: description || "" },
        ]}
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
