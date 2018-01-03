import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import app from '../../server/index.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);

    // this function needs to invoke post request from server to api with ajax call

    // then server needs to get info from api

    // and server will save that info to the database

    $.ajax({
      type: 'POST',
      url: '/repos',
      contentType: 'application/json',
      dataType: 'json',
      success: function(term) {
        this.state.repos.push(term);
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }

  componentDidMount() {
    // call app.get to get the top 25 repos
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));