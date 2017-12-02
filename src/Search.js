import React, { Component } from 'react';
import './Search.css';
class Search extends Component{

  constructor (props) {
    super(props)
    this.state = {
    };

  }




  render() {
    return (


      <div className='form'>

     <input type="text" search={this.props.search}onChange={this.props.onChangeInput}  className="form-control" id="mySearch" placeholder="Search for..." />
     <button type="submit" className='btn btn-default'id="submitBtn" onClick={this.props.getArticol}> Search</button>




      </div>


    );
  }
}
export default Search;
