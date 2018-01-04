const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (term, callback) => {
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
    // console.log('here is data', data);
    data.forEach(function(item) {
      callback(item);
    })
    // callback(data[0]);
    // for (var i = 0; i < data.length; i++) {
    //   db.saveUsers(data[i]);
    // }
  })

}

module.exports = getReposByUsername;