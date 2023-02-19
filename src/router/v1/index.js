const express = require("express");
const { AdminController } = require("../../contoller/index");
const router = express.Router();

const adminController = new AdminController();

router.post("/create", adminController.create);
router.get("/user", adminController.findUser);

module.exports = router;
