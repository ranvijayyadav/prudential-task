import React from "react";
import {create} from "react-test-renderer";
import {WeatherCard, WeatherList, Header} from "./../components";
import {getWeather} from "./../store";
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import {Main} from "./../containers";

import {GET_WEATHER} from "./../store/constants";
const jsondata= {
    "dt": 1537909200,
    "main": {
        "temp": 279.08,
        "temp_min": 279.04,
        "temp_max": 279.08,
        "pressure": 1007.5,
        "sea_level": 1027.56,
        "grnd_level": 1007.5,
        "humidity": 88,
        "temp_kf": 0.04
    },
    "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
    }],
    "clouds": {
        "all": 80
    },
    "wind": {
        "speed": 5.22,
        "deg": 312.5
    },
    "rain": {},
    "sys": {
        "pod": "n"
    },
    "dt_txt": "2018-09-25 21:00:00"
};
test("snapshot weather card", ()=>{
 
    const wc= create(<WeatherCard tile={jsondata}/>);
    expect(wc.toJSON()).toMatchSnapshot();
    
});

test("snapshot Header", ()=>{
 
    const head= create(<Header/>);
    expect(head.toJSON()).toMatchSnapshot();
    
});

test("action creater", ()=>{
    //const store = mockStore({ posts: {} })
    expect(getWeather().type).toBe(GET_WEATHER);
});



test("main component", ()=>{


    // create any initial state needed
    const initialState = {};

    const mockStore = configureStore();

    let wrapper;
    beforeEach(() => {
            store = mockStore(initialState)
            wrapper = wrapper = shallow(<Main store={store}/>)

    })

        it('component is rendered', () => {
            expect(wrapper.length).toEqual(1)
    });
});