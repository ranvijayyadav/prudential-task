import "./index.scss";
import React, { Component } from "react";
import {WeatherList} from "./../../components";
import {connect} from "react-redux";
import {getWeather} from "./../../store";
//import "./../../../assets/fonts/stylesheet.scss";

class Main extends Component {
    componentWillMount(){
        console.log("api call");
        this.props.getWeather("Mumbai","IN");
    }
    render() {
        return (
            <div>
                <WeatherList/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather
})
//export default Main;
export default connect(mapStateToProps, {getWeather})(Main)