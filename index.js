const app = require("./app");
const cloudinary = require("cloudinary").v2;

const connectDatabase = require("./config/database");
require("dotenv").config();


connectDatabase()



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
  api_key: process.env.CLOUDINARY_API_KEY ,
  api_secret: process.env.CLOUDINARY_API_SECRET ,
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App Listen at Port ${process.env.PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled uncaught Exception`);
 // process.exit(1);
 
});