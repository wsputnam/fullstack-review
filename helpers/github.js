const request = require('request');
const config = require('../config.js');

let getReposByUsername = (term) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/?access_token=${config.TOKEN}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(error, response, body) {
    // show body
    if (error) {
      console.error('there is an error', error);
    }
    let data = JSON.parse(body);
    console.log('here is data', data);
  })

}

module.exports.getReposByUsername = getReposByUsername;