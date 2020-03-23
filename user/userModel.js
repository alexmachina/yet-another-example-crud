const client = require("../helpers/client");

const insertUser = async user => {
  const insertUserQuery = `INSERT INTO account (username, password, email) VALUES ('${user.username}', '${user.password}', '${user.email}')`;
  return await client.query(insertUserQuery);
};

const getUserById = async userId => {
  const getUserByIdQuery = `SELECT * FROM account WHERE user_id=${userId};`;
  const results = await client.query(getUserByIdQuery);
  const user = results.rows[0];
  return user;
};

const updateUserById = async (userId, user) => {
  const updateUserQuery = `UPDATE account SET username='${user.username}', password='${user.password}', email='${user.email}' WHERE user_id=${userId};`;
  await client.query(updateUserQuery);
};

const deleteUserById = async userId => {
  const deleteUserQuery = `DELETE FROM account WHERE user_id=${userId}`;
  await client.query(deleteUserQuery);
};

module.exports = {
  insertUser,
  getUserById,
  updateUserById,
  deleteUserById
};
