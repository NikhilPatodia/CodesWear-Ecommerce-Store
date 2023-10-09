import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
 console.log("I am useeffect fom app.js")
  try {
    if(localStorage.getItem("cart")){
     
      setCart(JSON.parse(localStorage.getItem("cart")));
      saveCart(JSON.parse(localStorage.getItem("cart")));
     
    }
    
  } catch (error) {
    console.log(error);
    localStorage.clear();
  }
  }, []);
  const saveCart = (myCart)=>{
     localStorage.setItem("cart",JSON.stringify(myCart) )
     
   let subt = 0;
   let keys = Object.keys(myCart);
   for (let i = 0; i < keys.length; i++) {
    subt += myCart[keys[i]].price* myCart[keys[i]].qty; 
    
   }
   setsubTotal(subt);
  }

    const addToCart = (itemcode, qty, price, name, size, variant)=>{
      let newCart = cart;
      if(itemcode in newCart){
              newCart[itemcode].qty = cart[itemcode].qty + qty;
      }
      else{
             newCart[itemcode] = {qty: 1, price, name, size, variant}
      }
        setCart(newCart);
        
        saveCart(newCart);
       
    }
    const removeToCart = (itemcode, qty, price, name, size, variant)=>{
      let newCart = cart;
      if(itemcode in newCart){
              newCart[itemcode].qty = cart[itemcode].qty - qty;
      }
     if( newCart[itemcode].qty <= 0 ){
      delete newCart[itemcode];
     }
     setCart(newCart);
        
        saveCart(newCart);
       
    }

  const clearCart = ()=>{
    setCart({});
        
        saveCart({});
  }
  return  <> 

  <Navbar key={subTotal} addToCart={addToCart} removeToCart={removeToCart} cart={cart} clearCart={clearCart}  subTotal={subTotal}/>
  <Component  addToCart={addToCart} removeToCart={removeToCart} cart={cart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
   <Footer/>
  </>
}
