const express = require("express");
const app = express();

//const errorMiddleware = require("./middleware/error");

app.use(express.json());




// Middleware for Errors
//app.use(errorMiddleware);

module.exports = app;
