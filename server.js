// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

var friends = require("./app/data/friends");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.get('/api/friends', function(req, res) {
    res.json(friends);
    console.log('55555');
  });



  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });