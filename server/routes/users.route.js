const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
} = require("../controllers/usersController");
const authLogin = require("../controllers/authController");

router.get("/users/", getUsers);
router.post("/users/", createUser);
router.get("/users/:id", findByUser);
router.put("/users/:id", UpdateByUser);
router.delete("/users/:id", deleteByUser);
router.post("/login/", authLogin);
module.exports = router;
