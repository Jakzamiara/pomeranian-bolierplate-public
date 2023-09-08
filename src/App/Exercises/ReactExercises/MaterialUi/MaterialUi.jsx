import React from "react";
import { Button, MenuList } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

import "./style.css";

export function MaterialUi() {
  return (
    <div>
      <Button variant="contained" color="success">
        Kliknij mnie
      </Button>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </Stack>
    </div>
  );
}
