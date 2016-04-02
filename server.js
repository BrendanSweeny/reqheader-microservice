"use strict";

//DEPENDENCIES
var express = require("express");
var routes = require("./app/routes/index.js");

//Creates express object
var app = express();

//Passes express object for routing on index.js
routes(app);

//Listens to PORT assigned by .env (by heroku) or 8080 locally
app.listen(process.env.PORT || 8080, function() {
  console.log("Server is listening on port 8080...");
})