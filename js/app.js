const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let students = [
    {id:1,name:"priya",course:"BCA"},
    {id:2,name:"priya",course:"BC"},
    {id:3,name:"priya",course:"B"}
]
app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s=>s.id===id);
    if(!student){
        return res.status(404).json({
            message:"student not found"
        });
    }
    return res.json(student);
});

app.post("/students",(req,res)=>{
    const newstudent  = {
        id:students.length+1,
        name:req.body.name,
        course:req.body.course};

    students.push(newstudent);
    res.status(201).json({
        message:"student added successfully",
        student:newstudent
    });
    });

app.put("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s=>s.id===id);
    if (!student){
        return res.status(404).json({
            message:"student not found"
        });
    }
    student.name = req.body.name;
    student.course = req.body.course;
    res.json({
        message:"student updated successfully",
        student:students
    });
});

app.delete("/students/:id",(res,req)=>{
    const id = parseInt(req.params.id);
    const index = students.findIndex(s=>s.id===id);
    if (index === -1){
        return res.status(404).json({
            message:"student not found"
        });
    }
    students.splice(index,1);
    res.json({
        message:"student deleted succesfully"
    });
});

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});

