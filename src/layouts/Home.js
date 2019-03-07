import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { data } from '../mock/home.json';
import Grid from '@material-ui/core/Grid';
import { chunk } from 'lodash';


const styles = {
    root: {
        flexGrow: 1,
    },
    card: {
        minWidth: 275,
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


class Home extends Component {
    state = {
        categories: data
    }

    handleClick = id => {
        this.props.fnSelectCountry(id);
    }

    render() {

        const { classes } = this.props;
        return (
            <div className={`${classes.root}  home-div`}>
                {this.getGrid(this.state.categories, classes)}
            </div>


        );
    }


    getGrid = (categories, classes) => {
        const chunks = this.getChunk(categories, classes);
        console.log(chunks);
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

export default withStyles(styles)(Home);