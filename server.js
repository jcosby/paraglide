var express = require('express');
var app = express();
var path = require('path');
<<<<<<< HEAD
var port = process.env.PORT || "3000";
=======
var port = process.env.PORT || "3000"
>>>>>>> 0f90f7b5ae63982be7e6975aa0ea55192bbcdab3

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, function() {console.log("port 3k")});
