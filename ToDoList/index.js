import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
var toDoList=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{toDoList});
});


app.post("/submit",(req,res)=>{
    
    var newTask=req.body["item"];
    toDoList.push({text:newTask,completed:false});
    res.render("index.ejs",{toDoList});
});


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});