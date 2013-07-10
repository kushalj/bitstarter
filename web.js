var express = require('express');

var app = express.createServer(express.logger());
var page = getPage('./index.html');
var pageBuffer = new Buffer([page, "utf-8"]);



app.get('/', function(request, response) {
  response.send(pageBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



var getPage = function (filename) {
  fs.readFile('filename', function (err, data) {
    if (err) throw err;
    return data;
  });
};
