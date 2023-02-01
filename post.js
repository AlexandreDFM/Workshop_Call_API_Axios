// Make an axios POST Request to the local server and return the response (Port 3000)

const axios = require('axios');
const url = 'http://localhost:3000/posts';
const data = [
        { "id": 3, "title": "json-server", "author": "typicode" }
];

axios.post(url, data).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    }
);
