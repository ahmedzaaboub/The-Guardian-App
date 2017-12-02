import React, { Component } from 'react';
import './List.css';
class List extends Component{

  constructor (props) {
    super(props)
    this.state = {
    };

  }

  render() {
    return (

            <div className='well'>
               {
                 this.props.names.map((el,i) => {
                    return (
                      <div key={i}>
                      <div className="card"  id='resLists'>

                      <h1>  {el.sectionName} </h1>
                      <h2>  {el.webTitle} </h2>
                      <img src={el.fields.thumbnail}/>
                       </div>

                      </div>
                    )
                 })
               }
            </div>




    );
    }


}
export default List;
