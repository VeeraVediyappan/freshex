import { connect } from 'react-redux';
import App from '../components/App';
import { loginUser, register, verifyOtp, openRegister, openLogin, selectCategory,
  agreeTermsConditions, processAndLogin, selectCommodity } from '../redux/actions/index';
// import { withRouter } from 'react-router-dom'  

const mapStateToProps = (state) => {
  console.log(state);
  //return Object.assign({}, ...state);
  return {...state.userAuth, ...state.business};
};

const mapDispatchToProps = dispatch => {
  return {
    fnLoginUser: status => dispatch(loginUser(status)),
    fnRegister: registerObj => dispatch(register(registerObj)),
    fnVerifyOtp: otp => dispatch(verifyOtp(otp)),
    fnOpenRegister: () => dispatch(openRegister()),
    fnOpenLogin: () => dispatch(openLogin()),
    fnSelectCategory: id => dispatch(selectCategory(id)),
    fnAgreeTermsConditions: () => dispatch(agreeTermsConditions()),
    fnProcessAndLogin: () => dispatch(processAndLogin()),
    fnselectCommodity: commodity => dispatch(selectCommodity(commodity))
  }
}

// const ContainerApp = withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(App))

const ContainerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
  
  export default ContainerApp;