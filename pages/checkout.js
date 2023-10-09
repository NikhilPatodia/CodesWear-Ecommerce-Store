import React from 'react'
import Link from 'next/link'
import {  AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
const Checkout = ({cart, addToCart, removeToCart,subTotal}) => {
  return (
    <>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
    <div className='m-[50px]'>
      
      <h2 className='text-center font-bold text-3xl my-8'>Check Out</h2>
      <h1 className='text-xl font-semibold'>1.Delivery details</h1>
      <div className="flex">
      <div className="w-1/2 mb-4 mx-2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="w-1/2 mb-4 mx-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="text" id="name" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className=" mb-4 mx-2">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea  type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="flex">
      <div className="w-1/2 mb-4 mx-2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="w-1/2 mb-4 mx-2">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className="flex">
      <div className="w-1/2 mb-4 mx-2">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="w-1/2 mb-4 mx-2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="text" id="name" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <h1 className='text-xl font-semibold'>2.Review Order</h1>
      <div className=" sidecart p-6 my-4 bg-pink-100  ">
        
          
          <ol className='list-decimal font-semibold my-5 '>
            {Object.keys(cart).length == 0 && <div>Cart is empty!</div>}
          {Object.keys(cart).map((k)=>{return <li key = {k}>
              <div className='flex space-x-2'>
              <div className='mr-4'>{cart[k].name}</div> <AiFillPlusCircle onClick={()=>{addToCart(k, 1, 499, 'wear-the-code', 'xl', 'red' )}}className='my-1  text-base'/> <span> {cart[k].qty} </span> <AiFillMinusCircle  onClick={()=>{removeToCart(k, 1, 499, 'wear-the-code', 'xl', 'red' )}} className='my-1 text-base'/>
              </div>
            </li> })}
      
          
          </ol>
          
           
       
        </div>
       
        <button  className="text-white bg-pink-500 border-0 focus:outline-none px-2 py-2 hover:bg-pink-600 rounded my-2">Pay ₹{subTotal}</button>
        <div>
        <button  className="text-white bg-pink-500 border-0 focus:outline-none px-2 py-2 hover:bg-pink-600 rounded my-2">Order</button>
        </div>
    </div>
    </>

  )
}

export default Checkout
