const route= require('express').Router()
const  {create_ticket}=require("../controller/createTicket")


//route  to create ticket
route.post('/createTicket',create_ticket)

module.exports=route