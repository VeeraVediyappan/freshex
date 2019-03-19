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
import { commodity } from '../mock/commodity.json';
import BuyModal from '../components/modal/BuyModal';
import SellModal from '../components/modal/SellModal';
import ChartModal from '../components/modal/ChartModal';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class Commodity extends Component {
   state = {
     buyModal: false,
     sellModal: false,
     chartModal: false,
     commodityDetail: commodity.filter(com => com.id === this.props.commodity)[0]
   }

   handleClick = () => e => { this.setState({buyModal : true }) }

   handleCancel = () => { this.setState({buyModal : false, sellModal: false, chartModal: false }) }

  render() {
    // eslint-disable-next-line
    const { classes } = this.props;
    const commodityData = this.state.commodityDetail;
    console.log(commodityData);
    console.log(this.state.buyModal);
    return (
      <React.Fragment>
      <Paper className={classes.root}>
        <h6>{commodityData.name}</h6>
        <h6>Packing format : {commodityData.format}</h6>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={1} align="left">CONTAINER NO</TableCell>
              <TableCell colSpan={2} align="center">BUY ORDER</TableCell>
              <TableCell colSpan={2} align="center">SELL ORDER</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">PARKING DETAILS</TableCell>
              <TableCell align="center">QTY</TableCell>
              <TableCell align="center">PRICE</TableCell>
              <TableCell align="center">QTY</TableCell>
              <TableCell align="center">PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commodityData.info.map((info, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="info">
                  {info.containerNo}
                </TableCell>
                <TableCell align="center">{info.buyOrder.qty}</TableCell>
                <TableCell align="center">{info.buyOrder.price}</TableCell>
                <TableCell align="center">{info.sellOrder.qty}</TableCell>
                <TableCell align="center">{info.sellOrder.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Paper>

<section>
          <Button variant="outlined" color="inherit" className={classes.button} 
          onClick={() => {this.setState({chartModal: true})}} >
            Chart
                  </Button>
          <Button variant="outlined" name="buyModal" color="inherit" className={classes.button}
           onClick={() => {this.setState({buyModal: true})}} >
            Buy
                  </Button>
          <Button variant="outlined" name="sellModal" color="inherit" className={classes.button} 
          onClick={() => {this.setState({sellModal: true})}} > Sell
                  </Button>
          <Button variant="outlined" color="inherit" className={classes.button} onClick={this.props.fnOpenLogin} >
            Your order
                  </Button>
        </section>

        <section>
          {this.state.buyModal && 
          <BuyModal open={this.state.buyModal} commodity={this.state.commodityDetail} 
          close={this.handleCancel}></BuyModal>
          }
          {this.state.sellModal && 
          <SellModal open={this.state.sellModal} commodity={this.state.commodityDetail} 
          close={this.handleCancel}></SellModal>
          }
          {
            this.state.chartModal &&
            <ChartModal open={this.state.chartModal} commodity={this.state.commodityDetail} 
          close={this.handleCancel}></ChartModal>
          }
        </section>
        
        
        </React.Fragment>
    );
  }
}

Commodity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Commodity);