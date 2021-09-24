import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { productDetailsReducer, productListReducer } from "./reducer/productListReducer";
import thunk  from "redux-thunk"
import { cartReducer } from "./reducer/cartReducer";
import Cookie from "js-cookie";
import { userSigninReducer } from "./reducer/userReducer";

 
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart : {
    cartItems : localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) :[]
  },  
  userSignin: { userInfo }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin : userSigninReducer
   
});

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, composeEnhancer (applyMiddleware(thunk)));
export default store;