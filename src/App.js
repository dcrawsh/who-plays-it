import React, { Component } from 'react';
import axios from 'axios';
import config from './config'
import qs from 'qs';
import SearchForm from './components/SearchForm';
import Results from './components/Results'

export default class App extends Component {
  state = {
    searchInput: '',
    token: '',
    results: []
  }

componentDidMount(){
  
  
  
  const headers = {
    headers: {
       Accept: 'application/json',
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     auth: {
       username: config.client_id,
       password: config.client_secret,
     },
   };
   
   // Data object.
   const data = {
     grant_type: 'client_credentials',
   };
   
   // Make the request using the URL, query string, data, and headers.
   axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), headers)
   .then(res => this.setState({token: res.data.access_token}))
            .catch(err => {
                console.log(err);
            });
   
   // Retrieve the access token from the response.
          }



handleInput = (e) => {
  this.setState({searchInput: e.target.value});
}

handleSubmit = (e) => {
  
  let searchQuery = this.state.searchInput.split(/\W+/).join('%20')
  console.log(searchQuery)
  axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&market=US`,
  {
    headers: {
      'Authorization': 'Bearer ' + this.state.token,
      
    }
  })
  .then(response => this.setState({results:response.data}))
  .catch(err => {
    console.log(err);
});
  
  e.preventDefault()
  
}




  

  
  render() {
    return (
      <div>
        <h1>Who Plays It???</h1>
        <SearchForm handleSubmit={this.handleSubmit} handleInput={this.handleInput} searchInput={this.state.searchInput}/>
        <Results results={this.state.results}/>
      </div>
    )
  }
}

