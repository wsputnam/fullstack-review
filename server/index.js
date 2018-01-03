const express = require('express');
let app = express();
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));

var repos = [];
var pushToRepos = function(term) {
	repos.push(term);
	console.log('repos', repos);
};
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // could we do limit 25
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;
