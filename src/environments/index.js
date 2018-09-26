const environments = {
    development: {
        API_URL:"http://api.openweathermap.org/data/2.5/forecast",
        IMAGE_URL:"http://openweathermap.org/img/w/",
        APP_ID:"e4a2f18f580be77b9a099f5cf187b867"
        //BASE_URL: "http://localhost:3000",
        //GRAPHQL_URL: "http://dev.authorify.com"
    },
    production: {
        API_URL:"",
        IMAGE_URL:"",
        APP_ID:""
        //BASE_URL: "http://localhost:3000",
        //GRAPHQL_URL: "http://dev.authorify.com"
    }
};

export default environments[process.env.REACT_APP_ENV] ||
    environments[Object.keys(environments)[0]];
