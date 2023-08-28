import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
var firstList=true;
var toDoList=[];
var otherToDoList=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node_modules', express.static('node_modules'));

//app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render("index.ejs",{firstList,toDoList,otherToDoList});
});


app.post("/submit",(req,res)=>{
    
    var newTask=req.body["item"];
    if(firstList){

        toDoList.push({text:newTask,completed:false});
    }else{
        otherToDoList.push({text:newTask,completed:false});
    }
    res.render("index.ejs",{firstList,toDoList,otherToDoList});
});


app.post("/change",(req,res)=>{
    firstList=!firstList;
    res.render("index.ejs",{firstList,toDoList,otherToDoList});
});


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});