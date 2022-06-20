import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  }
}))
function App() {
  const classes = useStyles();
  return (
      <div className={classes.App}>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/coins/:id" exact component={CoinPage}/>
        </Switch>
      </div>
  );
}

export default App;
