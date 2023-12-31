const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const path = require("path");
const { cloudinaryUploadImage } = require("../utils/cloudeinary");
const fs = require("fs");

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const imagesLinks = [];

  for (let i = 0; i < req.files.length; i++) {
    let imagePath = path.join(__dirname, `../images/${req.files[i].filename}`);
    let result = await cloudinaryUploadImage(imagePath, "product", res);

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
    fs.unlinkSync(imagePath);
  }

  req.body.images = imagesLinks;
  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product By user
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 15;
  const productsCount = await Product.countDocuments();
  let products = await Product.find({}).select([
    "name",
    "price",
    "ratings",
    "images",
  ]);

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
  });
});

// Get Product Details By user
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
    .select(["-user"])
    .populate("category", "name");

  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  if(!product){
    res.status(404).json({
      success: false,
      message : "Product Not Found"
    });
  }
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }


  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message : "Comment add , Successfully",
    reviews : product.reviews
  });
});
