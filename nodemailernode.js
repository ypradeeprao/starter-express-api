var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ypradeeprao@gmail.com',
    pass: 'Tir6tw3q@@'
  }
});

const sendmail = async function(req){
var mailOptions = {
  from: 'ypradeeprao@gmail.com',
  to: 'pradeepsfdc07@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

await transporter.sendMail(mailOptions);

}
module.exports ={
    sendmail
 }
 