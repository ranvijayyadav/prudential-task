import "./index.scss";
import React, { PureComponent } from "react";
import {
    AppBar,    Button
} from "@material-ui/core";
import logo from "./../../assets/images/logo_white_small.png";
export default class Header extends PureComponent {
    render() {

        return (
            <div>
                <AppBar position="fixed" color="inherit" className="headerbar">
                    
                    <Button href="#" className="buttonw">
                    <img src={logo} alt="logo" className="logo" />
                        <p>WEATHER APP</p>
                    </Button>
                </AppBar>
            </div>
        );
    }
}
