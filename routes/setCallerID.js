const route= require('express').Router()
const {set_caller_id}=require('../controller/setCallerId')
//route  to set  caller id
route.put('/setCallerID/:sysId',set_caller_id)


module.exports=route
