var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var getFileBuffer = function(filename) {
  fileBuffer = fs.readFile(filename, function (err, data) {
    if (err) throw err;
    return data;
  });
  return fileBuffer;
};

var fileBuffer = getFileBuffer('./index.html');

app.get('/', function(request, response) {
  response.send(fileBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
