var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function(request, response) {
  console.log('Connection');
  var path = url.parse(request.url).pathname;

  switch (path) {
    case '/index.html':
      fs.readFile(__dirname + path, function(error, data) {
        if (error){
          response.writeHead(404);
          response.write("opps this doesn't exist - 404");
        } else {
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(data, "utf8");
        }
        response.end();
      });
      break;
    default:
      response.writeHead(404);
      response.write("opps this doesn't exist - 404");
      response.end();
      break;
  }
});

server.listen(8080);
io.listen(server);

var serv_io = io.listen(server);

serv_io.sockets.on('connection', function(socket) {
    socket.emit('message', {'message': 'hello world'});
});

var serv_io = io.listen(server);
serv_io.set('log level', 1); // 關閉 debug 訊息

serv_io.sockets.on('connection', function(socket) {
  setInterval(function() {
    socket.emit('date', {'date': new Date()});
  }, 1000);

  // 接收來自於瀏覽器的資料
  socket.on('client_data', function(data) {
    process.stdout.write(data.letter);
  });
});


var uuid = require('node-uuid');
var mongodb = require('mongodb');

var mongodbServer = new mongodb.Server('localhost', 27017, { auto_reconnect: true, poolSize: 10 });
var db = new mongodb.Db('mydb', mongodbServer);

/* open db */
db.open(function() {
    /* Select 'contact' collection */
    db.collection('contact', function(err, collection) {

        /* Generate UUID(16 Bytes) and convert to BinaryData object for mongodb */
        var uuidBinary = new Buffer(uuid.v1({}, []));
        var id = mongodb.BSONPure.Binary(uuidBinary, mongodb.BSONPure.Binary.SUBTYPE_UUID);

        /* Insert a data with uuid */
        collection.insert({
            _id: id,
            name: 'Fred Chien',
            email: 'cfsghost@gmail.com'
        }, function(err, data) {
            if (data) {
                console.log('Successfully Insert');
            } else {
                console.log('Failed to Insert');
            }
        });
    });
});
