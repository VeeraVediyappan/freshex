import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { countries } from '../../mock/countries';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 250,
  },
  select: {
      width: '100%'
  }
});

class CountryModal extends React.Component {
  state = {
    country: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOk = () => {
      const choosenCountry = this.state.country;
      this.setState({country: ''}, () => {
          this.props.handleClose(choosenCountry);
      })
      
  }

  render() {
    const { classes, open } = this.props;

    return (
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={this.handleOk}
        >
          <DialogTitle>Choose the country</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="country-simple">country</InputLabel>
                <Select
                  className={classes.select}
                  value={this.state.country}
                  onChange={this.handleChange('country')}
                  input={<Input id="country-simple" />}
                >
                  {
                      countries.map((country, idx) => <MenuItem value={country.name.toLowerCase()} key={idx}>{country.name}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CountryModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryModal);