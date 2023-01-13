const { allUsers, getUserById } = require("../models/usersModel");

const getUsers = async (req, res) => {
  try {
    const users = await allUsers();
    res.json(users);
  } catch (error) {
    console.error(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getUsers,
  getUser,
};
