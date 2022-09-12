const express = require("express");
const router = new express.Router();
const Student = require("../models/Student");


//ROUTE:1 Creating a student
router.post("/students",async(req,res)=>{
    try{
    const user = new Student(req.body);
    const createUser=await user.save()
    res.status(201).send(user);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
})


//ROUTE:2 Fetching all students
router.get("/students", async(req,res)=>{
    try {
        StudentData = await Student.find();
        if(!StudentData){
            console.log(error.message);
            res.status(400).send();
        }
        else{
            res.send(StudentData);
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
})

//ROUTE:3 Getting individual data
router.get("/students/:email", async(req,res)=>{
    try {
        const email = req.params.email;
        const studentData = await Student.findOne({email }).select("-_id").exec();
        res.send(studentData);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})



//ROUTE:4 Delete the student data
router.delete("/students/:email", async(req,res)=>{
    try {
        const email = req.params.email;
        const deleteStudent = await Student.deleteOne({ email });
        // console.log(deleteStudent);
        // const deleteStudent= await Student.findByIdAndDelete({id:selectStudent});
        if(!deleteStudent){
            return res.status(404).send();
        }
        else{
        res.send(deleteStudent);
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


//ROUTE:5 Update a student by it's id
router.patch("/students/:email", async(req,res)=>{
    try {
        const email = req.params.email;
        const selectStudent= await Student.findOne({email }).select("_id").exec();
        if(!selectStudent){
            return res.status(404).send();
        }
        else{
        const updateStudent= await Student.findByIdAndUpdate(selectStudent, req.body, {new:true});
            res.send(updateStudent);
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports=  router;