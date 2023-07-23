const express = require("express");
const app = express();
/* const cors = require("cors");
app.use(cors()); */
const errorMiddleware = require("./middleware/errorMW");
const path = require("path")

app.use(express.json());


const user = require("./routes/userRoute");
const product = require("./routes/productRoute");
const category = require("./routes/categoryRoute");

app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", category);


app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
