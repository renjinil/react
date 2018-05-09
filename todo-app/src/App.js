import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeList from './home';
import Projects from './components/project';
import ProjectItems from './components/projectItems';
import AddProject from './components/AddProject';

class APP extends Component {
  constructor(){
    super();
    this.state ={
      projects:[]
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title:"React js",
        category:"js library"
      },
      {
        title:"Angular js",
        category:"frame work"
      },
      {
        title:"Node Js",
        category:"server side frame work"
      }],
      employees:[{
        name:"renjini",
        id:1
      },
      {
        name:"rajeswary",
        id:2
      },
      {
        name:"vani",
        id:3
      }
    ]});
  }
  handleaddProject(project){
    console.log(project);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav>
            <ul class="nav">
              <li><a href="#">DOCS</a></li>

              <li><a href="#">TUTORIAL</a>
                <ul>
                  <li><a href="#">item a lonng submenu</a></li>
                  <li><a href="#">item</a>
                    <ul>
                      <li><a href="#">Ray</a></li>
                      <li><a href="#">Veronica</a></li>
                      <li><a href="#">Bushy</a></li>
                      <li><a href="#">Havoc</a></li>
                    </ul>
                  </li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                </ul>
              </li>
              <li><a href="#">COMMUNITY</a></li>
              <li><a href="#">BLOG</a></li>
            </ul>
          </nav>
        </header>
        <HomeList />
        <AddProject addProject={this.handleaddProject.bind(this)}/>
       <Projects projects= {this.state.projects} employee={this.state.employees} />
       
      </div>
    );
  }
}

export default APP;
