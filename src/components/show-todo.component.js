import React, { Component } from 'react';
import axios from 'axios';

export default class ShowTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onSubmit(e) {
        e.preventDefault();
    // Open the Homepage   
        window.location = '/';

    }
    render() {
        return (
            <div>
                <h3 align="center">Show Todo</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Description: </label> {` `}
                        { this.state.todo_description }
                      
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        { ` ` }
                        { this.state.todo_responsible }

                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                        {` `}
                            { this.state.todo_priority === 'Low' }
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={ this.state.todo_priority === 'Low' }
                                
                            />

                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={ this.state.todo_priority === 'Medium' }
                                
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={ this.state.todo_priority === 'High' }
                               
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        { this.state.todo_completed }
                        <input
                            className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                           
                            checked={ this.state.todo_completed }
                            value={ this.state.todo_completed }
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit"
                            value="Back Homepage"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}