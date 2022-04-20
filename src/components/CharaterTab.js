import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CardComponent from "./Card";
import { characterContext } from "../context/CharacterContext";

export default function Charater() {
  const [data, setData] = useState([]);
  const { characterDetails } = useContext(characterContext);
  console.log(characterDetails);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        backgroundColor: "#24292e",
      }}
    >
      {characterDetails?.loader !== true &&
        characterDetails?.data.map((d) => {
          return (
            <Box sx={{ p: 3 }}>
              <CardComponent data={d} />
            </Box>
          );
        })}
    </Box>
  );
}
