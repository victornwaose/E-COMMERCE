import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";




function ProductScreen(props) {    

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;


    useEffect(() => {
    dispatch(detailsProduct(productId));
      }, [dispatch, productId]);

      const addToCartHandler = ( ) => {
        props.history.push(`/cart/${productId}?qty=${qty} `);
      }
  return (
    <div>
        {loading ? (
        <LoadingBox></LoadingBox>
        ) : error? (
        <MessageBox variant="danger">{error}</MessageBox>
        ) : (
        <div>
            <div className="back-to-result">
                <Link to="/">back</Link>
            </div>
            <div>
                <div className="row top">
                        <div className="col-2">
                        <img className="Large" src={product.image} alt={product.imageUrl} />
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li><Rating product ={product}/></li>
                                <li>Price: ${product.price}</li>
                                <li>Description:
                                    <p>{product.description}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Prices</div>
                                            <div className="price">${product.price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div> 
                                                {product.countInStock > 0 ? (
                                                    <span className="success">In Stock</span>
                                            ):(
                                                    <span className="error" >Unavailable</span>
                                            )}
                                            </div>
                                        </div>
                                    </li>
                                        {product.countInStock > 0 && (
                                                <>
                                                    <li> 
                                                        <div className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                    {[...Array (product.countInStock).keys()].map( x=> (
                                                                        <option key={x=1} value={x+1}>{x+1}</option>
                                                                        )
                                                                        )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                <li>
                                                    <button onClick={addToCartHandler} className="primary ">Add to Cart</button>
                                                </li>
                                            </>
                                        )} 
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )};
</div>
  );
}


export default ProductScreen;
