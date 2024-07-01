const express =require('express');
const app=express();

// This is used to parse json data coming in request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const foodRoute=require('./Routers/foodRouter');
const userRoute=require('./Routers/userRouter');

// app.get('/echo',(req,res)=>
// {
//     res.send('Recived Echo!');
// });

//app.use(foodRoute);
app.use("/api/food",foodRoute);
app.use("/api/user",userRoute);


//To handle errors
app.use((err,req,res,next)=>
{
    const {status=500,message="Internal Server Error!"}=err;
    res.status(status).json({errMsg:message});
})

module.exports=app;