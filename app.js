const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/Posts');
const postController=require('./controllers/postController');
const pageController=require('./controllers/pageController');

var app = express();

//DATABASE CONNECTİON
mongoose.connect('mongodb://localhost/clean-blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//MIDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES - POSTS
app.get('/', postController.getAllPost);
app.get('/posts/:id', postController.getPost);
app.post('/add', postController.addPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost );


//ROUTES - Page
app.get('/about',pageController.about);
app.get('/add_post', pageController.addPost);
app.get('/posts/edit/:id', pageController.editPost);




const port = 3000;

app.listen(port, () => {
  console.log(port, ' portunda sunucu çalıştı');
});
