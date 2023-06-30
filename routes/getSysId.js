const route= require('express').Router()
//const {gen_token,verify_token}=require('../controller/token_handler')
const {getSysId}=require('../controller/getSysId')
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
route.get('/getSysId/:sysparm_limit/:user_name',getSysId)

module.exports=route