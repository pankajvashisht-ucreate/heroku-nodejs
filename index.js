const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app= express();
require('./Router/router')(app);
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
   

app.listen(config.port,(err, res) =>{
    if(err) throw err;
    console.log('server listening on port '+config.port+'....');
  });