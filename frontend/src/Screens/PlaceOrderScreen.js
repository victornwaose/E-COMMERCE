import React from 'react'
import CheckOutSteps from '../components/CheckOutStep';
import  {useSelector}  from "react-redux";
import { Link } from 'react-router-dom';

const PlaceOrderScreen = (props) => {
    const cart = useSelector(state => state.cart);
    if (!cart.paymentMethod) {
        props.history.push("/payment")
    }
    const toPrice =(num) => Number(num.toFixed(2));
    cart.itemPrice = toPrice(
        cart.cartItems.reduce((a,c)=> a + c.qty * c.price, 0)
    )
    cart.shippingPrice=cart.itemPrice> 100 ? toPrice(0) :toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemPrice);
    cart.totalPrice = cart.itemPrice + cart.shippingAddress + cart.taxPrice;
    const placeOrderHandler = (e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong>{cart.shippingAddress?.fullName}<br/>
                                    <strong>Address:</strong>{cart.shippingAddress?.address}
                                    {cart.shippingAddress?.city}{cart.shippingAddress?.postalCode},
                                    {cart.shippingAddress?.country}
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong>{cart.paymentMethod} 
                                </p>
                            </div> 
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Order</h2>
                                <ul>
              {cart.cartItems?.map(item => (
                
                  <li key= {item.name}>
                  
                      <div className="row">
                          <div>
                              <img src={item.image} alt={item.product} className="small"/>
                          </div> 
                          <div className="min-30">
                             <Link  to={`/product/${item.product}`}  className="link-item" >{item.name}</Link> 
                          </div>
                          
                          <div>
                             {item.Qty } X ${item.price} = ${item.qty * item.price }
                          </div>
                      </div>
                  </li>
              ))}
           </ul>
                 </div> 
                        </li>
                    </ul>
                </div>
                <div className="co-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div>${cart.taxPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>${cart.shippingPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div>${cart.taxPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <strong>Order</strong>
                                    <div>${cart.totalPrice}</div>
                                </div>
                            </li>
                            <li>
                                <button type="button " className="primary" onClick={placeOrderHandler} disabled={cart.cartItems.length ===  0  }>Place Order</button>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderScreen;
