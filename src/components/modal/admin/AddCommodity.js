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
import Divider from '@material-ui/core/Divider';
import { countries } from '../../../mock/countries';


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

class AddCommodity extends React.Component {
    state = {
        traderId: '',
        traderUniqueId: '',
        commodity: '',
        quantity: '',
        qtyByBag: '',
        totalBags: '',
        tagId: '',
        containerNo: '',
        cityOrCountry: '',
        showBuyInfo: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value }, () => {
            if (this.state.quantity && this.state.qtyByBag) {
                let remainder = this.state.quantity % this.state.qtyByBag;
                let additionValue = remainder === 0 ? remainder : 1;
                let totalBagsValue = Math.floor(this.state.quantity / this.state.qtyByBag) + additionValue;
                this.setState({ totalBags: totalBagsValue });
            }
        });

        
    };

    handleChangeSelect = name => event => {
        // const container = this.props.commodity.info.find(info => {
        //     return info.containerNo === event.target.value.toUpperCase().toString();
        // })

        // this.setState({
        //     [name]: event.target.value,
        //     quantity: container.buyOrder.qty,
        //     price: container.buyOrder.price
        // });
    };

    handleClear = () => {
        this.setState({
            traderId: '',
            traderUniqueId: '',
            commodity: '',
            quantity: '',
            qtyByBag: '',
            totalBags: '',
            tagId: '',
            containerNo: '',
            cityOrCountry: ''
        });

    }

    handleConfirm = () => {
        if (this.validator()) {


            this.setState({ showBuyInfo: true });
        } else {
            alert("Choose all the details");
        }
    }

    validator = () => {
        console.log(this.state);
        // for (const key in this.state) {
        //    // console.log(this.state[key]);
        //     if (( this.state[key] === '' || this.state[key] === null ) && !key === 'showBuyInfo' ) {
        //         console.log(this.state[key]);
        //         return false;
        //     }
        // }
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
                    <DialogTitle>Add Commodity</DialogTitle>
                    <DialogContent>
                        {this.state.showBuyInfo ?
                            <React.Fragment>
                                <h2> Your have ordered below to buy</h2>
                                <Divider />
                                <p>Commoditty name : {this.props.commodity.name}</p>
                                <p>Format : {this.props.commodity.format}</p>
                                <p>Container Number : {this.state.containerNo} </p>
                                <p>Quantity : {this.state.quantity} </p>
                                <p>Price : {this.state.price} </p>
                            </React.Fragment>
                            :
                            <form className={classes.container}>
                                <FormControl className={classes.formControl}>

                                    <TextField
                                        id="traderId"
                                        label="Trader Id"
                                        className={classes.textField}
                                        value={this.state.traderId}
                                        onChange={this.handleChange('traderId')}
                                        margin="normal"
                                    />

                                    <TextField
                                        id="traderUniqueId"
                                        label="Trader Unique Id"
                                        className={classes.textField}
                                        value={this.state.traderUniqueId}
                                        onChange={this.handleChange('traderUniqueId')}
                                        margin="normal"
                                    />

                                    <TextField
                                        id="commodity"
                                        label="Commodity"
                                        className={classes.textField}
                                        value={this.state.commodity}
                                        onChange={this.handleChange('commodity')}
                                        margin="normal"
                                    />

                                    <TextField
                                        id="quantity"
                                        label="Quantity"
                                        className={classes.textField}
                                        value={this.state.quantity}
                                        onChange={this.handleChange('quantity')}
                                        margin="normal"
                                    />

                                    <TextField
                                        id="qtyByBag"
                                        label="quantity per bag"
                                        className={classes.textField}
                                        value={this.state.qtyByBag}
                                        onChange={this.handleChange('qtyByBag')}
                                        margin="normal"
                                    />

                                    <TextField
                                        id="totalBags"
                                        label="Total Bags"
                                        className={classes.textField}
                                        value={this.state.totalBags}
                                        onChange={this.handleChange('totalBags')}
                                        margin="normal"
                                        disabled
                                    />

                                    <TextField
                                        id="tagId"
                                        label="tag id"
                                        className={classes.textField}
                                        value={this.state.tagId}
                                        onChange={this.handleChange('tagId')}
                                        margin="normal"
                                    />

                                    <TextField
                                        id="containerNo"
                                        label="Container Number"
                                        className={classes.textField}
                                        value={this.state.containerNo}
                                        onChange={this.handleChange('containerNo')}
                                        margin="normal"
                                    />

                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="cityOrCountry">City/Country</InputLabel>
                                        <Select
                                            className={classes.select}
                                            value={this.state.cityOrCountry}
                                            onChange={this.handleChange('cityOrCountry')}
                                            input={<Input id="cityOrCountry" />}
                                        >
                                            {
                                                countries.map((country, idx) => <MenuItem value={country.name.toLowerCase()} key={idx}>{country.name}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>


                                </FormControl>
                            </form>}
                    </DialogContent>
                    <DialogActions>
                        {this.state.showBuyInfo ?
                            <Button onClick={() => this.props.close(this.props.modal)} variant="contained" className={classes.confirmButton}>
                                Ok
    </Button>
                            :
                            <React.Fragment>
                                <Button onClick={this.handleClear
                                } className={classes.clearButton} variant="contained" type='reset' >
                                    Clear
            </Button>
                                <Button onClick={this.handleConfirm} variant="contained" className={classes.confirmButton}>
                                    Confirm
            </Button>
                                <Button onClick={() => this.props.close(this.props.modal)} variant="contained" color="secondary">
                                    Cancel
            </Button>

                            </React.Fragment>

                        }

                    </DialogActions>


                </Dialog>
            </div>
        );
    }
}

AddCommodity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCommodity);