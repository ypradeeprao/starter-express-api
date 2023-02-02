var axios = require('axios');
var data = JSON.stringify({
    "collection": "planets",
    "database": "sample_guides",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
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
    
const add = function(x, y){
    console.log(x+y);

    axios(config)
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



