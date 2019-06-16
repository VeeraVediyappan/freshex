import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
//import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

//import AdminAppBar from '../../components/materialUI/appbar/AdminAppBar'

import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

import Chart from '../../components/modal/admin/Chart';
import Buyer from '../../components/modal/admin/Buyer2';
import Seller from '../../components/modal/admin/Seller2';

import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    minHeight: '80px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }, card: {
    minWidth: 275,
    maxWidth: '100%',
    borderRadius: '0px'
  },
}));

const AdHome = (props) => {
  const classes = useStyles();
  const [open] = React.useState(false);

  // function handleDrawerOpen() {
  //   setOpen(true);
  // }

  // function handleDrawerClose() {
  //   setOpen(false);
  // }

  return (

    <main id='admin_main'>
      <div className={classes.drawerHeader} />
      {/* <Typography paragraph>
        Eden going all the way
        </Typography> */}

<Grid container spacing={2} key={'first-grid'}>

<Grid item sm={6} key={'buyer-item'} >
<Card key={"buyer-card"} className={classes.card}>
        <CardHeader title={`Buyer Table - ${'Indian Market Watch'}`} />
        <CardContent>
          <Buyer />
        </CardContent>
        <CardActions>
          <Button size="small"
            onClick={() => this.handleClick(1, 1)}>Click here</Button>
        </CardActions>
      </Card>
</Grid>

<Grid item sm={6} key={'seller-item'} >
<Card key={"seller-card"} className={classes.card}>
        <CardHeader title={`Seller Table - ${'Indian Market Watch'}`} />
        <CardContent>
          <Seller />
        </CardContent>
        <CardActions>
          <Button size="small"
            onClick={() => this.handleClick(1, 1)}>Click here</Button>
        </CardActions>
      </Card>
</Grid>

</Grid>

      
<br />




      <Card key={"2"} className={classes.card}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     R
          // </Avatar>
          // }
          // action={
          //   <IconButton aria-label="Settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title="Trend Chart"
        //subheader="September 14, 2016"
        />
        <CardContent>
          {/* <Typography variant="h5" component="h2">
            Chart
                        </Typography> */}
          <Chart />
        </CardContent>
        <CardActions>
          <Button size="small"
            onClick={() => this.handleClick(1, 1)}>Click here</Button>
        </CardActions>
      </Card>

    </main>
  );
}

export default AdHome;