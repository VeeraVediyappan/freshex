import React, { Component } from 'react';
import ModalBox from 'react-responsive-modal';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField'; 
// import VerifyButton from '../button/index';

const styles = theme => ({
    container: {
  
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    textField: {
      margin: '10px auto 10px auto;',

      width: '85%',
    },
  });



// class Modal extends Component {

//     state = {
//         open: true,
//         otp:''
//       };
     
//       onOpenModal = () => {
//         this.setState({ open: true });
//       };
     
//       onCloseModal = () => {
//         this.setState({ open: false });
//       };
//       handleChange = name => event => {
//         this.setState({ [name]: event.target.value });
//       };

//   render() {
//     const { open } = this.state;
//     const { classes } = this.props;
//     return (
//         <ModalBox open={open} onClose={this.onCloseModal} center>
//           <h2>OTP verification</h2>
//           <form className={classes.container} noValidate autoComplete="off">
//           <TextField
//             id="standard-name"
//             label="OTP"
//             value={this.state.otp}
//             onChange={this.handleChange('otp')}

//             className={classes.textField}
//             margin="normal"
//           />
//           <div>
//           <VerifyButton fnRegister = {this.props.fnRegister}>
//           Verify
//           </VerifyButton>
//           </div>
//           </form>
//         </ModalBox>
//     );
//   }
// }

// export default withStyles(styles)(Modal);



class Modal extends Component {

  state = {
      open: true,
      otp:''
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

render() {
  const { open } = this.state;
  //const { classes } = this.props;
  return (
      <ModalBox open={open} onClose={this.onCloseModal} center>
       {this.props.children}
      </ModalBox>
  );
}
}

export default withStyles(styles)(Modal);

