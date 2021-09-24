import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CardConstant";
import Cookie from "js-cookie";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.Image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        
        qty,
      },
    });
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    dispatch({ type: error, payload: error.msg });

};
};



const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {cart:{cartItems}} =getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
export { addToCart, removeFromCart };
