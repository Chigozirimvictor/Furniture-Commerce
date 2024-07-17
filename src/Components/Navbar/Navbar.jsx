import React, { useState } from 'react' 
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import cart_img from '../Assets/cart_img.png'
import search_icon from '../Assets/search_icon.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {

const localCart = JSON.parse(localStorage.getItem("cart"))
const cartCount = localCart ?  localCart.length : 0

// console.log(localCart.length)
const[menu,setMenu] = useState("Home");
    return (

       
        <div className='navbar'>

            <div className='nav'>
            <img src={cart_img} alt="" />
            </div>
            <div className='second-div'>

            
        

          <div className='nav-logo'>
            <h2>Bandage</h2>
          </div>

          <label class="toggle-button" for="menubar">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </label>

        <input className='input_check' type='checkbox' id='menubar'></input>
        <div className='Navbar'>
          <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none'}}  to='/'>Home</Link> {menu=== "Home"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Products")}}><Link style={{textDecoration: 'none'}} to='/products'>Shop/Products</Link>{menu=== "Products"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("About")}}><Link style={{textDecoration: 'none'}} to='/About'>About</Link>{menu=== "About"?<hr />:<></>}</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>

          </ul>
          <div className='nav-login-cart'>
           <Link to='/login'><button>Login/Sign Up</button></Link> 
           <Link to='/cart'> <img src={cart_icon} alt="" /></Link> 
            <div className='nav-cart-count'>{localCart.length}</div>
            
          </div>
          <div className='icon'><img src={cartCount} alt="" /></div>

          </div>
          </div>
        </div>
        
    


    )
}

export default Navbar