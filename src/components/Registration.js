import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RegisterButton from './button/index';
import '../../src/App.css';

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


class Registration extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '+91',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className="container">
        <form className={classes.container} noValidate autoComplete="off">
          <div className="header_register">Register with Email</div>
          <TextField
            id="standard-email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
          />

          <TextField
            id="standard-name"
            label="name"
            value={this.state.name}
            onChange={this.handleChange('name')}

            className={classes.textField}
            margin="normal"
          />

          <TextField
            required
            id="standard-phone"
            label="phone"
            value={this.state.phone}
            onChange={this.handleChange('phone')}
            className={classes.textField}
            margin="normal"
          />

          <TextField
            required
            id="standard-country"
            label="country"
            value={this.state.country}
            onChange={this.handleChange('country')}
            className={classes.textField}
            margin="normal"
          />

          <TextField
            required
            id="standard-state"
            label="state"
            value={this.state.state}
            onChange={this.handleChange('state')}
            className={classes.textField}
            margin="normal"
          />

          <TextField
            required
            id="standard-city"
            label="city"
            value={this.state.city}
            onChange={this.handleChange('city')}
            className={classes.textField}
            margin="normal"
          />

          <div id="registerButton">
          <RegisterButton fnRegister = {this.props.fnRegister}>
          Register
          </RegisterButton>
          </div>
          

        </form>
        
        </div>

        );
      }
    }

    Registration.propTypes = {
          classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Registration);
