const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT=3000;

app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"studentdb"
});

db.connect((err)=>{
    if(err){
        console.log("database connection failed",err.message);
        return;
    }
    console.log("mysql connected successfully");
});

app.get("/students",(req,res)=>{
    const sql = "select * from students";
    db.query(sql,(err.result))
})