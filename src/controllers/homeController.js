const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  removeUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  res.render("home.ejs", { listUsers: results });
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  console.log(">>>check userId: ", userId);
  let results = await getUserById(userId);
  res.render("edit.ejs", { listUserById: results });
};

const postCreateUser = async (req, res) => {
  console.log(">>> check req.body: ", req.body);
  let { email, name, city } = req.body;
  console.log(">>>req.body: ", email, name, city);

  const [results, fields] = await connection.promise().query(
    `
  INSERT INTO Users (email,name,city)
  VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log(">>>check results: ", results);
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  await updateUserById(id, email, name, city);
  console.log(">>> check req.body :", req.body);
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let results = await getUserById(userId);

  res.render("delete.ejs", { listUserById: results });
};

const postDeleteUserById = async (req, res) => {
  let id = req.body.id;
  await removeUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
  getCreatePage,
  postDeleteUser,
  postDeleteUserById,
};
