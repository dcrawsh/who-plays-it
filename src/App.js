import React, { Component } from 'react'
import SearchForm from './components/SearchForm'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: ''
    }
  }

handleInput = (e) => {
  this.setState({searchInput: e.target.value});
}

handleSubmit = (e) => {
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

