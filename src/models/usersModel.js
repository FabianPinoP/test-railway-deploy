const pool = require("../db/connectionDb").pool;

const allUsers = async () => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    console.log(allUsers.rows);
    return allUsers.rows;
  } catch (error) {
    console.error(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return user.rows[0];
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  allUsers,
  getUserById,
};
