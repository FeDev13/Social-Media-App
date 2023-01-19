const { User } = require("../models/users.models");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};
const findByUser = async (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Id no encontrado" });
    });
};
const UpdateByUser = async (req, res) => {
  const { id } = req.params;
  await User.updateOne({ _id: id }, req.body);
  res.json({ message: "Datos Modificados" });
};
const deleteByUser = async (req, res) => {
  const { id } = req.params;
  await User.remove({ _id: id });
  res.json({ message: "Datos Eliminados" });
};




const createUser = async (req, res) => {
  const modelData = {
    fullname: req.body.fullname,
    username:req.body.username,  
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    profilePicture:req.body.profilePicture,
    followers:req.body.followers,
    following:req.body.following,
    bio:req.body.bio

  };
  const user = new User(modelData);
  user.save();
  res.json(user);
};
module.exports = {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
};
