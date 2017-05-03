var express = require('express');
var router = express.Router();
var cors = require('cors');
var db = require('mongojs')('shimian')
var app = express();
db.on('error', function (err) {
    console.log('database error', err)
})

db.on('connect', function () {
    console.log('database connected')
})
/* GET home page. */

router.get('/posts', cors(), function(req, res, next) {
   db.tucao.find((err, posts) => {
    if (err) {
        res.send(err)       
    } 
   
    res.json(posts)
   })
});
router.get('/posts/:id', cors(), function(req, res, next) {
   db.tucao.findOne({_id: mongojs.ObjectId(req.params)}, (err, post) => {
    if (err) {
        res.send(err)       
    }
    res.json(post)
   })
});
module.exports = router;
