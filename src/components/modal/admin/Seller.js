import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line
// import { commodity } from '../mock/commodity.json';
// import BuyModal from '../components/modal/BuyModal';
// import SellModal from '../components/modal/SellModal';
// import ChartModal from '../components/modal/ChartModal';
// import OrderSummaryModal from '../components/modal/OrderSummaryModal';

import { commodity } from '../../../mock/ACommodity';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    table: {
        minWidth: 900,
    },
    button: {
        margin: theme.spacing.unit,
    },
});


class Seller extends Component {
    state = {
        //  buyModal: false,
        //  sellModal: false,
        //  chartModal: false,
        //  summaryModal: false,
        //commodityDetail: commodity
        user: {
            sellOrders: []
        }
    }

    handleClick = () => e => { this.setState({ buyModal: true }) }

    handleCancel = () => { this.setState({ buyModal: false, sellModal: false, chartModal: false }) }

    render() {
        // eslint-disable-next-line
        const { classes, open } = this.props;
        // const commodityData = this.state.commodityDetail;

        return (
            <React.Fragment>
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle>Indian Market Watch</DialogTitle>
                    <DialogContent>
                        <section className={classes.container}>
                            <Table className={classes.table}>

                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={4} align="left">ORDERS YOU ARE GOING TO SELL</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">ORDER ID</TableCell>
                                        <TableCell align="left">CONTAINER NO</TableCell>
                                        <TableCell align="left">QUANTITY</TableCell>
                                        <TableCell align="left">PRICE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.user.sellOrders.map((order, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell align="left">{order.orderId}</TableCell>
                                            <TableCell align="left">{order.containerNo}</TableCell>
                                            <TableCell align="left">{order.quantity}</TableCell>
                                            <TableCell align="left">{order.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </section>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.close(this.props.modal)} variant="contained" className={classes.addButton}>
                            Ok
    </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

Seller.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Seller);