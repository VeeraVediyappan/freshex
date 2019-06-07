import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { features } from '../../mock/adminhome.json';
import Grid from '@material-ui/core/Grid';
import { chunk } from 'lodash';
import AddUserModal from '../../components/modal/admin/AddUserModal';
import AddCommodity from '../../components/modal/admin/AddCommodity';
import AverageMarket from '../../components/modal/admin/AverageMarket';
import ChartModal from '../../components/modal/admin/ChartModal';
import CommodityModal from '../../components/modal/admin/CommodityModal';
import { Divider } from '@material-ui/core';

import Commodity from '../../components/modal/admin/Commodity';
import Buyer from '../../components/modal/admin/Buyer';
import Seller from '../../components/modal/admin/Seller';

const styles = {
    root: {
        flexGrow: 1,
    },
    card: {
       // minWidth: 275,
        //maxWidth: 300
        borderRadius: '0px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const preparedState = () => {
    const stateObj = Object.assign({}, {
        features
    });
    for(const feature in features) {
        stateObj[feature.key] = false;
    }
    return stateObj;
}

class AdminHome extends Component {
    // state = {
    //     features,
    //     addUser: false,
    //     addCommodity: false,
    //     avgMarket: false,
    //     chart: false,
    //     viewCommodity: false,
    //     //choosenCountry:''
    // }

    state = preparedState();

    handleClick = (id, key) => {
        this.setState({ [key] : true });    
    }
    
    handleClose = modal => {
        this.setState({ [modal] : false});
    };

    handleCommodityModalOpen = () => {
        this.setState({ commodityModal: true });
    };

    handleCommodityModalClose = commodity => {
        this.setState({ commodityModal: false,
         }, () => {
             console.log(commodity);
            if(commodity) { this.props.fnselectCommodity(commodity); }
        });
    };

    render() {

        const { classes } = this.props;
        return (
            <React.Fragment>
            <div className={`${classes.root}  home-div`}>
                {this.getGrid(this.state.features, classes)}
            </div>
            <AddUserModal open={this.state.addUser} close={this.handleClose} modal={'addUser'} />
            <AddCommodity open={this.state.addCommodity} close={this.handleClose} modal={'addCommodity'} />
            <AverageMarket open={this.state.avgMarket} close={this.handleClose} modal={'avgMarket'} />
            <ChartModal open={this.state.chart} close={this.handleClose} modal={'chart'} />
            <CommodityModal open={this.state.viewCommodity} close={this.handleClose} modal={'viewCommodity'} />
            <Buyer open={this.state.buyer} close={this.handleClose} modal={'buyer'} />
            <Seller open={this.state.seller} close={this.handleClose} modal={'seller'} />
            {/* <Divider />
            {this.state.viewCommodity ?
            <Commodity handleClose={this.handleClose} /> :
            this.state.buyer ? 
            <Buyer handleClose={this.handleClose} /> :
            this.state.seller ? 
            <Seller handleClose={this.handleClose} /> : null
            } */}
            
            </React.Fragment>
            
            

        );
    }


    getGrid = (features, classes) => {
        const chunks = this.getChunk(features, classes);
        return chunks.map((chunk, idx) => {
            return (<Grid container spacing={24} key={idx}>
                {chunk.map((card, idx) => {
                    return (<Grid item xs key={idx}>
                        {card}
                    </Grid>)
                })}
            </Grid>)
        });
    }

    getChunk = (features, classes) => {
        const cards = features.map((feature, id) => {
            return (
                <Card key={feature.id} className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {feature.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" 
                        onClick={() => this.handleClick(feature.id, feature.key)}>Click here</Button>
                    </CardActions>
                </Card>
            )
        });

        return chunk(cards, 2);
    }


}

export default withStyles(styles)(AdminHome);