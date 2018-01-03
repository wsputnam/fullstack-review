const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: STRING,
  userID: INT,
  repoName: STRING,
  repoID: INT,
  forks: INT
});

let User = mongoose.model('User', repoSchema);

var display = new Repo({});

let save = (data) => {
  // This function should save a repo or repos to
  // the MongoDB

  // need to call the save method
  Repo.save(function(err, display) {
    if (err) {
    	return console.error(err);
    }
    // do something with the repo
    display.username = data.owner.login;
    display.userID = data.owner.id;
    display.repoName = data.name;
    display.repoID = data.id;
    display.forks = data.forks_count;
  })
}

// this is for when the user searches for info
let find = (searchTerm) => {
	Repo.find({username: searchTerm}, function(err, display) {
		if (err) {
			return console.error(err);
		}
		console.log('results', display);
	})
}

module.exports.save = save;