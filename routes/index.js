const express = require("express");
const userRouter = require("./user");

const app = express();
const router = express.Router();


app.use("/api/v1/user", userRouter);

module.exports = router;