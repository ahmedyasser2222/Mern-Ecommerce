const express = require("express");
const {
  createCategory,
  getAllCategory,
} = require("../controller/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const uploadImage = require("../middleware/photoUpload");
const router = express.Router();

router
  .route("/admin/category/new")
  .post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    uploadImage.single("image"),
    createCategory
  );

router
  .route("/admin/getallcategory")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllCategory);

module.exports = router;
