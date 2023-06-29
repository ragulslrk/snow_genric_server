const jwt = require('jsonwebtoken');
const  SECRET_KEY="kore.ai.plg"

//this function convert the service now params to jwt token
/*input params:{
    instance_name,
    username,
    auth_type[basic,bearer],
    auth_token,
    password 

}*/
//output->jwt token
const gen_token=(req,res)=>{
    


if(req.body.instance_name && req.body.username &&req.body.auth_type && req.body.auth_token &&req.body.password)
{
    const data={
        instance_name:req.body.instance_name,
        username:req.body.username,
        auth_type:req.body.auth_type,
        auth_token:req.body.auth_token,
        password:req.body.password

    }
    console.log(data)
    const access_token= jwt.sign(data,SECRET_KEY)
   return  res.send(access_token)
}else{
    return res.status(401).json("invalid params");
}
    

}



//used to verifyand decode the token
async function verify_token(req,res,next){

   try{ 
        if(req?.params?.token)
            {   console.log('in verify token(params)',req.params.token)
                const data=await jwt.verify(req.params.token,SECRET_KEY)
                req.data=data
                next()
            }
            else{
                return res.status(401).json("invalid token");
            }
   } 
   catch (error) {
    console.error(error);
    return res.status(401).json("invalid token");


  }
}
    


//used to verifyand decode the token in post request
async function verify_token_post(req,res,next){
    try{    
         if(req?.body?.token)
             {
                 const datas=await jwt.verify(req.body.token,SECRET_KEY)
                 req.data=datas
                 next()
             }
             else{
                 return res.status(401).json("invalid token");
             }
    } 
    catch (error) {
     console.error(error);
     return res.status(401).json("invalid token");
 
 
   }
 }
     
 




module.exports={gen_token,verify_token,verify_token_post}