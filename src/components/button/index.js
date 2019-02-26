import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  const RegisterButton = (props) => {
    const { classes } = props;
    return (
        <Button variant="outlined"  className={classes.button} onClick={props.fnRegister}>
          {props.children}
        </Button>     
    );
  }
  
  RegisterButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(RegisterButton);
