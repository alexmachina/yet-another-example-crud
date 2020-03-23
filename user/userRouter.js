const express = require("express");
const userController = require("./userController");
const userRouter = express.Router();

userRouter.post("/user", userController.addUser);
userRouter.get("/user/:userId", userController.getUser);
userRouter.put("/user/:userId", userController.updateUser);
userRouter.delete("/user/:userId", userController.deleteUser);
module.exports = userRouter;
