import React, { Component } from 'react';
//import logo from './logo.svg';
import '.././App.css';

class App extends Component {
  
  render() {
    console.log(this.props,"THIS.PROPS");
    return (
      <div className="App">
        <header className="App-header">
        <button id='login-btn' onClick={ () => this.props.fnToggleLogin(this.props.loggedIn) } > {this.props.loggedIn ? 'Log Out' : 'Log In' }</button>
        </header>
      </div>
    );
  }
}

export default App;
