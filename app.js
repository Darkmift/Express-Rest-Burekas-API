//Load HTTP module
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cl = console.log.bind(console);
const root = __dirname + '/server/';
const optionsJsonPath = root + 'public/options.json';
const htmltemplatePath = root + 'public/burekasDisplay.html';
const burekasDBPath = root + 'public/burekasDisplay.html';
//set server address and port
const hostname = 'localhost';
const port = 3000;

//
const HelpClass = require('./server/HelperClass.js');
const httpCodeClass = require('./server/httpCodeClass.js');
let httpCodeInstance = new httpCodeClass();
//set default http response code
httpCodeInstance.setResponseHttpCode(200);

//set routes
const routes = ['/', '/burekas', '/burekas/:id', '/burekas/', '/burekas/:id/'];
//instanciate the bourekasDB as array
var bourekasDB = [];

app.use(express.static('public')); //set root directory for files
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.listen(port, () => {
    console.log(`App listening on port  http://${hostname}:${port}!`);
});

//OPTIONS METHOD
app.options(routes, (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(optionsJsonPath, function(err, data) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', optionsJsonPath);
        }
    });
});

app.all(['/options', '/options/'], (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(optionsJsonPath, function(err, data) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', optionsJsonPath);
        }
    });
});

//GET METHOD
app.get(routes[0], (req, res) => {
    res.send('Hello World!');
});

//GET METHOD
app.get(routes[1], (req, res) => {
    //req.is null if request has no body
    cl('content-type: ', req.is('html'), 'accept: ', req.accepts('text/html'));
    //if accept header present
    res.format({
        'text/plain': () => res.send('text/plain'),

        'text/html': () => res.send('<p>text/html</p>'),

        'application/json': () => res.send({
            message: 'application/json'
        }),
        'default': function() {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    });
});

app.get('/test', (req, res) => {
    app.render('htmlTemplate', {
        title: 'res vs app render'
    }, function(err, html) {
        cl(html);
    });
});






































// fs.readFile('burekas.json', {
//         encoding: 'utf8'
//     },
//     (err, json) => {
//         //grab needed data from files...
//         //get html template to use in GET response
//         var htmlTemplate = fs.readFileSync('server/public/burekasDisplay.html', {
//             encoding: 'utf8'
//         }, (err) => {
//             if (err) {
//                 throw err
//             }
//         });
//         //get options.json to use in OPTIONS response
//         var jsonOptions = fs.readFileSync('server/public/options.json', {
//             encoding: 'utf8'
//         }, (err) => {
//             if (err) {
//                 throw err
//             }
//         });

//     });