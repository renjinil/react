import React, { Component } from 'react';
import './project.css';
import ProjectItems from './projectItems.js';

class Projects extends Component {

    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
               return(
                   <ProjectItems key={project.title} project ={project}/>
               )
            })
        }
        return (
            <div className='Projects'>
               {projectItems}
      </div>
        );
    }
}

export default Projects;
