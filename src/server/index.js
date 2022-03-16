const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
//const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
//const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express()

const cors = require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

//app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'))

console.log(__dirname)

console.log(`Your API key is ${process.env.API_KEY}`);

const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const textapi = process.env.API_KEY;
console.log("textapi",textapi)
 

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = 9000;
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


app.get('/checkUrl', function (req, res) {
    res.send(mockAPIResponse)

    /*const wUrl = `${BASE_API_URL}?key=${textapi}&url=${req.body.url}&lang=en`
    fetch(wUrl)
    const response = fetch(wUrl, requestOptions)
    .then(response => ({
      status: response.status, 
      body: response.json()
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch(error => console.log('error', error));*/
})



/*    1. GET the url from the request body
    2. Build the URL it should be something like 
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/


// Initialize all route with a callback function
//app.get('/all', getData);


app.post('/checkUrl', async function (req, res){
    const data = req.body;
    const sentence = data.value;

    if (isNaN(sentence)){
        const result = await getAnalysis(sentence);
            res.status(200).json({
                irony : result.irony,
                subjectivity : result.subjectivity
    })} else {
            res.sendStatus(400).json()
            }
    });

async function getAnalysis(sentence) {
    let response = await fetch(`${BASE_API_URL}?key=${textapi}&txt=${sentence}&lang=en`)
    let data = await response.json()
    return data;
};

// Callback function to complete GET '/all'
function getData(req, res) {
    res.send(projectData);
}