import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction";

function SigninScreen(props) {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const userSignin = useSelector(state => state.userSignin);
const dispatch = useDispatch();


// 

  const submitHandler = (e) => {
  
    e.preventDefault();
    console.log(password)
    console.log(email)
    dispatch(signin(email, password));
  }

  const onClick = () => console.log("object")
  

  return (
    <div >
      <form className="form" onSubmit={submitHandler}>
          <div className="form-container">
                <h1>Sign In</h1>
                <div>
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                      />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <div >
                    <button type="submit" className="primary" onClick={onClick}>Sign in</button>
                </div>
                <div className="form-link">
                    New to E-Commerce? 
                    <span>                   
                        <Link className="form-link-reg" to ="/register">Create a new account </Link>
                    </span>
                </div>
       
            </div>
        </form>
    </div>
  );
}

export default SigninScreen;
