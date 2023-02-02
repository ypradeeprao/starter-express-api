const express = require('express')
const app = express()

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


app.post('/adduser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        let usersU = {};
       var user = users["user" + req.params.id];
       for(let i in users){
        if(i == req.params.id){

        }
        else{
            usersU[i] = users[i];
        }
       } 
       


       

// fs.writeFile(__dirname + "/" + "users.json", usersU, (err) => {
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


 app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yooo!')
})
app.listen(process.env.PORT || 3000)
