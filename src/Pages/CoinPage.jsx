import React, { useEffect, useState } from "react";
import {
  createTheme,
  LinearProgress,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { useParams } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import parse from 'html-react-parser';
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "../components/Banner/Carousel";

const theme = createTheme({});
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  },
  desciption: {
    fontFamily: "Roboto",
    padding: "0 25px 15px",
    textAlign: "justify",
  },
  marketData: {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  }
}));

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  const classes = useStyles();
  useEffect(() => {
    fetchCoin();
  }, []);
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log(data);
    setCoin(data);
  };
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="150"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h3" className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.desciption}>
            {parse(coin?.description.en.split(". ")[0])}.
          </Typography>
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Rank: 
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="subtitle1" style={{ fontFamily: "Roboto" }}>
                 {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Current Price: 
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="subtitle1" style={{ fontFamily: "Roboto" }}>
                 {symbol}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Market Cap: 
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="subtitle1" style={{ fontFamily: "Roboto" }}>
                 {symbol}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
              </Typography>
            </span>
          </div>
        </div>
        <CoinInfo coin={coin} />
      </div>
    </ThemeProvider>
  );
};

export default CoinPage;
