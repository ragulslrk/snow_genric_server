const axios = require('axios');
const {data}=require('./data')

const  find_incident=(req,res)=>{
    const url = `https://${data.instance_name}.service-now.com//api/now/table/incident? sysparm_query=${req.params.query}`;
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${data.auth_type} ${data.auth_token}`
    };
    console.log(url)
    axios.get(url, {
      headers: headers
    })
      .then(response => {
        // Handle response here
       //console.log(response.data);
       res.send(response.data)
       
      })
      .catch(error => {
        // Handle error here
        console.error(error);
      })

}

module.exports={find_incident}