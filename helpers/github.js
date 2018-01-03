const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (term) => {
  var username = term.name;
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(error, response, body) {
    if (error) {
      console.error('there is an error', error);
    }
    let data = JSON.parse(body);
    // for (var i = 0; i < data.length; i++) {
    //   db.saveUsers(data[i]);
    // }
    console.log('here is data', data);
  })

}

module.exports = getReposByUsername;