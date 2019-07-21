import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todos-list";
import RemoveTodo from "./components/remove-todo";

import logo from "./logo.png"

const backColor = {
  background: '#e699ff'
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light" style={backColor}>
            <a className="navbar-brand" href="https://itstime-world.herokuapp.com" target="_blank" rel="noopener noreferrer">
              {/* <img src={logo} width="30" height="30" alt="ITSmite" /> */}
            </a>
            <Link to="/" className="navbar-brand">Test Todo</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/remove/:id" component={RemoveTodo}/>
        </div>
      </Router>
    );
  }
}
export default App;
