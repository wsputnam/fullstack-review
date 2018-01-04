const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

mongoose.connection.on('connected', function(){
	console.log('yes connected');
});
mongoose.connection.on('error', function(err){
	console.log('error here', err);
});
mongoose.connection.on('disconnected', function(){});

let repoSchema = new mongoose.Schema({
	username: String,
	userID: Number,
	repoName: String,
	repoID: Number,
	forks: Number
});

var User = mongoose.model('User', repoSchema);

module.exports = {
	saveUsers: function(data, res) {
		console.log('results res save', res);
		var repo = data;
		console.log('here is the repo', repo);
		new User({username: repo.owner.login, userID: repo.owner.id, repoName: repo.name, repoID: repo.id, forks: repo.forks_count})
		.save(function(err) {
			if (err) {
				console.log('save users', error)
				res.statusCode(404);
				res.end(err);
			} else {
				console.log('user saved to database');
				res.end();
			}
		});
	},
	findResults: function(req, res, next) {
		// console.log('results req', req);
		User.find(function(err, docs) {
			if (err) {
				res.statusCode(404);
				res.end(err);
			} else {
				for (var i = 0; i < 25; i++) {
					console.log('user:', docs[i].username);
				}
				res.end(JSON.stringify(docs.slice(0, 25)));
			}
		});
	}


}