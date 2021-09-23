import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Headers = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const userInfo = userSignin;
  console.log("userInfo")
  return (
      <header className="row">
          <div className="brand">
              <h1>
                  <Link to="/">E-COMMERCE</Link>
              </h1>
          </div>
          <div className="link">
              <h1>
                  <Link to="/cart/:id?">Cart</Link>
              </h1>
              <h1>
                  {userInfo ? (
                    <Link to="/profile">{userInfo.name}</Link>
                    
                  ) : (
                    <Link to="/signin">SignIn</Link>
                  )}
              </h1>
          </div>
      </header>
  );
};

export default Headers;
