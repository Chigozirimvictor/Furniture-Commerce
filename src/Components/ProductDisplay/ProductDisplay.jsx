import React from "react";
import './ProductDisplay.css'
import single_prod from '../Assets/single_prod.jpg'
import productcover from '../Assets/productcover.png'
// import product from '../Assets/product.png'
import another from '../Assets/another.png'
import Offers from "../Offers/Offers";



const ProductDisplay = (props) => {
    const {product} = props;
    return(
        <div className="product-display">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
               <div className="productdisplay-img">
               <img className="productdisplay-main-img" src={product.image} alt="" />
               </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src= {single_prod} alt="" />
                    <img src= {productcover} alt="" />
                    <img src= {another} alt="" />
                    <img src= {product} alt="" />
                    <img src= {another} alt="" />
                    <p>(122)</p>

<Offers/>
                </div>
            </div>
           
        </div>
    )
}

export default ProductDisplay