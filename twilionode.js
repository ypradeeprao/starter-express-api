const accountSid = 'AC6d8caef3d4194d8cfbeb2287c6425ce4'; 
const authToken = '[AuthToken]'; 
const client = require('twilio')(accountSid, authToken); 



const sendmobilemessage = async function(req){

    let resp = {issuccess:"true", message:""};
  
    let {phonenumber, message} = req.body;
   

await client.messages 
.create({ 
body: message,  
messagingServiceSid: 'MG4d433d25ea1ba7870e5cd84bc4b6746d',      
to: phonenumber 
}) 
.then(message => console.log(message.sid)) 
.done();

}
module.exports ={
    sendmobilemessage
}