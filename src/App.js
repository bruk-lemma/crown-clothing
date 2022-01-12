import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";

const Hatspage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hatspage} />
      </Router>
    </div>
  );
}

export default App;
