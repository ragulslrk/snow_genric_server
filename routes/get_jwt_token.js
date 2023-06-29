const route= require('express').Router()
const {gen_token,verify_token}=require('../controller/token_handler')
const jwt = require('jsonwebtoken');
const  SECRET_KEY="kore.ai.plg"



//gen jwt token
route.post('/get_token',gen_token)


//route  to decode token
route.get('/decode_token/:token',verify_token,(req,res)=>{
       
        const data=req.data
        console.log(data)
        if(data)
        {   
            return  res.send(data)
        }else{
            return res.status(401).json("invalid token1");
        }

    
})
module.exports=route