const {
  getUsers,
  createUser,
  findByUser,
} = require("../controllers/usersController");

const router = require("express").Router();

router.get("/", getUsers);
router.get("/users/:id", findByUser);

module.exports = router;
