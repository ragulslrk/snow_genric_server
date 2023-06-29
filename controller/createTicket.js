const axios = require('axios');


const  create_ticket=(req,res)=>{
        if(req.body.short_description && req.body.description)
        {
            const   data=req.data
        
            const url = `https://${data.instance_name}.service-now.com/api/now/table/incident?sysparm_display_value=true`;
            const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${data.auth_type} ${data.auth_token}`
                };
    
            const post_data = {
              short_description: req.body.short_description,
              description: req.body.description,
            
            };
    
            axios.post(url, post_data, { headers })
              .then(response => {
                res.send(response.data);
              })
              .catch(error => {
                console.error(error);
                return res.status(401).json("invalid description details");

              });
    }
    else{
        return res.status(401).json("provide description details");
    
    }
}

module.exports={create_ticket}