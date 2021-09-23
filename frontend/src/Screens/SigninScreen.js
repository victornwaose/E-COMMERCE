import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction";

function SigninScreen(props) {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const userSignin = useSelector(state => state.userSignin);
const {loading, userInfo, error} = userSignin;
const dispatch = useDispatch();


useEffect(() => {
  if(userInfo){
      props.history.push("/")
  }
  return () => {
  }
}, [props.history, userInfo]);

  const submitHandler = (e) => {
  
    e.preventDefault();
    console.log(password)
    console.log(email)
    dispatch(signin(email, password));
  }

  const onClick = () => console.log("object")
  

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <h1>Sign In</h1>
          <li>
            {loading && <div>loading</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
          </li>
          <li >
            <button type="submit" className="button-primary" onClick={onClick}>Sign in</button>
           </li>
           <li>
             New to E-Commerce?
           </li>
           <li>
            <Link  className= "button  secondary text-center  " to ="/register">Create a new account </Link>
           </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
