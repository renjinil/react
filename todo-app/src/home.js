import React, { Component } from 'react';

import './home.css';

class HomeList extends Component {
   clickMe(){
    alert("hello");
}
  render() {
    return (
      <div className ='HomeList col-md-3 col-sm-3 hello'>
       <h1>Hello World</h1>
       <section></section>
       <button onClick = {this.clickMe}>clickme</button>
      </div>
    );
  }
}

export default HomeList;
