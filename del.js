// Make an axios DEL Request to the local server and return the response (Port 3000)

const axios = require('axios');
const url = 'http://localhost:3000';
const data = [
    { "id": 2, "title": "json-server", "author": "typicode" }
];

axios.delete(url).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    }
);
