import React, { Component } from 'react';
import ModalBox from 'react-responsive-modal';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
import VerifyButton from '../button/index';

const styles = theme => ({
    container: {
  
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      margin: '10px auto 10px auto;',
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit,
      width: '60%',
    },
  });



class Modal extends Component {

    state = {
        open: true,
        name:''
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
    const { classes } = this.props;
    return (
      <div>
        {/* <button onClick={this.onOpenModal}>Open modal</button> */}
        <ModalBox open={open} onClose={this.onCloseModal} center>
          <h2>OTP verification</h2>
          <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="name"
            value={this.state.name}
            onChange={this.handleChange('name')}

            className={classes.textField}
            margin="normal"
          />
          <div>
          <VerifyButton fnRegister = {this.props.fnRegister}>
          Verify
          </VerifyButton>
          </div>
          </form>
        </ModalBox>
      </div>
    );
  }
}

export default withStyles(styles)(Modal);

