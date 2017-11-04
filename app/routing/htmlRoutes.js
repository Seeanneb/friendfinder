var express = require('express');
var router = express.Router();
const path = require('path');

path.basename('/public/survey.html')
router.get('/survey', function(req, res){
   res.send(survey.html);
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;