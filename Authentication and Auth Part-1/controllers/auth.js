const bcrypt = require("bcrypt");
const User = require("../models/user");

// signup route handler
exports.signup = async (req, res) => {
  try {
    // get data
    const { name, email, password, role } = req.body;
    // check if user is already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
      });
    }

    // create entry for User
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot registered, Please try again later",
    });
  }
};
