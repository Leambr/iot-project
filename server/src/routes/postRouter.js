const express = require("express");
const postController = require("../controllers/PostController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();

// http://localhost:3001/api/createPost en méthode POST avec token dans headers
// json avec une key "content" : text ou form-encoded avec une key "content" : text
router.post(
  "/createPost",
  jwtHelper.authenticateToken,
  postController.createPost
);
// http://localhost:3001/api/getAllPosts en méthode GET avec token dans headers
router.get(
  "/getAllPosts",
  jwtHelper.authenticateToken,
  postController.getAllPosts
);
// http://localhost:3001/api/getPostById/:id exemple http://localhost:3001/api/getPostById/2 en méthode GET avec token dans headers
router.get(
  "/getPostById/:id",
  jwtHelper.authenticateToken,
  postController.getPostById
);
// http://localhost:3001/api/updatePost/1 en méthode DELETE avec token dans headers
router.delete(
  "/deletePost/:id",
  jwtHelper.authenticateToken,
  postController.deletePost
);

module.exports = router;
