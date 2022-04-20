import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Box } from "@mui/material";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ height: "80vh", color: "#101e32" }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: "80vh" }}
      >
        <Carousel.Item>
          <Box
            component="img"
            sx={{ height: "80vh", width: "100%" }}
            src="https://images2.alphacoders.com/591/591596.jpg"
          />
          <Carousel.Caption>
            <h3 style={{ color: "whitesmoke" }}>
              THE NETWORK REALLY WANTED MATTHEW BRODERICK TO STAR.
            </h3>
            <p style={{ color: "whitesmoke" }}>
              "We needed somebody who could be dramatic and scary yet have an
              underlying humanity so when he dies, you felt sorry for him,”
              Gilligan said. “Bryan nailed it."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Box
            component="img"
            sx={{ height: "80vh", width: "100%" }}
            src="https://images8.alphacoders.com/435/435023.png"
          />

          <Carousel.Caption>
            <h3 style={{ color: "#101e32" }}>
              LOTS OF NETWORKS PASSED ON IT, INCLUDING HBO.
            </h3>
            <p style={{ color: "#101e32" }}>
              HBO wasn’t the only network that ultimately said no to Walter
              White: Showtime, TNT, and FX all passed on Breaking Bad, too, for
              various reasons.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Box
            component="img"
            sx={{ height: "80vh", width: "100%" }}
            src="https://images6.alphacoders.com/546/546418.jpg"
          />

          <Carousel.Caption>
            <h3 style={{ color: "#101e32" }}>
              JESSE PINKMAN WASN’T SUPPOSED TO LIVE PAST SEASON ONE.
            </h3>
            <p style={{ color: "#101e32" }}>
              When asked during a Reddit AMA about how he would have felt if
              Jesse had been killed off in season one, Paul posited that, “My
              career would be over. And I would be a sobbing mess watching week
              to week on Breaking Bad.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
