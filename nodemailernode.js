var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
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

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports ={
    sendmail
 }
 