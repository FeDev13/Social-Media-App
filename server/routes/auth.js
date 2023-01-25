const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
    getUsers,
    createUser,
    findByUser
  } = require("../controllers/usersController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logOut);
  router.get("/", getUsers);
  router.get('/users/:id', findByUser);

  
  module.exports = router;