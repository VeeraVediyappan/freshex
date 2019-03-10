import React from 'react';
import ModalBox from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import NextButton from '../button/index';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class InformatixModal extends React.Component {
    state = {
      open: true,
      terms_conditions: false,
      privacy: false,
      disclaimer: false
    };
  
    handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
        handleOnClick = () => {
          this.setState({open: false}, this.props.fnAgreeTermsConditions());
      } 
  
    render() {
      const { classes } = this.props;
      return (
        <ModalBox open={this.state.open} onClose={this.onCloseModal} center>
        <h2 className='header-center-align'>About FRESHEX</h2>
        <FormGroup row={false}>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.terms_conditions}
              onChange={this.handleChange('terms_conditions')}
              value="terms_conditions"
              color="primary"
            />
          }
          label="Terms & Conditions"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.privacy}
              onChange={this.handleChange('privacy')}
              value="privacy"
              color="primary"
            />
          }
          label="Privacy"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.disclaimer}
              onChange={this.handleChange('disclaimer')}
              value="disclaimer"
              color="primary"
            />
          }
          label="Disclaimer ( for trade risk )"
        />
        </FormGroup>
        <h2 className='header-center-align'>Version 1.0</h2>
        <Button variant="outlined" color="inherit" className={classes.button} onClick={this.handleOnClick}>
          Next
            </Button>
        {/* <NextButton fnCallback = {this.props.handleOnClick}>
          Next
          </NextButton> */}
        </ModalBox>
      );
    }
  }

  export default withStyles(styles)(InformatixModal);

