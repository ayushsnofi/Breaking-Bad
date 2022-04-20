import { deathsContext } from "../context/DeathsContext";
import { getAllDeaths } from "../api/breakingApis";
import { useContext, useEffect } from "react";
import DeathCard from "./DeathTemplate";
import { Divider, Box } from "@mui/material";

export default function Deaths() {
  const { deathsDetails, dispatchDeathsDetails } = useContext(deathsContext);

  useEffect(() => {
    getAllDeaths(dispatchDeathsDetails);
  }, []);
  console.log(deathsDetails);
  return (
    <Box sx={{}}>
      {deathsDetails.loader !== true &&
        deathsDetails.data.map((d, index) => {
          return (
            <Box
              sx={{
                // display: "flex",
                // flexWrap: "wrap",
                p: 2,
                width: "100%",
                // margin: "auto",
                justifyContent: "center",
                backgroundColor: "#24292e",
              }}
            >
              <DeathCard
                data={d}
                index={index}
                length={deathsDetails.data.length}
              />
              <Divider />
            </Box>
          );
        })}
    </Box>
  );
}
