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
<td className={ props.todo.todo_completed ? 'completed' : '' }>{ props.todo.username}</td>
<td className={ props.todo.todo_completed ? 'completed' : '' }>{ props.todo.name }</td>
<td className={ props.todo.todo_completed ? 'completed' : '' }>{ props.todo.phone }</td> 
<td className={ props.todo.todo_completed ? 'completed' : '' }>{ props.todo.email }</td> 
            <td className={ props.todo.todo_completed ? 'completed' : '' }>{ props.todo.image }</td>          
<td>{ props.todo.date.substring(0, 10) }</td>       
<Link to={ "/show/" + props.todo._id }>
<Button
className="btn btn-success"
>Show</Button>
</Link> 
{ ` | ` }           
<Link to={"/edit/"+props.todo._id}>
<Button className='btn btn-primary'
>Edit</Button>
</Link>
{ ` | ` }
<Button 
className='btn btn-danger' 
onClick={ props.onDeleteClick.bind(this, props.todo._id) } >Delete</Button>
   
</tr>
</>
    )

export default class TodosList extends Component {

constructor(props) {
super(props);
//this.deleteExercise = this.deleteExercise.bind(this);
this.state = {todos: [],
    username:'',
users:[]};
}

componentDidMount() {
    axios.get('http://localhost:4000/todos/')
        .then(response => {
            this.setState({ todos: response.data,
            username: response.data.username });
        })
        .catch(function (error) {
            console.log(error);
        })


    // Get Username
    axios.get('http://localhost:4000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username)
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })

      
}

 todoList() {  
     // Delete Button Link
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
         
         return <Todo todo={ currentTodo } 
         key={ i } 
         id={ _id } 
         onDeleteClick={ onDeleteClick } 
                       />;  
             
    })    
}  

    render() {   
           return (            
             <div>                
             <h3>Customers List</h3>                
             <table className="table table-striped" 
             style={{ marginTop: 20 }} >                    
             <thead>                        
             <tr>
            <th>Officer-in Charge</th>
             <th>Customer's Name</th>
            <th>Phone</th> 
        <th>Email</th>                         <th>Image Link</th>   
            
              
            <th>Collection Date</th>                  
             <th>Actions</th>                        
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