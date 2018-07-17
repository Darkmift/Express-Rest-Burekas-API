//Load HTTP module
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

//set server address and port
const hostname = 'localhost';
const port = 3000;
//set routes
const routes = ['/', '/burekas', '/burekas/:id', '/burekas/', '/burekas/:id/'];
//instanciate the bourekasDB as array
var bourekasDB = [];

app.use(express.static('public'));
app.use(bodyParser.json());


app.options(routes, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));
});
app.get(routes[0], (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening on port  http://${hostname}:${port}!`);
});