const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection
    .promise()
    .query(`SELECT * FROM Users`);
  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection
    .promise()
    .query(`SELECT * FROM Users WHERE id = (?)`, [id]);
  console.log(">>>ID: ", results);
  return results;
};

const updateUserById = async (id, email, name, city) => {
  let [results, fields] = await connection.promise().query(
    `UPDATE Users
    SET email = ?, name = ?, city = ?
    WHERE ID = ${id}`,
    [email, name, city]
  );
};

const removeUserById = async (id) => {
  let [results, fields] = await connection
    .promise()
    .query(`DELETE FROM Users WHERE id = ?`, [id]);
};

module.exports = { getAllUsers, getUserById, updateUserById, removeUserById };
