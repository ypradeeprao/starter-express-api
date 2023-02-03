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
var editmanyconfigurl = 'https://data.mongodb-api.com/app/data-eculy/endpoint/data/v1/action/updateMany';
var deletemanyconfigurl = 'https://data.mongodb-api.com/app/data-eculy/endpoint/data/v1/action/deleteMany';



const createtable = async function(req){
    let resp = {issuccess:"true", message:""};
  
    let {tablename, tabledatalist} = req.body;
    
    let createtablejson = {
        "dataSource": "Cluster0",
        "database": "sampledb1",
        "collection": tablename,
        "documents": [{"sampleid":"sampleid"}]
    }
  
    
    let insertmanyconfig = JSON.parse(JSON.stringify(config));
    insertmanyconfig.url = insertmanyconfigurl;
    insertmanyconfig.data = createtablejson;
  
  
      await axios(insertmanyconfig)
      .then(function (response) {
          console.log(JSON.stringify(response.data));
          resp.issuccess = true;
          resp.data = [];
          resp.message = '';
      })
      .catch(function (error) {
          console.log(error);
          resp.issuccess = false;
          resp.data = [];
          resp.message = error;
      });


      let deletetablejson = {
        "dataSource": "Cluster0",
        "database": "sampledb1",
        "collection": tablename,
        "filter": { "sampleid": "sampleid" }
    }
      let deletesampleconfig = JSON.parse(JSON.stringify(config));
      deletesampleconfig.url = deletemanyconfigurl;
      deletesampleconfig.data = deletetablejson;
     
      if(resp.issuccess == true){
      await axios(deletesampleconfig)
      .then(function (response) {
          console.log(JSON.stringify(response.data));
          resp.issuccess = true;
          resp.data = [];
          resp.message = '';
      })
      .catch(function (error) {
          console.log(error);
          resp.issuccess = false;
          resp.data = [];
          resp.message = error;
      });
      }
  
      return resp;
  }

  const edittable = async function(req){
    let resp = {issuccess:"true", message:"cannot be edited from frontend"};
    return resp;
  }


  const deletetable = async function(req){
    let resp = {issuccess:"true", message:"cannot be deleted from frontend"};
    return resp;
  }

const insertrecords = async function(req){
  let resp = {issuccess:"true", message:""};

  let {tablename, tabledatalist} = req.body;
  
  let recordsjson = {
      "dataSource": "Cluster0",
      "database": "sampledb1",
      "collection": tablename,
      "documents": tabledatalist
  }

  
  let insertmanyconfig = JSON.parse(JSON.stringify(config));
  insertmanyconfig.url = insertmanyconfigurl;
  insertmanyconfig.data = recordsjson;


    await axios(insertmanyconfig)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

    return resp;
}

const editrecords = async function(req){
    let resp = {issuccess:"true", message:""};
  
    let {tablename, conditionexpression, updateexpression, upsertifnotfound} = req.body;
    
    let recordsjson = {
        "dataSource": "Cluster0",
        "database": "sampledb1",
        "collection": "tablename",
        "filter": { "status": "open" },
        "update": {
            "$set": {
                "status": "complete",
            }
        }
    };
  
    
    let insertmanyconfig = JSON.parse(JSON.stringify(config));
    insertmanyconfig.url = editmanyconfigurl;
    insertmanyconfig.data = recordsjson;
  
  
      await axios(insertmanyconfig)
      .then(function (response) {
          console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
          console.log(error);
      });
  
      return resp;
  }

  const deleterecords = async function(req){
    let resp = {issuccess:"true", message:""};
  
    let {tablename, tabledatalist} = req.body;
    
    let recordsjson = {
        "dataSource": "Cluster0",
        "database": "sampledb1",
        "collection": tablename,
        "documents": tabledatalist
    }
  
    
    let insertmanyconfig = JSON.parse(JSON.stringify(config));
    insertmanyconfig.url = insertmanyconfigurl;
    insertmanyconfig.data = recordsjson;
  
  
      await axios(insertmanyconfig)
      .then(function (response) {
          console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
          console.log(error);
      });
  
      return resp;
  }

module.exports ={
   createtable,edittable,deletetable,
   insertrecords,editrecords,deleterecords
}



