import React from "react";
import {setAuthUserData, logout} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";
import Navbar from "./Navbar";


class NavbarContainer extends React.Component {

    render() {
        return <Navbar {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

//
export default connect(mapStateToProps, {setAuthUserData, logout})(NavbarContainer);
