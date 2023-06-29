const axios = require('axios');

const reset_password=(req,res)=>{
    if(req?.body?.user_password && req?.body?.sysId)
{
    const   data=req.data
        
            const url = `https://${data.instance_name}.service-now.com/api/now/table/sys_user/${req.body.sysId}?sysparm_input_display_value=true`
            const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${data.auth_type} ${data.auth_token}`
                };
    
            const put_data = {
                "user_password":req.body.user_password
            
            };
    
            axios.put(url,put_data, { headers })
              .then(response => {
                console.log(response.data)
                res.send(response.data);
              })
              .catch(error => {
                console.error(error);
                return res.status(401).json("invalid password type or sysId");
              });
}
else{
        return res.status(401).json("provide password and sysId details");
    
    }
}

module.exports={reset_password}