const postService = require("../services/PostService").default;
const responseFormatter = require("../utils/responseFormatter");
const jwtHelper = require("../utils/helper/jwtHelper");

const postController = {
  getAllPosts: async (_, res) => {
    try {
      const posts = await postService.getAllPosts();
      const response = responseFormatter.formatResponse(res.statusCode, posts);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await postService.getPostById(req.params.id);
      const response = responseFormatter.formatResponse(res.statusCode, post);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const token = jwtHelper.getToken(req);
      const post = await postService.createPost(req.body, token);
      //   const post = req.body;
      //   console.log(req.body, token);
      const response = responseFormatter.formatResponse(res.statusCode, post);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await postService.deletePost(req.params.id);
      const response = responseFormatter.deleteFormatResponse(
        res.statusCode,
        post
      );
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = postController;
