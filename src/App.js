import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import SearchForm from './components/SearchForm';

export default class App extends Component {
  state = {
    searchInput: '',
    token: ''
  }

componentDidMount(){
  let client_id = 'f6c9134639794e8d98e19edf97186b37';
  let client_secret = 'e908f5b99ed842378f9c87d05cbe0d36';
  
  const headers = {
    headers: {
       Accept: 'application/json',
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     auth: {
       username: client_id,
       password: client_secret,
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
  .then(response => console.log(response.data))
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
      </div>
    )
  }
}

