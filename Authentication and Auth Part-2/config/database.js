const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.log("Issue in DB Connection");
      console.error(err);
      process.exit(1);
    });
};
