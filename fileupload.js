var http = require('http');
var formidable = require('formidable');

const fileupload = async function(req){
    let resp = {issuccess:"true", message:"cannot be deleted from frontend"};
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
     console.log("infileparse");
    });
    return resp;
  }


  module.exports ={
    fileupload
 }
 