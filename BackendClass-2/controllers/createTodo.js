// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;
    // Create a new Todo object and insert it in DB
    const response = await Todo.create({ title, description });
    // Send a JSON response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
