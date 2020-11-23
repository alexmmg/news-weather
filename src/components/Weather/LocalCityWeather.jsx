import React from 'react';
import {Button} from "@material-ui/core";
import {deleteCityWeatherData} from "../../redux/weather-reducer";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 25,
        marginBottom: 25
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
});


const CityWeather = ({city, humidity, pressure, temp}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {city}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Temp: {temp} С°
                </Typography>
                <Typography variant="body2" component="p">
                    Humidity: {humidity}%
                    <br/>
                    Pressure: {pressure} hPA
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CityWeather;