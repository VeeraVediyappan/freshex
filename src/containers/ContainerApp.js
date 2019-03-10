import { connect } from 'react-redux';
import App from '../components/App';
import { loginUser, register, verifyOtp, openRegister, openLogin, selectCategory,
  agreeTermsConditions, processAndLogin } from '../redux/actions/index'

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
    fnSelectCategory: id => dispatch(selectCategory(id)),
    fnAgreeTermsConditions: () => dispatch(agreeTermsConditions()),
    fnProcessAndLogin: () => dispatch(processAndLogin())
  }
}

const ContainerApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default ContainerApp;