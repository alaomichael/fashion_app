import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.svg";
import ShowTodo from "./components/show-todo.component";

import Navbar from "./components/navbar.component"
import CreateUser from "./components/create-user.components";

class App extends Component {
 render() {
       return (
         <Router>
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="https://leomaxinternational.com" target="_blank" rel="noopener noreferrer">
<img src={logo} width="30" height="30" alt="LeomaxInternational.com" />          
</a>
<Link to="/" className="navbar-brand">MERN-Stack Customer Measurement Record App</Link>          
<div className="collpase navbar-collapse">
<ul className="navbar-nav mr-auto">
<li className="navbar-item">
<Link to="/user" className="nav-link">Create User</Link>
</li>
<li className="navbar-item">                  
<Link to="/" className="nav-link">Customers Data</Link>               
</li>                
<li className="navbar-item">                  
<Link to="/create" className="nav-link">Create Customer Data</Link>
</li>              
</ul>           
</div>
</nav>
      <Navbar />
      <br />
<Route path="/" exact component={TodosList} />
<Route path="/edit/:id" component={EditTodo} />          
<Route path="/create" component={CreateTodo} />   
<Route path="/show/:id" component={ ShowTodo } /> 
<Route path="/user" component={ CreateUser } />     
      </div>    
      </Router>    
      );
      }
    }
      

  export default App;