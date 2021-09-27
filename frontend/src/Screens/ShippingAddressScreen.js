import {useDispatch, useSelector, } from "react-redux" 
import React, {useState} from 'react'
import CheckOutSteps from '../components/CheckOutStep';
import {saveShippingAddress} from "../actions/cartAction"

const ShippingAddressScreen = (props) => {

    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const{userInfo} = userSignin;
   if(!userInfo) {
       props.history.push('/signin')
   }
    const cart =useSelector((state)=> state.cart);
   const {shippingAddress} = cart;

    const [fullName, setFullName]= useState(shippingAddress?.fullName);
    const [address, setAddress]= useState(shippingAddress?.address);
    const [postalCode, setPostalCode]= useState(shippingAddress?.postalCode);
    const [country, setCountry]= useState(shippingAddress?.country);
    const[city, setCity] = useState(shippingAddress?.city);


    const sumbitHandler = (e)=> {
        e.preventDefault();
      dispatch(saveShippingAddress({fullName, address, city, postalCode,country}));
      props.history.push("/payment")
    }

    return (
        <div>
            <CheckOutSteps step1 step2></CheckOutSteps>
            <form className="form" onSubmit={sumbitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                <div >
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="FullName"  placeholder="Enter Full Name" value={fullName} onChange={(e)=> setFullName(e.target.value)} required/>
                
                </div>
                <div >
                    <label htmlFor="address">Address</label>
                    <input type="text" id="Address"  placeholder="Enter Address" value={address} onChange={(e)=> setAddress(e.target.value)} required/>
                
                </div>
                <div >
                    <label htmlFor="address">postalCode</label>
                    <input type="text" id="postalCode"  placeholder="Enter PostalCode" value={postalCode} onChange={(e)=> setPostalCode(e.target.value)} required/>
                
                    <div >
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"  placeholder="Enter City" value={city} onChange={(e)=> setCity(e.target.value)} required/>
                
                </div>
                </div>
                <div >
                    <label htmlFor="country"> Country</label>
                    <input type="text" id="country"  placeholder="Enter Country" value={country} onChange={(e)=> setCountry(e.target.value)} required/>
                
                </div>
                </div>
                <div>
                    <button  className="primary"> Continue</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddressScreen;
