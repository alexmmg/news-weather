import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        textAlign: "left",
        marginBottom: "25px",
        width: "90%",
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

const ArticleItem = ({url, title, author, description, urlToImage}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
                <div className={classes.box}>
                    <Typography
                        style={{marginBottom: "10px"}}
                        color="secondary"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {description}
                    </Typography>
                </div>
                <div><img style={{width: "90%"}} src={urlToImage} alt={title}/></div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {author}
                </Typography>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.actionButton}
                    >
                        <a className={classes.link} target="_blank" href={url}>Learn more</a>
                    </Button>
                </div>
            </Paper>
        </Grid>
    )
};

export default ArticleItem;