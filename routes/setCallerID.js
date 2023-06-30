const route= require('express').Router()
// const {verify_token}=require('../controller/token_handler')
const {set_caller_id}=require('../controller/setCallerId')
//route  to set  caller id
route.put('/setCallerID/:sysId',set_caller_id)


module.exports=route
