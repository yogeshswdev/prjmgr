import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Project extends Component {
  render() {
	let projectItem;
	if(this.props.project){
		projectItem = this.props.project.map(project => {
			return (
			<ProjectItem key={project.title}project = {project} />
			);
		});
	}
	
    return (
      <div className="Project">
	  {projectItem}	
      </div>
    );
  }
}

export default Project;
