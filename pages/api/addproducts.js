import Product from "@/models/Product";

import connnectDb from "@/middleware/mongoose";


const handler = async (req, res)=>{
      if(req.method == 'POST'){
        for(let i=0; i<req.body.length; i++){
                let p = new Product({
                   
                     title: req.body[i].title  ,
                     slug: req.body[i].slug ,
                     category: req.body[i].category ,
                     desc: req.body[i].desc  ,  
                     img: req.body[i].img  ,  
                     color: req.body[i].color ,  
                     size: req.body[i].size ,  
                     price: req.body[i].price  ,
                     availableQty: req.body[i].availableQty, 
                    
                })
               await p.save();
            }
            res.status(200).json({ success : "succesfully run" })
    }
      else{
          res.status(400).json({ error : "method is a incorrect" })
          
      }

  }



export default connnectDb(handler);
  