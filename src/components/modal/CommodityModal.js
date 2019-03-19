import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import InputLabel from '@material-ui/core/InputLabel';
//import Input from '@material-ui/core/Input';
//import MenuItem from '@material-ui/core/MenuItem';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
//import { countries } from '../../mock/countries';
import CommodittyTable from './CommodittyTable';

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

class CommodityModal extends React.Component {
  state = {
    country: '',
  };

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

  // handleOk = () => {
  //     const choosenCountry = this.state.country;
  //     this.setState({country: ''}, () => {
  //         this.props.handleClose(choosenCountry);
  //     })
      
  // }

  render() {
    const { classes, open } = this.props;

    return (
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={this.props.handleClose}
        >
          <DialogTitle>Indian Market Watch</DialogTitle>
          <DialogContent>
            <section className={classes.container}>
             <CommodittyTable handleClose={this.props.handleClose} />
            </section>
          </DialogContent>

        </Dialog>
      </div>
    );
  }
}

CommodityModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommodityModal);