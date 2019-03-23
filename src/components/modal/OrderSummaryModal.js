import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Divider } from '@material-ui/core';

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

const user = JSON.parse(window.localStorage.getItem("user"));
console.log(user);

class OrderSummaryModal extends React.Component {
    state = {
       user: JSON.parse(window.localStorage.getItem("user"))
    };

    render() {
        const { classes, open } = this.props;
        console.log(this.state.user);

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
                            <Table className={classes.table}>

                             <TableHead>
                                    <TableRow>
                                    <TableCell colSpan={4} align="left">ORDERS YOU ARE GOING TO BUY</TableCell>
                                    </TableRow>
                                    <TableRow>
                                    <TableCell align="left">ORDER ID</TableCell>
                                    <TableCell align="left">CONTAINER NO</TableCell>
                                    <TableCell align="left">QUANTITY</TableCell>
                                    <TableCell align="left">PRICE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.user.buyOrders.map((order, idx) => (
                                        <TableRow key={idx}>
                                        <TableCell align="left">{order.orderId}</TableCell>
                                        <TableCell align="left">{order.containerNo}</TableCell>
                                        <TableCell align="left">{order.quantity}</TableCell>
                                        <TableCell align="left">{order.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody> 
  
                            </Table>
                            <Divider />

                            <Table>
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

                </Dialog>
            </div>
        );
    }
}

OrderSummaryModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderSummaryModal);