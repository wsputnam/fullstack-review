const express = require('express');
let app = express();
const user = require('../database/index.js');
const getReposByUsername = require('../helpers/github.js');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

repos = [];
app.route('/repos')
    .post(function (req, res) {
	  // This route should take the github username provided
	  // and get the repo information from the github API, then
	  // save the repo information in the database
	  // first part will need to call helper function and search for info from the API

	  getReposByUsername(req.body, function(data) {
	  	user.saveUsers(data, res);
	  });
      // user.saveUsers(function(err, data) {
      // 	if (err) {
      // 		console.log('error saving', err);
      // 	} else {
      // 		res.json(data);
      // 	}
      // });
	  // second part will need to save the info into the database
      // user.saveUsers(data);


	})
    .get(function (req, res) {
	  // This route should send back the top 25 repos
	  // send back top 25 repos from the database
	  // order by forks count

	  // are we sending the database or the html file here?
	  // getReposByUsername(req.body, user.findResults);
	  // 	function(err, data) {
	  // 	if (err) {
	  // 		console.log('error', err);
	  // 	} else {
	  // 		res.json(data);
	  // 	}
	  // });
	  user.findResults(req, res, function(err, data) {
	  	console.log('req', req);
	  	res.json(data);
	  });
	  // res.json(req.body);
	  console.log('hello there from get request');

	  // need to learn how to query this in the mongodb database

	})

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;
