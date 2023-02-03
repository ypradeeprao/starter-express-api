var axios = require('axios');
var data = JSON.stringify({
    "collection": "samplecollection1",
    "database": "sampledb1",
    "dataSource": "Cluster0",
    "projection": {
        "_id": "63dc364a3ace6b16ecfd539e"
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-eculy/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'hR1ddMRYtMV0n38QhuFSdtjbAnUYk1iX1o70lbZOJ6B1EBJoxXKLx82dGQTCYP98',
    },
    data: data
};
   
var insertmanyconfigurl = 'https://data.mongodb-api.com/app/data-eculy/endpoint/data/v1/action/insertMany';

const insertrecords = async function(req){
  let resp = {issuccess:"true", message:""}
  let insertconfig = JSON.parse(JSON.stringify(config));
  insertconfig.url = insertmanyconfigurl;
  insertconfig.data = req.body;

    await axios(insertmanyconfig)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

    return resp;
}

const add = async function(x, y){
    console.log(x+y);

    await axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

    return x+y;
}



const subtract = function(x, y){

  
        return x-y;
}

module.exports ={
    add,subtract
}



