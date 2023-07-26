const express = require("express");
const { createProduct, getAllProducts, getProductDetails, createProductReview } = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const uploadImage = require("../middleware/photoUpload")

const router = express.Router();

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), uploadImage.array("image",5), createProduct);

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);









  

module.exports = router;
