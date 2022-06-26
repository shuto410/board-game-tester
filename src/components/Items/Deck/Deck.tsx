import { Paper, Typography } from "@mui/material";
import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { Contents } from "../../model";

export const Deck: FC<Contents> = memo(function Deck({ title }) {
  return (
    <div style={{ ...styles }}>
      <Paper
        style={{
          width: "100%",
          height: "100%",
          // backgroundColor: "#DDDDDD",
        }}
        elevation={5}
      >
        <Typography variant="caption">{title}</Typography>
      </Paper>
    </div>
  );
});

const styles: CSSProperties = {
  width: "200px",
  height: "300px",
  cursor: "move",
};
