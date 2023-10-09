import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import{BsBagCheckFill} from 'react-icons/bs';
import{MdAccountCircle} from 'react-icons/md';
const Navbar = ({cart, addToCart, removeToCart, clearCart,subTotal}) => {

  const toogleClick = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-0");
      ref.current.classList.remove("translate-x-full");
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  }
  const ref = useRef();
  return (
    <><style jsx>{`
      .close{
        position: absolute;
        top: 8px;
        right: 8px;
      }
      .sidecart{
        width: 18rem;
        height: 100vh;
      }
      `}</style><div className='flex flex-col md:flex-row justify-center md:justify-start items-center mb-1 font-bold py-4 shadow-md sticky top-0 z-10 bg-white'>
        <div className="logo mx-5">
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
          <Link href={'/'}> <Image src="/eco.png" width={50} height={20}></Image></Link>

        </div>
        <div className="fetures">
          <ul className='flex space-x-4'>
            <Link href={'/'}> <li>About</li></Link>
            <Link href={'/hoddies'}> <li>Hoddies</li></Link>
            <Link href={'/mugs'}> <li>Mugs</li></Link>
            <Link href={'/stickers'}> <li>Stickers</li></Link>
            <Link href={'/t-shirt'}> <li>Tshirt</li></Link>
          </ul>
        </div>
        <div className="cart text-2xl md:text-xl absolute right-0 top-1 mx-4 cursor-pointer flex"> 
        <Link href={'/login'}><MdAccountCircle className="mx-2"/></Link> <AiOutlineShoppingCart  onClick={toogleClick}/></div>
        <div ref={ref} className={` sidecart absolute top-0 p-8  right-0 bg-pink-100  transform transition-transform ${Object.keys(cart).length !== 0?'translate-x-0':'translate-x-full'}`}>
          <h1 className='text-center text-2xl font-semibold my-5'>Shopping cart</h1>

          <span className='close text-2xl cursor-pointer ' onClick={toogleClick}><AiFillCloseCircle /></span>
          
          <ol className='list-decimal font-semibold my-5 '>
            {Object.keys(cart).length == 0 && <div>Cart is empty!</div>}
          {Object.keys(cart).map((k)=>{return <li key = {k}>
              <div className='flex space-x-2'>
              <div className='mr-1'>{cart[k].name}</div> <AiFillPlusCircle onClick={()=>{addToCart(k, 1, 499, 'wear-the-code', 'xl', 'red' )}}className='my-1  text-base'/> <span> {cart[k].qty} </span> <AiFillMinusCircle  onClick={()=>{removeToCart(k, 1, 499, 'wear-the-code', 'xl', 'red' )}} className='my-1 text-base'/>
              </div>
            </li> })}
      
          
          </ol>
          <div className='font-bold my-2'>SubTotal: ₹{subTotal}</div>
          <div className="buttons w-[100%] flex justify-around">
          <Link href={'/checkout'}><button className="  text-white bg-pink-500 border-0  focus:outline-none px-2 py-2 hover:bg-pink-600 rounded my-4">check out</button></Link>
          <button  onClick={clearCart} className="text-white bg-pink-500 border-0 focus:outline-none px-2 py-2 hover:bg-pink-600 rounded my-4 flex "><BsBagCheckFill className="text-sm my-auto mx-1"/>Clear cart</button>
         
          </div>
          
        </div>
      

      </div></>
  )
}

export default Navbar
