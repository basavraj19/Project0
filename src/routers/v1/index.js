const express =require('express');

const router =express.Router();

router.get('/',(req,res)=>{
    console.log("Request Received");
    return res.json("Basavraj");
});

router.get('/love',(req,res)=>{
    console.log("Request Received");
    return res.json("Bhuvan");
})

module.exports =router;