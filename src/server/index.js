const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
//const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
//const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express()

//app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'))

console.log(__dirname)

console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = process.env.API_KEY;
 

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = 3000;
app.listen(port, listening);

function listening() {
    // Callback to debug
    console.log(`running on localhost: ${port}`);
};


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Post Route
app.post('/addTemp', addTempData);

function addTempData(req, res) {
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.Temp;
    projectData['Mode'] = req.body.Mode;
    projectData['City'] = req.body.City;
    res.send(projectData);
}

// Initialize all route with a callback function
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData(req, res) {
    res.send(projectData);
}