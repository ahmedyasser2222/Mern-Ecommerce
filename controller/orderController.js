const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create new Order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body)
  const {
    shoppingInfo,
    orderItems,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shoppingInfo,
    orderItems,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});
