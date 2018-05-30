import React, { Component } from 'react';
import Project from './components/Project';
import AddProjects from './components/AddProjects';
import './App.css';

class App extends Component {
	
	constructor(){
	super();
		this.state = {
		project: [
		{
			title: 'Business Website',
			category: 'Web design'			
		},
		{
			title: 'Office Website',
			category: 'office design'				
		}
      ]		
	}
	}
  render() {
	  console.info('h1');
    return (
      <div className="App">
        <AddProjects />
		<Project project={this.state.project} />	
      </div>
    );
  }
}

export default App;
