// Make an axios GET Request to the Open-Meteo API and return the response https://open-meteo.com/en/docs

const axios = require('axios');
const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=7.27&hourly=temperature_2m';

axios.get(url).then(function (response) {
        console.log(response.data); // handle success
    }).catch(function (error) {
        console.log(error); // handle error
    }).then(function () {
        // always executed
        console.log('Always executed');
});
