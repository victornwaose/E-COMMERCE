import React from "react";
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Footer from "./footer/Footer"
import "./App.css";
import{CartScreen} from "./Screens/CartScreen";
import signinScreen from "./Screens/SigninScreen";
import { useSelector } from "react-redux";
import Headers from "./header/Header";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
 console.log(userSignin)
 console.log(userInfo)
  return ( 
    <Router>
        <div className="grid-container">
            <Headers />
            <Switch>
            <div className="main">
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
                <Route path ="/signin" component={signinScreen} />
            </div>
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}
export default App;
