const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 2000;


app.request(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.listen('port', () =>{
    console.log(`Listening on port ${port}`)
})