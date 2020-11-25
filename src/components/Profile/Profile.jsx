import React from 'react';
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        textAlign: "left",
        marginBottom: "25px",
        width: "600px",
        padding: "15px"
    },
    link: {
        textDecoration: "none",
        color: "white"
    },
    actionButton: {
        textTransform: "uppercase",
        width: 152
    },
    box: {
        marginBottom: 30
    }
});


const Profile = () => {
    const classes = useStyles();

    const isAuth = useSelector(state => state.auth.isAuth);
    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
                <div className={classes.box}>
                    <Typography
                        style={{marginBottom: "10px"}}
                        color="secondary"
                        gutterBottom
                    >
                        'The Bachelorette' Tackled Police Brutality and Black Lives Matter. It Was the Most Important
                        Episode Yet. - The Daily Beast
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        On an intense and historic one-on-one date, Tayshia Adams and Ivan Hall got topical.
                    </Typography>
                </div>
                <div><img style={{width: "400px"}}
                          src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1519,w_2700,x_0,y_293/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1606272454/156573_BCT_S16_KA_Tayshia_2700x4000_V3_Sustained_czm0zn"
                          alt="title"/></div>
                <Typography variant="body2" color="textSecondary" component="p">
                    Laura Bradley
                </Typography>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.actionButton}
                    >
                        <a className={classes.link} target="_blank"
                           href="https://www.thedailybeast.com/the-bachelorette-tackled-police-brutality-and-black-lives-matter-it-was-the-most-important-episode-yet">Learn
                            more</a>
                    </Button>
                </div>
            </Paper>
        </Grid>
    );
};

export default Profile;