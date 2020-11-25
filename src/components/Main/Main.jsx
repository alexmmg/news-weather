import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
        margin: '140px',
    },
    second: {
        margin: '30px 0',
    }
});


const Main = () => {

    const classes = useStyles();

    return (
        <div>
            <div>
                <Grid container spacing={6}>
                    <Grid item xs={12} align = "center" className={classes.main}>
                        <Typography variant="h5" component="h2">
                            React Weather and News app
                        </Typography>
                        <Typography color="textSecondary" className={classes.second}>
                            Made by Alexander Prokaziuk
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Main;