import { Paper, Typography } from "@mui/material";
import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { CardPlaceContents } from "../../model";

export const CardPlace: FC<CardPlaceContents> = memo(function CardPlace({
  title,
}) {
  return (
    <div style={{ ...styles }}>
      <Paper
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#DDDDDD",
        }}
        elevation={0}
      >
        <Typography variant="caption">{title}</Typography>
      </Paper>
    </div>
  );
});

const styles: CSSProperties = {
  width: "170px",
  height: "270px",
  cursor: "move",
};
