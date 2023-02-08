const express = require("express");
const {
  getHomepage,
  getUpdatePage,
  postCreateUser,
  getCreatePage,
  postUpdateUser,
  postDeleteUser,
  postDeleteUserById,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postDeleteUserById);
module.exports = router;
