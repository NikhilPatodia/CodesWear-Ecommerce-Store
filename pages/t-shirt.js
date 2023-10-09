import React from "react";
import Link from 'next/link';
import { hydrate } from 'react-dom';
import Product from "@/models/Product";
import mongoose from "mongoose";


const Tshirt = ({products}) => {
  console.log(products);
  return (
    <div>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap ml-16">
      {Object.keys(products).map((item)=>{
        return <Link key={products[item]._id} href={`/product/${products[item].slug}`} passHref legacyBehavior><div className="cursor-pointer lg:w-1/5 md:w-1/2 w-full p-2  shadow-lg m-5">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className=" block h-[36vh] m-auto " src={products[item].img}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">₹{products[item].price}</p>
          <div className="flex space-x-2">
          {products[item].size.includes('M') && <span>M</span>}
          {products[item].size.includes('S') && <span>S</span>}
          {products[item].size.includes('XL') && <span>XL</span>}
         {products[item].size.includes('XXL') && <span>XXL</span>}
         {products[item].size.includes('L') && <span>L</span>}
         
          
          
          </div>
         
          <div className="mt-1">
          {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1  bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}




          </div>
        </div>
      </div>
      </Link>
     
    })
  }
      
     
    </div>
  </div>
</section>
    </div>
   
       
  )

 
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
     let products = await Product.find({category: "t-shirt"})
    
     let tshirt = {};
     for(let item of products){
       if(item.title in tshirt){
          if(!tshirt[item.title].color.includes(item.color) && item.availableQty>0){
           tshirt[item.title].color.push(item.color);
          }
          if(!tshirt[item.title].size.includes(item.size) && item.availableQty>0){
           tshirt[item.title].size.push(item.size);
          }
       }
       else{
         tshirt[item.title] = JSON.parse(JSON.stringify(item));
         if(item.availableQty >0){
           tshirt[item.title].color = [item.color];
           tshirt[item.title].size= [item.size];
         }
       }
     }
    
  return {
     props: {products: JSON.parse(JSON.stringify(tshirt)) }
    
    }
}

export default Tshirt
