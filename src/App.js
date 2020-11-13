import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main";
import {Redirect, BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Weather from "./components/Weather/Weather";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import s from "./components/Navbar/Navbar.module.css";
import Container from "@material-ui/core/Container";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc'}}>
            <Grid container spacing={3} >
              <Grid item sm={12}>
          <Switch>
            <Route exact path='/' render={() => <Main/>}/>

            <Route path='/news' render={() => <News/>}/>

            <Route path='/profile' render={() => <Profile/>}/>

            <Route path='/weather' render={() => <Weather/>}/>

            <Route path='/login' render={() => <Login/>}/>

            {/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
          </Switch>
                </Grid>
                </Grid>
          </Container>
        </BrowserRouter>
      </div>
  )
}

export default App;
