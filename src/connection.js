// URL at which MongoDB service is running
var url = "mongodb://localhost:27017/test";
 
// A Client to MongoDB
//import { MongoClient } from 'mongodb';
var MongoClient = require('mongodb').MongoClient;
 
// Make a connection to MongoDB Service
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connection with MongoDB is made!");
  db.close();
});
