import { Typography, Box } from "@mui/material";

export default function Episodetemp(props) {
  const { data } = props;
  return (
    <Box sx={{ dispaly: "flex", flexDirection: "column", p: 3 }}>
      <Box sx={{ display: "flex", pr: 1 }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.3rem", fontWeight: "700", fontFamily: "Roboto" }}
        >
          {data.series} Season {data.season} episode {data.episode}
        </Typography>

        <Typography
          variant=""
          sx={{
            display: "flex",
            pl: 2,
            fontSize: "1.2rem",
            fontWeight: "700",
            fontFamily: "Roboto",
            color: "#d77575",
            justifyContent: "center",
          }}
        >
          {data.title}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ pt: 2 }}>
          Characters
        </Typography>
        <Typography variant="Body1" sx={{}}>
          {data.characters.map((ch) => {
            return <Typography sx={{ fontWeight: "500" }}> {ch}</Typography>;
          })}
        </Typography>
        <Typography variant="h5" sx={{ pt: 2 }}>
          <Typography sx={{ fontWeight: "600" }}>
            Aired on {data.air_date}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
