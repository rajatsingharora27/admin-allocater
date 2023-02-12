const express = require("express");
const app = express();
const router = express.Router();
const { AdminService } = require("../service/index");
const { StatusCodes } = require("http-status-codes");

const admininService = new AdminService();

class AdminController {
  constructor() {}

  async create(req, res) {
    try {
      const result = await admininService.createAdmin(req.body);

      res.status(StatusCodes.OK).json({
        message: "success",
        result: result,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "fail",
        result: {},
        error: error,
      });
    }
  }
}

module.exports = AdminController;
