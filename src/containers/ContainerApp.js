import { connect } from 'react-redux';
import App from '../components/App';
import { loginUser, register, verifyOtp, openRegister, openLogin, selectCountry } from '../redux/actions/index'

const mapStateToProps = (state) => {
  console.log(state);
  //return Object.assign({}, ...state);
  return {...state.userAuth, ...state.business};
};

const mapDispatchToProps = dispatch => {
  return {
    fnLoginUser: status => dispatch(loginUser(status)),
    fnRegister: () => dispatch(register()),
    fnVerifyOtp: otp => dispatch(verifyOtp(otp)),
    fnOpenRegister: () => dispatch(openRegister()),
    fnOpenLogin: () => dispatch(openLogin()),
    fnSelectCountry: id => dispatch(selectCountry(id))
  }
}

const ContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default ContainerApp;