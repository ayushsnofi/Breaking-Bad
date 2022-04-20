import { Box, Button, Paper, Typography, Link } from "@mui/material";
import { fontWeight, textAlign } from "@mui/system";
import ControlledCarousel from "../components/Caurosal";
import NavTabs from "../components/Tabs";

export default function HomePage() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        m: 0,
      }}
    >
      <Box
        component="header"
        sx={{
          display: "grid",
          gridTemplateColumns: "10% 80% 10%",
          //   justifyContent: "space-between",
          backgroundColor: "#24292e",
          width: "100%",
          height: "5rem",
          m: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            sx={{
              fontSize: "1.2rem",
              fontWeight: "600",
              fontFamily: "Roboto",
              color: "whitesmoke",
              width: "100%",
              pl: 2,
            }}
            href="https://www.reddit.com/r/breakingbadmemes/"
            underline="hover"
          >
            Memes
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            borderColor: "red",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              display: "flex",

              fontWeight: "600",
              fontSize: "2rem",

              color: "whitesmoke",
            }}
          >
            I Am The One Who{" "}
          </Typography>
          <Typography
            sx={{
              display: "flex",

              fontWeight: "700",
              fontSize: "2rem",
              color: "rgb(174 44 60)",
              ml: 0.8,
            }}
          >
            {" "}
            Knocks
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            borderColor: "white",
          }}
        >
          <Button
            varinat="text"
            sx={{
              fontSize: ".9rem",
              fontWeight: "600",
              color: "whitesmoke",
              mr: 1,
            }}
          >
            Become a Fan
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: "120vh", width: "100%" }}>
        <ControlledCarousel />
      </Box>
      <Box sx={{ width: "100%" }}>
        <NavTabs />
      </Box>
    </Paper>
  );
}
