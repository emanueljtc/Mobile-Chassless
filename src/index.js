const express = require('express');
const app = express();
const path = require('path');
// settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middlewares 

//routes
  require('./routes/');
//static files


// Listening the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})