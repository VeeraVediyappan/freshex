import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import RegisterButton from './button/index';
import Button from '@material-ui/core/Button';
import '../../src/App.css';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
  inputLabel: {
    margin: '10px auto 10px auto;',
    width: '60%'
  },
  select: {
    margin: '10px auto 10px auto;',
    width: '60%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
});


class Registration extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '+91',
    country: '',
    password: '',
    userType: 'admin'
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleRegister = () => {
    const registerObj = {
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phone,
      location: this.state.location,
      password: this.state.password
    };
    this.props.fnRegister(registerObj);
  }

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
          <TextField
            required
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            margin="normal"
          />

          <InputLabel className={classes.inputLabel} htmlFor="container-simple">Choose user role</InputLabel>

          <Select
            className={classes.select}
            value={this.state.userType}
            onChange={this.handleChange('userType')}
            input={<Input id="container-simple" />}
          >
          <MenuItem value='farmer' key={1}>Farmer</MenuItem>
          <MenuItem value='admin' key={2}>Admin</MenuItem>
          </Select>
          
          <div id="registerButton">
            {/* <RegisterButton fnCallback={this.props.fnRegister}>
              Register
          </RegisterButton> */}
            <Button variant="outlined" color="inherit" className={classes.button} onClick={this.handleRegister}>
              Register
              </Button>
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
