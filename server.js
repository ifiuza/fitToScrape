var mongoose = require("mongoose");
var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");
var handlebars = require("express-handlebars");
var db = require("./models")
var app = express();
var PORT = 3000;

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });