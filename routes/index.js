var express = require('express');
//var { MongoClient } = require('mongodb');
const mongodb=require('mongodb');

//var client = require('mongodb').MongoClient;
var router = express.Router();
//const db= "mydatabase";

const title = "my app";

/* GET home page. */
router.get('/',(async function(req, res, next) {
(async function mm(){
  let uri = 'mongodb://localhost:27017/mydata' ;
  try {
  await mongodb.MongoClient.connect(uri,async function(err,client){
   
   let db=client.db('mydata')
   const books= await db.collection('books').find().toArray();
   res.render('index.jade', {books});
console.log({books});
  });
  

    
  } catch (error) {
    console.log(error)
  }
 
  
}()
)
     
  
      
        

}));

module.exports = router;
