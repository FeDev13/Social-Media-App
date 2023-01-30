const express = require("express");
const routerPost = express.Router();

const {  friendPost,createPost,getPost,likePost,comentPost} = require('../controllers/postsController');


routerPost.post('/posts/', createPost);
routerPost.get('/posts/:username', getPost);
routerPost.get('/posts/:id', friendPost);
routerPost.put('/posts/:id/like', likePost);
routerPost.put('/posts/:id/comment', comentPost);

module.exports=routerPost;