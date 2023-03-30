import express from 'express';
import configureHttpServer from './services/httpserver.js';

// Create express app
const app = express();

// Establish port
const port = process.env.PORT || 8080;
app.get('/', function(request, response){
    response.sendFile('index.html');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })