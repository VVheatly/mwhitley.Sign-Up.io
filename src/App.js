import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Form from './Components/Form';
import Login from './Components/Login';

export default class App extends Component {
  render () {
    return(
      <div className="App">
        <Router>
        <Route exact path="/" component={Login}></Route> 
        <Route exact path="/Form" component={Form}></Route>
        </Router>
      </div>
    )
  }
}

//export default App;
