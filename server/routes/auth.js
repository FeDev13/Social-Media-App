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
    updateUser,
  } = require("../controllers/usersController");
  
  const router = require("express").Router();
  const uploadMulter = require("../config/multer");

  router.post("/login", login);
  router.post("/register", uploadMulter.single("avatarImage"), register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logOut);
  router.get("/allusers", getUsers);
  router.get("/:id", findByUser);
  router.get("/follow/:id", findByFollowers);
  router.put("/:id", updateUser);
  router.post("/follow/:id", FollowUser);
  router.post("/unfollow/:id", UnfollowUser);


  
  module.exports = router;