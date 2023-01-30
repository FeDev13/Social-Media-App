const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
    getUsers,
    createUser,
    findByUser,
    FollowUser,
    UnfollowUser,
    findByFollowers,
  } = require("../controllers/usersController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logOut);
  router.get("/allusers", getUsers);
  router.get("/:id", findByUser);
  router.get("/follow/:id", findByFollowers);
  router.post("/follow/:id", FollowUser);
  router.post("/unfollow/:id", UnfollowUser);

  
  module.exports = router;