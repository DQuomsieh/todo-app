import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/remove/"+props.todo._id}>Remove</Link>
        </td>
    </tr>
)

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    deleteTodo(obj){
        axios.post('http://localhost:4000/todos/remove'+this.props.todo._id, "")
            .then(res => console.log(res.data));
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todosList(){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3 align="center">Todo List</h3>
                <table className="table" style={{ marginTop: 15 }}>
                   <tbody>
                        <tr>
                            <td>Description</td>
                            <td>Responsible</td>
                            <td>Priority</td>
                            <td></td>
                        </tr>
                        { this.todosList() }
                    </tbody>
                </table>

            </div>
        )
    }
}
