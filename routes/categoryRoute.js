const express = require("express");
const { createCategory } = require("../controller/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const uploadImage = require("../middleware/photoUpload")
const router = express.Router();

router
  .route("/admin/category/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), uploadImage.single("image"), createCategory);











  

module.exports = router;
