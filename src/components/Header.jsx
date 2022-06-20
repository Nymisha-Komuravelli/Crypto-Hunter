import {
  AppBar,
  Container,
  Select,
  Toolbar,
  Typography,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    color: "gold",
    fontWeight: "bold",
    fontFamily: "Roboto",
    cursor: "pointer",
    flex: 1,
  },
}));
const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Header = () => {
  const { currency, symbol, setCurrency } = CryptoState();
  let classes = useStyles();
  const history = useHistory();
  // console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
              variant="h5"
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
