const jwt = require("jsonwebtoken");
require("dotenv").config();

// Authentication Middleware
exports.auth = (req, res, next) => {
  try {
    // extract jwt token
    // PENDING : other ways to fetch and extract tokens --> (Headers, Cookies, Body)

    const token = req.body.token;
    // const token = req.cookie.token

    // if token is not available
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Unavailable",
      });
    }

    // verifying token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);

      req.user = decode;
    } catch (e) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
    });
  }
};

// Student Authorization Middleware
exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "STUDENT") {
      return res.status(401).json({
        success: false,
        message: "This is a protect route for students you can not access it",
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Role is not Matching",
    });
  }
};

// Admin Authorization Middleware
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(401).json({
        success: false,
        message: "This is a protect route for Admins,you can not access it",
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Role is not Matching",
    });
  }
};
