const route= require('express').Router()
const {reset_password}=require('../controller/password_reset')
//this is  to reset the password for the given user id(sysiId)
route.put('/resetPassword/:sysId',reset_password)

module.exports=route