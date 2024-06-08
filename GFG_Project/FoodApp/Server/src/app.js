const express =require('express');
const app=express();


const foodRoute=require('./Routers/foodRouter');

app.get('/echo',(req,res)=>
{
    res.send('Recived Echo!');
});

app.use(foodRoute);

module.exports=app;