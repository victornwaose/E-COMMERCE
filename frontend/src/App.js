import React from "react";
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Footer from "./footer/Footer"
import "./App.css";
import{CartScreen} from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import { useSelector } from "react-redux";


function App() {
  const cart = useSelector((state)=> state.cart)
  const {cartItems} = cart
  return ( 
    <Router>
        <div className="grid-container">
        <header className="row">
          <div className="brand">
              <h1>
                  <Link to="/">E-COMMERCE</Link>
              </h1>
          </div>
          <div className="link">
              <h1  >   
              <Link  className="link-cart" to="/cart?">Cart
              {
              cartItems?.length > 0 && (
                <span className="badge">{cartItems?.length}</span>
              )
            }
            </Link>
          </h1>
              <h1>
                  <Link to="/signin">login</Link>
              </h1>
          </div>
      </header>
            <Switch>
            <div className="main">
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
                <Route path ="/signin" component={SigninScreen} />
            </div>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}
export default App;
