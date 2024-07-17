import React from "react";
import Furniture from "../Components/Furniure/Furniture";
import Exclusive from "../Components/Exclusive/Exclusive";
import Breadcrumps from "../Components/Breadcrumps/Breadcrumps";
// import Navbar from "../Components/Navbar/Navbar";

const Home = ({cartProducts}) => {
    
    return(
        <div>
        
           <Furniture/>
           <Exclusive/>
           <Breadcrumps/>
        </div>
    )
}

export default Home