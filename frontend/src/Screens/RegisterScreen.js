import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function RegisterScreen(props) {


const [name, setName]= useState("")
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword]= useState("");
const userRegister = useSelector(state => state.userRegister);
const { userInfo, loading, error } = userRegister;
const dispatch = useDispatch();


const redirect = props.location.search 
    ? props.location.search.split('=')[1]
    : '/';

  const submitHandler = (e) => { 
       e.preventDefault();
   if(password !== confirmPassword) {
       alert("password and confirm password do not match")
   }else{
     
    dispatch(register(name,email, password)); 
   }
  }

  useEffect(() => {
   if(userInfo) {
     props.history.push(redirect);
   }
  }, [userInfo,props.history, redirect])

  return (
    <div >
      <form className="form" onSubmit={submitHandler}>
          <div className="form-container">
                <h1>Register </h1>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox>{error}</MessageBox>}
                <div>
                      <label htmlFor="name">name</label>
                      <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="enter name"
                          onChange={(e) => setName(e.target.value)}
                      />
                </div>
                <div>
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="enter email"
                          onChange={(e) => setEmail(e.target.value)}
                      />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" placeholder="enter password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword"> confirm password</label>
                    <input type="password" name="password" id="confirmPassword" placeholder="enter confirm password" required onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <div >
                    <button type="submit" className="primary" >Register</button>
                </div>
                <div className="form-link">
                    Already have an acoount
                    <span>                   
                        <Link className="form-link-reg" to ="/signin">Login </Link>
                    </span>
                </div>
       
            </div>
        </form>
    </div>
  );
}

export default RegisterScreen;
