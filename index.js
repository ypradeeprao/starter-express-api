const express = require('express')
const app = express()




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


app.post('/deleteuser', function (req, res) {
   
    console.log(req.body);
    var user = JSON.parse( req.body );
   
    console.log("user");
    console.log(user);

    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        let usersU = {};
     
       for(let i in users){
        if(i == user.id){

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





app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yooo!')
})
app.listen(process.env.PORT || 3000)
