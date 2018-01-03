const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  username: String,
  userID: Number,
  repoName: String,
  repoID: Number,
  forks: Number
});

var User = mongoose.model('User', repoSchema);

	module.exports = {
		saveUsers: function(req, res) {
			console.log('request', req);
			var repo = req.body;
			new User({name: repo.owner.login, userID: repo.owner.id, repoName: repo.name, repoID: repo.id, forks: repo.forks_count})
			.save(function(err) {
				if (err) {
					res.statusCode(404);
					res.end(err);
				} else {
					console.log('user saved to database');
					res.end();
				}
			});
		},
		findResults: function(req, res, next) {
			User.find({}, function(err, docs) {
				if (err) {
					res.statusCode(404);
					res.end(err);
				} else {
					for (var i = 0; i < 25; i++) {
						console.log('user:', docs[i].username);
					}
					res.end(JSON.stringify(docs.slice(0, 25)));
				}
			})
	}


}