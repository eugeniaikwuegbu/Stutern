const express = require('express');

const app = express();
app.get('/', (res) =>{
    res.send('Hello from express JS');
});
app.get('/instructors/:firstname', (req, res) =>{
    res.send(`welcome to my world, Miss  ${req.params.firstname}`);
})

const port = 3000;
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
