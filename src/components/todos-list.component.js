import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button} from 'reactstrap';


// Todo functional Component, that is passed into TodosList Class Component
//  A link to delete todo item
// <a href="#" onClick={props.onDeleteClick.bind(this,props.todo._id) }>Delete</a>
 
const Todo = props => (  
    <>  
    <tr>        
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>        
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>        
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>        
    <td>            
    <Link to={"/edit/"+props.todo._id}>Edit</Link>
     { ` | ` }
    <Button 
    className='btn btn-danger' 
    onClick={ props.onDeleteClick.bind(this, props.todo._id) } >Delete</Button>
    
    </td>    
    </tr>
    </>
    )

export default class TodosList extends Component {

constructor(props) {
super(props);
//this.deleteExercise = this.deleteExercise.bind(this);
this.state = {todos: []};
}

componentDidMount() {
    axios.get('http://localhost:4000/todos/')
        .then(response => {
            this.setState({ todos: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
      
}

 todoList() {  
    let onDeleteClick;
     onDeleteClick = _id => {
         axios.delete('http://localhost:4000/todos/delete/' + _id)
             .then(res => console.log(res.data));
         this.setState({
             exercises: this.state.todos.filter(el => el._id !== _id)
         })

         // Refresh the page to show the new list of todos after deleting 
         window.location = '/';
     };      
     return this.state.todos.map(function(currentTodo, i,_id){    
         
         return <Todo todo={ currentTodo } key={ i } id={ _id } onDeleteClick={onDeleteClick}  />;  
             
    })    
}  

//  deleteExercise(_id) {
//     axios.delete('http://localhost:4000/todos/delete/'+_id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       exercises: this.state.todos.filter(el => el._id !== _id)
//     })
// }
  
    render() {   
           return (            
             <div>                
             <h3>Todos List</h3>                
             <table className="table table-striped" 
             style={{ marginTop: 20 }} >                    
             <thead>                        
             <tr>                            
             <th>Description</th>                            
             <th>Responsible</th>                            
             <th>Priority</th>                            
             <th>Action</th>                        
             </tr>                    
             </thead>                    
             <tbody>                        
             { this.todoList() }              
             </tbody>                
             </table>            
             </div>        
             )    
            }
        }