import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import NewCollections from './Components/NewCollections/NewCollections';


function App() {
  const [cartProducts] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])



  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home cartProducts={cartProducts}/>}/>
        <Route path='/Products' element ={<HomeCategory category= "Products"/>}/>
        <Route path='/About' element ={<HomeCategory category="About"/>}/>
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>

        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/login' element = {<LoginSignup/>}/>
        



      </Routes>
    {/* <Breadcrumps/> */}
    <NewCollections/>
      <Footer/>

      </BrowserRouter>
      

    </div>
  );
}

export default App;

