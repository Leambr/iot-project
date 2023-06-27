const express = require("express");
const userController = require("../controllers/UserController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();

// http://localhost:3001/api/createUser en méthode POST avec token dans headers
// json avec une key "username" : username et "password" : password  ou
// form-encoded avec une key "username" : username et "password" : password
router.post("/createUser", userController.createUser);

// http://localhost:3001/api/getAllUsers en méthode GET avec token dans headers { "Authorization": "testBearer jgifgfgjfgbfgfngjfnghfgu"}
router.get(
  "/getAllUsers",
  jwtHelper.authenticateToken,
  userController.getAllUsers
);
// http://localhost:3001/api/getUserById/:id exemple http://localhost:3001/api/getUserById/2 en méthode GET avec token dans headers
router.get(
  "/getUserById/:id",
  jwtHelper.authenticateToken,
  userController.getUserById
);
// http://localhost:3001/api/updateUser/1 en méthode DELETE avec token dans headers
router.delete(
  "/deleteUser/:id",
  jwtHelper.authenticateToken,
  userController.deleteUser
);

module.exports = router;
