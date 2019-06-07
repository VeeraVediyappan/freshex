import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { categories } from '../../mock/home.json';
import Grid from '@material-ui/core/Grid';
import { chunk } from 'lodash';
//import CountryModal from '../components/modal/CountryModal';
//import CommodityModal from '../components/modal/CommodityModal';

//import ClippedDrawer from './ClippedDrawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined'; 
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';  

import AdminHome from './AdminHome';

const styles = {
    root: {
        flexGrow: 1,
    },
    card: {
       // minWidth: 275,
        //maxWidth: 300
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


class Admin extends Component {
    state = {
        categories,
        countryModal: false,
        commodityModal: false,
        choosenCountry:''
    }

    handleClick = id => {
        //this.props.fnSelectCategory(id);
        if(id === 1) {
            this.setState({ countryModal: true });
        }
    }
    
    handleClose = country => {
        this.setState(
            { countryModal: false, 
                choosenCountry: country || '', 
                commodityModal: country ? true : false 
            });
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
            {/* <div className={`${classes.root}  home-div`}>
                {this.getGrid(this.state.categories, classes)}
            </div>
            <CountryModal open={this.state.countryModal} handleClose={this.handleClose}/>
            <CommodityModal open={this.state.commodityModal}
             handleClose={this.handleCommodityModalClose}></CommodityModal> */}

             <section className={`${classes.root} admin-section`}>

             {/* <ClippedDrawer /> */}

             <aside id='left-side'>

             <List>
            {['Dashboard', 'Inbox', 'Chat', 'Log out'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                {<ListItemIcon>{text === 'Dashboard' ? <DashboardIcon /> :  
                text === 'Inbox' ? <InboxIcon /> : 
                text === 'Chat' ? <ChatBubbleOutlinedIcon /> :
                text === 'Log out' ? <AndroidRoundedIcon /> : '' }</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

             </aside>
             <main id='main-div'>
             <AdminHome />
             </main>
             <aside id='right-side'>

             </aside>
             </section>
            </React.Fragment>
            
            

        );
    }


    getGrid = (categories, classes) => {
        const chunks = this.getChunk(categories, classes);
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

    getChunk = (categories, classes) => {
        const cards = categories.map((category, id) => {
            return (
                <Card key={category.id} className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {category.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => this.handleClick(category.id)}>Go & See More</Button>
                    </CardActions>
                </Card>
            )
        });

        return chunk(cards, 3);
    }


}

export default withStyles(styles)(Admin);