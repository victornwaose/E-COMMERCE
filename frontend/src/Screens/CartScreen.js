import React, { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartAction";
import MessageBox  from "../components/MessageBox";



const CartScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems, "cartItems");
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();


  const removeFromCartHandler = (productId) =>{
    dispatch(removeFromCart(productId)); 
  }
  const checkOutHandler = () => {
    props.history.push("/shipping");
  }

  

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div className="row top">
       <div className="col-2">
         <h1>Shopping Cart</h1>
         {cartItems.length === 0 ? <MessageBox>
            Cart is empty. <Link to="/">
              Go Shopping
            </Link>
         </MessageBox>:
         (
           <ul>
              {cartItems?.map(item => (
                
                  <li key= {item.name}>
                  
                      <div className="row">
                          <div>
                              <img src={item.image} alt={item.product} className="small"/>
                          </div>
                          <div className="min-30">
                             <Link  to={`/product/${item.product}`}  className="link-item" >{item.name}</Link> 
                          </div>
                          <div>
                            <select value={item.qty} onChange={e => dispatch(addToCart(item.product , Number(e.target.value)))}>
                                {[...Array(item.countInStock).keys()].map( x=> (
                                      <option key={x=1} value={x+1}>{x+1}</option>
                                    )
                                  )}
                            </select>
                          </div>
                          <div>
                              ${item.price}
                          </div>
                          <div>
                                  <button type="button" onClick={()=> removeFromCartHandler(item.product)} className=" ">Delete</button>
                          </div>
                      </div>
                  </li>
              ))}
           </ul>
         )}
       </div>
       <div className="card">
              <div className="  card-body">
                   <ul> 
                      <li>
                          <h2>
                                Subtotal ({cartItems?.reduce((a, c) => a + c.qty, 0)}  items) :  $  
                                   {cartItems?.reduce((a, c)=> a + c.price * c.qty, 0 )}
                          </h2>
                      </li>
                      <li>
                        <button type="button" onClick={ checkOutHandler} className="primary block" disable={cartItems?.length === 0}>
                          proceed to check checkOut
                        </button>
                      </li>
                   </ul> 
              </div>
       </div>
    </div>
  );
};

export { CartScreen };
