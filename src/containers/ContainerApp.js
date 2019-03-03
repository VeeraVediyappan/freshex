import { connect } from 'react-redux';
import App from '../components/App';
import { loginUser, register, verifyOtp, openRegister, openLogin } from '../redux/actions/index'

const mapStateToProps = (state) => {
  console.log(state);
  //return Object.assign({}, ...state);
  return {...state.userAuth};
};

const mapDispatchToProps = dispatch => {
  return {
    fnLoginUser: status => dispatch(loginUser(status)),
    fnRegister: () => dispatch(register()),
    fnVerifyOtp: otp => dispatch(verifyOtp(otp)),
    fnOpenRegister: () => dispatch(openRegister()),
    fnOpenLogin: () => dispatch(openLogin())
  }
}

const ContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default ContainerApp;