const express = require('express');
let app = express();
// const db = require('./db');
const user = require('../database/index.js');
const getReposByUsername = require('../helpers/github.js');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

repos = [];
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  repos.push(getReposByUsername(req.body));
  res.json(repos);
  console.log('body', req.body);
  console.log('repos', repos);

  // first part will need to call helper function and search for info from the API
  // getReposByUsername(req.body);

  // second part will need to save the info into the database
});


app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // send back top 25 repos from the database
  // order by forks count

  // are we sending the database or the html file here?
  res.json({message: 'hello'});
  console.log('hello there from get request');

  // need to learn how to query this in the mongodb database

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;
