import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { productDetailsReducer, productListReducer } from "./reducer/productListReducer";
import thunk  from "redux-thunk"
import { cartReducer } from "./reducer/cartReducer";
import { userRegisterReducer, userSigninReducer } from "./reducer/userReducer";

 

const initialState = {
  userSignin :{
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
  },
  cart : {
    cartItems : localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) :[],
    shippingAddress :localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) :{},
    paymentMethod: "PayPal",
  },  
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin : userSigninReducer,
  userRegister : userRegisterReducer,   
});

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, composeEnhancer (applyMiddleware(thunk)));
export default store;