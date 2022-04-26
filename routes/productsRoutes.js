const express = require('express')
const router = express.Router()
const product = require('../models/productSchema')
var cors = require('cors')
const helmet = require("helmet");
app.use(helmet({
    referrerPolicy: { policy: "no-referrer" },
  }));
// get all products
router.get("/",cors(),async (req,response,next)=>{

    try{
        const allPRoducts = await product.find()
        return response.status(200).json({products:allPRoducts})
    }catch(err){
        return  response.status(500).json({error:err.message})
    }
})
// find one product
router.get("/:id",getProduct,(req,response,next)=>{
    response.status(200).send({product:req.product})
})

// create one product
router.post("/",async(req,response,next)=>{
    const {name,description,stock,discount,dateOfCreation,price} = req.body 
    const newProduct = new product({
        name:name,
        description:description,
        price:price,
        stock:stock,
        dateOfCreation:dateOfCreation,
        discount:discount
    })
    try{
        const thenewProduct = await product.create(newProduct)
        response.status(201).send({product:thenewProduct})
    }catch(err){
        response.status(400).send({message:err.message})
    }
})
// delete one product
router.delete("/:id",getProduct,async(req,response,next)=>{
    await req.product.remove()
    response.send({message:"it was removed"})
})
// modify one product

router.patch("/",(req,response,next)=>{
    response.status(200).send("it was modify")
})
// create a middleware 
async function getProduct(req,res,next){
    const requested = await product.findById(req.params.id)
    if(requested === null){
        return res.status(404).send({error:"this product was not found"})
    }
    req.product = requested
    next()
}


module.exports = router