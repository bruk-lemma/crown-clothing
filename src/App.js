import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Router>
    </div>
  );
}

export default App;
