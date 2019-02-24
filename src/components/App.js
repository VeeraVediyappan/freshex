import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../src/App.css';
import Demo from './Registration'
class App extends Component {

  render() {
    console.log(this.props, "THIS.PROPS");
    return (
      <div className="App">
        <header className="App-header">
          <button id='login-btn' onClick={() => this.props.fnToggleLogin(this.props.loggedIn)} > {this.props.loggedIn ? 'Log Out' : 'Log In'}</button>
          
        </header>
        <div>
        {this.props.loggedIn ? 
          <Demo /> : ''}
        </div>
      </div>
    );
  }
}

export default App;
