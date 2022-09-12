const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-api", 
// {useCreateIndex:true,useNewUrlParser:true,userUnifiedTopology:true}
).then(()=>{
    console.log("Connection is successful");
}).catch((e)=>{
    console.log(e.message,"Connection Failed");
})