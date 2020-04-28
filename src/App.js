import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import 'bootstrap/dist/css/bootstrap.css';
//import logo from "./logo.svg";
import ShowTodo from "./components/show-todo.component";

import Navbar from "./components/navbar.component"
import CreateUser from "./components/create-user.components";


class App extends Component {
 render() {
       return (
         <Router>
         <div className="container">
     <Navbar/>
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
