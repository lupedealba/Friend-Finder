// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
//var port = process.env.PORT
//var PORT = 3000;
var PORT = process.env.PORT || 3000;

var friends = require("./app/data/friends");

// Sets up the Express app to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.post('/api/friends', function(req, res) {
//     res.send(req.body);
// })

app.get('/api/friends', function(req, res) {
    res.json(friends);
    console.log('55555');
  });
// app.use(express.static("app/public"));
// app.use(express.static("app/data"));

// require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(app);



  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });