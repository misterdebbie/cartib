const express = require('express');
//import express module
//create an express App

const app = express();
//object has access to methods >
//routing HTTP requests, middleware config, render HTML views

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//use EJS templating
//specify the views directory

const PORT = process.env.PORT || 3000;
//set the port to local host 3000

app.get('/', (req,res) => {
  res.send('Hello, how\'s it going?');
});
//route definition
//callback has 2 args
//req and res
//when '/' is requested, res.send will return string >
//'Hello, how\'s it going?'

const moviesRouter = require('./routes/movies-routes');
app.use('/movies', moviesRouter);
//when '/movies' route is requested, use routes defined in this file

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
