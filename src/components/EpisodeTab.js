import { useContext, useEffect } from "react";
import { episodeContext } from "../context/EpisodeContext";
import { getEpisodeData } from "../api/breakingApis";
import Episodetemp from "./EpisodeTemplate";
import { Box, Divider } from "@mui/material";

export default function Episodes() {
  const { episodeDetails, dispatchEpisodeDetails } = useContext(episodeContext);
  useEffect(() => {
    getEpisodeData(dispatchEpisodeDetails);
  }, []);
  console.log(episodeDetails);
  return (
    <Box
      sx={{
        dispaly: "flex",
        flexDirection: "column",
        p: 3,
        backgroundColor: "#322e3d",
        color: "white",
      }}
    >
      {episodeDetails.loader !== true &&
        episodeDetails.data.map((d) => {
          return (
            <>
              <Episodetemp data={d} />
              <Divider />
            </>
          );
        })}
    </Box>
  );
}
