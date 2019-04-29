(function () {

//----------------------------------------------------------------------
  // requirements

  var express = require("express");
  var http = require("http");
  var moment = require("moment");
  require('systemd');
//----------------------------------------------------------------------
  // variables
  var hitCount = 0;
  var app = express();
  
//----------------------------------------------------------------------
  // handler functions

  //  --  requests
  function logAndCounter(req, res, next) {
    console.log("!_-_-_-_-Request Nr: " + (++hitCount));
    console.log("  @" + moment().format());
    console.log(req.headers);
    console.log(req.path);
    next();
  }
  
  //  --  default page
  function apiReply(req, res) {
    res.send("api reply!");
  }
  
//----------------------------------------------------------------------
  //configure express
  app.use(logAndCounter);
  //app.use(express.static(__dirname + "/views"));
  app.all('/api/*', apiReply);
  
  //start server
  //  app.listen('systemd', function() {console.log(" - = started up and listening on systemd pipe");});

  // finalize startup - starting to listen
  //function finished () {
  //  console.log("finished to initialize and listeing on systemd socket...");
  //}
  http.createServer(app).listen('systemd'/*, finished*/);

})();
