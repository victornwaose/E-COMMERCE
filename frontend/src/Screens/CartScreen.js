import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartAction";



const CartScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.serach
    ? Number(props.location.serach.split("=")[1])
    : 2;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId)=>{
    dispatch(removeFromCart(productId))
  }
  const checkOutHandler = () => {
    props.history.push("signin?redirect=shipping");
  }


  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div> Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div key="cart.item">
                <img src={item.Image} alt="product" />

                <div className="cart-name">
                  <div>
                    {" "}
                    <Link to={"/product/" + item.product}>{item.name}</Link>
                  </div>
                </div>
                <div>
                  Qty:
                <select value ={item.qty} onChange= {e => dispatch(addToCart(item.product, e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <button type= "button" className="button" onClick={() => removeFromCartHandler(item.product)}>Remove</button>
                </div>
                <div className="cart-price">{item.price}</div>
              </div>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}items) : $
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}{" "}
        </h3>
        <button  onClick ={checkOutHandler}className="button-primary" disabled={cartItems.length === 0}>
          {" "}
          proceed to checkout
        </button>
      </div>
    </div>
  );
};

export { CartScreen };
