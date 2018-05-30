import React, { Component } from 'react';

class AddProjects extends Component {
	//static defualtProps = {
	//	categories : ['Web design', 'office design']
	//}
	
	constructor(){
	super();
		this.state = {
		categories: [
		'Web design'			
		,'office design'
      ]		
	}
	}
	
	handleSubmit(e){
		console.log("Sumitted");
		e.preventDefault();
	}
	
  render() {
	  console.info(this.state.categories);
	let categoryOptions = this.state.categories.map(category => {
		return <option key={category} value="category">{category}</option>
	}
	);	
    return (
      <div>
	  <h3> Add Project </h3>
	  <form onsubmit = {this.handleSubmit.bind(this)}>
		<div>
			<lable> Title</lable> <br />
			<input type = "text" ref ="title" />
		</div>
		<div>
			<lable> Category</lable> <br />
			<select ref ="category">
			{categoryOptions}
			</select>
		</div>
		<input type = "submit"  value = "submit" />
	  </form>
	  </div>
    );
  }
}

export default AddProjects;
