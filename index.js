const express = require('express')
const app = express()

var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile("/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yooo!')
})
app.listen(process.env.PORT || 3000)
