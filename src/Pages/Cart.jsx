import React from "react";
import { useGetProductsQuery } from "../api/productApi";

// import Footer from "../Components/Footer/Footer";

const Cart = () => {
    const { data } = useGetProductsQuery();
  console.log(data)
  const addToCart = (product) => {
    const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    let isProduct = localCart.find((item) => item.id === product.id);
    console.log(isProduct, 'isProduct');
    if (!isProduct) {
        localStorage.setItem('cart', JSON.stringify([...localCart, product]));
    }
};
const removeFromCart = (productId) => {
    console.log(productId)
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter((product) => product.id !== productId);
    console.log(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

    return(
        <div className="products">
      {data?.products.map((product) => (
        <div className="menu">
          <img src={product.thumbnail} alt={product.title} />
          <li className="prod-item">
            <p>{product.title}</p>
            <span className="old-price">${product.price}</span>{" "}
            <span className="new-price">${product.price}</span>
          </li>
          <div className="addCart" onClick={()=>addToCart(product)} key={product.id}>
            Add To Cart
          </div>
          <div className="removeCart" onClick={()=>removeFromCart(product.id)} key={product.id}>
            Remove Cart
          </div>
        </div>
      ))}
    </div>
    
    )
}

export default Cart