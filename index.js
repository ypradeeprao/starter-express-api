const express = require('express')
var axios = require('axios');
const app = express()

const mongojs= require("./mongorest.js")
const nodemailerjs= require("./nodemailernode.js")
const twilionodejs= require("./twilionode.js")
const imgbbrestjs= require("./imgbbrest.js")
const fileuploadjs = require("./fileupload.js")


const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());






var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })




 app.post('/createtable', async (req, res) => {
  console.log("createtabledfd");
   let mongojsresp = await mongojs.createtable(req) ; 
   res.end( JSON.stringify(mongojsresp));
 })

 app.post('/edittable', async (req, res) => {
  
   let mongojsresp = await mongojs.edittable(req) ; 
   res.end( JSON.stringify(mongojsresp));
 })


 app.post('/deletetable', async (req, res) => {
  
   let mongojsresp = await mongojs.deletetable(req) ; 
   res.end( JSON.stringify(mongojsresp));
 })
 

 app.post('/retrieverecords', async (req, res) => {
  
   var x = await mongojs.retrieverecords(req) ; 
   res.end( JSON.stringify({x}));
 })


 app.post('/insertrecords', async (req, res) => {
  
   var x = await mongojs.insertrecords(req) ; 
   res.end( JSON.stringify({}));
 })

 app.post('/editrecords', async (req, res) => {
  
   var x = await mongojs.editrecords(req) ; 
   res.end( JSON.stringify({}));
 })

 app.post('/deleterecords', async (req, res) => {
  
   var x = await mongojs.deleterecords(req) ; 
   res.end( JSON.stringify({}));
 })

 app.post('/sendmail', async (req, res) => {
  
  var x = await nodemailerjs.sendmail(req) ; 
  res.end( JSON.stringify({}));
})


app.post('/sendmobilemessage', async (req, res) => {
  
  var x = await twilionodejs.sendmobilemessage(req) ; 
  res.end( JSON.stringify(x));
})

app.post('/getuploadimagerequestjson', async (req, res) => {
  
  var x = await imgbbrestjs.getpostrequestjson(req) ; 
  res.end( JSON.stringify(x));
})


app.post('/fileupload', async (req, res) => {
  
  var x = await fileuploadjs.fileupload(req) ; 
  res.end( JSON.stringify(x));
})





app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yooo!')
})
app.listen(process.env.PORT || 3000)
