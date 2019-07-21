import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
    <td>
      <Link to={"/remove/" + props.todo._id}>Remove</Link>
    </td>
  </tr>
);

export default class TodoList extends Component {
  deleteTodo(obj) {
    axios
      .post("http://65bf2007.ngrok.io/todos/remove" + this.props.todo._id, "")
      .then(res => console.log(res.data));
  }

  todosList() {
    return this.props.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
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
              <td />
            </tr>
            {this.todosList()}
          </tbody>
        </table>
      </div>
    );
  }
}
