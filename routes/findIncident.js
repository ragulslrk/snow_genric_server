const route= require('express').Router()
const{find_incident}=require('../controller/findIncident')
route.get('/findIncident/:query',find_incident)

module.exports=route