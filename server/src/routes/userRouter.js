const express = require("express");
const userController = require("../controllers/UserController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();

// http://localhost:3001/api/getAllUsers en méthode GET avec token dans headers { "Authorization": "testBearer jgifgfgjfgbfgfngjfnghfgu"}
router.get(
  "/getAllUsers",
  // jwtHelper.authenticateToken,
  userController.getAllUsers
);

router.post(
  "/login",
  userController.login
);

// http://localhost:3001/api/getUserById/:id exemple http://localhost:3001/api/getUserById/2 en méthode GET avec token dans headers
// router.get(
//   "/getUserById/:id",
//   // jwtHelper.authenticateToken,
//   userController.getUserById
// );

module.exports = router;
