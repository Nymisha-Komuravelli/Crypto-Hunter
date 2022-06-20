import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
    // height: "300px",
  },
  bannerContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: 300,
    justifyContent: "space-around",
    paddingTop: 25,
  },
  tagline: {
      height: "40%",
      textAlign: "center"
  }
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Roboto",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              fontFamily: "Roboto",
              textTransform: "capitalize",
            }}
          >
            Get all the info regarding your Favourite Crypto Currencies
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
};

export default Banner;
