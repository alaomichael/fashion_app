import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class ShowTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            phone: '',
            underbust: '',
            hip: '',
            length: '',
            waist: '',
            sleeve: '',
            round_sleeve: '',
            nip: '',
            stk: '',
            shoulder: '',
            gown_length: '',
            skirt_length: '',
            blouse_length: '',
            skirt_waist: '',
            email: '',
            bust: '',
            date: '',
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
                    name: response.data.name,
                    phone: response.data.phone,
                    email: response.data.email,
                    underbust: response.data.underbust,
                    hip: response.data.hip,
                    length: response.data.length,
                    waist: response.data.waist,
                    sleeve: response.data.sleeve,
                    round_sleeve: response.data.round_sleeve,
                    nip: response.data.nip,
                    stk: response.data.stk,
                    shoulder: response.data.shoulder,
                    gown_length: response.data.gown_length,
                    skirt_length: response.data.skirt_length,
                    blouse_length: response.data.blouse_length,
                    skirt_waist: response.data.skirt_waist,
                    bust: response.data.bust,
                    date: response.data.date, 
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
<h3 align="center">Show Customer Data</h3>
<form onSubmit={ this.onSubmit }>
<h5>
<div className="form-group">
<Label for='item'>Name: </Label>
{`  `}
                        { this.state.name }
</div>
<div className="form-group">
<Label for='phone'>Phone: </Label>
{ `  ` }
{ this.state.phone }
</div>
<div className="form-group">
<Label for='email'>E-mail: </Label>
{ `  ` }
{ this.state.email }

</div>
<div className="form-group">
<Label for='bust'>Bust: </Label>
{ `  ` }
{ this.state.bust }
</div>
<div className="form-group">
<Label for='underbust'>UnderBust: </Label>
{ `  ` }
{ this.state.underbust }
</div>
<div className="form-group">
<Label for='hip'>Hip: </Label>
{ `  ` }
{ this.state.hip }
</div>
<div className="form-group">
<Label for='length'>Length: </Label>
{ `  ` }
{ this.state.length }
</div>
<div className="form-group">
<Label for='waist'>Waist: </Label>
{ `  ` }
{ this.state.waist }

</div>
<div className="form-group">
<Label for='nip'>Nip to Nip: </Label>
{ `  ` }
{ this.state.nip }

</div>
<div className="form-group">
<Label for='gown_length'>Gown Length: </Label>
{ `  ` }
{ this.state.gown_length }

</div>
<div className="form-group">
<Label for='skirt_length'>Skirt Length: </Label>
{ `  ` }
{ this.state.skirt_length }

</div>
<div className="form-group">
<Label for='blouse_length'>Blouse Length: </Label>
{ `  ` }
{ this.state.blouse_length }

</div>
<div className="form-group">
<Label for='skirt_waist'>Skirt Waist: </Label>
{ `  ` }
{ this.state.skirt_waist }

</div>
<div className="form-group">
<Label for='stk'>Shoulder to Knee: </Label>
{ `  ` }
{ this.state.stk }

</div>
<div className="form-group">
<Label for='shoulder'>Shoulder: </Label>
{ `  ` }
{ this.state.shoulder }

</div>
<div className="form-group">
<Label for='sleeve'>Sleeve: </Label>
{ `  ` }
{ this.state.sleeve }

</div>
<div className="form-group">
<Label for='round_sleeve'>Round Sleeve: </Label>
{ `  ` }
{ this.state.round_sleeve }

</div>
<div className="form-group">
<Label for='date'>Collection Date: </Label>
{`  `}
{ this.state.date }
</div>
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
                    </h5>
                </form>
            </div>
        )
    }
}