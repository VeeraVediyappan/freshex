import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5,
      marginLeft: 'auto',
      marginRight: 'auto',
      //backgroundColor:  '#DCEDC8',
      width:'60%'

    },
    button: {
        margin: theme.spacing.unit,
      },
      textField: {
        margin: '10px auto 10px auto;',
        width: '80%',
      },
  });

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    
    handleLogin = () => {
        if(this.state.username === 'test' && this.state.password === 'test') {
            this.props.fnLoginUser();
        }
    }  

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root} elevation={1}>
                <form className={classes.container} noValidate autoComplete="off">
                <TextField
            id="standard-username"
            label="Username"
            className={classes.textField}
            value={this.state.username}
            onChange={this.handleChange('username')}
            margin="normal"
          />

<TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />

<Button variant="outlined" color="inherit" className={classes.button} onClick={this.handleLogin}>
              {this.props.loggedIn ? 'Log Out' : 'Log In'}
            </Button>
                </form>
                </Paper>
                
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LoginPage);