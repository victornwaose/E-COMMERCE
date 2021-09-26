import React, { useEffect } from "react";
import "./homepage.css";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return ( 
    <div>
      { loading ? (
      <LoadingBox></LoadingBox>
      ) :error? (
        <MessageBox variant="danger">{error}</MessageBox>
        ) : (
        <div>
        <ul className="products">
          {products &&
            products.length !== 0 &&
            products.map((product) => (
              <li key={product.name} className="products-li">
                <div>
                  <Link to={"/product/" + product._id}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-name">
                  <Link to={"/product/" + product._id}>{product.name} </Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-prices">${product.price}</div>
                <Rating product ={product}/>
                <div className="product-review">{product.numReview} </div>
              </li>
            ))}
        </ul>
      </div>
      )}
      </div>
  );
}

export default HomeScreen;
