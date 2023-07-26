const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const  authorization  = req.headers.authorization.split(" ")[1];

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Please Login to access this resource",
      });
    }
    const decodedData = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id: decodedData.id, verified: true });
    if (!req.user ) {
      return res.status(401).json({
        success: false,
        message: "Please Login to access this resource",
      });
    } else next();
  } catch (err) {
    res.status(401).json({ success: false, message: "User Not Authenticated" });
  }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return;
      res.status(403).json({
        success: false,
        message: `Role: ${req.user.role} is not allowed to access this resouce`,
      });
    }
    next();
  };
};
