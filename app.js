const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const program = [{"id":1,"product_name":"abcd","price":12300},
                 {"id":2,"product_name":"lapi topi","price":10000}
]
function middle_ware(req,res,next){
    console.log("method: ",req.method);
    console.log("URL: ",req.url);
    next();
}
app.use(middle_ware);
app.get("/product",(req,res)=>{
    return res.status(200).json({"message":"data retrived",
        "data":program
    })
})

app.post("/product",(req,res)=>{
    const {product_name,price} = req.body;
    const p_name = product_name;
    const p_price = price;
    if (!p_name){
        return res.status(400).json({
            "message":"name cant be empty"
        });
    }

    if (p_price <= 0){
        return res.status(400).json({
            "message":"price cant be 0 and less"
        });
    }
    const new_product = {"id":program.length + 1,
                         "product_name":p_name,
                         "price":p_price
    }
    program.push(new_product);
    return res.status(200).json({
        "message":"data accepted",
        "new data":new_product
    });
});

app.listen(3000,()=>{console.log(`site running on http://localhost:${port}`)});