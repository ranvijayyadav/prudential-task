import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore, reducers } from "./store";
import { App } from "./containers";

const store = configureStore(axios,  {}, reducers);

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
