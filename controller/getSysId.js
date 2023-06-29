const axios = require('axios');
const  chalk= require('chalk')
const  error=chalk.red.bold.underline


// route to get sysid of the given user
const  getSysId=(req,res)=>{
    const   data=req.data
    const url = `https://${data.instance_name}.service-now.com/api/now/table/sys_user`;
    const params = {
      sysparm_limit: req.params.sysparm_limit,
      user_name:req.params.userid
    
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${data.auth_type} ${data.auth_token}`
    };
    
    axios.get(url, {
      params: params,
      headers: headers
    })
      .then(response => {
        // Handle response here
       //console.log(response.data);
        if(response?.data?.result?.length!=0 )
        {   console.log(`SysId :${chalk.hex('#c44aed').bold.underline(response.data.result[0].sys_id)}`)
             res.json({sysId:response.data.result[0].sys_id})
             
        }
        else{
            console.log(error('SysId Id Not Found'))
            res.status(401).json("SysId Id Not Found")
        }
       
      })
      .catch(error => {
        // Handle error here
        console.error(error);
      })
    
}

module.exports={getSysId}