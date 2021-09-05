import React, {Component} from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductHome from './ProductHome';
import Cart from './Cart';
import {CartProvider} from "react-use-cart";


function App() {
  return (
    <>


    <CartProvider>
    <ProductHome/>

    <Cart/>

    {/* <div class="row">
        <div class="col-8"></div>
        <div class="col-4"></div>
    </div> */}
     
    </CartProvider>
    
  

    </>
  );
}

export default App;