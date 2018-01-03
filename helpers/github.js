const request = require('request');
const config = require('../config.js');

let getReposByUsername = (term) => {
  
  let options = {
    url: `https://api.github.com/users/wsputnam/repos`,
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
    console.log('here is data', data);
  })

}

module.exports = getReposByUsername;