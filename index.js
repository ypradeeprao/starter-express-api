const express = require('express')
var axios = require('axios');
const app = express()

const mongojs= require("./mongorest.js")


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
   res.end( JSON.stringify({}));
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

 app.post('/signup', async (req, res) => {
  
   var x = await mongojs.add(4,2) ; 
   res.end( JSON.stringify({}));
 })

app.post('/deleteuser',  function(req, res){
   
    console.log(req.body); 
       console.log(req.body.id);
    var user =  req.body ;
   
    console.log("user");
    console.log(user);

    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        let usersU = {};
     
       for(let i in users){
        if(users[i].id == user.id){

        }
        else{
            usersU[i] = users[i];
        }
       } 
       


      console.log("mongofile");
      var x =  mongojs.add(4,2) ; 

// fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(usersU), (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");
//     console.log("The written has the following contents:");
//     console.log(fs.readFileSync(__dirname + "/" + "users.json", "utf8"));
//   }
// });


     
       res.end( JSON.stringify(usersU));
    });
 })





app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yooo!')
})
app.listen(process.env.PORT || 3000)
