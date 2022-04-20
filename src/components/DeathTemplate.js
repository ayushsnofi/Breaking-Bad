import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DeathCard(props) {
  const { data, index, length } = props;
  return (
    <Card
      sx={{ minWidth: 275, backgroundColor: "#60161d", color: "#d9c8ca" }}
      variant="outlined"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "1.3rem", fontWeight: "600" }}
          color="white"
          gutterBottom
        >
          {data.death}
        </Typography>
        <Typography variant="h5" component="div">
          killed by {data.responsible}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: "1rem" }} color="white">
          <Typography sx={{ fontWeight: "600", pt: 1.5 }}>
            Reason of Death
          </Typography>{" "}
          {data.cause}
        </Typography>
        <Typography variant="body2">
          <Typography sx={{ fontWeight: "600", pt: 1.5 }}>
            Last Words
          </Typography>{" "}
          {data.last_words}
          <br />
        </Typography>
        <Typography sx={{ pt: 2, fontSize: "1rem" }} variant="body2">
          Happened in {data.season} {data.episode}
          <br />
        </Typography>
      </CardContent>
      <Box sx={{ pl: 4, fontSize: "1rem", mb: 0.3 }}>
        {index + 1}/{length + 1}
      </Box>
    </Card>
  );
}
