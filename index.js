const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const client = require("./helpers/client");
const userRouter = require("./user/userRouter");

app.use(bodyParser.json());
app.use("/api", userRouter);

app.listen(3000, err => {
  if (err) {
    console.error(err);
  } else {
    client.connect();
    console.log("Server up! Port: 3000");
  }
});
