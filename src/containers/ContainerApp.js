import { connect } from 'react-redux';
import App from '../components/App';
import { toggleLogin, register } from '../redux/actions/index'

const mapStateToProps = (state) => {
  console.log(state);
  //return Object.assign({}, ...state);
  return {...state.userAuth};
};

const mapDispatchToProps = dispatch => {
  return {
    fnToggleLogin: status => dispatch(toggleLogin(status)),
    fnRegister: () => dispatch(register())
  }
}

const ContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default ContainerApp;