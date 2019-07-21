import React, { Component } from 'react'
import axios from 'axios';

export default class EditTodo extends Component {
    constructor(props){
        super(props);

        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

 
        this.state = {
            todo_description: '',
            todo_priority: '',
            todo_responsible: '',
            todo_completed: false
        }
    }
    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed,
            todo_responsible: this.state.todo_responsible,
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/remove/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Are you sure you want to remove todo?</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" align="center">
                        <input type="submit" value="Yes remove it please" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
