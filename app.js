const express = require('express');
const path=require('path');
const ejs=require('ejs');
var app = express();


//TEMPLATE ENGİNE
app.set("view engine","ejs");

//MIDLEWARE
app.use(express.static('public'));


//ROUTES
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('post');
});
app.get('/add', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add_post');
});



const port = 3000;

app.listen(port, () => {
  console.log(port, ' portunda sunucu çalıştı');
});
