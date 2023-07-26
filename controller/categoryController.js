const Category = require("../models/categoryModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const path = require("path");
const { cloudinaryUploadImage } = require("../utils/cloudeinary");
const fs = require("fs");

// Create Product -- Admin
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  let imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  let result = await cloudinaryUploadImage(imagePath, "category");

  req.body.image = {
    public_id: result.public_id,
    url: result.secure_url,
  };
  req.body.user = req.user._id;
  const category = await Category.create(req.body);
  fs.unlinkSync(imagePath);
  res.status(200).json({
    success: true,
    category,
  });
});

// Get All -- Admin
exports.getAllCategory = catchAsyncErrors( async (req,res,next) => {
   const categories = await Category.find({})
   res.status(200).json({success : true, categories })
} )