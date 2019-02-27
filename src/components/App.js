import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../src/App.css';
import Registration from './Registration';
import Modal from './modal/index';
import VerifyModal from './modal/VerifyModal';
import InformatixModal from './modal/InformatixModal'; 

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
          <Registration fnRegister = {this.props.fnRegister}/> : ''}
        </div>
        {this.props.registered && !this.props.otpVerified && 
        <Modal > 

<VerifyModal {...this.props}/>
        </Modal>}
        {this.props.otpVerified && 
        <Modal>
          <InformatixModal />
        </Modal>
        }
      </div>
    );
  }
}

export default App;
