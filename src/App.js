import {
  BrowserRouter as Router,
  // Routes, //Switch
  Route,
  Navigate, //Link
} from "react-router-dom";
import { Home } from "pages/home";
import { Contact } from "pages/contact";
import Routes from "routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
