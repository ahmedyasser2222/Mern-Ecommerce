const mongoose = require("mongoose");

const connectDatabase = () => {
  //rocess.env.DATABASE
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch(err => console.log("Faild to connect DB"))
};

module.exports = connectDatabase;
