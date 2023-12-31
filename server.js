const axios = require('axios');
const  express=require('express')
const app=express()
const  chalk= require('chalk')
const logger = require('morgan');
app.use(express.urlencoded({extended:true}));
app.use(logger('dev'))
// describing logging methods
const  success=chalk.green.bold.underline
const  error=chalk.red.bold.underline

//route to home  page
app.get('/',(req,res)=>{
    res.send('this app contains SNOW Mphasis server')
})




//route  to get sysId 
const get_sysId=require('./routes/getSysId')
app.use(get_sysId)


//route to create ticket
const create_ticket=require('./routes/create_ticket')
app.use(create_ticket)

//route to set caller id for creating ticket 
const set_caller_id=require('./routes/setCallerID')
app.use(set_caller_id)

//route reset the password 
const reset_password=require('./routes/password_reset')
app.use(reset_password)


//route to find incident 
const find_incident=require('./routes/findIncident')
app.use(find_incident)
app.listen('4242',()=>{
  
    console.log( success('Server started Lisenting 🚀🚀🚀🚀')   )
})