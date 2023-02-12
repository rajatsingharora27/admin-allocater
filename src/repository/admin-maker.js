const adminSchema = require("../model/adminRegister");
const { StatusCodes } = require("http-status-codes");
const { ApplicationError } = require("../error-messages/index");
const ValidationError = require("../error-messages/validation-error");

class AdminRepository {
  async createAdmin(data) {
    try {
      // asuming we got the data that is validated
      const result = await adminSchema.create(data);
      return result;
    } catch (error) {
      console.log();
      if (error.name === "ValidationError") {
        throw new ValidationError(
          "validation Error",
          error.message,
          "missing fields",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }
      throw new ApplicationError(
        "RepoError",
        "Error in Repository",
        "Can't store the data",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async findUser(data) {
    try {
      const isEmail = await adminSchema.find({ email: data });
      return isEmail;
    } catch (error) {
      throw new ApplicationError(
        "RepoError",
        "Error in Repository",
        "Can't store the data",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}
module.exports = AdminRepository;
