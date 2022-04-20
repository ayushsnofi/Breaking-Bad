import { Box, Typography } from "@mui/material";

export default function QuotesTemp(props) {
  const { data, index, lastIndex } = props;
  console.log(lastIndex);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>
        <q style={{ fontSize: "3rem" }}>
          <Typography
            sx={{
              pt: 1,
              pl: 3,
              color: "#efbbd7",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {data.quote}
          </Typography>
        </q>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "90% 10%",
          //   justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            pt: 1,
            fontSize: "1.5rem",
            pl: 3,
          }}
        >
          ~ {data.author} ({data.series})
        </Box>
        <Box sx={{ pl: 4, fontSize: "1rem", mb: 0.3 }}>
          {index + 1}/{lastIndex + 1}
        </Box>
      </Box>
    </Box>
  );
}
