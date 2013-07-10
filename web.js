var express = require('express');

var app = express.createServer(express.logger());

var getFile = function (filename) {
  fs.readFile('filename', function (err, data) {
    if (err) throw err;
    return data;
  });
};


var page = getFile('./index.html');
var pageBuffer = new Buffer([page, "utf-8"]);

app.get('/', function(request, response) {
  response.send(pageBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



