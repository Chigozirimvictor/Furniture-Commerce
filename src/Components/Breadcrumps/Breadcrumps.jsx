import React from "react";
import './Breadcrumps.css'
import image_1 from "../Assets/image_1.jpg";
import image_2 from "../Assets/image_2.jpg";
import image_3 from "../Assets/image_3.jpg";





const Breadcrumps = () => {
  
    return(

        <div className="hero-new-products-main-container">
            <div className="Advice">
            <span className="practice">Practice Advice</span>
            <span><h1>Featured Posts</h1></span>
            </div>
            

                <div className="hero-new-products">
                 
                <img className="it-image" src={image_1} alt="IT"></img>
                 <div className="hero-new-products-text">
                 <p className="hero-new-products-text-price" style={{ color: 'rgb(67, 147, 174)' }}>Google</p>
                 <p className="hero-new-products-price">Trending</p>
                 <p className="hero-new-products-price2">New</p>
               </div>
               <div className="texts">
               <h3>Loudest `a la Madison #1 (L'integral)</h3>
               <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away</p>
               </div>
              
               <div className="saved-user">
                 <div className="saved-star-left">
{/* //                   <img src={icon_4} alt=""></img> */}
                   <p>22 April 2021</p>
                 </div>
                 <div className="saved-user-count">
{/* //                   <img src={icon_5} alt="" /> */}
                   <p>10 comments</p>
                 </div>
                 </div>
                 <div className="saved-user-arrow">
                   <h3>Learn More</h3>
{/* //                   <img src={icon_6} alt=""></img> */}
                 </div>
               </div>             
                <div className="hero-new-products">
                <img className="it-image" src={image_2} alt="IT"></img>
                 <div className="hero-new-products-text">
                 <p className="hero-new-products-text-price" style={{ color: 'rgb(67, 147, 174)' }}>Google</p>
                 <p className="hero-new-products-price">Trending</p>
                 <p className="hero-new-products-price2">New</p>
               </div>
               <div className="texts">
               <h3>Loudest `a la Madison #1 (L'integral)</h3>
               <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away</p>
               </div>
              
               <div className="saved-user">
                 <div className="saved-star-left">
{/* //                   <img src={icon_4} alt=""></img> */}
                   <p>22 April 2021</p>
                 </div>
                 <div className="saved-user-count">
{/* //                   <img src={icon_5} alt="" /> */}
                   <p>10 comments</p>
                 </div>
                 </div>
                 <div className="saved-user-arrow">
                   <h3>Learn More</h3>
{/* //                   <img src={icon_6} alt=""></img> */}
                   </div>
               </div>
               <div className="hero-new-products">
                <img className="it-image" src={image_3} alt="IT"></img>
                 <div className="hero-new-products-text">
                 <p className="hero-new-products-text-price" style={{ color: 'rgb(67, 147, 174)' }}>Google</p>
                 <p className="hero-new-products-price">Trending</p>
                 <p className="hero-new-products-price2">New</p>
               </div>
               <div className="texts">
             <h3>Loudest `a la Madison #1 (L'integral)</h3>
               <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away</p>
               </div>
              
               <div className="saved-user">
                 <div className="saved-star-left">
{/* //                   <img src={icon_4} alt=""></img> */}
                   <p>22 April 2021</p>
                    </div>
                 <div className="saved-user-count">
{/* //                   <img src={icon_5} alt="" /> */}
                   <p>10 comments</p>
                 </div>
                 </div>
                 <div className="saved-user-arrow">
                   <h3>Learn More</h3>
{/* //                   <img src={icon_6} alt=""></img> */}
                 </div>
               </div>
              
             </div>
             
        //  </div>
    )
}

export default Breadcrumps