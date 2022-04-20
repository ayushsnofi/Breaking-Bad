import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent(props) {
  console.log(props);
  const { data } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={data.name} subheader={`birthday ${data.birthday}`} />
      <CardMedia component="img" height="194" image={`${data.img}`} alt="img" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Protrayed by {data.portrayed}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
            Occupation{" "}
          </Typography>
          <Typography paragraph>
            {data.occupation.map((occ) => {
              return <Typography> {occ}</Typography>;
            })}
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: "400", pt: 2 }}>
            Nickname {data.nickname}
          </Typography>
          <Typography sx={{ pt: 1 }}>Status {data.status}</Typography>
          <Typography sx={{ pt: 1 }}>
            Appearances :{" "}
            {data.appearance.map((app) => {
              return <>{app}</>;
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
