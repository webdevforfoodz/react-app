// import logo from './logo.svg';
import './App.css';
// import NavBar from './main-sections/NavBar.js';
import Wave from './components/WaveBackground.js'
import LeftSide from './main-sections/LeftSide.js'
import RightSide from './main-sections/RightSide.js'

function App() {

  //

  return (
    <div className="App">
      <LeftSide />
      <RightSide />
      <Wave />
    </div>
  );
}

export default App;
