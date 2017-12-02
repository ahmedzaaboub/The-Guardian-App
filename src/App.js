import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search'
import List from './List'
import axios from 'axios'

class App extends Component {

  constructor (props) {
      super(props)
      this.state={
        posts:[],
        search:'',
      }
      this.getArticol = this.getArticol.bind(this)
    }
  getArticol()   {
      axios.get('https://content.guardianapis.com/search?q=+'+this.state.search+'+&api-key=test&show-fields=starRating,headline,thumbnail')
    .then((response)=> {
    console.log(response.data.response.results);
    this.setState({posts:response.data.response.results})
  })
  .catch(function (error) {
    console.log(error);
  });
}
handleChange(event){
  this.setState({
    search: event.target.value
  });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Guardian App</h1>
        </header>
          <Search getArticol={this.getArticol} onChangeInput={this.handleChange.bind(this)} />
        <div>
        <List names={this.state.posts} />

</div>
<footer>
     <h3>Developed by ME </h3>
</footer>


      </div>

    );
  }
}

export default App;
