const app = require("./app");

const connectDatabase = require("./config/database");
require("dotenv").config();
const cors = require("cors");
app.use(cors());

connectDatabase()




app.listen(process.env.PORT, () => {
  console.log(`App Listen at Port ${process.env.PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled uncaught Exception`);
 // process.exit(1);
 
});