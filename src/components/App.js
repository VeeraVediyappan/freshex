import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../src/App.css';
 //import Registration from './Registration';
// import Modal from './modal/index';
// import VerifyModal from './modal/VerifyModal';
// import InformatixModal from './modal/InformatixModal';
import RegisterPage from '../layouts/RegisterPage';
import LoginPage from '../layouts/LoginPage';
import Home from '../layouts/Home';
import PrimarySearchAppBar from './materialUI/appbar/index';

class App extends Component {

  render() {
    console.log(this.props, "THIS.PROPS");
    return (
      <div className="App">
        <header className="App-header">
        <PrimarySearchAppBar {...this.props}   />
        </header>
        <section className='App-body'>
        {this.props.openRegister && <RegisterPage {...this.props} />}
        {this.props.openLogin && <LoginPage {...this.props} />}
        {this.props.loggedIn && <Home {...this.props} />}
        </section>
        
      </div>
    );
  }
}

export default App;
