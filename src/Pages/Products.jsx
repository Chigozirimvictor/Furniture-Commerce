import React, { useContext } from "react";
import Exclusive from "../Components/Exclusive/Exclusive";
import { useParams } from "react-router-dom";
// import Breadcrumps from "../Components/Breadcrumps/Breadcrumps";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";


const Products = () => {
    const{all_product} =useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return(
        <div>
            {/* <Breadcrumps product ={product}/> */}
            <ProductDisplay product ={product}/>

        </div>
    )
}

export default Products