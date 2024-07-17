import React from "react";
import './Furniture.css'
import './FurnitureRespons.css'
// import first_img from '../Assets/first_img.png'
// import card_cover from '../Assets/card_cover.jpg'
// import productcover from '../Assets/productcover.png'

const Furniture = () => {
    return(
        <div className="Main-div">
            <div className="First-div">
            <div className="image">
                <li className="image-div">
                <p className="items"> <h4>5 Items</h4></p>
                    <p className="niture"> <h1>FURNITURE</h1></p>
                    <p className="more"> <h4>Read More</h4></p>
                    </li>
            </div>
            <div className="Responsive">
                <ul className="first">
                    <p className="items"> <h4>5 Items</h4></p>
                    <p className="niture"> <h1>FURNITURE</h1></p>
                    <p className="more"> <h4>Read More</h4></p>
                </ul>
                <ul className="second">
                    <li className="cup">
                    <p className="items"> <h4>5 Items</h4></p>
                    <p className="niture"> <h1>FURNITURE</h1></p>
                    <p className="more"> <h4>Read More</h4></p>
                    </li>

                    <li className="vase">
                    <p className="items"> <h4>5 Items</h4></p>
                    <p className="niture"> <h1>FURNITURE</h1></p>
                    <p className="more"> <h4>Read More</h4></p>
                    </li>
                </ul>
            </div>
          

           

        </div>

        <div className="Second-div">
            <div className="first_inner">
                <li>Featured Products</li>
                <li className="seller"> <h3>BEST SELLER PRODUCT</h3></li>
                <li className="problem">Problems trying to resolve the conflict between</li>
            </div>
            <div className="second_inner">
               <div>
                <img src='{productcover}' alt="" />
               </div>

               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>

           </div>
        </div>
    )
}

export default Furniture