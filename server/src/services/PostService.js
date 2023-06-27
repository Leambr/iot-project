const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const jwtHelper = require("../utils/helper/jwtHelper");

const postService = {
  getAllPosts: async () => {
    try {
      const query = `SELECT * FROM ${table.posts}`;
      const result = await GlobalService.getAll(query, "Post");
      return result;
    } catch (error) {
      throw error;
    }
  },

  getPostById: async (id) => {
    try {
      const query = `SELECT * FROM ${table.posts} WHERE id = ${id}`;
      const result = await GlobalService.getById(query, "Post");
      return result;
    } catch (error) {
      throw error;
    }
  },

  createPost: async (post, token) => {
    try {
      const decoded = jwtHelper.decodeToken(token);
      post.user_id = decoded.id;
      console.log(post);
      const query = `INSERT INTO ${table.posts} (user_id, content) VALUES ('${post.user_id}', '${post.content}')`;
      const result = await GlobalService.create(
        query,
        "Post",
        post,
        table.posts
      );
      return result;
    } catch (error) {
      throw error;
    }
  },

  deletePost: async (id) => {
    try {
      const query = `DELETE FROM posts WHERE id = ${id}`;
      const result = await GlobalService.deleteById(query, "Post");
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = postService;
