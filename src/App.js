import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSIgnUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSIgnUpPage} />
      </Router>
    </div>
  );
}

export default App;
