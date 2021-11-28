import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import Form from './Form.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    todoTitle: '',
  };

  inputState = (e) => {
    //take the value of the input and put it into state
    this.setState({ todoTitle: e.target.value });
    console.log(this.todoTitle);
    console.log('input state input');
  };

  addButton = (e) => {
    e.preventDefault();
    //input added to page
    //set state, set state of todos, create new array, everything inside of our array & spreading content inside the array to a different array
    this.setState({ todos: [...this.state.todos, this.state.todoTitle] });
    console.log(this.state.todos);
  };
  render() {
    console.log(this.state.todoTitle);
    return (
      <div className="App">
        <Router>
          <Header />
          <Form addButton={this.addButton} inputState={this.inputState} />
          {this.state.todos.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
          <main>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={(routerProps) => <Home {...routerProps} />}
              />

              <Route
                path="/todos"
                exact={true}
                render={(routerProps) => <div>Todos</div>}
              />

              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

