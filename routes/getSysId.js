const route= require('express').Router()
const {gen_token,verify_token}=require('../controller/token_handler')
const {getSysId}=require('../controller/getSysId')
const jwt = require('jsonwebtoken');
const axios = require('axios');
const  chalk= require('chalk')
const  error=chalk.red.bold.underline
// route to get  get sysid of the user
/*input params:{
    instance_name,
    username,
    auth_type[basic,bearer],
    auth_token,
    password 

}*/
route.get('/getSysId/:userid/:sysparm_limit/:token',verify_token,getSysId)

module.exports=route