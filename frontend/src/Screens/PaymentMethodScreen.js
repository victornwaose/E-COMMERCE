import React, { useState } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from '../actions/cartAction';
import CheckOutSteps from '../components/CheckOutStep'

const PaymentMethodScreen = (props) => {
    const cart = useSelector((state)=> state.cart);
    const {shippingAddress} = cart;
    const [paymentmethod, setPaymentMethod] = useState("PayPal");
     if(!shippingAddress.address){
        props.history.push("/shipping");
     }
    const dispatch = useDispatch()

    const submitHandler =(e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentmethod));
        props.history.push("/placeorder");
    }
    return (
        <div className="">
            <CheckOutSteps step1 step2 step3 ></CheckOutSteps>
                <form className="form" onSubmit={submitHandler}> 
                    <div>
                        <h1>Payment Method</h1>
                    </div>
                    <div>
                        <input type="radio" 
                            id="paypal" 
                            value="PayPal" 
                            name="paymentMethod" 
                            required 
                            checked
                            onChange={(e)=> setPaymentMethod(e.target.value)}
                            />
                            <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div>
                        <input type="radio" 
                            id="paystack" 
                            value="PayStack" 
                            name="paymentMethod" 
                            required 
                            onChange={(e)=> setPaymentMethod(e.target.value)}
                            />
                            <label htmlFor="paystack">PayStack</label>
                    </div>
                    <button className="primary" type="submit"> Continue</button>
                </form>
            
        </div>
    )
}

export default PaymentMethodScreen;
