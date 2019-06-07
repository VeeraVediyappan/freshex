import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControl from '@material-ui/core/FormControl';

//import { countries } from '../../mock/countries';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

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
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    clearButton: {
        marginLeft: 0,
        marginRight: theme.spacing.unit,
        backgroundColor: '#CCCC00',
        color: '#fff'
    },
    addButton: {
        marginRight: theme.spacing.unit,
        backgroundColor: '#1B5E20',
        color: '#fff'
    },
    button: {
        marginRight: theme.spacing.unit
    }

});


class AverageMarket extends React.Component {
    state = {
        name: '',
        email: '',
        phoneNo: '',
        location: '',
        paasword: '',
        showSummary: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleChangeSelect = name => event => {
        const container = this.props.commodity.info.find(info => {
            return info.containerNo === event.target.value.toUpperCase().toString();
        })

        this.setState({
            [name]: event.target.value,
            quantity: container.buyOrder.qty,
            price: container.buyOrder.price
        });
    };

    handleClear = () => {
        this.setState({
            name: '',
            email: '',
            phoneNo: '',
            location: '',
            paasword: ''
        });

    }

    handleConfirm = () => {
        if (this.validator()) {
            // if (window.localStorage) {
            //     user.buyOrders.push({
            //         containerNo: this.state.containerNo,
            //         quantity: this.state.quantity,
            //         price: this.state.price,
            //         orderId: 'bu01111'
            //     });
            //     window.localStorage.setItem("user", JSON.stringify(user));
            // }

            this.setState({ showSummary: true });
        } else {
            alert("Choose all the details");
        }
    }

    validator = () => {
        console.log(this.state);
        if (this.state.containerNo === "" || this.state.quantity === "" || this.state.price === "") {
            return false;
        }
        return true;
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
                    <DialogTitle>Average Market</DialogTitle>
                    <DialogContent>
                            <React.Fragment>
                                <h5>S No : {'12345'}</h5>
                                <h5>Commodity Name : {'Onion'}</h5>
                                <h5>Average Price : {'$20'} </h5>
                                
                            </React.Fragment>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.close(this.props.modal)} variant="contained" className={classes.addButton}>
                            Ok
    </Button>

                    </DialogActions>

                </Dialog>
            </div>
        );
    }
}

AverageMarket.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AverageMarket);