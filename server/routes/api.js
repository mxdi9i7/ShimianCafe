var express = require('express');
var router = express.Router();
var cors = require('cors');
const MongoClient = require("mongodb").MongoClient

var db

MongoClient.connect('mongodb://localhost:27017/shimian', (err, connection) => {
    if (err) {
        
    }
    db = connection
})
/* GET home page. */

router.get('/posts', cors(), function(req, res, next) {
   db.collection('tucaos')
   .find()
   .toArray((err, tucao)=> {
       if (err) {
           res.send(err);
       } else {
        console.log(tucao)
        res.json(tucao)
       }
       var post1 = {
           author: "Peter",
           like_count: 123,
           view_count: 111,
           body: "Hello world"
       }
       
       
   })
});

module.exports = router;
