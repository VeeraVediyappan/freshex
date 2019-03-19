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
//import { countries } from '../../mock/countries';
import TextField from '@material-ui/core/TextField';


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
        margin: theme.spacing.unit,
        backgroundColor: '#CCCC00',
        color: '#fff'
    },
    confirmButton: {
        margin: theme.spacing.unit,
        backgroundColor: '#1B5E20',
        color: '#fff'
    }
});

class BuyModal extends React.Component {
    state = {
        containerNo: '',
        quantity: '',
        price: ''
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
            price:  container.buyOrder.price
        });
    }; 

    handleClear = () => {
        this.setState({
            containerNo:'',
            quantity: '',
            price:  ''
        });

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
                    <DialogTitle>BUY</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="container-simple">Choose container No</InputLabel>
                                <Select
                                    className={classes.select}
                                    value={this.state.containerNo}
                                    onChange={this.handleChangeSelect('containerNo')}
                                    input={<Input id="container-simple" />}
                                >
                                    {
                                        this.props.commodity.info.map((info, idx) => <MenuItem value={info.containerNo.toLowerCase()} key={idx}>{info.containerNo}</MenuItem>)
                                    }
                                </Select>
                                <TextField
                                    id="quantity"
                                    label="quantity"
                                    className={classes.textField}
                                    value={this.state.quantity}
                                    onChange={this.handleChange('quantity')}
                                    margin="normal"
                                />

                                <TextField
                                    id="price"
                                    label="price"
                                    className={classes.textField}
                                    value={this.state.price}
                                    onChange={this.handleChange('price')}
                                    margin="normal"
                                />
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClear} className={classes.clearButton} variant="contained" type='reset' >
                            Clear
            </Button>
                        <Button onClick={this.props.close} variant="contained" color="secondary">
                            Cancel
            </Button>
                        <Button onClick={this.handleOk} variant="contained" className={classes.confirmButton}>
                            Confirm
            </Button>
                    </DialogActions>

<DialogTitle>VAT CHARGABLE EXTRA </DialogTitle>

                </Dialog>
            </div>
        );
    }
}

BuyModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuyModal);