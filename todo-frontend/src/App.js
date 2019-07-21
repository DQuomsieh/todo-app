import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todos-list";
import RemoveTodo from "./components/remove-todo";

import logo from "./logo.png";

const backColor = {
  background: "#e699ff"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("http://65bf2007.ngrok.io/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={backColor}
          >
            <a
              className="navbar-brand"
              href="https://itstime-world.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src={logo} width="30" height="30" alt="ITSmite" /> */}
            </a>
            <Link to="/" className="navbar-brand">
              Test Todo
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route
            path="/"
            exact
            component={props => (
              <TodosList {...props} todos={this.state.todos} />
            )}
          />
          <Route path="/edit/:id" component={EditTodo} />
          <Route
            path="/create"
            component={props => (
              <CreateTodo
                {...props}
                onAdd={newTodo => {
                  const newTodos = this.state.todos;
                  newTodos.push(newTodo);
                  this.setState({ todos: newTodos });
                }}
              />
            )}
          />
          <Route path="/remove/:id" component={RemoveTodo} />
        </div>
      </Router>
    );
  }
}
export default App;
