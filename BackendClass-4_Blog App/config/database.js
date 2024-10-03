// import
const mongoose = require("mongoose");

// load env file
require("dotenv").config();

// mongoose connection logic
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch((error) => {
      console.log("Issue in DB Connection");
      console.error(error.message);
      //iska matlab kya h ?
      process.exit(1);
    });
};

// export
module.exports = dbConnect;
