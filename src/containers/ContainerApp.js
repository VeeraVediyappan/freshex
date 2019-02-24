import { connect } from 'react-redux';
import App from '../components/App';
import { toggleLogin } from '../redux/actions/index'

const mapStateToProps = (state) => {
  console.log(state);
  //return Object.assign({}, ...state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fnToggleLogin: status => dispatch(toggleLogin(status))
  }
}

const ContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default ContainerApp;