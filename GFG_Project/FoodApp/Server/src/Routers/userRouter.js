const express = require('express');
const User = require('../Models/User');


const router=express.Router();



router.post('/users',async (req,res)=>
{
    console.log(req.data);

    const user= await User.create({email:"xyz@gmail.com",userName:"xyz",password:"1234"});

    res.status(201).json(user);
});

router.get('/users',async (req,res)=>
    {
       // console.log(req.data);
       
       const {_id,userName}=req.body;
        console.log(_id);
        const user= await User.findOne(
            { _id:_id}
        )
        res.status(200).json(user);
    });


module.exports = router;