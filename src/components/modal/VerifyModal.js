import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ModalBox from 'react-responsive-modal';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
//import VerifyButton from '../button/index';

const styles = theme => ({
    container: {
  
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing.unit,
    },
    textField: {
      margin: '10px auto 10px auto;',

      width: '85%',
    },
  });



class VerifyModal extends Component {

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

      handleOnClick = () => {
        this.setState({open: false}, this.props.fnVerifyOtp());
    } 

  render() {
     const { classes } = this.props;
    return (
      <ModalBox open={this.state.open} onClose={this.onCloseModal} center>
      <h2>OTP verification</h2>
          <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="OTP"
            value={this.state.otp}
            onChange={this.handleChange('otp')}

            className={classes.textField}
            margin="normal"
          />
          <Button variant="outlined" color="inherit" className={classes.button} onClick={this.handleOnClick}>
          Verify
            </Button>
          {/* <VerifyButton fnCallback = {this.props.fnVerifyOtp}>
          Verify
          </VerifyButton> */}

          </form>
      </ModalBox>
    );
  }
}

export default withStyles(styles)(VerifyModal);

