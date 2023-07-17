const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler.js");
const { catchAsyncError } = require("./catchAsynError.js");
const { User } = require("../models/User.js");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
 try {
  // const { token } = req.cookies 
  const { token } = req.query 
  if (!token) return next(new ErrorHandler("Not Logged In", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);

  next();
 } catch (error) {
  console.log(error)
  next(new ErrorHandler("Internal Server Error", 401))
 }
});

exports.authorizeSubscribers = (req, res, next) => {
try {
  if (req.user.subscription.status !== "active" && req.user.role !== "admin")
  return next(
    new ErrorHandler(`Only Subscribers can acces this resource`, 403)
  );

next();
} catch (error) {
  console.log(error)
  next(new ErrorHandler("Internal Server Error", 401))
}
};

exports.authorizeAdmin = (req, res, next) => {
try {
  if (req.user.role !== "admin")
  return next(
    new ErrorHandler(
      `${req.user.role} is not allowed to access this resource`,
      403
    )
  );

next();
} catch (error) {
  console.log(error)
  next(new ErrorHandler("Internal Server Error", 401))
}
};
