const express = require("express");
const db = require('./db/conn');
const Student = require("./models/Student");
const studentRouter = require("./router/Student");

const app = express();
const port = process.env.PORT  || 8000;

app.use(express.json());
app.use(studentRouter);


app.listen(port,()=>{
    console.log(`Connection is established at port : ${port}`)
})


// CREATE A NEW STUDENT
// app.post("/students",(req,res)=>{

//     const user = new Student(req.body);
//     // console.log(req.body,user)
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
    // res.send(user);
// })


// CREATE A NEW ROUTER


// // WE NEED TO DEFINE THE ROUTER
// router.get("/", (req,res)=>{
//     res.send({message:"Success"})
// })
// // NEED TO REGISTER OUR ROUTER

