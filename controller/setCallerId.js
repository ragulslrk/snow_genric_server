const axios = require('axios');
const  set_caller_id=(req,res)=>{
if(req?.body?.caller_id && req?.params?.sysId)
{
    const   data=req.data
        
            const url = `https://${data.instance_name}.service-now.com//api/now/table/incident/${req.params.sysId}`
            const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${data.auth_type} ${data.auth_token}`
                };
    
            const put_data = {
                "caller_id":req.body.caller_id
            
            };
    
            axios.put(url,put_data, { headers })
              .then(response => {
                res.send(response.data);
              })
              .catch(error => {
                console.error(error);
                return res.status(401).json("invalid Caller id or sysId");
              });
}
else{
        return res.status(401).json("provide Caller details");
    
    }
}

module.exports={set_caller_id}