import './App.css';
import Main from "./components/Main/Main";
import {Switch, Route} from "react-router-dom";
import React from "react";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Weather from "./components/Weather/Weather";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import * as palette from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: palette.grey["100"],
        minHeight: "92vh"
    }
});

function App(props) {

    const classes = useStyles();

    return (
        <>
            <NavbarContainer store={props.store}/>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Switch>
                                <Route exact path='/' render={() => <Main/>}/>

                                <Route path='/news' render={() => <News/>}/>

                                <Route path='/profile' render={() => <Profile/>}/>

                                <Route path='/weather' render={() => <Weather store={props.store}/>}/>

                                <Route path='/login' render={() => <Login store={props.store}/>}/>

                            </Switch>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default App;
