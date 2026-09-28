const express = require("express");
const app = express();
app.use(express.json());

function logger(req,res,next){
    console.log("method:",req.method);
    console.log("url:",req.url);
    next();
}
app.use(logger);

let products = [
    {id:1,name:"laptop",price:50000},
    {id:2,name:"phone",price:36000}
]

app.get("/products",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"products retrieved successfully",
        data:products
    });

});

app.post("/products",(req,res)=>{
    const {name,price} = req.body;
    if (!name){
        return res.status(400).json({
            success:false,
            message:"product name is required"
        });
    }

    if(price<=0){
        return res.json({
            success:false,
            message:"product price must be greater than 0"
        });
    }

    const newproducts = {
        id:products.length+1,
        name:name,
        data:price
    };

    products.push(newproducts);
    res.status(201).json({
        success:true,
        message:"products added successfully",
        data:newproducts
    });
});

app.listen(3000,()=>{
    console.log(`server running at http://localhost:${3000}`);
});

