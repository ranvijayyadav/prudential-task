import React, { Component } from "react";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import {
    createGenerateClassName,
    jssPreset,
    CssBaseline
} from "@material-ui/core";
import { Header} from "./../../components";
import { Main } from "./../../containers";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

class Home extends Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <React.Fragment>
                    <CssBaseline />
                    <Header />
                    <Main />
                </React.Fragment>
            </JssProvider>
        );
    }
}

export default Home;
