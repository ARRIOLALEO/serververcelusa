const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')

// mongoose.connect("mongodb://localhost:27017/products")

mongoose.connect("mongodb+srv://marioarriola:XWwQCqWF6Sk3zt29@cluster0.jcdzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const db = mongoose.connection
db.on('error',(err)=> console.log(err.message))
db.once('open',()=> console.log("im connected to mongo db"))
const app = express()
// routes 
app.use(cors())
app.use(express.json())

const productsRouts  = require('./routes/productsRoutes')
app.use("/products",productsRouts)


app.listen(3000,()=>console.log("im running on my port 3000"))