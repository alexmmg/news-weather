import React from "react";
import {NavLink} from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import s from "./Navbar.module.css";
import Grid from "@material-ui/core/Grid";

const Navbar = (props) => {
    return (
            <Grid container spacing={3} className={s.backGr}>
                <Grid item sm={9} className={s.center}>
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
                </Grid>
                <Grid sm={3} className={s.right}>
                    <ButtonGroup className={s.loginBtn} variant="contained" color="primary"
                                 aria-label="contained primary button group">

                        {
                            props.isAuth
                                ? <Button onClick={props.logout}>Log out</Button>
                                : <Button><NavLink className={s.item} to={'/login'}>Login</NavLink></Button>
                        }

                    </ButtonGroup>
                </Grid>
            </Grid>
    )
};

export default Navbar;