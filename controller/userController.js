const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const user = await User({
    name,
    email,
    password,
  });

  const emailToken = crypto.randomBytes(20).toString("hex");
  const emailVerificationUrl = `${process.env.FRONTEND_URL}/verify/email/${emailToken}`;
  const message = `Please Verify your email by clicking at this link :- \n\n ${emailVerificationUrl} \n\n.`;

  await sendEmail({
    email: user.email,
    subject: `Souq Account Verification`,
    message,
  });

  user.verifyEmailToken = emailToken;

  await user.save().then((s) => {
    console.log(s);
    res.status(200).json({
      success: true,
      message: `Email sent to ${s.email} successfully`,
    });
  });
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !user.verified) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
  user.password = null
  sendToken(user, 200, res);
});

exports.verifyEmail = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ verifyEmailToken: req.body.token });
  if (user) {
    user.verified = true;
    user.verifyEmailToken = undefined;
    await user.save({ validateBeforeSave: true });
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "Not a valid Email Verification url" });
  }
});

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Souq Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Reset Password Token is invalid or has been expired",
    });
  }

  if (req.body.password !== req.body.passwordConfirm) {
    return res.status(400).json({
      success: false,
      message: "Passwords must match",
    });
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id)
    .populate("cart.product")
    .populate("cart.category")

  res.status(200).json({
    success: true,
    user,
  });
});

exports.addProductToCart = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.body._id);
  console.log(req.user.cart);

  if (!product)
    res
      .status(404)
      .json({ success: false, message: "This product not found " });
  else {
    let exist = false;
    req.user.cart.map((item, index) => {
      if (item.product == req.body._id) {
        return (exist = true);
      }
      exist = false;
    });
    if (exist)
      res
        .status(401)
        .json({ success: false, message: "Product already in cart" });
    else {
      const cartProduct = [
        ...req.user.cart,
        { product: req.body._id, category: req.body.category },
      ];
      await User.findByIdAndUpdate(req.user._id, { cart: cartProduct });
      res
        .status(200)
        .json({ success: true, message: "Product add to cart , successfully" });
    }
  }
});
