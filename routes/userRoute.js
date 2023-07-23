const express = require("express");
const {
  registerUser,
  verifyEmail,
  loginUser,
  getUserDetails,
  forgotPassword,
  resetPassword,
  addProductToCart,
} = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/verifyUser").post(verifyEmail);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/addtocart").post(isAuthenticatedUser, addProductToCart);

module.exports = router;
