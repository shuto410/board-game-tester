import { Paper, Typography } from "@mui/material";
import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { DeckContents } from "../../interfaces";

export const Deck: FC<DeckContents> = memo(function Deck({ title }) {
  return (
    <div style={{ ...styles }}>
      <Paper
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#DDDDDD",
        }}
      >
        <Typography variant="caption">{title}</Typography>
      </Paper>
    </div>
  );
});

const styles: CSSProperties = {
  width: "180px",
  height: "280px",
  // border: "1px dashed gray",
  // padding: "0.2rem 0.5rem",
  cursor: "move",
};
