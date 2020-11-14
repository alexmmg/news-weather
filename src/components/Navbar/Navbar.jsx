import React from "react";
import {NavLink} from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import s from "./Navbar.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Navbar = (props) => {
  return (
      <Container maxWidth="lg" style={{backgroundColor: '#cfe8fc'}}>
        <Grid container spacing={3}>
          <Grid item sm={9} className={s.center}>
            {/*<Paper>*/}
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
              <Button>
                <NavLink to='/' className={s.item}>Main</NavLink>
              </Button>
              <Button>
                <NavLink to="/profile" className={s.item}>Profile</NavLink>
              </Button>
              <Button>
                <NavLink to='/news' className={s.item}>News</NavLink>
              </Button>
              <Button>
                <NavLink to='/weather' className={s.item}>Weather</NavLink>
              </Button>
            </ButtonGroup>
            {/*</Paper>*/}
          </Grid>
          <Grid sm={3} className={s.right}>
            {/*<Paper>*/}
            <ButtonGroup className={s.loginBtn} variant="contained" color="primary"
                         aria-label="contained primary button group">

              {props.isAuth
                  // <div>{props.login}
                  ? <Button onClick={props.logout}>Log out</Button>
                  : <Button><NavLink to={'/login'}>Login</NavLink></Button>
              }

            </ButtonGroup>
            {/*</Paper>*/}
          </Grid>
        </Grid>
      </Container>
  )
};

export default Navbar;