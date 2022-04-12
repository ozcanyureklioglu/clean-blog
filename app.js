const express = require('express');
const mongoose=require('mongoose');
const path=require('path');
const ejs=require('ejs');
const Post=require('./models/Posts');


var app = express();

//DATABASE CONNECTİON 
mongoose.connect('mongodb://localhost/clean-blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGİNE
app.set("view engine","ejs");

//MIDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const posts=await Post.find({});
  res.render('index',{
    posts
  });
});
app.get('/about', (req, res) => {
  
  res.render('about');
});
app.get('/post', (req, res) => {
  
  res.render('post');
});
app.get('/posts/:id', async (req, res) => {
  const post=await Post.findById(req.params.id);
  res.render('post',{
    post
  });

});
app.get('/add_post', (req, res) => {
  
  res.render('add_post');
});
app.post('/add', async (req, res) => {
  await Post.create(req.body);
  console.log(req.body);
  res.redirect('/');
});



const port = 3000;

app.listen(port, () => {
  console.log(port, ' portunda sunucu çalıştı');
});
