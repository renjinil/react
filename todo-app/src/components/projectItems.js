import React, { Component } from 'react';
import './projectItems.css'

class ProjectItems extends Component {

  render() {
    return (
        <div>
      <li className ='Project'>
     <strong> {this.props.project.title}</strong> - {this.props.project.category}
      </li>
      </div>
    );
  }
}

export default ProjectItems;