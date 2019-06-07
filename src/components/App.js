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
//import Admin from '../layouts/admin/Admin';
//import Admin from '../layouts/admin/AdminNew';
import Admin from '../layouts/admin/AdHome';
import PrimarySearchAppBar from './materialUI/appbar/index';
import Commodity from '../layouts/Commodity';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    console.log(this.props, "THIS.PROPS");
    return (
      <div className={this.props.userType !== 'admin' ? "App" : "admin-app"}>
        { this.props.userType !== 'admin' &&
          <header className="App-header">
            <PrimarySearchAppBar {...this.props} />
          </header>
        }

        <section className='App-body'>
          {/* <BrowserRouter>
            <Switch>
              <Route path="/" render={() => <RegisterPage {...this.props} />} />
              <Route path="/login" render={() => <LoginPage {...this.props} />} />
              <Route path="/login2" render={() => <h1> goal </h1>} />
              <Route path="/home" render={() => <Home {...this.props} />} />
              <Route path="/commodity" render={() => <Commodity {...this.props} />} />
            </Switch>
          </BrowserRouter> */}


          {this.props.openRegister && <RegisterPage {...this.props} />}
          {this.props.openLogin && <LoginPage {...this.props} />}
          {this.props.loggedIn && this.props.userType === 'admin' && <Admin {...this.props} />}
          {this.props.loggedIn && this.props.userType !== 'admin' && typeof this.props.commodity !== 'number' && <Home {...this.props} />}
          {this.props.loggedIn && this.props.userType !== 'admin' && typeof this.props.commodity === 'number' && <Commodity {...this.props} />}
        </section>

      </div>
    );
  }
}

export default App;
