projectData = {};
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const app = express()

const cors = require("cors");
const { captureRejectionSymbol } = require('events');
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'))

console.log(__dirname)

console.log(`Your API key is ${process.env.API_KEY}`);

const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const textapi = process.env.API_KEY;
console.log("textapi", textapi)


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

app.post('/checkUrl', async function (req, res) {
    const cdata = req.body.value;
    const wUrl = `${BASE_API_URL}?key=${textapi}&url=${cdata}&lang=en`
    const fres = await fetch(wUrl);
    projectData = await fres.text();
    res.send(projectData)
})
