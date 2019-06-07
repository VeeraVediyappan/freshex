import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Commodity from './Commodity';

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
             <Commodity close={this.props.close} />
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