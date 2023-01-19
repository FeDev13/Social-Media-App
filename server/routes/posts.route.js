const express = require("express");
const router = express.Router();

const {  friendPost,createPost,getPost,likePost,comentPost} = require('../controllers/postsController');


router.post('/posts/', createPost);
router.get('/posts/:username', getPost);
router.get('/posts/:id', friendPost);
router.put('/posts/:id/like', likePost);
router.put('/posts/:id/comment', comentPost);

module.exports=router;