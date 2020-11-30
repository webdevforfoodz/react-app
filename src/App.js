// import logo from './logo.svg';
import "./App.css";
// import NavBar from './main-sections/NavBar.js';
import Wave from "./components/WaveBackground.js";
import NavBar from "./components/NavBar.js"
import FirstRoute from "./routes/FirstRoute.js";
import Staking from "./routes/Staking.js";
import SecondRoute from './routes/SecondRoute.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={FirstRoute} />
          <Route path="/mywaifus" exact component={SecondRoute} />
          <Route path="/staking" component={Staking} />
        </Switch>
        <Wave />
      </div>
    </Router>
  );
}

export default App;
