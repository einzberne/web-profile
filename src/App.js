import {
  BrowserRouter as Router,
  // Routes, //Switch
  // Route,
  // Navigate, //Link
} from "react-router-dom";
import Routes from "routes";
import Nav from "components/nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
