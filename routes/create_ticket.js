const route= require('express').Router()
const {verify_token}=require('../controller/token_handler')
const  {create_ticket}=require("../controller/createTicket")


//route  to create ticket
route.post('/createTicket',create_ticket)

module.exports=route