const Post = require('../models/Posts');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

exports.about = (req, res) => {
  res.render('about');
};

exports.addPost = (req, res) => {
  res.render('add_post');
};

exports.editPost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};
