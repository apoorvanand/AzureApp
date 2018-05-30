var express = require('express');
const mongodb=require('mongodb');
//var { MongoClient } = require('mongodb');
//const client = require('mongodb').MongoClient;
//const db= "mydatabase";
//var client = require('mongodb').MongoClient;
var router = express.Router();


const title ="my app";
const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    bookId: 656,
    read: false
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    bookId: 24280,
    read: false
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  },
  {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }];

/* GET home page. */
router.get('/',function (req, res, next) {
  
(async function mm(){
  let uri = 'mongodb://localhost:27017/mydata' ;
  try {await mongodb.MongoClient.connect(uri,async function(err,client){
    if(err)throw(err);
    let db=client.db('mydata')
    //let books=db.collection('books');
    const response=await db.collection('books').insertMany(books);
    //client.close();
    res.json(response);
    console.log(response)
     })
    
   }
   catch (error) {
    console.log(error);
  }
  })
   ();
  
  

});


module.exports = router;
