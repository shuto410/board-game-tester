import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { Card as MuiCard } from "@mui/material";
import { CardContent, Typography, CardActions, Button } from "@mui/material";
import { CardContents } from "../../interfaces";

export const Card: FC<CardContents> = memo(function Card({
  title,
  imageUrl,
  description,
}) {
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
          <Button size="small">Settings</Button>
        </CardActions>
      </MuiCard>
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
