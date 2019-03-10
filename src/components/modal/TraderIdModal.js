import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ModalBox from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
// import NextButton from '../button/index';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

  class TraderIdModal extends React.Component {
    state = {
        open: true,
    };
    onCloseModal = () => {
      this.setState({ open: false });
    };
    handleOnClick = () => {
        this.setState({open: false}, this.props.fnProcessAndLogin());
    }; 
    render() {
        const { classes } = this.props;
      return (
        <ModalBox open={this.state.open} onClose={this.onCloseModal} center>
        <h2 className='header-center-align'>Thank you for signing up.</h2>
          <p>Your unique trader ID is <b>FR-U-X1723453</b></p>
          <Divider variant="middle" />
        <p>Please note the above ID, this will be used for your trading business.</p>
        <Button variant="outlined" color="inherit" className={classes.button} onClick={this.handleOnClick}>
        OK
            </Button>
        </ModalBox>
          
        // {/* <NextButton fnCallback = {this.props.fnProcessAndLogin}>
        //   OK
        //   </NextButton> */}
      );
    }
  }
  
  export default withStyles(styles)(TraderIdModal);

