import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NextButton from '../button/index';

  class Checkboxes extends React.Component {
    state = {
      terms_conditions: false,
      privacy: false,
      disclaimer: false
    };
  
    handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };
  
    render() {
      return (
        <React.Fragment>
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
        <NextButton fnRegister = {this.props.fnRegister}>
          Next
          </NextButton>
        </React.Fragment>
      );
    }
  }
  
  export default Checkboxes;

