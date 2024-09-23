const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("Tazdik is running.")
});

// app.get('/',(req,res) =>{
//     res.send("Node api serve")
// });


app.post('/api/products',async (req, res) =>{
    // console.log(req.body);
    // res.send(req.body);

    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);   
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products',async (req, res) =>{
    // console.log(req.body);
    // res.send(req.body);

    try{
        const product = await Product.find({});
        res.status(200).json(products);   
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products/:id',async (req, res) =>{
    // console.log(req.body);
    // res.send(req.body);

    try{
        const {id} = req.params;  
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});


app.put('/api/products/:id',async (req, res) =>{

    try{
        const {id} = req.params;  
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product)
        {
            return res.status(404).json({message:"Product not found"});
        }

        const updateProduct = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});


app.delete('/api/products/:id',async (req, res) =>{
   

    try{
        const {id} = req.params;  
        const product = await Product.findByIdAnsDelete(id);

        if(!product)
            {
                return res.status(404).json({message:"Product not found"});
            }

        res.status(200).json({message:"Product not found"});
    }

    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});




// mongoose.connect("mongodb+srv://tazdik777:1n4z6T8X0ss39Sax@backenddb.mheagln.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
// .then(()=>{
//     console.log("Connected to Database!");
// })
// .catch(() =>{
//     console.log("Connection failed");
// })