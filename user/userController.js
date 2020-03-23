const userModel = require("./userModel");

const addUser = async (req, res) => {
  await userModel.insertUser(req.body);
  res.json({ message: "OK" });
};

const getUser = async (req, res) => {
  const user = await userModel.getUserById(req.params.userId);
  res.json(user);
};

const updateUser = async (req, res) => {
  await userModel.updateUserById(req.params.userId, req.body);
  res.json({ message: "User updated" });
};

const deleteUser = async (req, res) => {
  await userModel.deleteUserById(req.params.userId);
  res.json({ message: "User deleted" });
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser
};
